# IOTA Academy Mandsaur — Job-Ready Check Landing Page

A production-ready, mobile-first Job-Ready Check landing page for **IOTA Academy Mandsaur (Ramtekri, Mandsaur, Madhya Pradesh)**.

Designed specifically for **Meta Ads (Instagram & Facebook)** traffic with an ultra-fast, high-converting funnel:

```text
META AD
   ↓
LANDING PAGE
   ↓
FREE ONLINE JOB-READY CHECK (10 Practical Questions)
   ↓
LEAD CAPTURE (Name, 10-Digit WhatsApp, Education)
   ↓
DYNAMIC JOB-READY SCORECARD (0–100 & Skill Breakdown)
   ↓
FREE DETAILED CHECK AT RAMTEKRI MANDSAUR / 1-WEEK REGULAR CLASS EXPERIENCE
   ↓
WALK-IN → ADMISSION
```

---

## 📁 Directory Structure

```text
jobready/
├── index.html              # Main mobile-first landing page & modal templates
├── config.js               # Central configuration (WhatsApp number, Meta Pixel, API)
├── images/                 # Logo and brand visual assets
│   ├── logo-placeholder.svg      # Navigation bar placeholder logo icon
│   └── logo-placeholder-wide.svg # Alternate wide horizontal placeholder logo
├── css/
│   └── style.css           # Light-theme styling, responsive breakpoints & UI components
├── js/
│   ├── tracking.js         # Meta Pixel, UTM parameters (fbclid, utm_*) & event tracking
│   ├── questions.js        # 10 curated questions across 5 core skill areas
│   └── assessment.js       # Quiz state engine, Indian phone validation, scoring & modals
├── logo.jpg                # IOTA Academy logo asset
└── README.md               # Documentation and setup guide
```

---

## 🎨 Changing to the IOTA Academy Logo

In [index.html](file:///d:/IOTA%20Programming/jobready/index.html), find the `<header>` brand logo section (around Line 35):

```html
<img 
  src="images/logo-placeholder.svg" 
  alt="IOTA Academy Logo" 
  class="brand-logo-img" 
  id="brand-logo-img"
  width="38" 
  height="38" 
/>
```

To switch to your official logo:
1. **Using the existing file in root**: Simply set `src="logo.jpg"`.
2. **Using a custom image**: Place your transparent PNG or SVG into `images/` (e.g. `images/iota-logo.png`) and set `src="images/iota-logo.png"`.
3. The `.brand-logo-img` CSS class automatically handles scaling (`height: 38px`, `width: auto`, `max-width: 180px`, `object-fit: contain`) so both square icons and horizontal logos scale properly without breaking the navigation menu layout.

---

## ⚙️ Configuration (`config.js`)

Edit `jobready/config.js` to configure your live integrations:

```javascript
window.IOTA_CONFIG = {
  INSTITUTE_NAME: "IOTA Academy",
  BRANCH_NAME: "Mandsaur",
  BRANCH_LOCATION: "Ramtekri, Mandsaur, Madhya Pradesh",
  TAGLINE: "Become Job-Ready.",

  // Official Mandsaur WhatsApp Number (country code + 10 digits, e.g. 917024040225)
  WHATSAPP_NUMBER: "917024040225",

  // Meta Pixel ID (e.g. "123456789012345")
  META_PIXEL_ID: "", 

  // Google Sheets Apps Script Webhook or Backend CRM API endpoint
  LEADS_API_ENDPOINT: "", 

  // Storage key for localStorage leads backup
  STORAGE_KEY: "iota_jobready_leads",

  DEBUG_MODE: true
};
```

---

## 📊 Lead Data Object Structure

Every assessment submission generates a structured lead object:

```json
{
  "lead_id": "LEAD-1741000000000-482",
  "name": "Aman Sharma",
  "whatsapp_number": "9876543210",
  "education": "Graduate",
  "college_course": "BCA",
  "assessment_score": 70,
  "computer_score": 20,
  "excel_data_score": 10,
  "problem_solving_score": 10,
  "ai_score": 20,
  "communication_score": 10,
  "assessment_completed": true,
  "detailed_check_requested": false,
  "detailed_check_date": "",
  "one_week_experience_requested": false,
  "one_week_experience_start_date": "",
  "source": "instagram",
  "campaign": "mandsaur_meta_ad_v1",
  "ad_name": "degree_hai_jobready_ho",
  "utm_source": "instagram",
  "utm_medium": "paid_social",
  "utm_campaign": "mandsaur_meta_ad_v1",
  "utm_content": "degree_hai_jobready_ho",
  "utm_term": "",
  "created_at": "2026-09-03T11:40:00.000Z"
}
```

Leads are automatically stored in the browser's `localStorage` under `iota_jobready_leads` so no lead is lost, and simultaneously sent via `POST` to `LEADS_API_ENDPOINT` if configured.

---

## 🎯 Meta Ads & Analytics Events

The engine tracks the following events:

1. `PageView`: Standard page load
2. `ViewContent`: Landing page viewed
3. `AssessmentStarted`: When user clicks "START FREE CHECK"
4. `AssessmentCompleted`: When user completes Question 10
5. `Lead`: When user enters name, phone, education and requests score
6. `DetailedCheckBooked`: When user books Free Detailed Check at Ramtekri Mandsaur
7. `OneWeekExperienceBooked`: When user books the 1-Week Class Experience

---

## 📱 Mobile Responsiveness

The page is designed mobile-first and tested for:
- 360px, 375px, 390px, 414px (Mobile devices)
- 768px (Tablets)
- 1024px, 1280px+ (Desktops)

Includes:
- Sticky mobile bottom CTA (`START FREE JOB-READY CHECK →`)
- Floating WhatsApp button with pre-filled message
- Lightweight, fast loading, zero heavy libraries for optimal Core Web Vitals.
