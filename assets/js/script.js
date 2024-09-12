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
    const twoDarray = JSON.parse(localStorage.getItem('storedData')) || []; // takes the existing array from local storage
    
    if (!twoDarray[row][col]) { // "If theres no x or o in the existing tile...."
      //MUST DEFINE PLAYER CHARACTER ONCE WE GET DISPLAY
      twoDarray[row][col] = playerCharacter; // enters the text content/x or o to the array
      updateLocalStorage();
    } else {
        // ADD CODE HERE TO DISPLAY ERROR MESSAGE
    }
  })
// update local storage -----------------------------------------------------------------------------------------------------
  function updateLocalStorage() {
    localStorage.setItem('storedData', JSON.stringify(twoDarray));
  }
