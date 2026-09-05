/**
 * IOTA Academy Mandsaur - Job-Ready Assessment Question Bank
 * 10 Practical, workplace-oriented questions across 5 core skill categories.
 * Max Score: 100 (20 pts per category)
 */

window.IOTA_QUESTIONS = [
  // 1. COMPUTER SKILLS (Q1 & Q2)
  {
    id: 1,
    category: "computer",
    categoryLabel: "Computer Skills",
    icon: "💻",
    question: "Office / Project Work mein 5 alag clients ke monthly files organize karne ka best tareeqa kya hai?",
    options: [
      {
        text: "Desktop par bina kisi folder ke saari files daalna taaki samne dikhein",
        points: 0
      },
      {
        text: "Structured folders (Client Name > Year > Month) aur clear file naming use karna",
        points: 10
      },
      {
        text: "Files ko WhatsApp chat mein save karke baar-baar download karte rehna",
        points: 0
      },
      {
        text: "Pen drive mein daal kar computer se hamesha delete kar dena",
        points: 0
      }
    ]
  },
  {
    id: 2,
    category: "computer",
    categoryLabel: "Computer Skills",
    icon: "💻",
    question: "Daily computer work mein speed aur productivity badhane ke liye aap kya use karte hain?",
    options: [
      {
        text: "Keyboard shortcuts (Ctrl+Z, Alt+Tab, Win+Shift+S, Ctrl+C/V) jo daily time bachate hain",
        points: 10
      },
      {
        text: "Sirf mouse se baar-baar menus click karna",
        points: 3
      },
      {
        text: "Shortcut keys bilkul use nahi aate aur basic file handling mein struggle hota hai",
        points: 0
      },
      {
        text: "Sirf computer band-chalu karna aata hai",
        points: 0
      }
    ]
  },

  // 2. EXCEL & DATA (Q3 & Q4)
  {
    id: 3,
    category: "excel_data",
    categoryLabel: "Excel & Data",
    icon: "📊",
    question: "Agar aapke paas 500 rows ka sales data ho aur aapko Total Revenue aur Average nikalna ho:",
    options: [
      {
        text: "Mobile calculator se ek-ek number jod kar type karenge",
        points: 0
      },
      {
        text: "=SUM() aur =AVERAGE() formula use karke 5 seconds mein accurate result nikalenge",
        points: 10
      },
      {
        text: "Paper par rough likh kar approximate total banayenge",
        points: 0
      },
      {
        text: "Sirf pehli 10 rows dekh kar guess karenge",
        points: 0
      }
    ]
  },
  {
    id: 4,
    category: "excel_data",
    categoryLabel: "Excel & Data",
    icon: "📊",
    question: "1000 records wali sheet mein se sirf 'Mandsaur' location aur 'Completed' status wale rows filter karne ho toh:",
    options: [
      {
        text: "Scroll karke ek-ek row manually aankhon se dhundhenge",
        points: 0
      },
      {
        text: "Data Filter (Ctrl+Shift+L) apply karke dropdown se specific criteria select karenge",
        points: 10
      },
      {
        text: "Nayi sheet mein dobara se copy-paste karke filter banane ki koshish karenge",
        points: 3
      },
      {
        text: "Sheet close kar denge kyunki data bahut bada hai",
        points: 0
      }
    ]
  },

  // 3. PROBLEM SOLVING (Q5 & Q6)
  {
    id: 5,
    category: "problem_solving",
    categoryLabel: "Problem Solving",
    icon: "🧠",
    question: "Report mein expected calculation achanak galat aa rahi hai. Aapka pehla practical step kya hoga?",
    options: [
      {
        text: "Panic hokar file band kar dena ya doosron par blame daal dena",
        points: 0
      },
      {
        text: "Input data, formula range aur logic step-by-step verify karke root cause find karna",
        points: 10
      },
      {
        text: "Number ko manually fake edit kar dena taaki koi notice na kare",
        points: 0
      },
      {
        text: "Bina check kiye report client ya boss ko bhej dena",
        points: 0
      }
    ]
  },
  {
    id: 6,
    category: "problem_solving",
    categoryLabel: "Problem Solving",
    icon: "🧠",
    question: "Ek hi din mein 3 tasks hain: Urgent client report (2 hrs), Routine filing, aur Next week ka plan. Priority kaise set karenge?",
    options: [
      {
        text: "Randomly kisi bhi aasan task se shuru karenge chahe deadline chhoot jaye",
        points: 0
      },
      {
        text: "Pehle urgent high-impact deadline complete karenge, fir routine aur next week plan",
        points: 10
      },
      {
        text: "Teenon tasks ek sath shuru karke koi bhi time par complete nahi karenge",
        points: 2
      },
      {
        text: "Task chhod kar relax karenge",
        points: 0
      }
    ]
  },

  // 4. AI FOR WORK (Q7 & Q8)
  {
    id: 7,
    category: "ai_work",
    categoryLabel: "AI for Work",
    icon: "🤖",
    question: "Modern workplace par ChatGPT, Gemini ya AI tools ka smart practical use kya hai?",
    options: [
      {
        text: "AI se business email draft karwana, lengthy data summarize karna aur daily work automate karna",
        points: 10
      },
      {
        text: "AI sirf entertainment ke liye hai, professional work mein koi fayda nahi",
        points: 0
      },
      {
        text: "Bina padhe ya verify kiye AI ka output seedha client ko forward karna",
        points: 3
      },
      {
        text: "Mujhe AI tools ke practical use ke baare mein bilkul knowledge nahi hai",
        points: 0
      }
    ]
  },
  {
    id: 8,
    category: "ai_work",
    categoryLabel: "AI for Work",
    icon: "🤖",
    question: "AI se high-quality aur accurate output lene ke liye effective prompt kaise likhenge?",
    options: [
      {
        text: "Sirf 1-2 generic words likh kar chhod dena",
        points: 0
      },
      {
        text: "Role, specific context, expected format aur objective clear karke prompt dena",
        points: 10
      },
      {
        text: "AI se baar-baar bina instruction ke same question puchna",
        points: 0
      },
      {
        text: "Random sentences copy paste karna bina purpose ke",
        points: 2
      }
    ]
  },

  // 5. COMMUNICATION & WORKPLACE READINESS (Q9 & Q10)
  {
    id: 9,
    category: "communication",
    categoryLabel: "Communication",
    icon: "🗣️",
    question: "Aapne ek project ya report complete ki. Team leader ya manager ko explain kaise karenge?",
    options: [
      {
        text: "Sirf 200 rows ki raw sheet screen par open karke unpar chhod denge",
        points: 0
      },
      {
        text: "2-3 main key findings/summary pehle batayenge aur practical action points highlight karenge",
        points: 10
      },
      {
        text: "Bolenge aap khud dekh lijiye mujhe explain karna nahi aata",
        points: 0
      },
      {
        text: "Heavy technical words bol kar baat ghumayenge",
        points: 2
      }
    ]
  },
  {
    id: 10,
    category: "communication",
    categoryLabel: "Communication",
    icon: "🗣️",
    question: "Workplace par kisi practical task mein 30 minutes koshish ke baad bhi confusion ho toh:",
    options: [
      {
        text: "Sharm ya dar ki wajah se chupchap baithe rahenge aur deadline miss hone denge",
        points: 0
      },
      {
        text: "Mentor/Senior ko batayenge ki kya steps try kiye aur specific doubt puch kar clear karenge",
        points: 10
      },
      {
        text: "Galat kaam submit kar denge taaki sawal na puchna pade",
        points: 0
      },
      {
        text: "Task chhod kar bina bataye gayab ho jayenge",
        points: 0
      }
    ]
  }
];
