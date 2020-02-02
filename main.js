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


closeButton.addEventListener('click', closeWelcome);
walletIcon.addEventListener('click', addWalletBoarder);
dashboardIcon.addEventListener('click', addDashboardBoarder);
inflowButton.addEventListener('click', changeInflowButtonColor);
outflowButton.addEventListener('click', changeOutflowButtonColor);
allButton.addEventListener('click', changeAllButtonColor);

function closeWelcome() {
  welcomeBannerDisappear.style.display = "none";
}

function addWalletBoarder() {
  walletIcon.classList.add('blue-border');
  dashboardIcon.classList.remove('blue-border');
  main.classList.add('hide');
  transactionsPage.classList.remove('hide');
}

function addDashboardBoarder() {
  dashboardIcon.classList.add('blue-border');
  walletIcon.classList.remove('blue-border');
  main.classList.remove('hide');
  transactionsPage.classList.add('hide');
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
