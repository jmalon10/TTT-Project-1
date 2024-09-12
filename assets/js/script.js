// DEPENDENCIES-----------------------------------------------------------------------------
// DATA / STATE ----------------------------------------------------------------------------
// FUNCTIONS -------------------------------------------------------------------------------
// USER INTERACTIONS -----------------------------------------------------------------------
// INITIALIZATIONS --------------------------------------------------------------------------

// Pay again button functionality -----------------------------------------------------------
const playAgainButton = document.getElementById('play-again-btn');
function handlePlayAgainClick() {
    // Clear local storage
    localStorage.clear();

    // Refresh the page
    window.location.reload();
};
playAgainButton.addEventListener('click', handlePlayAgainClick);
//-------------------------------------------------------------------------------------------
// Store X's and O's positions-------------------------------------------------------------------------------------------
const twoDarray = [
    [``, ``, ``],
    [``, ``, ``],
    [``, ``, ``],
  ];
  
  cell.addEventListener("click", function(event) {
    const cellClicked = event.target;
  
    const row = cellClicked.dataset.row;
    const col = cellClicked.dataset.col;
  
    if (!twoDarray[row][col]) { //MUST DEFINE PLAYER CHARACTER ONCE WE GET DISPLAY
      twoDarray[row][col] = playerCharacter; // enters the text content/x or o to the array
    }
  })

  function updateLocalStorage() {
    localStorage.setItem('storedData', JSON.stringify(twoDarray));
  }
