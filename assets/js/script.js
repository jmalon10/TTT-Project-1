// DEPENDENCIES-----------------------------------------------------------------------------
const playAgainButton = document.getElementById('play-again-btn');
// DATA / STATE ----------------------------------------------------------------------------
let currentPlayer = null; // No player is initially selected
// FUNCTIONS -------------------------------------------------------------------------------

// function to hide dropdown menu once player selects choice between Player X and Player O

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
    // Clear local storage
    localStorage.clear();

    // Refresh the page
    window.location.reload();
};

function updateLocalStorage() {
  localStorage.setItem('storedData', JSON.stringify(twoDarray));
};

const defaultTwoDarray = [
  [``, ``, ``],
  [``, ``, ``],
  [``, ``, ``],
];

let twoDarray = JSON.parse(localStorage.getItem('storedData')) || defaultTwoDarray;

// Function to initialize the board with the stored or default data
function initializeBoard() {
  cells.forEach(cell => {
      const row = parseInt(cell.dataset.row, 10);
      const col = parseInt(cell.dataset.col, 10);
      cell.textContent = twoDarray[row][col];
  });
}

// Add event listeners to each cell
const cells = document.querySelectorAll('.tile');
cells.forEach(cell => {
  cell.addEventListener("click", function(event) {
      const cellClicked = event.target;
      const row = parseInt(cellClicked.dataset.row, 10);
      const col = parseInt(cellClicked.dataset.col, 10);
      
      if (!cellClicked.textContent && twoDarray[row][col] === '') { // Check if cell is empty
          const playerCharacter = currentPlayer; // Assume currentPlayer is defined elsewhere
          cellClicked.textContent = playerCharacter;
          twoDarray[row][col] = playerCharacter; // Update the global twoDarray
          updateLocalStorage();
          currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'; // Switch player
      }
  });
});
// USER INTERACTIONS -----------------------------------------------------------------------

playAgainButton.addEventListener('click', handlePlayAgainClick);

// INITIALIZATIONS --------------------------------------------------------------------------






