// DEPENDENCIES-----------------------------------------------------------------------------
const playAgainButton = document.getElementById('play-again-btn');

// DATA / STATE ----------------------------------------------------------------------------
let currentPlayer = null; // No player is initially selected

const defaultTwoDarray = [
  [``, ``, ``],
  [``, ``, ``],
  [``, ``, ``],
];

let twoDarray = JSON.parse(localStorage.getItem('storedData')) || defaultTwoDarray;

//------------------------------FUNCTIONS -------------------------------------------------------------------------------
// Light/Dark Theme Functions --------------------------------------------------------------
function switchTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  }
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light'; // default to light mode
  const themeToggleCheckbox = document.getElementById('theme-toggle');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleCheckbox.checked = true;
  } else {
    document.body.classList.add('light-mode');
    themeToggleCheckbox.checked = false;
  }
}


// Function to handle player selection
function setPlayer(event) {
  event.preventDefault(); 
  const selectedPlayer = event.target.id;


// Update the currentPlayer based on user input//
  if (selectedPlayer === 'player-x') {
    currentPlayer = 'X';
  } else if (selectedPlayer === 'player-o') {
    currentPlayer = 'O';
  }
 
    // Hide the dropdown menu after selection//
  hideDropdown();
}
// Function to hide dropdown menu//
function hideDropdown() {
  const dropdown = document.querySelector('.dropdown');
  if (dropdown) {
    dropdown.style.display = 'none';
  }
}

function handlePlayAgainClick() {
  localStorage.clear();


  // Refresh the page//
  window.location.reload();
}

// updates localStorage with the new state of the board//
function updateLocalStorage() {
  localStorage.setItem('storedData', JSON.stringify(twoDarray));
}

// initialize the board with the stored data or empty array//
function initializeBoard() {
  const cells = document.querySelectorAll('.tile');
  cells.forEach(cell => {
    const row = parseInt(cell.dataset.row, 10);
    const col = parseInt(cell.dataset.column, 10); 
    cell.textContent = twoDarray[row][col];
  });
}

function markTile(tile) {
  if (currentPlayer === null) {
    const playerSelectionModal = new bootstrap.Modal(document.getElementById('playerSelectionModal'));
    playerSelectionModal.show(); // Show the modal
    return;
  }

  const row = parseInt(tile.dataset.row, 10);
  const col = parseInt(tile.dataset.column, 10);

  if (!tile.textContent && twoDarray[row][col] === '') {
    tile.textContent = currentPlayer;
    twoDarray[row][col] = currentPlayer;
    updateLocalStorage();
    if (currentPlayer !== null) {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
  }
  switchTheme(currentPlayer === 'X' ? 'light' : 'dark');
    setTimeout(() => {
      checkWin();
    }, 0);
  }
}

function allEqual(arr) {
  return arr.every(val => val === arr[0] && val !== '');
}

function isVerticalWin(){
  for (let column = 0; column < 3; column++) {
    const columnValues = [twoDarray[0][column], twoDarray[1][column], twoDarray[2][column]];
    if (allEqual(columnValues)) {
        return true;
    }
  }
}

function isDiagonalWin(){
  if (allEqual([twoDarray[0][0], twoDarray[1][1], twoDarray[2][2]])) {
    return true;
  }
}

function isAntiDiagonalWin(){
  if (allEqual([twoDarray[0][2], twoDarray[1][1], twoDarray[2][0]])) {
    return true;
  }
}

function isHorizontalWin(){
  for (let row = 0; row < 3; row++) {
    if (allEqual(twoDarray[row])) {
      return true;
    }
  }
}

function checkWin() { // function to decide if we have a win//
  if (isHorizontalWin() || isVerticalWin() || isDiagonalWin() || isAntiDiagonalWin()) {
  const winModal = new bootstrap.Modal(document.getElementById('winModal'));
  winModal.show();
  }
}

// INITIALIZATIONS --------------------------------------------------------------------------

//Apply saved theme on page load and initialize board//
document.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();
  initializeBoard();
});

// Add event listeners to dropdown items//
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', setPlayer);
});
// Add event listener to "Play Again" button//
playAgainButton.addEventListener('click', 
  handlePlayAgainClick);

// Event listener for theme toggle switch//
document.getElementById('theme-toggle').addEventListener('change', switchTheme);

