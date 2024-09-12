// DEPENDENCIES-----------------------------------------------------------------------------
// DATA / STATE ----------------------------------------------------------------------------
let currentPlayer = null; // No player is initially selected
// FUNCTIONS -------------------------------------------------------------------------------
// USER INTERACTIONS -----------------------------------------------------------------------
// INITIALIZATIONS --------------------------------------------------------------------------

function handlePlayAgainClick() {
    // Clear local storage
    localStorage.clear();

    // Refresh the page
    window.location.reload();
};

playAgainButton.addEventListener('click', handlePlayAgainClick);
//-------------------------------------------------------------------------------------------
// Store X's and O's positions-------------------------------------------------------------------------------------------
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

// update local storage -----------------------------------------------------------------------------------------------------
  function updateLocalStorage() {
    localStorage.setItem('storedData', JSON.stringify(twoDarray));
  };
