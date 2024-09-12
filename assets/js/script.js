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
  
  const row = 0;
  const col = 2;
  
  console.log("cell value", twoDarray[row][col]);
  
  cell.addEventListener("click", function(event) {
    const cellClicked = event.target;
  
    const row = cellClicked.dataset.row;
    const col = cellClicked.dataset.col;
  
    if (!twoDarray[row][col]) {
      twoDarray[row][col] = playerCharacter;
    }
  })


