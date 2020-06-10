/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// GOVUK COOKIE JS
// function parseCookie(e) {
//     var o = JSON.parse(e);
//     return "object" != typeof o && (o = JSON.parse(o)), o
// }! function() {
//     "use strict";
//     window.GOVUK = window.GOVUK || {};
//     var t = {
//             essential: !0,
//             settings: !1,
//             usage: !1,
//             campaigns: !1
//         },
//         a = {
//             cookies_policy: "essential",
//             seen_cookie_message: "essential",
//             cookie_preferences_set: "essential",
//             cookies_preferences_set: "essential",
//             "_email-alert-frontend_session": "essential",
//             licensing_session: "essential",
//             govuk_contact_referrer: "essential",
//             multivariatetest_cohort_coronavirus_extremely_vulnerable_rate_limit: "essential",
//             dgu_beta_banner_dismissed: "settings",
//             global_bar_seen: "settings",
//             govuk_browser_upgrade_dismisssed: "settings",
//             govuk_not_first_visit: "settings",
//             analytics_next_page_call: "usage",
//             _ga: "usage",
//             _gid: "usage",
//             _gat: "usage",
//             "JS-Detection": "usage",
//             TLSversion: "usage"
//         };
//     window.GOVUK.cookie = function(e, o, n) {
//         return void 0 !== o ? !1 === o || null === o ? window.GOVUK.setCookie(e, "", {
//             days: -1
//         }) : (void 0 === n && (n = {
//             days: 30
//         }), window.GOVUK.setCookie(e, o, n)) : window.GOVUK.getCookie(e)
//     }, window.GOVUK.setDefaultConsentCookie = function() {
//         window.GOVUK.setConsentCookie(t)
//     }, window.GOVUK.approveAllCookieTypes = function() {
//         var e = {
//             essential: !0,
//             settings: !0,
//             usage: !0,
//             campaigns: !0
//         };
//         window.GOVUK.setCookie("cookies_policy", JSON.stringify(e), {
//             days: 365
//         })
//     }, window.GOVUK.getConsentCookie = function() {
//         var e, o = window.GOVUK.cookie("cookies_policy");
//         if (!o) return null;
//         try {
//             e = JSON.parse(o)
//         } catch (n) {
//             return null
//         }
//         return "object" != typeof e && null !== e && (e = JSON.parse(e)), e
//     }, window.GOVUK.setConsentCookie = function(e) {
//         var o = window.GOVUK.getConsentCookie();
//         for (var n in o || (o = JSON.parse(JSON.stringify(t))), e)
//             if (o[n] = e[n], !e[n])
//                 for (var i in a) a[i] === n && window.GOVUK.deleteCookie(i);
//         window.GOVUK.setCookie("cookies_policy", JSON.stringify(o), {
//             days: 365
//         })
//     }, window.GOVUK.checkConsentCookieCategory = function(e, o) {
//         var n = window.GOVUK.getConsentCookie();
//         if (!n && a[e]) return !0;
//         n = window.GOVUK.getConsentCookie();
//         try {
//             return n[o]
//         } catch (i) {
//             return console.error(i), !1
//         }
//     }, window.GOVUK.checkConsentCookie = function(e, o) {
//         if ("cookies_policy" === e || null === o || !1 === o) return !0;
//         if (e.match("^govuk_surveySeen") || e.match("^govuk_taken")) return window.GOVUK.checkConsentCookieCategory(e, "settings");
//         if (a[e]) {
//             var n = a[e];
//             return window.GOVUK.checkConsentCookieCategory(e, n)
//         }
//         return !1
//     }, window.GOVUK.setCookie = function(e, o, n) {
//         if (window.GOVUK.checkConsentCookie(e, o)) {
//             void 0 === n && (n = {});
//             var i = e + "=" + o + "; path=/";
//             if (n.days) {
//                 var t = new Date;
//                 t.setTime(t.getTime() + 24 * n.days * 60 * 60 * 1e3), i = i + "; expires=" + t.toGMTString()
//             }
//             "https:" === document.location.protocol && (i += "; Secure"), document.cookie = i
//         }
//     }, window.GOVUK.getCookie = function(e) {
//         for (var o = e + "=", n = document.cookie.split(";"), i = 0, t = n.length; i < t; i++) {
//             for (var a = n[i];
//                 " " === a.charAt(0);) a = a.substring(1, a.length);
//             if (0 === a.indexOf(o)) return decodeURIComponent(a.substring(o.length))
//         }
//         return null
//     }, window.GOVUK.getCookieCategory = function(e) {
//         return a[e]
//     }, window.GOVUK.deleteCookie = function(e) {
//         window.GOVUK.cookie(e, null), window.GOVUK.cookie(e) && (document.cookie = e + "=;expires=" + new Date + ";", document.cookie = e + "=;expires=" + new Date + ";domain=" + window.location.hostname + ";path=/")
//     }, window.GOVUK.deleteUnconsentedCookies = function() {
//         var e = window.GOVUK.getConsentCookie();
//         for (var o in e)
//             if (!e[o])
//                 for (var n in a) a[n] === o && window.GOVUK.deleteCookie(n)
//     }
// }(window), window.GOVUK = window.GOVUK || {};
// var BANNER_VERSION = 7,
//     GLOBAL_BAR_SEEN_COOKIE = "global_bar_seen",
//     globalBarInit = {
//         getBannerVersion: function() {
//             return BANNER_VERSION
//         },
//         getLatestCookie: function() {
//             var e = window.GOVUK.getCookie(GLOBAL_BAR_SEEN_COOKIE);
//             return e
//         },
//         urlBlockList: function() {
//             var e = ["^/coronavirus/.*$"],
//                 o = document.querySelector(".js-call-to-action");
//             if (o) {
//                 var n = "^" + o.getAttribute("href") + "$";
//                 e.push(n)
//             }
//             return new RegExp(e.join("|")).test(window.location.pathname)
//         },
//         checkDuplicateCookie: function() {
//             for (var e = document.cookie.split(";"), o = 0, n = 0; n < e.length; n++) e[n] && -1 !== e[n].indexOf("global_bar_seen") && o++;
//             if (1 < o) {
//                 var i = window.location.pathname.split("/"),
//                     t = "";
//                 for (n = 0; n < i.length; n++) "" !== i[n] && (t = t + "/" + i[n], document.cookie = "global_bar_seen=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=" + t)
//             }
//         },
//         setBannerCookie: function() {
//             var e = window.GOVUK.getCookieCategory(GLOBAL_BAR_SEEN_COOKIE),
//                 o = GOVUK.getConsentCookie();
//             if (o && o[e]) {
//                 if ("/coronavirus" === window.location.pathname) var n = JSON.stringify({
//                     count: 999,
//                     version: globalBarInit.getBannerVersion()
//                 });
//                 else n = JSON.stringify({
//                     count: 0,
//                     version: globalBarInit.getBannerVersion()
//                 });
//                 window.GOVUK.setCookie(GLOBAL_BAR_SEEN_COOKIE, n, {
//                     days: 84
//                 })
//             }
//         },
//         makeBannerVisible: function() {
//             document.documentElement.className = document.documentElement.className.concat(" show-global-bar")
//         },
//         init: function() {
//             if (globalBarInit.urlBlockList()) null === globalBarInit.getLatestCookie() ? globalBarInit.setBannerCookie() : parseCookie(globalBarInit.getLatestCookie()).version !== globalBarInit.getBannerVersion() && globalBarInit.setBannerCookie();
//             else if (globalBarInit.checkDuplicateCookie(), null === globalBarInit.getLatestCookie()) globalBarInit.setBannerCookie(), globalBarInit.makeBannerVisible();
//             else {
//                 if (parseCookie(globalBarInit.getLatestCookie()).version !== globalBarInit.getBannerVersion() && globalBarInit.setBannerCookie(), 999 === parseCookie(globalBarInit.getLatestCookie()).count) {
//                     var e = document.querySelector(".global-bar-additional");
//                     e && e.classList.remove("global-bar-additional--show");
//                     var o = document.querySelector(".global-bar__dismiss");
//                     o && o.classList.remove("global-bar__dismiss--show")
//                 }
//                 globalBarInit.makeBannerVisible()
//             }
//         }
//     };
// window.GOVUK.globalBarInit = globalBarInit;
// GOVUK COOKIE JS

// SHOW HIDE SOMETHING
$(function(){
  var serviceTypes = {
    "/": "GOVUK",
    "/validate-id": "DBS",
    "/prove-your-id": "VERIFY",
    "/verify-landing-page": "VERIFY",
    "/account-select": "VERIFY",
    "/post-office-complete": "VERIFY",
    "/dbs-processing": "DBS",
    "/dbs-landing-page": "DBS",
    "/other-names": "DBS",
    "/where-born": "DBS",
    "/lived-elsewhere": "DBS",
    "/ni-number": "DBS",
    "/driving-licence": "DBS",
    "/passport": "DBS",
    "/where-send": "DBS",
    "/email": "DBS",
    "/check-your-details": "DBS",
    "/declaration": "DBS",
    "/card-details": "PAY",
    "/confirm-payment": "PAY",
    "/success": "DBS"


  }

  var currentlyAcceptedServiceTypes = getCookie("acceptedServiceTypes")
  var currentPageType = serviceTypes[window.location.pathname]

  if (currentlyAcceptedServiceTypes && currentlyAcceptedServiceTypes.includes(currentPageType)) {
    if (getCookie("cookiesAccepted") == 1) {
      $("#cookies_accepted").show();
      $(".gem-c-cookie-banner__wrapper").hide()
    } else if (getCookie("cookiesAccepted") == 999) {
      // User has manually hidden banner
      $("#global-cookie-message").hide()
    }
  }

  $('.button--accepted').click(function(){
      var currentlyAcceptedServiceTypes = getCookie("acceptedServiceTypes")
      var acceptedServiceType = serviceTypes[window.location.pathname]

      if (!currentlyAcceptedServiceTypes || !currentlyAcceptedServiceTypes.includes(acceptedServiceType)) {
        currentlyAcceptedServiceTypes = currentlyAcceptedServiceTypes + "," + acceptedServiceType
      }

      document.cookie = "cookiesAccepted=1; expires=Fri, 31 Dec 2050 23:59:59 GMT";
      document.cookie = "acceptedServiceTypes=" + currentlyAcceptedServiceTypes + "; expires=Fri, 31 Dec 2050 23:59:59 GMT"
      $('div > #accept_cookies').toggle();
      $('div > #cookies_accepted').toggle();
  });
  $('.gem-c-cookie-banner__hide-button').click(function(){
    document.cookie = "cookiesAccepted=999; expires=Fri, 31 Dec 2050 23:59:59 GMT";
      $('div > #global-cookie-message').toggle();
  });
});

function getCookie(cookieName) {
  var cookie = document.cookie.split('; ').find(row => row.startsWith(cookieName))

  if (cookie) {
    return cookie.split('=')[1];
  }

  return false;
}
// SHOW HIDE SOMETHING
