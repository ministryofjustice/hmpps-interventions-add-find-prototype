/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  setUpAutoCompleteMultiselects();
})

function setUpAutoCompleteMultiselects() {
  const ids = ["needs", "risks"];
  for (i = 0; i < ids.length; i++) {
    const id = ids[i];

    element = document.getElementById(id);

    if (element !== null && element.dataset.autoComplete == "true") {
      new SlimSelect({select: element});
    }
  }
}