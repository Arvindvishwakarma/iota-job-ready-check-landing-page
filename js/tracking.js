/**
 * IOTA Academy Mandsaur - Tracking & Analytics Engine
 * Meta Pixel, Conversions API & UTM parameter persistence
 */

(function (window) {
  "use strict";

  const config = window.IOTA_CONFIG || {};

  // Parse & persist UTM & Ad Tracking parameters
  function parseQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const trackingKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "fbclid",
      "gclid",
      "ad_id",
      "adset_id",
      "campaign_id"
    ];

    const currentTracking = {};
    trackingKeys.forEach((key) => {
      const val = params.get(key);
      if (val) {
        currentTracking[key] = val;
      }
    });

    // If new UTMs exist, save to sessionStorage. Otherwise load existing from sessionStorage
    if (Object.keys(currentTracking).length > 0) {
      sessionStorage.setItem("iota_utm_params", JSON.stringify(currentTracking));
      return currentTracking;
    } else {
      const saved = sessionStorage.getItem("iota_utm_params");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          return {};
        }
      }
      return {
        utm_source: "direct",
        utm_medium: "none",
        utm_campaign: "jobready_mandsaur",
        utm_content: "",
        utm_term: ""
      };
    }
  }

  const activeTrackingParams = parseQueryParams();

  // Initialize Meta Pixel if ID is configured
  function initMetaPixel() {
    const pixelId = config.META_PIXEL_ID;
    if (!pixelId) {
      if (config.DEBUG_MODE) {
        console.info(
          "[IOTA Tracking] Meta Pixel ID is not set in config.js. Events will be simulated and logged in console."
        );
      }
      return;
    }

    if (window.fbq) return;

    /* eslint-disable */
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    /* eslint-enable */

    window.fbq("init", pixelId);
    window.fbq("track", "PageView");
  }

  // Unified Event Tracking Function
  function trackEvent(eventName, extraData = {}) {
    const payload = {
      event_name: eventName,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      branch: config.BRANCH_NAME,
      ...activeTrackingParams,
      ...extraData
    };

    if (config.DEBUG_MODE) {
      console.log(`[Meta Pixel Event: ${eventName}]`, payload);
    }

    // Call fbq if available
    if (typeof window.fbq === "function") {
      try {
        const standardEvents = [
          "PageView",
          "ViewContent",
          "Lead",
          "CompleteRegistration",
          "Contact",
          "Schedule"
        ];

        if (standardEvents.includes(eventName)) {
          window.fbq("track", eventName, extraData);
        } else {
          window.fbq("trackCustom", eventName, extraData);
        }
      } catch (err) {
        console.warn("[IOTA Tracking] fbq error:", err);
      }
    }

    // Push to dataLayer for Google Tag Manager if present
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...payload
      });
    }

    return payload;
  }

  // Initialize tracking on script load
  initMetaPixel();
  trackEvent("ViewContent", { content_name: "Job-Ready Landing Page Mandsaur" });

  // Export Tracking API
  window.IOTA_TRACKING = {
    getTrackingParams: () => ({ ...activeTrackingParams }),
    trackEvent: trackEvent,
    initMetaPixel: initMetaPixel
  };
})(window);
