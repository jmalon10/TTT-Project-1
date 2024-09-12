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
}
// USER INTERACTIONS -----------------------------------------------------------------------

playAgainButton.addEventListener('click', handlePlayAgainClick);

// INITIALIZATIONS --------------------------------------------------------------------------






