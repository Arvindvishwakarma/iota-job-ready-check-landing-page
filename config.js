/**
 * IOTA Academy Mandsaur - Job-Ready Check
 * Application Configuration
 * 
 * Update these settings to connect with your live Meta Pixel,
 * WhatsApp business line, and Google Sheets / Backend API.
 */

window.IOTA_CONFIG = {
  // Brand & Branch Details
  INSTITUTE_NAME: "IOTA Academy",
  BRANCH_NAME: "Mandsaur",
  BRANCH_LOCATION: "Ramtekri, Mandsaur, Madhya Pradesh",
  TAGLINE: "Become Job-Ready.",

  // WhatsApp Configuration
  // Put the official 10-digit WhatsApp phone number of IOTA Academy Mandsaur here (with 91 country code, no + or spaces).
  // Example: "919876543210". If blank, WhatsApp buttons will prompt user or fallback gracefully.
  WHATSAPP_NUMBER: "7024040225", // Configurable WhatsApp contact for IOTA Mandsaur

  // Default pre-filled messages
  WHATSAPP_MESSAGES: {
    DEFAULT: "Hi IOTA Academy Mandsaur, I want to take the FREE Job-Ready Check.",
    HERO_CONTACT: "Hi IOTA Academy Mandsaur, I want to connect with you regarding the Job-Ready Check.",
    AFTER_ASSESSMENT: "Hi IOTA Academy Mandsaur, I completed the FREE Job-Ready Check and want to book my detailed assessment.",
    ONE_WEEK_EXPERIENCE: "Hi IOTA Academy Mandsaur, I want to book my 1-Week regular class experience at Ramtekri Mandsaur."
  },

  // Meta Ads / Pixel Tracking
  // Set your Meta Pixel ID here (e.g. "123456789012345"). Leave empty string if not active yet.
  META_PIXEL_ID: "",

  // Backend / Webhook API Configuration
  // If you have a Google Sheets Webhook (Apps Script) or Backend CRM Endpoint, enter the URL here.
  // When empty, leads are automatically persisted in localStorage and exported if desired.
  LEADS_API_ENDPOINT: "https://www.iotaacademy.in/_functions/jobreadyLead",

  // Local Storage Key for offline & backup storage
  STORAGE_KEY: "iota_jobready_leads",

  // Debug mode for console tracking logs
  DEBUG_MODE: true
};
