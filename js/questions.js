/**
 * IOTA Academy Mandsaur - Job-Ready Assessment Question Bank (V2)
 * 35 Practical, workplace-oriented questions across 7 core skill sections.
 * 
 * Scoring:
 * - Questions 1–35: 1 mark each = 35 marks total
 * - Each correct answer = 1 mark
 * - Total Score: 35 marks (1 score per question)
 * - Exactly one correct answer per question. No negative marking.
 */

window.IOTA_QUESTIONS = [
  // =========================================================================
  // SECTION 1 — APTITUDE & MATHS (Q1–Q5, 1 mark each, Max 5)
  // =========================================================================
  {
    id: 1,
    section: "Aptitude & Maths",
    category: "logical_quant",
    categoryLabel: "Aptitude & Maths",
    icon: "🧮",
    question: "Ek company ka revenue January mein ₹8,00,000 tha aur February mein ₹10,00,000 ho gaya. Revenue mein kitne percentage ka increase hua?",
    options: [
      { text: "20%", points: 0, isCorrect: false },
      { text: "25%", points: 1, isCorrect: true },
      { text: "15%", points: 0, isCorrect: false },
      { text: "10%", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },
  {
    id: 2,
    section: "Aptitude & Maths",
    category: "logical_quant",
    categoryLabel: "Aptitude & Maths",
    icon: "🧮",
    question: "Ek job ke liye 500 applicants ne apply kiya, lekin sirf 40 applicants shortlist hue. Total applicants mein se kitne percentage applicants shortlist hue?",
    options: [
      { text: "4%", points: 0, isCorrect: false },
      { text: "8%", points: 1, isCorrect: true },
      { text: "10%", points: 0, isCorrect: false },
      { text: "12%", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },
  {
    id: 3,
    section: "Aptitude & Maths",
    category: "logical_quant",
    categoryLabel: "Aptitude & Maths",
    icon: "🧮",
    question: "Ek Data Analyst ki report mein Week 1 mein 1,200 website visitors the aur Week 2 mein 900 visitors reh gaye. Website visitors mein kitni decrease hui?",
    options: [
      { text: "200", points: 0, isCorrect: false },
      { text: "250", points: 0, isCorrect: false },
      { text: "300", points: 1, isCorrect: true },
      { text: "350", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 1
  },
  {
    id: 4,
    section: "Aptitude & Maths",
    category: "logical_quant",
    categoryLabel: "Aptitude & Maths",
    icon: "🧮",
    question: "Ek store ne 3 products sell kiye:\nProduct A = ₹1,500\nProduct B = ₹2,500\nProduct C = ₹1,000\n\nIn teeno products ka average selling price kya hoga?",
    options: [
      { text: "₹1,500", points: 0, isCorrect: false },
      { text: "₹1,667", points: 1, isCorrect: true },
      { text: "₹2,000", points: 0, isCorrect: false },
      { text: "₹1,750", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },
  {
    id: 5,
    section: "Aptitude & Maths",
    category: "logical_quant",
    categoryLabel: "Aptitude & Maths",
    icon: "🧮",
    question: "Ek sales team ka revenue ₹5,00,000 tha, jabki unka target ₹4,00,000 tha. Team ne apne target ka kitna percentage achieve kiya?",
    options: [
      { text: "80%", points: 0, isCorrect: false },
      { text: "100%", points: 0, isCorrect: false },
      { text: "120%", points: 0, isCorrect: false },
      { text: "125%", points: 1, isCorrect: true }
    ],
    correctAnswer: "D",
    marks: 1
  },

  // =========================================================================
  // SECTION 2 — EXCEL (Q6–Q10, 1 mark each, Max 5)
  // =========================================================================
  {
    id: 6,
    section: "Excel",
    category: "excel_data",
    categoryLabel: "Excel",
    icon: "📊",
    question: "Aapke paas do tables hain. Table A mein Employee ID aur Name hai, aur Table B mein Employee ID aur Department hai. Aap Table A mein Department ko automatically bring karna chahte hain. Iske liye kaunsa function sabse appropriate hai?",
    options: [
      { text: "SUM", points: 0, isCorrect: false },
      { text: "XLOOKUP", points: 1, isCorrect: true },
      { text: "COUNTIF", points: 0, isCorrect: false },
      { text: "AVERAGE", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },
  {
    id: 7,
    section: "Excel",
    category: "excel_data",
    categoryLabel: "Excel",
    icon: "📊",
    question: "Aapke manager ne aapko 80,000 rows ka sales data diya aur kaha: “Mujhe product category ke according total sales dikhao.” Excel mein ye karne ka fastest way kya hoga?",
    options: [
      { text: "Data ko sort karke har category ka total manually add karna", points: 0, isCorrect: false },
      { text: "Find & Replace ka use karke categories ko filter karna", points: 0, isCorrect: false },
      { text: "Pivot Table create karna", points: 1, isCorrect: true },
      { text: "Ek time par sirf ek category ko chhodkar baaki saari rows delete karna", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 1
  },
  {
    id: 8,
    section: "Excel",
    category: "excel_data",
    categoryLabel: "Excel",
    icon: "📊",
    question: "Column B mein Price aur Column C mein Quantity di hui hai. Total Revenue calculate karne ke liye kaunsa formula correct hai?",
    options: [
      { text: "=B2+C2", points: 0, isCorrect: false },
      { text: "=B2-C2", points: 0, isCorrect: false },
      { text: "=B2*C2", points: 1, isCorrect: true },
      { text: "=B2/C2", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 1
  },
  {
    id: 9,
    section: "Excel",
    category: "excel_data",
    categoryLabel: "Excel",
    icon: "📊",
    question: "Customer name column mein ye entries hain: \"rahul\", \"Rahul\", \"RAHUL\", \" Rahul\". Ye sabhi same person hain. Data analyse karne se pehle aapko kya karna chahiye?",
    options: [
      { text: "Turant sabhi records mein se sirf ek record rakhna aur baaki delete karna", points: 0, isCorrect: false },
      { text: "Pehle text format ko standardise karna aur extra spaces remove karna, phir duplicates check karna", points: 1, isCorrect: true },
      { text: "Names ko alphabetical order mein sort karke differences ko ignore karna", points: 0, isCorrect: false },
      { text: "Sabhi names ko numbers mein change karna", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },
  {
    id: 10,
    section: "Excel",
    category: "excel_data",
    categoryLabel: "Excel",
    icon: "📊",
    question: "Aapko sirf Mandsaur ke un sales records ko dekhna hai jahan Sale Amount ₹50,000 se zyada hai. Excel mein iska correct approach kya hoga?",
    options: [
      { text: "Baaki cities ki saari rows delete kar dena", points: 0, isCorrect: false },
      { text: "City aur Sale Amount columns par filters apply karna", points: 1, isCorrect: true },
      { text: "Mandsaur ki rows ko manually copy-paste karke new sheet mein daalna", points: 0, isCorrect: false },
      { text: "Har city ke liye ek naya workbook create karna", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },

  // =========================================================================
  // SECTION 3 — SQL (Q11–Q15, 1 mark each, Max 5)
  // =========================================================================
  {
    id: 11,
    section: "SQL",
    category: "sql_db",
    categoryLabel: "SQL",
    icon: "🗄️",
    question: "Aapke manager kehte hain: “Mujhe database se har city ki total sales batao.” Aapke paas ek table hai jisme City, Order_ID aur Sale_Amount columns hain. Aapko kis type ka operation karna hoga?",
    options: [
      { text: "Table ko City ke according alphabetically sort karna", points: 0, isCorrect: false },
      { text: "Duplicate cities ko delete karna", points: 0, isCorrect: false },
      { text: "Data ko City ke according GROUP BY karke Sale_Amount ka SUM nikalna", points: 1, isCorrect: true },
      { text: "Un rows ko filter karna jahan Sale_Amount zero se zyada hai", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 1
  },
  {
    id: 12,
    section: "SQL",
    category: "sql_db",
    categoryLabel: "SQL",
    icon: "🗄️",
    question: "Database mein aapke paas Customers table aur Orders table hai. Dono tables mein Customer_ID column common hai. Aap dono tables ko combine karke har customer ke orders dekhna chahte hain. Is operation ko kya kehte hain?",
    options: [
      { text: "Filter", points: 0, isCorrect: false },
      { text: "Sort", points: 0, isCorrect: false },
      { text: "Join", points: 1, isCorrect: true },
      { text: "Delete", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 1
  },
  {
    id: 13,
    section: "SQL",
    category: "sql_db",
    categoryLabel: "SQL",
    icon: "🗄️",
    question: "Ek database table mein 2,00,000 customer records hain. Aapko sirf wahi records dekhne hain jahan City = \"Indore\" hai. Iske liye kaunsa SQL concept use hoga?",
    options: [
      { text: "GROUP BY", points: 0, isCorrect: false },
      { text: "ORDER BY", points: 0, isCorrect: false },
      { text: "WHERE", points: 1, isCorrect: true },
      { text: "HAVING", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 1
  },
  {
    id: 14,
    section: "SQL",
    category: "sql_db",
    categoryLabel: "SQL",
    icon: "🗄️",
    question: "Aapko count karna hai ki har salesperson ne kitne orders complete kiye hain. Is result ko paane ke liye kaunsa SQL operation use karenge?",
    options: [
      { text: "Salesperson name ke according filter karna", points: 0, isCorrect: false },
      { text: "Orders ki number ke according sort karna", points: 0, isCorrect: false },
      { text: "Salesperson ke according GROUP BY karke orders ko COUNT karna", points: 1, isCorrect: true },
      { text: "Inactive salesperson ke records delete karna", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 1
  },
  {
    id: 15,
    section: "SQL",
    category: "sql_db",
    categoryLabel: "SQL",
    icon: "🗄️",
    question: "Manager poochte hain: “Last month mein sabse zyada sales karne wale top 5 products kaunse the?” Aapke paas ek table hai jisme Product_Name, Month aur Total_Sales columns hain. Answer find karne ke liye kaunsa approach sahi hai?",
    options: [
      { text: "Saare products ki list dekhkar manually identify karna", points: 0, isCorrect: false },
      { text: "Total_Sales ko descending order mein sort karke top 5 products lena", points: 1, isCorrect: true },
      { text: "Low sales wale saare products delete karna", points: 0, isCorrect: false },
      { text: "Saare products ka average calculate karna", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },

  // =========================================================================
  // SECTION 4 — PYTHON (Q16–Q20, 1 mark each, Max 5)
  // =========================================================================
  {
    id: 16,
    section: "Python",
    category: "python_data",
    categoryLabel: "Python",
    icon: "🐍",
    question: "Aapke paas 5,00,000 rows ka customer transaction dataset hai. Excel mein file open karte time baar-baar crash ho raha hai. Is situation mein sabse appropriate tool kya hoga?",
    options: [
      { text: "File ko Notepad mein open karna", points: 0, isCorrect: false },
      { text: "Python ke saath Pandas jaise library ka use karke data ko load aur process karna", points: 1, isCorrect: true },
      { text: "File ko 10 parts mein divide karke har part ko Excel mein handle karna", points: 0, isCorrect: false },
      { text: "Manager se data kam karne ke liye kehna", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },
  {
    id: 17,
    section: "Python",
    category: "python_data",
    categoryLabel: "Python",
    icon: "🐍",
    question: "Python mein aap ek CSV file load karke uski first few rows dekhna chahte hain, taaki data ka structure samajh sakein. Kaunsa approach correct hai?",
    options: [
      { text: "Puri file ko ek saath print karna", points: 0, isCorrect: false },
      { text: "Pandas ka use karke file read karna aur .head() se first few rows ko preview karna", points: 1, isCorrect: true },
      { text: "File ko browser mein open karna", points: 0, isCorrect: false },
      { text: "Pehle CSV ko Word document mein convert karna", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },
  {
    id: 18,
    section: "Python",
    category: "python_data",
    categoryLabel: "Python",
    icon: "🐍",
    question: "Aap Python ka use karke ek dataset clean kar rahe hain aur aapko pata chalta hai ki \"Age\" column mein kuch rows mein values missing hain. Aapko sabse pehle kya karna chahiye?",
    options: [
      { text: "Pura dataset delete kar dena", points: 0, isCorrect: false },
      { text: "Missing values ko ignore karke analysis run karna", points: 0, isCorrect: false },
      { text: "Pehle check karna ki kitni values missing hain, aur situation ke according decide karna ki unhe fill karna hai ya remove karna hai", points: 1, isCorrect: true },
      { text: "Turant sabhi missing values ko zero se replace kar dena", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 1
  },
  {
    id: 19,
    section: "Python",
    category: "python_data",
    categoryLabel: "Python",
    icon: "🐍",
    question: "Aapke manager ko past year ke monthly sales trends dikhane ke liye ek chart chahiye. Aapke paas data Python mein hai. Aise charts create karne ke liye commonly kaunsi library use ki jaati hai?",
    options: [
      { text: "NumPy", points: 0, isCorrect: false },
      { text: "Sirf Pandas", points: 0, isCorrect: false },
      { text: "Matplotlib ya Seaborn", points: 1, isCorrect: true },
      { text: "Django", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 1
  },
  {
    id: 20,
    section: "Python",
    category: "python_data",
    categoryLabel: "Python",
    icon: "🐍",
    question: "Aapka colleague kehta hai: “Maine ek Python script banayi hai jo predict karti hai ki kaunse customers humse shopping karna band kar sakte hain.” Ye kis category ka work hai?",
    options: [
      { text: "Data cleaning", points: 0, isCorrect: false },
      { text: "Dashboard design", points: 0, isCorrect: false },
      { text: "Machine Learning / Predictive Modelling", points: 1, isCorrect: true },
      { text: "Database administration", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 1
  },

  // =========================================================================
  // SECTION 5 — POWER BI & DATA VISUALISATION (Q21–Q25, 1 mark each, Max 5)
  // =========================================================================
  {
    id: 21,
    section: "Power BI & Data Visualisation",
    category: "powerbi_ai",
    categoryLabel: "Power BI & Data Visualisation",
    icon: "📈",
    question: "Ek dashboard mein sales data diya hai:\n• North Zone = ₹12L\n• South Zone = ₹8L\n• East Zone = ₹15L\n• West Zone = ₹5L\n\nAapke manager poochte hain: “Kaunsi zone ko attention ki zarurat hai?” Sahi answer kya hoga?",
    options: [
      { text: "North Zone, kyunki iski sales sabse zyada hai", points: 0, isCorrect: false },
      { text: "West Zone, kyunki iski sales sabse kam hai", points: 1, isCorrect: true },
      { text: "South Zone, kyunki ye middle mein hai", points: 0, isCorrect: false },
      { text: "East Zone, kyunki iska performance sabse best hai", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },
  {
    id: 22,
    section: "Power BI & Data Visualisation",
    category: "powerbi_ai",
    categoryLabel: "Power BI & Data Visualisation",
    icon: "📈",
    question: "Aap ek Power BI report bana rahe hain aur aapko dikhana hai ki ek saal mein month-by-month sales kaise change hui. Iske liye kaunsa chart type sabse appropriate hoga?",
    options: [
      { text: "Line chart", points: 1, isCorrect: true },
      { text: "Pie chart", points: 0, isCorrect: false },
      { text: "Donut chart", points: 0, isCorrect: false },
      { text: "Scatter plot", points: 0, isCorrect: false }
    ],
    correctAnswer: "A",
    marks: 1
  },
  {
    id: 23,
    section: "Power BI & Data Visualisation",
    category: "powerbi_ai",
    categoryLabel: "Power BI & Data Visualisation",
    icon: "📈",
    question: "Ek Power BI dashboard mein dikh raha hai:\n• Total Revenue ↑ 30%\n• Total Orders ↑ 5%\n• Average Order Value ↑ 24%\n\nRevenue ka growth orders ke growth se zyada hone ka sabse likely reason kya ho sakta hai?",
    options: [
      { text: "Customers ki number decrease ho gayi", points: 0, isCorrect: false },
      { text: "Customers kam orders place kar rahe hain, lekin un orders ki value zyada hai", points: 1, isCorrect: true },
      { text: "Product discontinue ho gaya", points: 0, isCorrect: false },
      { text: "Data incorrect hai", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },
  {
    id: 24,
    section: "Power BI & Data Visualisation",
    category: "powerbi_ai",
    categoryLabel: "Power BI & Data Visualisation",
    icon: "📈",
    question: "Aapke manager ek bar chart dekhkar kehte hain ki chart read karna difficult hai kyunki bars cluttered hain. Dhyan se dekhne par pata chalta hai ki ek product ki sales baaki products se kaafi zyada hai. Chart ko more effective banane ke liye sabse simple change kya hoga?",
    options: [
      { text: "Chart mein aur products add karna", points: 0, isCorrect: false },
      { text: "Chart ko 20 slices wale pie chart mein change karna", points: 0, isCorrect: false },
      { text: "Chart se saare labels remove kar dena", points: 0, isCorrect: false },
      { text: "Bars ko highest se lowest order mein sort karna, taaki top performer immediately clear ho jaye", points: 1, isCorrect: true }
    ],
    correctAnswer: "D",
    marks: 1
  },
  {
    id: 25,
    section: "Power BI & Data Visualisation",
    category: "powerbi_ai",
    categoryLabel: "Power BI & Data Visualisation",
    icon: "📈",
    question: "Ek report mein dikh raha hai ki company ka profit margin 22% se decrease hokar 14% ho gaya, even though revenue increase hua hai. Ek Data Analyst ke taur par aapko sabse pehle kya investigate karna chahiye?",
    options: [
      { text: "Kya website design ko update karne ki zarurat hai", points: 0, isCorrect: false },
      { text: "Kya is period mein costs, discounts ya product mix mein koi change hua hai", points: 1, isCorrect: true },
      { text: "Kya company ko aur staff hire karna chahiye", points: 0, isCorrect: false },
      { text: "Kya chart ke colours correct hain", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },

  // =========================================================================
  // SECTION 6 — CAREER & INTERVIEW READINESS (Q26–Q30, 1 mark each, Max 5)
  // =========================================================================
  {
    id: 26,
    section: "Career & Interview Readiness",
    category: "communication",
    categoryLabel: "Career & Interview Readiness",
    icon: "💼",
    question: "Ek interviewer aapse aapke banaye hue project ke baare mein explain karne ko kehta hai. Aap sirf tools ke naam bata paate hain, lekin ye explain nahi kar paate ki project ne kaunsi business problem solve ki ya aapko kya findings mili. Ye kya indicate karta hai?",
    options: [
      { text: "Interviewer galat questions pooch raha hai", points: 0, isCorrect: false },
      { text: "Data job ke liye sirf tools ka knowledge enough hai", points: 0, isCorrect: false },
      { text: "Project likely kisi tutorial par based tha aur aapne usse completely khud build ya understand nahi kiya", points: 1, isCorrect: true },
      { text: "Aapko resume mein aur tools list karne chahiye", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 1
  },
  {
    id: 27,
    section: "Career & Interview Readiness",
    category: "communication",
    categoryLabel: "Career & Interview Readiness",
    icon: "💼",
    question: "Aap Data Analyst role ke liye apply kar rahe hain. Inmein se kaunsa resume strongest hoga?",
    options: [
      { text: "Aisa resume jisme sirf degree, college name aur hobbies mention hain", points: 0, isCorrect: false },
      { text: "Aisa resume jisme 30 tools aur certifications listed hain, lekin koi project nahi hai", points: 0, isCorrect: false },
      { text: "Aisa resume jisme relevant skills, use kiye gaye tools, completed projects aur possible ho toh unke outcomes bhi clearly mention hain", points: 1, isCorrect: true },
      { text: "Aisa resume jisme sirf online platforms ke certificates hain", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 1
  },
  {
    id: 28,
    section: "Career & Interview Readiness",
    category: "communication",
    categoryLabel: "Career & Interview Readiness",
    icon: "💼",
    question: "Aapne Excel, SQL, Power BI aur Python seekh liya hai. Lekin aapne abhi tak koi complete end-to-end project nahi banaya, Data role ke liye resume prepare nahi kiya aur interview questions ki practice bhi nahi ki. Ab aapko kis cheez par focus karna chahiye?",
    options: [
      { text: "Job apply karne se pehle 5 aur tools seekhna", points: 0, isCorrect: false },
      { text: "Ek practical project build karna, job-targeted resume banana aur interviews ki practice karna", points: 1, isCorrect: true },
      { text: "Practical work kiye bina aur course certificates collect karna", points: 0, isCorrect: false },
      { text: "Jobs ke liye apply karna aur baad mein gaps ko figure out karna", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },
  {
    id: 29,
    section: "Career & Interview Readiness",
    category: "communication",
    categoryLabel: "Career & Interview Readiness",
    icon: "💼",
    question: "Interviewer poochta hai: “Tell me about yourself.” Data role ke liye apply karne wale fresher ke liye kaunsa answer sabse effective hoga?",
    options: [
      { text: "“Main hardworking hoon aur main fast learn karta hoon.”", points: 0, isCorrect: false },
      { text: "“Maine graduation complete ki hai aur mujhe Excel aata hai.”", points: 0, isCorrect: false },
      { text: "“Main ek Data Analytics fresher hoon. Maine Excel, SQL aur Power BI mein projects par kaam kiya hai, aur main aise analyst roles target kar raha hoon jahan main data ka use karke business problems solve kar sakun.”", points: 1, isCorrect: true },
      { text: "“Mujhe achhi salary wali job chahiye.”", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 1
  },
  {
    id: 30,
    section: "Career & Interview Readiness",
    category: "communication",
    categoryLabel: "Career & Interview Readiness",
    icon: "💼",
    question: "Kaunsa student Data job ke liye better prepared hai?\n\nStudent A: 6 online courses ke certificates hain, lekin kisi bhi project ko properly explain nahi kar sakta aur resume bhi ready nahi hai.\n\nStudent B: 2 projects end-to-end complete kiye hain, apna approach aur findings explain kar sakta hai, aur job-targeted resume bhi ready hai.",
    options: [
      { text: "Student A, kyunki zyada certificates ka matlab zyada knowledge hai", points: 0, isCorrect: false },
      { text: "Student B, kyunki interviews mein practical work aur communication ability zyada important hoti hai", points: 1, isCorrect: true },
      { text: "Dono equally ready hain", points: 0, isCorrect: false },
      { text: "Koi bhi ready nahi hai, kyunki sirf degree matter karti hai", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },

  // =========================================================================
  // SECTION 7 — INTERVIEW PUZZLE (Q31–Q35, 1 mark each, Max 5)
  // =========================================================================
  {
    id: 31,
    section: "Interview Puzzle",
    category: "interview_puzzle",
    categoryLabel: "Interview Puzzle",
    icon: "🧩",
    question: "Ek game show mein 3 doors hain. Ek door ke peeche car hai aur baaki do doors ke peeche goats hain.\n\nAap initially Door 2 choose karte hain.\n\nGame show host, Monty Hall, ko pata hai ki car kis door ke peeche hai. Woh baaki do doors mein se ek aisa door open karta hai jiske peeche goat hoti hai. Maan lijiye woh Door 3 open karta hai aur uske peeche goat hai.\n\nAb aapke paas choice hai:\n• Door 2 par stay karein, ya\n• Remaining unopened Door 1 par switch karein\n\nAapke paas car jeetne ki higher probability kis option mein hai?",
    options: [
      { text: "Door 2 par stay karna — 1/2 probability", points: 0, isCorrect: false },
      { text: "Door 1 par switch karna — 2/3 probability", points: 1, isCorrect: true },
      { text: "Dono options ki probability equal hai — 1/2 each", points: 0, isCorrect: false },
      { text: "Door 2 par stay karna — 2/3 probability", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },
  {
    id: 32,
    section: "Interview Puzzle",
    category: "interview_puzzle",
    categoryLabel: "Interview Puzzle",
    icon: "🧩",
    question: "Ek policeman ek prisoner ko punish karna chahta hai aur usse ek statement dene ko kehta hai.\n\nRule ye hai:\n• Agar prisoner ka statement true hua, toh prisoner ko hang kar diya jayega.\n• Agar prisoner ka statement false hua, toh prisoner ko shoot kar diya jayega.\n\nPrisoner ko aisa kya statement dena chahiye jisse policeman ke liye logically decide karna impossible ho jaaye aur prisoner ki jaan bach sake?",
    options: [
      { text: "“Mujhe hang kar diya jayega.”", points: 0, isCorrect: false },
      { text: "“Mujhe shoot kar diya jayega.”", points: 1, isCorrect: true },
      { text: "“Mera statement false hai.”", points: 0, isCorrect: false },
      { text: "“Mujhe punishment nahi milegi.”", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },
  {
    id: 33,
    section: "Interview Puzzle",
    category: "interview_puzzle",
    categoryLabel: "Interview Puzzle",
    icon: "🧩",
    question: "Aapke paas 3 jars — A, B aur C hain. Teeno jars par wrong labels lage hue hain.\n\nLabels ye hain:\n• Jar A: Candies\n• Jar B: Sweets\n• Jar C: Candies and Sweets (Mixed)\n\nAapko pata hai ki teeno labels incorrect hain.\n\nAap ek time par sirf ek eatable kisi ek jar se pick kar sakte hain. Candies aur sweets ka shape same hai, isliye aap unhe touch karke identify nahi kar sakte.\n\nMinimum kitne eatables pick karke aap teeno jars ko correctly label kar sakte hain?",
    options: [
      { text: "1 eatable", points: 1, isCorrect: true },
      { text: "2 eatables", points: 0, isCorrect: false },
      { text: "3 eatables", points: 0, isCorrect: false },
      { text: "4 eatables", points: 0, isCorrect: false }
    ],
    correctAnswer: "A",
    marks: 1
  },
  {
    id: 34,
    section: "Interview Puzzle",
    category: "interview_puzzle",
    categoryLabel: "Interview Puzzle",
    icon: "🧩",
    question: "Ek blind man ek deserted island par akela hai. Uske paas 2 blue pills aur 2 red pills hain.\n\nUsse survive karne ke liye exactly 1 red pill aur 1 blue pill lena zaroori hai. Agar woh kisi bhi aur combination mein pills leta hai, toh woh mar jayega.\n\nProblem ye hai ki woh blind hai, isliye woh red aur blue pills ko identify nahi kar sakta.\n\nWoh exactly 1 red pill aur 1 blue pill kaise ensure karega?",
    options: [
      { text: "Randomly 2 pills pick karke kha lega", points: 0, isCorrect: false },
      { text: "Har pill ko half mein break karega, har pill ka ek half abhi lega aur doosra half side mein rakh dega", points: 1, isCorrect: true },
      { text: "Sirf 2 blue pills ko crush karke kha lega", points: 0, isCorrect: false },
      { text: "Sabhi 4 pills ko ek saath kha lega", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 1
  },
  {
    id: 35,
    section: "Interview Puzzle",
    category: "interview_puzzle",
    categoryLabel: "Interview Puzzle",
    icon: "🧩",
    question: "Aapke paas ₹15 hain. Aap ek shop par jaate hain, jahan 1 chocolate ki price ₹1 hai.\n\nShopkeeper ek offer deta hai:\n“Aap 3 chocolate wrappers return karke 1 extra chocolate le sakte ho.”\n\nAap chocolates khate hain aur har chocolate ka wrapper collect karte hain.\n\nMaximum kitni chocolates aap total kha sakte hain?",
    options: [
      { text: "15 chocolates", points: 0, isCorrect: false },
      { text: "20 chocolates", points: 0, isCorrect: false },
      { text: "22 chocolates", points: 1, isCorrect: true },
      { text: "25 chocolates", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 1
  }
];
