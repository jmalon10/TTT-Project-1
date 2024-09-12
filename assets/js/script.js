// DEPENDENCIES-----------------------------------------------------------------------------
const playAgainButton = document.getElementById('play-again-btn');
// DATA / STATE ----------------------------------------------------------------------------
// FUNCTIONS -------------------------------------------------------------------------------

function handlePlayAgainClick() {
    // Clear local storage
    localStorage.clear();

    // Refresh the page
    window.location.reload();
}
// USER INTERACTIONS -----------------------------------------------------------------------

playAgainButton.addEventListener('click', handlePlayAgainClick);

// INITIALIZATIONS --------------------------------------------------------------------------






