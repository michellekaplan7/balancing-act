var closeButton = document.querySelector('#closex');
var welcomeBannerDisappear = document.querySelector('.welcome');

closeButton.addEventListener('click', closeWelcome);

function closeWelcome() {
  welcomeBannerDisappear.style.display = "none";
}

var dashboardIcon = document.querySelector('.dashboard-icon');
var walletIcon = document.querySelector('.transactions-icon');

walletIcon.addEventListener('click', addWalletBoarder);

function addWalletBoarder() {
  walletIcon.classList.add('blue-border');
  dashboardIcon.classList.remove('blue-border');
}

dashboardIcon.addEventListener('click', addDashboardBoarder);

function addDashboardBoarder() {
  dashboardIcon.classList.add('blue-border');
  walletIcon.classList.remove('blue-border');
}

//body disappear and keep nav bar
// var walletIcon = document.querySelector('.transactions-icon');
//
// walletIcon.addEventListener('click', hideBodyContent);
//
// function hideBodyContent() {
//   walletIcon.classList.remove('')
// }
