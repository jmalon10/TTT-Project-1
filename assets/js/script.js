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

// function to mark a tile
function markTile(tile) {
    // Ensure that a player is selected before marking a tile or alert is given to select one
    if (currentPlayer === null) {
      alert('Please select a player to start the game!');
      return;
    }

// logic to check if the tile is already marked
if (tile.textContent === '') {
    tile.textContent = currentPlayer; // Set the tile to the current player's mark
    // Switch players
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
  }
}

// event listeners for dropdown player selection
document.getElementById('player-x').addEventListener('click', function() {
    currentPlayer = 'X';
    hideDropdown(); // Hide the dropdown menu after selection
  });
  
  document.getElementById('player-o').addEventListener('click', function() {
    currentPlayer = 'O';
    hideDropdown(); // Hide the dropdown menu after selection
  });

function handlePlayAgainClick() {
    // Clear local storage
    localStorage.clear();

    // Refresh the page
    window.location.reload();
}
// USER INTERACTIONS -----------------------------------------------------------------------

playAgainButton.addEventListener('click', handlePlayAgainClick);

// INITIALIZATIONS --------------------------------------------------------------------------






