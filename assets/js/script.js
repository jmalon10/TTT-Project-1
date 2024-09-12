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
  
  const cells = document.querySelectorAll('.tile'); // Use a class selector if tiles have a class 'tile'

  // Iterate over each cell and add the event listener
  cells.forEach(cell => {
      cell.addEventListener("click", function(event) {
          const cellClicked = event.target;
          const row = cellClicked.dataset.row;
          const col = cellClicked.dataset.col;
          const twoDarray = JSON.parse(localStorage.getItem('storedData')) || []; // takes the existing array from local storage
          const playerCharacter = cellClicked.textContent;
          console.log(playerCharacter);
          if (!twoDarray[row][col]) { // "If there's no x or o in the existing tile...."
              //MUST DEFINE PLAYER CHARACTER ONCE WE GET DISPLAY
              twoDarray[row][col] = playerCharacter; // enters the text content/x or o to the array
          }
          updateLocalStorage();
          //else {
          //   // ADD CODE HERE TO DISPLAY ERROR MESSAGE
          // }
      });
  });
// update local storage -----------------------------------------------------------------------------------------------------
  function updateLocalStorage() {
    localStorage.setItem('storedData', JSON.stringify(twoDarray));
  };
