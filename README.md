# IOTA Academy Mandsaur — Job-Ready Check Landing Page

A production-ready, mobile-first Job-Ready Check landing page for **IOTA Academy Mandsaur (Ramtekri, Mandsaur, Madhya Pradesh)**.

Designed specifically for **Meta Ads (Instagram & Facebook)** traffic with an ultra-fast, high-converting funnel:

```text
META AD
   ↓
LANDING PAGE
   ↓
FREE ONLINE JOB-READY CHECK (35 Practical Questions)
   ↓
LEAD CAPTURE (Name, 10-Digit WhatsApp)
   ↓
DYNAMIC JOB-READY SCORECARD (0–35 & Skill Breakdown)
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

  // Official Mandsaur WhatsApp Number (country code + 10 digits, e.g. 916266788172)
  WHATSAPP_NUMBER: "916266788172",

  // Meta Pixel ID (e.g. "123456789012345")
  META_PIXEL_ID: "", 

  // Google Sheets Apps Script Webhook or Backend CRM API endpoint
  LEADS_API_ENDPOINT: "", 

  // Google Sheets Direct Integration
  GOOGLE_SHEET_ID: "1qu5CCdn8Ka8J-Gg9vbxtvdy-CrIRAoXQLStll0QUj38",
  GOOGLE_SHEET_NAME: "Job Ready Test",
  GOOGLE_SHEET_WEBAPP_URL: "https://script.google.com/macros/s/.../exec", // Your Web App URL

  // Storage key for localStorage leads backup
  STORAGE_KEY: "iota_jobready_leads",

  DEBUG_MODE: true
};
```

---

## 📗 Google Sheets Direct Integration ("Job Ready Test")

Submissions are directly dispatched to your Google Sheet:
**Sheet Link:** [https://docs.google.com/spreadsheets/d/1qu5CCdn8Ka8J-Gg9vbxtvdy-CrIRAoXQLStll0QUj38/edit](https://docs.google.com/spreadsheets/d/1qu5CCdn8Ka8J-Gg9vbxtvdy-CrIRAoXQLStll0QUj38/edit)

The 12 configured columns are:
1. `Name` (Full Name)
2. `Phone No` (10-Digit WhatsApp)
3. `Score` (Total Score out of 35 — 1 mark per question)
4. `Aptitude & Maths` (5 Questions, e.g. `4/5`)
5. `Excel` (5 Questions, e.g. `5/5`)
6. `SQL` (5 Questions, e.g. `4/5`)
7. `Python` (5 Questions, e.g. `3/5`)
8. `Power BI & Data Visualisation` (5 Questions, e.g. `5/5`)
9. `Career & Interview Readiness` (5 Questions, e.g. `4/5`)
10. `Interview Puzzle` (5 Questions, e.g. `5/5`)
11. `Submission Date` (Submission Date, e.g. `28/09/2026`)
12. `Submission Time` (Submission Time, e.g. `09:40:00 am`)

### ⚡ 3-Step Setup Guide:
1. Open your Google Sheet and click **Extensions** → **Apps Script**.
2. Copy all code from `google-apps-script/Code.gs` and paste it into the editor.
3. Click **Deploy** → **Manage deployments** → **Edit (pencil icon)**:
   - Version: **New version**
   - Click **Deploy** and copy the Web app URL.
4. Paste the URL into `GOOGLE_SHEET_WEBAPP_URL` in [config.js](file:///d:/IOTA%20Programming/jobready/config.js) (and [config-indore.js](file:///d:/IOTA%20Programming/jobready/config-indore.js)).

---

## 📊 Lead Data Object & Wix CMS Breakdown

Every assessment submission generates a structured lead object with section score breakdowns formatted as questions correct out of 5 (e.g. `4/5`, `5/5`):

```json
{
  "FullName": "Aman Sharma",
  "Phone": "9876543210",
  "Score": 28,
  "TotalScore": 28,
  "ScoreFormatted": "28/35",
  "Aptitude & Maths": "4/5",
  "Excel": "5/5",
  "SQL": "4/5",
  "Python": "4/5",
  "Power BI & Data Visualisation": "5/5",
  "Career & Interview Readiness": "4/5",
  "Interview Puzzle": "5/5",
  "title": "LEAD-1741000000000-482",
  "lead_id": "LEAD-1741000000000-482",
  "name": "Aman Sharma",
  "whatsapp_number": "9876543210",
  "assessment_score": 85,
  "status": "Score Generated",
  "created_at": "2026-09-03T11:40:00.000Z"
}
```

### Wix CMS Columns Supported Automatically
The payload sends fields formatted to match whatever column keys you define in Wix CMS:
- **Exact Section Names**:
  - `Aptitude & Maths` (`X/5`)
  - `Excel` (`X/5`)
  - `SQL` (`X/5`)
  - `Python` (`X/5`)
  - `Power BI & Data Visualisation` (`X/5`)
  - `Career & Interview Readiness` (`X/5`)
  - `Interview Puzzle` (`X/5`)
- **Wix camelCase & PascalCase Keys**:
  - `logicalQuantitativeThinking` / `LogicalQuantitativeThinking`
  - `sqlDatabaseThinking` / `SqlDatabaseThinking`
  - `pythonDataUnderstanding` / `PythonDataUnderstanding`
  - `powerBiVisualisationAi` / `PowerBiVisualisationAi`
  - `careerInterviewReadiness` / `CareerInterviewReadiness`
  - `communicationCareerReadiness` / `CommunicationCareerReadiness`
  - `excelDataHandling` / `ExcelDataHandling`
- **Short & Snake-Case Keys**:
  - `logical_quant_score` / `LogicalQuantScore`
  - `sql_db_score` / `SqlDbScore`
  - `python_data_score` / `PythonDataScore`
  - `powerbi_ai_score` / `PowerbiAiScore`
  - `communication_score` / `CommunicationScore`
  - `excel_data_score` / `ExcelDataScore`
- **Raw Numerical Marks**:
  - `logical_quant_marks`, `sql_db_marks`, `python_data_marks`, `powerbi_ai_marks`, `communication_marks`, `excel_data_marks`

Leads are automatically stored in the browser's `localStorage` under `iota_jobready_leads` so no lead is lost, and simultaneously sent via `POST` to `LEADS_API_ENDPOINT` if configured.

---

## 🎯 Meta Ads & Analytics Events

The engine tracks the following events:

1. `PageView`: Standard page load
2. `ViewContent`: Landing page viewed
3. `AssessmentStarted`: When user clicks "START FREE CHECK"
4. `AssessmentCompleted`: When user completes all assessment questions
5. `Lead`: When user enters name and WhatsApp number and requests score
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
