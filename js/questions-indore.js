/**
 * IOTA Academy Indore - Job-Ready Assessment Question Bank (V2)
 * 30 Practical, workplace-oriented questions across 6 core skill sections.
 * 
 * Scoring:
 * - Questions 1–20: 3 marks each = 60 marks
 * - Questions 21–30: 4 marks each = 40 marks
 * - Total Score: 100 marks
 * - Exactly one correct answer per question. No negative marking.
 */

window.IOTA_QUESTIONS = [
  // =========================================================================
  // SECTION 1 — LOGICAL & QUANTITATIVE THINKING (Q1–Q5, 3 marks each, Max 15)
  // =========================================================================
  {
    id: 1,
    section: "Logical & Quantitative Thinking",
    category: "logical_quant",
    categoryLabel: "Logical & Quantitative Thinking",
    icon: "🧮",
    question: "A company's monthly sales increased from ₹2,00,000 to ₹2,50,000. What was the percentage increase?",
    options: [
      { text: "20%", points: 0, isCorrect: false },
      { text: "25%", points: 3, isCorrect: true },
      { text: "30%", points: 0, isCorrect: false },
      { text: "50%", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 3
  },
  {
    id: 2,
    section: "Logical & Quantitative Thinking",
    category: "logical_quant",
    categoryLabel: "Logical & Quantitative Thinking",
    icon: "🧮",
    question: "A website received 10,000 visitors last month. This month, visitors decreased by 20%. How many visitors did the website receive this month?",
    options: [
      { text: "7,000", points: 0, isCorrect: false },
      { text: "8,000", points: 3, isCorrect: true },
      { text: "8,500", points: 0, isCorrect: false },
      { text: "9,000", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 3
  },
  {
    id: 3,
    section: "Logical & Quantitative Thinking",
    category: "logical_quant",
    categoryLabel: "Logical & Quantitative Thinking",
    icon: "🧮",
    question: "A shop has the following sales:\nProduct A = ₹10,000\nProduct B = ₹15,000\nProduct C = ₹25,000\n\nWhat percentage of total sales came from Product C?",
    options: [
      { text: "25%", points: 0, isCorrect: false },
      { text: "40%", points: 0, isCorrect: false },
      { text: "50%", points: 3, isCorrect: true },
      { text: "60%", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 3
  },
  {
    id: 4,
    section: "Logical & Quantitative Thinking",
    category: "logical_quant",
    categoryLabel: "Logical & Quantitative Thinking",
    icon: "🧮",
    question: "A company received 500 job applications. 40% of the applicants were shortlisted. How many applicants were shortlisted?",
    options: [
      { text: "100", points: 0, isCorrect: false },
      { text: "150", points: 0, isCorrect: false },
      { text: "200", points: 3, isCorrect: true },
      { text: "250", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 3
  },
  {
    id: 5,
    section: "Logical & Quantitative Thinking",
    category: "logical_quant",
    categoryLabel: "Logical & Quantitative Thinking",
    icon: "🧮",
    question: "A business had:\nJanuary revenue = ₹4 lakh\nFebruary revenue = ₹5 lakh\nMarch revenue = ₹6 lakh\n\nWhat was the average monthly revenue?",
    options: [
      { text: "₹4 lakh", points: 0, isCorrect: false },
      { text: "₹5 lakh", points: 3, isCorrect: true },
      { text: "₹5.5 lakh", points: 0, isCorrect: false },
      { text: "₹6 lakh", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 3
  },

  // =========================================================================
  // SECTION 2 — EXCEL & DATA HANDLING (Q6–Q10, 3 marks each, Max 15)
  // =========================================================================
  {
    id: 6,
    section: "Excel & Data Handling",
    category: "excel_data",
    categoryLabel: "Excel & Data Handling",
    icon: "📊",
    question: "You have an Employee ID in one Excel table and the same Employee ID in another table containing Department information. You want to automatically bring the Department into the first table. Which function is most suitable?",
    options: [
      { text: "SUM", points: 0, isCorrect: false },
      { text: "XLOOKUP", points: 3, isCorrect: true },
      { text: "COUNT", points: 0, isCorrect: false },
      { text: "AVERAGE", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 3
  },
  {
    id: 7,
    section: "Excel & Data Handling",
    category: "excel_data",
    categoryLabel: "Excel & Data Handling",
    icon: "📊",
    question: "You have 50,000 sales records and your manager asks: \"Show me total sales for each city.\" What is the most efficient approach in Excel?",
    options: [
      { text: "Manually add every city", points: 0, isCorrect: false },
      { text: "Create a Pivot Table", points: 3, isCorrect: true },
      { text: "Delete duplicate cities", points: 0, isCorrect: false },
      { text: "Copy each city into a separate workbook", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 3
  },
  {
    id: 8,
    section: "Excel & Data Handling",
    category: "excel_data",
    categoryLabel: "Excel & Data Handling",
    icon: "📊",
    question: "Column B contains Price. Column C contains Quantity. Which formula calculates total revenue?",
    options: [
      { text: "=B2+C2", points: 0, isCorrect: false },
      { text: "=B2-C2", points: 0, isCorrect: false },
      { text: "=B2*C2", points: 3, isCorrect: true },
      { text: "=B2/C2", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 3
  },
  {
    id: 9,
    section: "Excel & Data Handling",
    category: "excel_data",
    categoryLabel: "Excel & Data Handling",
    icon: "📊",
    question: "You receive customer data containing: \"Rahul\", \" rahul\", \"RAHUL \", \"rahul\". Before analysing the data, what should you do?",
    options: [
      { text: "Delete all duplicate-looking rows immediately", points: 0, isCorrect: false },
      { text: "Standardise the text and remove unnecessary spaces, then check duplicates", points: 3, isCorrect: true },
      { text: "Ignore the differences", points: 0, isCorrect: false },
      { text: "Convert the names into numbers", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 3
  },
  {
    id: 10,
    section: "Excel & Data Handling",
    category: "excel_data",
    categoryLabel: "Excel & Data Handling",
    icon: "📊",
    question: "You have sales data containing: City, Product, Sales Amount. Your manager asks: \"Show only sales from Indore where the sales amount is above ₹50,000.\" What should you do?",
    options: [
      { text: "Delete all other rows permanently", points: 0, isCorrect: false },
      { text: "Apply filters to City and Sales Amount", points: 3, isCorrect: true },
      { text: "Create a new workbook for Indore", points: 0, isCorrect: false },
      { text: "Manually copy every matching row", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 3
  },

  // =========================================================================
  // SECTION 3 — SQL & DATABASE THINKING (Q11–Q15, 3 marks each, Max 15)
  // =========================================================================
  {
    id: 11,
    section: "SQL & Database Thinking",
    category: "sql_db",
    categoryLabel: "SQL & Database Thinking",
    icon: "🗄️",
    question: "You have a sales table containing: City, Order_ID, Sale_Amount. Your manager asks: \"Give me total sales for every city.\" What SQL approach is required?",
    options: [
      { text: "ORDER BY City", points: 0, isCorrect: false },
      { text: "GROUP BY City and SUM(Sale_Amount)", points: 3, isCorrect: true },
      { text: "WHERE Sale_Amount > 0", points: 0, isCorrect: false },
      { text: "DELETE duplicate cities", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 3
  },
  {
    id: 12,
    section: "SQL & Database Thinking",
    category: "sql_db",
    categoryLabel: "SQL & Database Thinking",
    icon: "🗄️",
    question: "You have two tables: Customers and Orders. Both tables contain Customer_ID. You want to combine information from both tables. What SQL concept should you use?",
    options: [
      { text: "FILTER", points: 0, isCorrect: false },
      { text: "SORT", points: 0, isCorrect: false },
      { text: "JOIN", points: 3, isCorrect: true },
      { text: "DELETE", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 3
  },
  {
    id: 13,
    section: "SQL & Database Thinking",
    category: "sql_db",
    categoryLabel: "SQL & Database Thinking",
    icon: "🗄️",
    question: "You have 2,00,000 customer records. You only want customers whose City is \"Indore\". Which SQL clause is used to filter the rows?",
    options: [
      { text: "GROUP BY", points: 0, isCorrect: false },
      { text: "ORDER BY", points: 0, isCorrect: false },
      { text: "WHERE", points: 3, isCorrect: true },
      { text: "HAVING", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 3
  },
  {
    id: 14,
    section: "SQL & Database Thinking",
    category: "sql_db",
    categoryLabel: "SQL & Database Thinking",
    icon: "🗄️",
    question: "A company wants to know how many orders were completed by each salesperson. Which approach is correct?",
    options: [
      { text: "GROUP BY salesperson and COUNT orders", points: 3, isCorrect: true },
      { text: "ORDER BY salesperson", points: 0, isCorrect: false },
      { text: "DELETE inactive salespeople", points: 0, isCorrect: false },
      { text: "Use WHERE only", points: 0, isCorrect: false }
    ],
    correctAnswer: "A",
    marks: 3
  },
  {
    id: 15,
    section: "SQL & Database Thinking",
    category: "sql_db",
    categoryLabel: "SQL & Database Thinking",
    icon: "🗄️",
    question: "Your manager asks: \"Find the 5 products with the highest sales.\" Which approach is most appropriate?",
    options: [
      { text: "Sort sales from highest to lowest and select the top 5", points: 3, isCorrect: true },
      { text: "Calculate the average sales", points: 0, isCorrect: false },
      { text: "Delete products with low sales", points: 0, isCorrect: false },
      { text: "Sort product names alphabetically", points: 0, isCorrect: false }
    ],
    correctAnswer: "A",
    marks: 3
  },

  // =========================================================================
  // SECTION 4 — PYTHON & DATA UNDERSTANDING (Q16–Q20, 3 marks each, Max 15)
  // =========================================================================
  {
    id: 16,
    section: "Python & Data Understanding",
    category: "python_data",
    categoryLabel: "Python & Data Understanding",
    icon: "🐍",
    question: "You have a CSV file containing 5,00,000 transaction records and Excel is becoming difficult to use. Which tool would be more suitable for processing the data?",
    options: [
      { text: "Notepad", points: 0, isCorrect: false },
      { text: "Python with Pandas", points: 3, isCorrect: true },
      { text: "Microsoft Word", points: 0, isCorrect: false },
      { text: "Paint", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 3
  },
  {
    id: 17,
    section: "Python & Data Understanding",
    category: "python_data",
    categoryLabel: "Python & Data Understanding",
    icon: "🐍",
    question: "You load a CSV file using Pandas and want to quickly see the first few records. Which command is most useful?",
    options: [
      { text: "df.delete()", points: 0, isCorrect: false },
      { text: "df.head()", points: 3, isCorrect: true },
      { text: "df.start()", points: 0, isCorrect: false },
      { text: "df.firstfile()", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 3
  },
  {
    id: 18,
    section: "Python & Data Understanding",
    category: "python_data",
    categoryLabel: "Python & Data Understanding",
    icon: "🐍",
    question: "A dataset contains missing values in the Age column. What should you do FIRST?",
    options: [
      { text: "Replace every missing value with zero", points: 0, isCorrect: false },
      { text: "Delete the entire dataset", points: 0, isCorrect: false },
      { text: "Understand the amount and reason for missing data before deciding how to handle it", points: 3, isCorrect: true },
      { text: "Ignore the missing values completely", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 3
  },
  {
    id: 19,
    section: "Python & Data Understanding",
    category: "python_data",
    categoryLabel: "Python & Data Understanding",
    icon: "🐍",
    question: "You have monthly sales data in Python and want to create a line chart showing the trend. Which library is commonly used?",
    options: [
      { text: "Matplotlib", points: 3, isCorrect: true },
      { text: "Django", points: 0, isCorrect: false },
      { text: "Flask", points: 0, isCorrect: false },
      { text: "Requests", points: 0, isCorrect: false }
    ],
    correctAnswer: "A",
    marks: 3
  },
  {
    id: 20,
    section: "Python & Data Understanding",
    category: "python_data",
    categoryLabel: "Python & Data Understanding",
    icon: "🐍",
    question: "A company wants to predict which customers may stop purchasing in the future. What type of problem is this?",
    options: [
      { text: "Data entry", points: 0, isCorrect: false },
      { text: "Predictive modelling / Machine Learning", points: 3, isCorrect: true },
      { text: "File formatting", points: 0, isCorrect: false },
      { text: "Database backup", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 3
  },

  // =========================================================================
  // SECTION 5 — POWER BI, DATA VISUALISATION & AI (Q21–Q25, 4 marks each, Max 20)
  // =========================================================================
  {
    id: 21,
    section: "Power BI, Visualisation & AI",
    category: "powerbi_ai",
    categoryLabel: "Power BI, Visualisation & AI",
    icon: "📈",
    question: "A company's sales are:\nNorth = ₹12 lakh\nSouth = ₹8 lakh\nEast = ₹15 lakh\nWest = ₹5 lakh\n\nIf the manager asks which region currently has the lowest sales, what is the answer?",
    options: [
      { text: "North", points: 0, isCorrect: false },
      { text: "South", points: 0, isCorrect: false },
      { text: "East", points: 0, isCorrect: false },
      { text: "West", points: 4, isCorrect: true }
    ],
    correctAnswer: "D",
    marks: 4
  },
  {
    id: 22,
    section: "Power BI, Visualisation & AI",
    category: "powerbi_ai",
    categoryLabel: "Power BI, Visualisation & AI",
    icon: "📈",
    question: "You want to show how sales changed month-by-month over one year. Which visual is generally most suitable?",
    options: [
      { text: "Line chart", points: 4, isCorrect: true },
      { text: "Pie chart", points: 0, isCorrect: false },
      { text: "Donut chart", points: 0, isCorrect: false },
      { text: "Card", points: 0, isCorrect: false }
    ],
    correctAnswer: "A",
    marks: 4
  },
  {
    id: 23,
    section: "Power BI, Visualisation & AI",
    category: "powerbi_ai",
    categoryLabel: "Power BI, Visualisation & AI",
    icon: "📈",
    question: "A company's revenue increased by 30%, while the number of orders increased by only 5%. What could explain this difference?",
    options: [
      { text: "Average order value increased", points: 4, isCorrect: true },
      { text: "Every customer stopped buying", points: 0, isCorrect: false },
      { text: "Orders became zero", points: 0, isCorrect: false },
      { text: "Revenue must always equal order count", points: 0, isCorrect: false }
    ],
    correctAnswer: "A",
    marks: 4
  },
  {
    id: 24,
    section: "Power BI, Visualisation & AI",
    category: "powerbi_ai",
    categoryLabel: "Power BI, Visualisation & AI",
    icon: "📈",
    question: "A dashboard contains 25 products in a bar chart. The bars are difficult to compare because the products are randomly ordered. What is a simple improvement?",
    options: [
      { text: "Add another 25 products", points: 0, isCorrect: false },
      { text: "Sort the bars by sales value", points: 4, isCorrect: true },
      { text: "Remove the product names", points: 0, isCorrect: false },
      { text: "Change the chart into a paragraph", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 4
  },
  {
    id: 25,
    section: "Power BI, Visualisation & AI",
    category: "powerbi_ai",
    categoryLabel: "Power BI, Visualisation & AI",
    icon: "📈",
    question: "You have the following situation:\nRevenue increased by 20%, but profit decreased by 10%.\n\nWhat should a data analyst investigate?",
    options: [
      { text: "Costs, discounts, pricing and product mix", points: 4, isCorrect: true },
      { text: "Only the company logo", points: 0, isCorrect: false },
      { text: "Only the chart colour", points: 0, isCorrect: false },
      { text: "The employee birthdays", points: 0, isCorrect: false }
    ],
    correctAnswer: "A",
    marks: 4
  },

  // =========================================================================
  // SECTION 6 — COMMUNICATION & CAREER READINESS (Q26–Q30, 4 marks each, Max 20)
  // =========================================================================
  {
    id: 26,
    section: "Communication & Career Readiness",
    category: "communication",
    categoryLabel: "Communication & Career Readiness",
    icon: "💼",
    question: "You built a Power BI project. During an interview, the interviewer asks: \"What business problem did your project solve?\" What should you explain?",
    options: [
      { text: "Only the number of pages in the dashboard", points: 0, isCorrect: false },
      { text: "The problem, your approach, key findings and business value", points: 4, isCorrect: true },
      { text: "Only the Power BI version you used", points: 0, isCorrect: false },
      { text: "Only the colours used in the dashboard", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 4
  },
  {
    id: 27,
    section: "Communication & Career Readiness",
    category: "communication",
    categoryLabel: "Communication & Career Readiness",
    icon: "💼",
    question: "Which resume is more useful for a fresher applying for a Data Analyst role?",
    options: [
      { text: "Degree and hobbies only", points: 0, isCorrect: false },
      { text: "30 tools listed without projects", points: 0, isCorrect: false },
      { text: "Relevant skills, projects, tools used and measurable outcomes where possible", points: 4, isCorrect: true },
      { text: "Certificates only", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 4
  },
  {
    id: 28,
    section: "Communication & Career Readiness",
    category: "communication",
    categoryLabel: "Communication & Career Readiness",
    icon: "💼",
    question: "You know Excel, SQL, Power BI and Python, but you have never completed an end-to-end project. What should you focus on next?",
    options: [
      { text: "Learn five more tools immediately", points: 0, isCorrect: false },
      { text: "Build a practical end-to-end project and practise explaining it", points: 4, isCorrect: true },
      { text: "Collect more certificates", points: 0, isCorrect: false },
      { text: "Stop learning completely", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 4
  },
  {
    id: 29,
    section: "Communication & Career Readiness",
    category: "communication",
    categoryLabel: "Communication & Career Readiness",
    icon: "💼",
    question: "An interviewer asks: \"Tell me about yourself.\" Which response is the most job-focused?",
    options: [
      { text: "\"I am hardworking and honest.\"", points: 0, isCorrect: false },
      { text: "\"I completed graduation and I know Excel.\"", points: 0, isCorrect: false },
      { text: "\"I am a data analytics fresher. I have worked on projects using Excel, SQL and Power BI, and I am preparing for analyst roles where I can use data to solve business problems.\"", points: 4, isCorrect: true },
      { text: "\"I want a high salary.\"", points: 0, isCorrect: false }
    ],
    correctAnswer: "C",
    marks: 4
  },
  {
    id: 30,
    section: "Communication & Career Readiness",
    category: "communication",
    categoryLabel: "Communication & Career Readiness",
    icon: "💼",
    question: "Consider two students:\n\nStudent A:\n• Has 6 online course certificates\n• Cannot explain any project\n• Has no job-targeted resume\n\nStudent B:\n• Has completed 2 end-to-end projects\n• Can explain the approach and findings\n• Has a job-targeted resume\n\nWhich student demonstrates stronger evidence of practical job preparation?",
    options: [
      { text: "Student A, because certificates are more important", points: 0, isCorrect: false },
      { text: "Student B, because practical work and the ability to explain it demonstrate applied preparation", points: 4, isCorrect: true },
      { text: "Both demonstrate exactly the same preparation", points: 0, isCorrect: false },
      { text: "Neither, because only a degree matters", points: 0, isCorrect: false }
    ],
    correctAnswer: "B",
    marks: 4
  }
];
