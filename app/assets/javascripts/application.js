/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

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
