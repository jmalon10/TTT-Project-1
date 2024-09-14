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

// FUNCTIONS -------------------------------------------------------------------------------

// Function to handle player selection
function setPlayer(event) {
  event.preventDefault(); 

  const selectedPlayer = event.target.id;

  // Update the currentPlayer based on user input
  if (selectedPlayer === 'player-x') {
    currentPlayer = 'X';
  } else if (selectedPlayer === 'player-o') {
    currentPlayer = 'O';
  }

  // Hide the dropdown menu after selection
  hideDropdown();
}

// Function to hide dropdown menu
function hideDropdown() {
  const dropdown = document.querySelector('.dropdown');
  if (dropdown) {
    dropdown.style.display = 'none';
  }
}

function handlePlayAgainClick() { // Happens when we click the play again button
  // Clears local storage
  localStorage.clear();

  // Refresh the page
  window.location.reload();
}

// updates localStorage with the new state of the board
function updateLocalStorage() {
  localStorage.setItem('storedData', JSON.stringify(twoDarray));
}

// initialize the board with the stored data or empty array
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
    if (currentPlayer !== null) {
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'; // Switch player
  }
  }
}

// INITIALIZATIONS --------------------------------------------------------------------------

// Add event listeners to dropdown items
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', setPlayer);
});

// Add event listener to "Play Again" button
playAgainButton.addEventListener('click', handlePlayAgainClick);

// Initialize board and setup cell event listeners
document.addEventListener('DOMContentLoaded', () => {
  initializeBoard();
  setupCellEventListeners();
});





