"use strict";

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  // Hide all tabs
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Mark all tabs not-active
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the tab's content and highlight the tab
  var currentContent = document.getElementById(tabName);
  currentContent.style.display = "flex";
  var currentTab = document.getElementById(tabName + "Tab");
  currentTab.className += " active";
}
