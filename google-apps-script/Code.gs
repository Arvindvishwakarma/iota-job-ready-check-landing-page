/**
 * Google Apps Script for "Job Ready Test"
 * Spreadsheet ID: 1qu5CCdn8Ka8J-Gg9vbxtvdy-CrIRAoXQLStll0QUj38
 * Spreadsheet Name: "Job Ready Test"
 * 
 * Configured Columns (matching your Google Sheet):
 * 1. Name
 * 2. Phone No
 * 3. Score
 * 4. Aptitude & Maths
 * 5. Excel
 * 6. SQL
 * 7. Python
 * 8. Power BI & Data Visualisation
 * 9. Career & Interview Readiness
 * 10. Interview Puzzle
 * 11. Submission Date
 * 12. Submission Time
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var SPREADSHEET_ID = "1qu5CCdn8Ka8J-Gg9vbxtvdy-CrIRAoXQLStll0QUj38";
    var SHEET_NAME = "Job Ready Test";
    
    var ss = SPREADSHEET_ID ? SpreadsheetApp.openById(SPREADSHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      sheet = ss.getSheetByName("Sheet1") || ss.getSheets()[0];
      if (sheet && sheet.getName() === "Sheet1") {
        sheet.setName(SHEET_NAME);
      } else if (!sheet) {
        sheet = ss.insertSheet(SHEET_NAME);
      }
    }
    
    var defaultHeaders = [
      "Name",
      "Phone No",
      "Score",
      "Aptitude & Maths",
      "Excel",
      "SQL",
      "Python",
      "Power BI & Data Visualisation",
      "Career & Interview Readiness",
      "Interview Puzzle",
      "Submission Date",
      "Submission Time"
    ];
    
    // Auto-create headers if sheet is completely empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(defaultHeaders);
      var headerRange = sheet.getRange(1, 1, 1, defaultHeaders.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#00284d");
      headerRange.setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }
    
    // Parse incoming request data
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }
    
    // Date & Time in Indian Standard Time (IST)
    var now = new Date();
    var dateVal = data["Submission Date"] || data["Date"] || Utilities.formatDate(now, "Asia/Kolkata", "dd/MM/yyyy");
    var timeVal = data["Submission Time"] || data["Time"] || Utilities.formatDate(now, "Asia/Kolkata", "hh:mm:ss a");
    var nameVal = data["Name"] || data["Nname"] || data["fullName"] || data["name"] || "";
    var rawPhone = data["Phone No"] || data["phone"] || data["whatsapp_number"] || "";
    var phoneVal = "'" + String(rawPhone).replace(/\D/g, ""); // Prefix with ' to ensure phone numbers preserve 10 digits as text
    
    var rawScore = data["Score"] !== undefined ? data["Score"] : (data["score"] !== undefined ? data["score"] : "");
    var scoreVal = (rawScore !== "" && !isNaN(rawScore)) ? Number(rawScore) : rawScore;
    
    var s1 = data["Aptitude & Maths"] || data["Section 1 Score"] || data["aptitudeMaths"] || "";
    var s2 = data["Excel"] || data["Section 2 Score"] || data["excel"] || "";
    var s3 = data["SQL"] || data["Section 3 Score"] || data["sql"] || "";
    var s4 = data["Python"] || data["Section 4 Score"] || data["python"] || "";
    var s5 = data["Power BI & Data Visualisation"] || data["Section 5 Score"] || data["powerBi"] || "";
    var s6 = data["Career & Interview Readiness"] || data["Section 6 Score"] || data["careerInterviewReadiness"] || "";
    var s7 = data["Interview Puzzle"] || data["Section 7 Score"] || data["interviewPuzzle"] || "";
    
    // Prepare row matching the 12 columns with section scores formatted as 'X/5
    var row = [
      nameVal,
      phoneVal,
      scoreVal,
      formatSectionScore(s1),
      formatSectionScore(s2),
      formatSectionScore(s3),
      formatSectionScore(s4),
      formatSectionScore(s5),
      formatSectionScore(s6),
      formatSectionScore(s7),
      dateVal,
      timeVal
    ];
    
    sheet.appendRow(row);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", row: sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/**
 * Formats section scores out of 5 (e.g. 4/5) and prefixes with single quote (')
 * so that Google Sheets stores it as text and NEVER converts it into a calendar date (e.g. 4/5 -> 4-May).
 * Also converts any legacy marks (/15 or /20) into questions answered out of 5.
 */
function formatSectionScore(val) {
  if (val === null || val === undefined || val === "") {
    return "'0/5";
  }
  var str = String(val).trim();
  if (str.charAt(0) === "'") {
    str = str.substring(1).trim();
  }
  var matchFive = str.match(/^(\d+)\s*\/\s*5$/);
  if (matchFive) {
    return "'" + matchFive[1] + "/5";
  }
  var matchFifteen = str.match(/^(\d+)\s*\/\s*15$/);
  if (matchFifteen) {
    var count = Math.min(5, Math.max(0, Math.round(Number(matchFifteen[1]) / 3)));
    return "'" + count + "/5";
  }
  var matchTwenty = str.match(/^(\d+)\s*\/\s*20$/);
  if (matchTwenty) {
    var count = Math.min(5, Math.max(0, Math.round(Number(matchTwenty[1]) / 4)));
    return "'" + count + "/5";
  }
  if (!isNaN(str) && str !== "") {
    var num = Math.min(5, Math.max(0, Math.round(Number(str))));
    return "'" + num + "/5";
  }
  return "'" + str;
}

function doGet(e) {
  return ContentService.createTextOutput("IOTA Academy Job Ready Test Google Sheets Webhook is active.");
}
