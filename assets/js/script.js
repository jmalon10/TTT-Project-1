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

// Light/Dark Theme Functions --------------------------------------------------------------
function switchTheme(event) {
  if (event.target.checked) {
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

// FUNCTIONS -------------------------------------------------------------------------------
// Function to handle player selection
function setPlayer(event) {
  event.preventDefault(); 
  const selectedPlayer = event.target.id;

  if (selectedPlayer === 'player-x') {
    currentPlayer = 'X';
  } else if (selectedPlayer === 'player-o') {
    currentPlayer = 'O';
  }
  hideDropdown();
}

function hideDropdown() {
  const dropdownMenu = document.querySelector('.dropdown-menu.show');
  if (dropdownMenu) {
    const dropdown = bootstrap.Dropdown.getInstance(document.getElementById('player-selector'));
    if (dropdown) {
      dropdown.hide();
    }
  }
}

function handlePlayAgainClick() {
  localStorage.clear();
  window.location.reload();
}

function updateLocalStorage() {
  localStorage.setItem('storedData', JSON.stringify(twoDarray));
}

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
    alert('Please select a player first.');
    return;
  }

  const row = parseInt(tile.dataset.row, 10);
  const col = parseInt(tile.dataset.column, 10);

  if (!tile.textContent && twoDarray[row][col] === '') {
    tile.textContent = currentPlayer;
    twoDarray[row][col] = currentPlayer;
    updateLocalStorage();
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
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

function checkWin() {
  if (isHorizontalWin() || isVerticalWin() || isDiagonalWin() || isAntiDiagonalWin()) {
   alert('you win!');
  }
}

// INITIALIZATIONS --------------------------------------------------------------------------

// Apply saved theme on page load and initialize board
document.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();
  initializeBoard();
});

// Add event listeners to dropdown items and Play Again button
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', setPlayer);
});
playAgainButton.addEventListener('click', handlePlayAgainClick);

// Event listener for theme toggle switch
document.getElementById('theme-toggle').addEventListener('change', switchTheme);

