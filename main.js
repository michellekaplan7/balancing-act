var closeButton = document.querySelector('#closex');
var welcomeBannerDisappear = document.querySelector('.welcome');
var dashboardIcon = document.querySelector('.dashboard-icon');
var walletIcon = document.querySelector('.transactions-icon');
var main = document.querySelector('.main');
var transactionsPage = document.querySelector('.transactions-page');
var allButton = document.querySelector('.all-button')
var inflowButton = document.querySelector('.inflow-button')
var outflowButton = document.querySelector('.outflow-button')
var whiteButton = document.querySelector('.white-button');
var navButtons = document.querySelector('.nav-buttons');

inflowButton.addEventListener('click', changeInflowButtonColor);
outflowButton.addEventListener('click', changeOutflowButtonColor);
allButton.addEventListener('click', changeAllButtonColor);
closeButton.addEventListener('click', closeWelcome);
navButtons.addEventListener('click', function(event) {
  changePage(event);
});

function changePage(event) {
  if (event.target === walletIcon) {
    addBorder(walletIcon, transactionsPage, dashboardIcon, main);
  } else if (event.target === dashboardIcon) {
    addBorder(dashboardIcon, main, walletIcon, transactionsPage);
  }
}

function addBorder(icon, page, icon2, page2) {
  icon.classList.add('blue-border');
  icon2.classList.remove('blue-border');
  page2.classList.add('hide');
  page.classList.remove('hide');
}

function closeWelcome() {
  welcomeBannerDisappear.style.display = "none";
}

function changeInflowButtonColor() {
  inflowButton.classList.add('white-button-clicked');
  allButton.classList.remove('white-button-clicked');
  outflowButton.classList.remove('white-button-clicked');
}

function changeOutflowButtonColor() {
  outflowButton.classList.add('white-button-clicked');
  inflowButton.classList.remove('white-button-clicked');
}

function changeAllButtonColor() {
  allButton.classList.add('white-button-clicked');
  outflowButton.classList.remove('white-button-clicked');
  inflowButton.classList.remove('white-button-clicked');
}

// walletIcon.addEventListener('click', addWalletBoarder);
// dashboardIcon.addEventListener('click', addDashboardBoarder);

// function addWalletBoarder() {
//   walletIcon.classList.add('blue-border');
//   dashboardIcon.classList.remove('blue-border');
//   main.classList.add('hide');
//   transactionsPage.classList.remove('hide');
// }
//
// function addDashboardBoarder() {
//   dashboardIcon.classList.add('blue-border');
//   walletIcon.classList.remove('blue-border');
//   main.classList.remove('hide');
//   transactionsPage.classList.add('hide');
// }
