/**
 * IOTA Academy Mandsaur - Job-Ready Assessment Engine
 * Handles questions, scoring, lead capture, validations, result generation & bookings.
 */

(function () {
  "use strict";

  const config = window.IOTA_CONFIG || {};
  const tracking = window.IOTA_TRACKING || {
    trackEvent: (e, d) => console.log("Track:", e, d),
    getTrackingParams: () => ({})
  };
  const questions = window.IOTA_QUESTIONS || [];

  // Assessment State
  const state = {
    currentIndex: 0,
    answers: new Array(questions.length).fill(null),
    currentLead: null,
    scores: {
      total: 0,
      logical_quant: 0,
      excel_data: 0,
      sql_db: 0,
      python_data: 0,
      powerbi_ai: 0,
      communication: 0,
      // Legacy backwards-compatibility keys
      computer: 0,
      problem_solving: 0,
      ai_work: 0
    }
  };

  // DOM Elements cache
  let modalEl,
    viewIntroEl,
    viewQuizEl,
    viewLeadEl,
    viewResultEl,
    bookingModalEl,
    expModalEl, successModalEl;

  // Initialize on DOM ready
  document.addEventListener("DOMContentLoaded", init);

  function init() {
    modalEl = document.getElementById("assessment-modal");
    viewIntroEl = document.getElementById("instruction-step-view");
    viewQuizEl = document.getElementById("quiz-step-view");
    viewLeadEl = document.getElementById("lead-step-view");
    viewResultEl = document.getElementById("result-step-view");
    bookingModalEl = document.getElementById("detailed-booking-modal");
    expModalEl = document.getElementById("experience-booking-modal");
    successModalEl = document.getElementById("success-alert-modal");

    bindEvents();
    setupWhatsAppLinks();
  }

  function bindEvents() {
    // All "Start Free Check" triggers
    const startTriggers = document.querySelectorAll(".js-start-check");
    startTriggers.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openAssessment();
      });
    });

    // Instruction Step Checkbox & Proceed
    const confirmCheckbox = document.getElementById("instruction-confirm-checkbox");
    const proceedBtn = document.getElementById("instruction-proceed-btn");
    const hintEl = document.getElementById("instruction-btn-hint");

    if (confirmCheckbox && proceedBtn) {
      confirmCheckbox.addEventListener("change", () => {
        const isChecked = confirmCheckbox.checked;
        proceedBtn.disabled = !isChecked;
        if (hintEl) {
          hintEl.style.display = isChecked ? "none" : "block";
        }
      });

      proceedBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (!confirmCheckbox.checked) return;
        tracking.trackEvent("InstructionsConfirmed", {});
        showQuizStep();
        renderCurrentQuestion();
      });
    }

    // Close buttons
    const closeBtns = document.querySelectorAll(".js-close-modal");
    closeBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        closeAssessmentModal();
      });
    });

    // Quiz Navigation
    const nextBtn = document.getElementById("quiz-next-btn");
    if (nextBtn) {
      nextBtn.addEventListener("click", handleNextQuestion);
    }

    const prevBtn = document.getElementById("quiz-prev-btn");
    if (prevBtn) {
      prevBtn.addEventListener("click", handlePrevQuestion);
    }

    // Lead Form Submission
    const leadForm = document.getElementById("lead-capture-form");
    if (leadForm) {
      leadForm.addEventListener("submit", handleLeadSubmit);
    }

    // Detailed Check CTAs
    const bookCheckBtns = document.querySelectorAll(".js-book-detailed-check");
    bookCheckBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openDetailedBookingModal();
      });
    });

    // 1-Week Experience CTAs
    const bookExpBtns = document.querySelectorAll(".js-book-experience");
    bookExpBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openExperienceModal();
      });
    });

    // Booking Forms
    const detailedForm = document.getElementById("detailed-check-form");
    if (detailedForm) {
      detailedForm.addEventListener("submit", handleDetailedCheckBooking);
    }

    const expForm = document.getElementById("experience-form");
    if (expForm) {
      expForm.addEventListener("submit", handleExperienceBooking);
    }

    // Modal backdrops
    window.addEventListener("click", (e) => {
      if (e.target === bookingModalEl) closeBookingModal();
      if (e.target === expModalEl) closeExpModal();
      if (e.target === successModalEl) closeSuccessModal();
    });

    // Phone input instant validation cleanup
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        // Strip non-digits
        input.value = input.value.replace(/\D/g, "").slice(0, 10);
      });
    });
  }

  // Set up all WhatsApp links with configured phone number & pre-filled text
  function setupWhatsAppLinks() {
    const rawNumber = config.WHATSAPP_NUMBER ? config.WHATSAPP_NUMBER.replace(/\D/g, "") : "";
    const waButtons = document.querySelectorAll(".js-whatsapp-link");

    waButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const customType = btn.getAttribute("data-wa-type") || "DEFAULT";
        let message = config.WHATSAPP_MESSAGES[customType] || config.WHATSAPP_MESSAGES.DEFAULT;

        if (state.currentLead && customType === "AFTER_ASSESSMENT") {
          message += ` My score is ${state.scores.total}/100. Name: ${state.currentLead.name}.`;
        }

        const encodedMsg = encodeURIComponent(message);

        if (!rawNumber) {
          alert("IOTA Mandsaur WhatsApp number will be connected shortly. Please use the booking form or visit Ramtekri Mandsaur.");
          return;
        }

        // Ensure 10-digit Indian numbers include 91 country code for valid wa.me URL
        let formattedNumber = rawNumber;
        if (formattedNumber.length === 10) {
          formattedNumber = "91" + formattedNumber;
        }

        const waUrl = `https://wa.me/${formattedNumber}?text=${encodedMsg}`;
        window.open(waUrl, "_blank");

        tracking.trackEvent("Contact", {
          channel: "WhatsApp",
          type: customType
        });
      });
    });
  }

  // Open Assessment Modal
  function openAssessment() {
    if (!modalEl) return;
    document.body.classList.add("modal-open");
    modalEl.classList.remove("hidden");
    modalEl.classList.add("active");

    // Hide sticky CTA while in assessment
    const stickyCTA = document.getElementById("sticky-mobile-cta");
    if (stickyCTA) stickyCTA.style.display = "none";

    // Start tracking
    tracking.trackEvent("AssessmentStarted", {
      total_questions: questions.length
    });

    // If starting fresh
    if (!state.currentLead) {
      showInstructionStep();
    }
  }

  function closeAssessmentModal() {
    if (!modalEl) return;
    document.body.classList.remove("modal-open");
    modalEl.classList.remove("active");
    modalEl.classList.add("hidden");
    hideMandatoryAlert();

    // Re-enable sticky CTA
    const stickyCTA = document.getElementById("sticky-mobile-cta");
    if (stickyCTA) stickyCTA.style.display = "";
  }

  function showInstructionStep() {
    if (viewIntroEl) viewIntroEl.classList.remove("hidden");
    if (viewQuizEl) viewQuizEl.classList.add("hidden");
    if (viewLeadEl) viewLeadEl.classList.add("hidden");
    if (viewResultEl) viewResultEl.classList.add("hidden");

    const confirmCheckbox = document.getElementById("instruction-confirm-checkbox");
    const proceedBtn = document.getElementById("instruction-proceed-btn");
    const hintEl = document.getElementById("instruction-btn-hint");
    if (confirmCheckbox) confirmCheckbox.checked = false;
    if (proceedBtn) proceedBtn.disabled = true;
    if (hintEl) hintEl.style.display = "block";
  }

  function showQuizStep() {
    if (viewIntroEl) viewIntroEl.classList.add("hidden");
    viewQuizEl.classList.remove("hidden");
    viewLeadEl.classList.add("hidden");
    viewResultEl.classList.add("hidden");
  }

  function showLeadStep() {
    if (viewIntroEl) viewIntroEl.classList.add("hidden");
    viewQuizEl.classList.add("hidden");
    viewLeadEl.classList.remove("hidden");
    viewResultEl.classList.add("hidden");

    // Pre-fill phone or name if previously typed
    const nameInput = document.getElementById("lead-name");
    if (nameInput && !nameInput.value && state.currentLead?.name) {
      nameInput.value = state.currentLead.name;
    }
  }

  function showResultStep() {
    if (viewIntroEl) viewIntroEl.classList.add("hidden");
    viewQuizEl.classList.add("hidden");
    viewLeadEl.classList.add("hidden");
    viewResultEl.classList.remove("hidden");
    renderResult();
  }

  // Render question card
  function renderCurrentQuestion() {
    const q = questions[state.currentIndex];
    if (!q) return;

    // Update Counter & Category
    const counterEl = document.getElementById("quiz-counter");
    if (counterEl) {
      counterEl.textContent = `Question ${state.currentIndex + 1} of ${questions.length}`;
    }

    const catBadge = document.getElementById("quiz-category-badge");
    if (catBadge) {
      catBadge.textContent = `${q.icon} ${q.categoryLabel}`;
    }

    // Update Progress bar
    const progressBar = document.getElementById("quiz-progress-bar");
    if (progressBar) {
      const pct = Math.round(((state.currentIndex + 1) / questions.length) * 100);
      progressBar.style.width = `${pct}%`;
      progressBar.setAttribute("aria-valuenow", pct);
    }

    // Question Text
    const textEl = document.getElementById("quiz-question-text");
    if (textEl) {
      textEl.textContent = q.question;
    }

    // Render Options
    const optionsContainer = document.getElementById("quiz-options-container");
    if (optionsContainer) {
      optionsContainer.innerHTML = "";
      const selectedIndex = state.answers[state.currentIndex];

      q.options.forEach((opt, idx) => {
        const optBtn = document.createElement("button");
        optBtn.type = "button";
        optBtn.className = `option-card ${selectedIndex === idx ? "selected" : ""}`;
        optBtn.setAttribute("role", "radio");
        optBtn.setAttribute("aria-checked", selectedIndex === idx ? "true" : "false");

        const letter = String.fromCharCode(65 + idx); // A, B, C, D
        optBtn.innerHTML = `
          <span class="option-letter">${letter}</span>
          <span class="option-label">${escapeHtml(opt.text)}</span>
          <span class="option-check-icon">✓</span>
        `;

        optBtn.addEventListener("click", () => {
          selectOption(idx);
        });

        optionsContainer.appendChild(optBtn);
      });
    }

    // Prev Button visibility
    const prevBtn = document.getElementById("quiz-prev-btn");
    if (prevBtn) {
      if (state.currentIndex === 0) {
        prevBtn.style.visibility = "hidden";
      } else {
        prevBtn.style.visibility = "visible";
      }
    }

    // Hide any previous alert when rendering a question
    hideMandatoryAlert();

    // Next Button state & label (Keep enabled so clicking triggers mandatory alert if unselected)
    const nextBtn = document.getElementById("quiz-next-btn");
    if (nextBtn) {
      nextBtn.disabled = false;

      if (state.currentIndex === questions.length - 1) {
        nextBtn.innerHTML = `See My Job-Ready Score <span class="arrow">→</span>`;
      } else {
        nextBtn.innerHTML = `Next <span class="arrow">→</span>`;
      }
    }
  }

  function selectOption(optionIndex) {
    state.answers[state.currentIndex] = optionIndex;
    hideMandatoryAlert();
    renderCurrentQuestion();

    const nextBtn = document.getElementById("quiz-next-btn");
    if (nextBtn) {
      nextBtn.focus();
    }
  }

  function showMandatoryAlert() {
    const alertEl = document.getElementById("quiz-mandatory-alert");
    const optionsContainer = document.getElementById("quiz-options-container");

    if (alertEl) {
      alertEl.classList.remove("hidden");
    }

    if (optionsContainer) {
      optionsContainer.classList.add("has-error");
      optionsContainer.classList.remove("shake");
      // Force DOM reflow to restart CSS animation
      void optionsContainer.offsetWidth;
      optionsContainer.classList.add("shake");
    }
  }

  function hideMandatoryAlert() {
    const alertEl = document.getElementById("quiz-mandatory-alert");
    const optionsContainer = document.getElementById("quiz-options-container");

    if (alertEl) {
      alertEl.classList.add("hidden");
    }

    if (optionsContainer) {
      optionsContainer.classList.remove("has-error");
      optionsContainer.classList.remove("shake");
    }
  }

  function handleNextQuestion() {
    // If no option is selected for the current question, show red mandatory alert
    if (state.answers[state.currentIndex] === null || state.answers[state.currentIndex] === undefined) {
      showMandatoryAlert();
      return;
    }

    hideMandatoryAlert();

    if (state.currentIndex < questions.length - 1) {
      state.currentIndex++;
      renderCurrentQuestion();
    } else {
      // Completed all questions! Calculate scores & show lead capture
      calculateScores();
      tracking.trackEvent("AssessmentCompleted", {
        total_score: state.scores.total
      });
      showLeadStep();
    }
  }

  function handlePrevQuestion() {
    hideMandatoryAlert();
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderCurrentQuestion();
    }
  }

  // Calculate score breakdown based on exact question marks (Q1-20: 3pts, Q21-30: 4pts)
  function calculateScores() {
    const scores = {
      total: 0,
      logical_quant: 0,
      excel_data: 0,
      sql_db: 0,
      python_data: 0,
      powerbi_ai: 0,
      communication: 0,
      // Legacy aliases
      computer: 0,
      problem_solving: 0,
      ai_work: 0
    };

    questions.forEach((q, idx) => {
      const selectedOptIndex = state.answers[idx];
      if (selectedOptIndex !== null && q.options[selectedOptIndex]) {
        const points = q.options[selectedOptIndex].points || 0;
        scores[q.category] = (scores[q.category] || 0) + points;
        scores.total += points;
      }
    });

    // Populate legacy keys for any existing integrations
    scores.computer = scores.logical_quant;
    scores.problem_solving = scores.sql_db;
    scores.ai_work = scores.powerbi_ai;

    // Safety: total score can never exceed 100
    scores.total = Math.min(100, Math.max(0, scores.total));

    state.scores = scores;
    return scores;
  }

  // Lead Form Validation and Submission
  function handleLeadSubmit(e) {
    e.preventDefault();

    const nameInput = document.getElementById("lead-name");
    const phoneInput = document.getElementById("lead-phone");
    const eduInput = document.getElementById("lead-education");
    const courseInput = document.getElementById("lead-course");
    const errorEl = document.getElementById("lead-error-msg");

    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.replace(/\D/g, "") : "";
    const education = eduInput ? eduInput.value : "";
    const collegeCourse = courseInput ? courseInput.value.trim() : "";

    // Clear error
    if (errorEl) {
      errorEl.textContent = "";
      errorEl.classList.add("hidden");
    }

    if (!name) {
      showFormError(errorEl, "Please enter your full name.");
      nameInput.focus();
      return;
    }

    // Validate 10-digit Indian Mobile Number
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      showFormError(
        errorEl,
        "Please enter a valid 10-digit WhatsApp number (e.g., 9876543210)."
      );
      phoneInput.focus();
      return;
    }

    if (!education) {
      showFormError(errorEl, "Please select your highest / current education.");
      eduInput.focus();
      return;
    }

    // Submit button state
    const submitBtn = document.getElementById("lead-submit-btn");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Generating Your Score...";
    }

    // Prepare Lead Record
    const utm = tracking.getTrackingParams();
    const leadId = "LEAD-" + Date.now() + "-" + Math.floor(Math.random() * 1000);

    const leadRecord = {
      // 8 Exact Wix CMS Columns
      FullName: name,
      fullName: name,
      Phone: phone,
      phone: phone,
      Education: education,
      education: education,
      Degree: collegeCourse || "Not Specified",
      degree: collegeCourse || "Not Specified",
      PreferredDate: "",
      preferredDate: "",
      PreferredTimeSlot: "",
      preferredTimeSlot: "",
      CreatedDateTime: new Date().toISOString(),
      createdDateTime: new Date().toISOString(),
      Status: "Score Generated",
      status: "Score Generated",
      Score: state.scores.total,
      score: state.scores.total,
      TotalScore: state.scores.total,
      totalScore: state.scores.total,

      // Identity & Attribution
      title: leadId,
      lead_id: leadId,
      leadId: leadId,
      name: name,
      whatsapp_number: phone,
      whatsappNumber: phone,
      branch: "Mandsaur - Ramtekri",
      college_course: collegeCourse,
      assessment_score: state.scores.total,
      assessmentScore: state.scores.total,
      logical_quant_score: state.scores.logical_quant,
      excel_data_score: state.scores.excel_data,
      sql_db_score: state.scores.sql_db,
      python_data_score: state.scores.python_data,
      powerbi_ai_score: state.scores.powerbi_ai,
      communication_score: state.scores.communication,
      // Legacy backward-compatibility keys
      computer_score: state.scores.logical_quant,
      problem_solving_score: state.scores.sql_db,
      ai_score: state.scores.powerbi_ai,
      assessment_completed: true,
      detailed_check_requested: false,
      detailed_check_date: "",
      one_week_experience_requested: false,
      one_week_experience_start_date: "",
      source: utm.utm_source || "direct",
      campaign: utm.utm_campaign || "jobready_mandsaur",
      ad_name: utm.utm_content || "",
      utm_source: utm.utm_source || "",
      utm_medium: utm.utm_medium || "",
      utm_campaign: utm.utm_campaign || "",
      utm_content: utm.utm_content || "",
      utm_term: utm.utm_term || "",
      fbclid: utm.fbclid || "",
      created_at: new Date().toISOString(),
      createdAt: new Date().toISOString()
    };

    state.currentLead = leadRecord;

    // Save lead to LocalStorage & Dispatch API
    persistLead(leadRecord);

    // Track Lead Event in Meta Pixel
    tracking.trackEvent("Lead", {
      value: state.scores.total,
      currency: "INR",
      content_name: "Job-Ready Score Generated",
      education: education
    });

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "SHOW MY JOB-READY SCORE";
      }
      showResultStep();
    }, 450);
  }

  function showFormError(el, msg) {
    if (el) {
      el.textContent = msg;
      el.classList.remove("hidden");
    } else {
      alert(msg);
    }
  }

  // Persist Lead in Storage and optional API
  function persistLead(lead) {
    try {
      const existing = JSON.parse(
        localStorage.getItem(config.STORAGE_KEY) || "[]"
      );
      // Update if existing lead_id
      const idx = existing.findIndex((l) => l.lead_id === lead.lead_id);
      if (idx >= 0) {
        existing[idx] = lead;
      } else {
        existing.push(lead);
      }
      localStorage.setItem(config.STORAGE_KEY, JSON.stringify(existing));
    } catch (e) {
      console.warn("Storage write failed:", e);
    }

    // Call external webhook / backend / Wix HTTP Function if configured
    if (config.LEADS_API_ENDPOINT) {
      if (config.LEADS_API_ENDPOINT.includes("yourdomain.com")) {
        console.warn(
          "[IOTA Wix CMS] Warning: 'LEADS_API_ENDPOINT' in config.js is still set to placeholder 'www.yourdomain.com'. Please replace it with your actual Wix site URL (e.g. https://www.yourwixdomain.com/_functions/jobreadyLead)!"
        );
      }

      fetch(config.LEADS_API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead)
      })
        .then(async (res) => {
          const resData = await res.json().catch(() => ({}));
          if (res.ok) {
            console.log("[IOTA Wix CMS] Lead successfully saved to Wix!", resData);
          } else {
            console.error("[IOTA Wix CMS] Wix returned an error (" + res.status + "):", resData);
          }
        })
        .catch((err) => {
          console.error("[IOTA Wix CMS] Failed to reach Wix endpoint:", err);
        });
    }
  }

  // Score interpretation helper based on Master Prompt V2 specifications
  function getScoreInterpretation(score) {
    if (score <= 30) {
      return {
        stage: "Early Stage (0–30)",
        message: "The student is currently at an early stage of job-readiness. You may need stronger fundamentals in logical thinking, data understanding, and technical skills.",
        nextStep: "Build fundamentals and understand your learning direction."
      };
    } else if (score <= 50) {
      return {
        stage: "Developing (31–50)",
        message: "You have some awareness or exposure but still have important gaps in practical application.",
        nextStep: "Identify the weakest areas and build practical skills through guided learning and projects."
      };
    } else if (score <= 70) {
      return {
        stage: "Foundation (51–70)",
        message: "You have a reasonable foundation but need stronger practical application on real-world data.",
        nextStep: "Focus on projects, real-world data, problem-solving, and interview preparation."
      };
    } else if (score <= 85) {
      return {
        stage: "Strong Foundation (71–85)",
        message: "You demonstrate a strong baseline across several job-readiness areas.",
        nextStep: "Strengthen project depth, communication, and interview readiness."
      };
    } else {
      return {
        stage: "Advanced Baseline (86–100)",
        message: "You demonstrate a strong baseline for the assessment.",
        nextStep: "Focus on advanced practical projects, portfolio quality, interview preparation, and role-specific skills."
      };
    }
  }

  // Render Result Page
  function renderResult() {
    const scoreValEl = document.getElementById("result-score-val");
    if (scoreValEl) {
      scoreValEl.textContent = `${state.scores.total} / 100`;
    }

    const studentNameEl = document.getElementById("result-student-name");
    if (studentNameEl && state.currentLead) {
      studentNameEl.textContent = `Report for ${state.currentLead.name}`;
    }

    // Dynamic Score Interpretation (diagnostic, encouraging, non-punitive)
    const stageInfo = getScoreInterpretation(state.scores.total);
    const stageTitleEl = document.getElementById("result-stage-title");
    const stageDescEl = document.getElementById("result-stage-desc");

    if (stageTitleEl) {
      stageTitleEl.textContent = stageInfo.stage;
    }
    if (stageDescEl) {
      stageDescEl.innerHTML = `${escapeHtml(stageInfo.message)} <span style="display:block; margin-top: 6px; font-weight: 700; color: #1e3a8a;">Recommended next step: ${escapeHtml(stageInfo.nextStep)}</span>`;
    }

    // Render 6 V2 Core Sections
    const categoriesMeta = [
      {
        key: "logical_quant",
        title: "Logical & Quantitative Thinking",
        score: state.scores.logical_quant,
        max: 15
      },
      {
        key: "excel_data",
        title: "Excel & Data Handling",
        score: state.scores.excel_data,
        max: 15
      },
      {
        key: "sql_db",
        title: "SQL & Database Thinking",
        score: state.scores.sql_db,
        max: 15
      },
      {
        key: "python_data",
        title: "Python & Data Understanding",
        score: state.scores.python_data,
        max: 15
      },
      {
        key: "powerbi_ai",
        title: "Power BI, Visualisation & AI",
        score: state.scores.powerbi_ai,
        max: 20
      },
      {
        key: "communication",
        title: "Communication & Career Readiness",
        score: state.scores.communication,
        max: 20
      }
    ];

    const container = document.getElementById("result-categories-container");
    if (container) {
      container.innerHTML = "";
      categoriesMeta.forEach((item) => {
        const statusObj = getScoreStatus(item.score, item.max);
        const card = document.createElement("div");
        card.className = "result-skill-row";
        card.innerHTML = `
          <div class="result-skill-header">
            <span class="skill-name">${escapeHtml(item.title)}</span>
            <span class="skill-badge ${statusObj.badgeClass}">${item.score} / ${item.max} • ${statusObj.label}</span>
          </div>
          <div class="skill-progress-track">
            <div class="skill-progress-fill ${statusObj.barClass}" style="width: ${Math.round((item.score / item.max) * 100)}%;"></div>
          </div>
        `;
        container.appendChild(card);
      });
    }
  }

  function getScoreStatus(score, max) {
    const ratio = max > 0 ? score / max : 0;
    if (ratio >= 0.75) {
      return { label: "Good", badgeClass: "badge-good", barClass: "bar-good" };
    } else if (ratio >= 0.45) {
      return { label: "Basic", badgeClass: "badge-basic", barClass: "bar-basic" };
    } else {
      return {
        label: "Needs Focus",
        badgeClass: "badge-improve",
        barClass: "bar-improve"
      };
    }
  }

  // Detailed Booking Modal Flow
  function openDetailedBookingModal() {
    if (!bookingModalEl) return;
    bookingModalEl.classList.remove("hidden");
    bookingModalEl.classList.add("active");

    // Pre-fill phone & name if available
    const nameInput = document.getElementById("detailed-name");
    const phoneInput = document.getElementById("detailed-phone");
    if (state.currentLead) {
      if (nameInput) nameInput.value = state.currentLead.name;
      if (phoneInput) phoneInput.value = state.currentLead.whatsapp_number;
    }
  }

  function closeBookingModal() {
    if (!bookingModalEl) return;
    bookingModalEl.classList.remove("active");
    bookingModalEl.classList.add("hidden");
  }

  
  function openSuccessModal(title, desc) {
    if (!successModalEl) return;

    // Close all previous popups (assessment scorecard modal and booking modals)
    closeBookingModal();
    closeExpModal();
    if (modalEl) {
      modalEl.classList.remove("active");
      modalEl.classList.add("hidden");
    }
    document.body.classList.add("modal-open");

    const titleEl = document.getElementById("success-modal-title");
    const descEl = document.getElementById("success-modal-desc");
    const callBtn = document.getElementById("success-call-btn");

    if (titleEl && title) titleEl.textContent = title;
    if (descEl && desc) descEl.textContent = desc;
    if (callBtn) {
      const phone = (config.WHATSAPP_NUMBER || "7024040225").replace(/\D/g, "");
      callBtn.href = `tel:${phone}`;
      const phoneVal = callBtn.querySelector(".success-action-value");
      if (phoneVal) phoneVal.textContent = `+91 ${phone}`;
    }

    setupWhatsAppLinks();

    successModalEl.classList.remove("hidden");
    successModalEl.classList.add("active");
  }

  function closeSuccessModal() {
    if (!successModalEl) return;
    document.body.classList.remove("modal-open");
    successModalEl.classList.remove("active");
    successModalEl.classList.add("hidden");

    // Re-enable sticky CTA
    const stickyCTA = document.getElementById("sticky-mobile-cta");
    if (stickyCTA) stickyCTA.style.display = "";
  }

  function handleDetailedCheckBooking(e) {
    e.preventDefault();
    const dateInput = document.getElementById("detailed-date");
    const timeInput = document.getElementById("detailed-time");
    const nameInput = document.getElementById("detailed-name");
    const phoneInput = document.getElementById("detailed-phone");

    const preferredDate = dateInput ? dateInput.value : "";
    const preferredTime = timeInput ? timeInput.value : "";
    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.replace(/\D/g, "") : "";

    if (!name || phone.length !== 10) {
      alert("Please provide your name and a valid 10-digit WhatsApp number.");
      return;
    }

    if (state.currentLead) {
      state.currentLead.status = "Detailed Check Requested";
      state.currentLead.Status = "Detailed Check Requested";
      state.currentLead.detailed_check_requested = true;
      state.currentLead.detailedCheckRequested = true;
      state.currentLead.detailed_check_date = `${preferredDate} ${preferredTime}`;
      state.currentLead.detailedCheckDate = `${preferredDate} ${preferredTime}`;
      state.currentLead.PreferredDate = preferredDate;
      state.currentLead.preferredDate = preferredDate;
      state.currentLead.PreferredTimeSlot = preferredTime;
      state.currentLead.preferredTimeSlot = preferredTime;
      persistLead(state.currentLead);
    }

    tracking.trackEvent("DetailedCheckBooked", {
      preferred_date: preferredDate,
      preferred_time: preferredTime
    });

    closeBookingModal();
    openSuccessModal(
      "Detailed Check Booked!",
      `Thank you, ${name}! Your Free Detailed Job-Ready Check at IOTA Academy Mandsaur (Ramtekri) is recorded. Our team will coordinate with you, or you can call, WhatsApp, or check our classroom address directly below.`
    );
  }

  // 1-Week Experience Modal Flow
  function openExperienceModal() {
    if (!expModalEl) return;
    expModalEl.classList.remove("hidden");
    expModalEl.classList.add("active");

    const nameInput = document.getElementById("exp-name");
    const phoneInput = document.getElementById("exp-phone");
    if (state.currentLead) {
      if (nameInput) nameInput.value = state.currentLead.name;
      if (phoneInput) phoneInput.value = state.currentLead.whatsapp_number;
    }
  }

  function closeExpModal() {
    if (!expModalEl) return;
    expModalEl.classList.remove("active");
    expModalEl.classList.add("hidden");
  }

  function handleExperienceBooking(e) {
    e.preventDefault();
    const nameInput = document.getElementById("exp-name");
    const phoneInput = document.getElementById("exp-phone");
    const programSelect = document.getElementById("exp-program");

    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.replace(/\D/g, "") : "";
    const program = programSelect ? programSelect.value : "Data Analytics with AI";

    if (!name || phone.length !== 10) {
      alert("Please provide your name and a valid 10-digit WhatsApp number.");
      return;
    }

    if (state.currentLead) {
      state.currentLead.status = "1-Week Experience Requested";
      state.currentLead.Status = "1-Week Experience Requested";
      state.currentLead.one_week_experience_requested = true;
      state.currentLead.oneWeekExperienceRequested = true;
      state.currentLead.one_week_experience_program = program;
      state.currentLead.oneWeekExperienceProgram = program;
      state.currentLead.one_week_experience_start_date = new Date().toISOString().split("T")[0];
      state.currentLead.oneWeekExperienceStartDate = new Date().toISOString().split("T")[0];
      state.currentLead.PreferredDate = new Date().toISOString().split("T")[0];
      state.currentLead.preferredDate = new Date().toISOString().split("T")[0];
      state.currentLead.PreferredTimeSlot = program;
      state.currentLead.preferredTimeSlot = program;
      persistLead(state.currentLead);
    }

    tracking.trackEvent("OneWeekExperienceBooked", {
      program: program
    });

    closeExpModal();
    openSuccessModal(
      "1-Week Experience Reserved!",
      `Congratulations, ${name}! Your 1-Week regular-class experience slot for "${program}" at Ramtekri Mandsaur is requested. You can connect with our team directly below.`
    );
  }

  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Expose engine API
  window.IOTA_ASSESSMENT = {
    open: openAssessment,
    close: closeAssessmentModal,
    openDetailedBooking: openDetailedBookingModal,
    closeDetailedBooking: closeBookingModal,
    openExperienceBooking: openExperienceModal,
    closeExperienceBooking: closeExpModal,
    openSuccessModal: openSuccessModal,
    closeSuccessModal: closeSuccessModal
  };
})();
