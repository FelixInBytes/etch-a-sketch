

// function that builds a grid in the "container"
function createGrid(x) {
    if ( x <= 100) {
        for (var rows = 0; rows < x; rows++) {
            for (var columns = 0; columns < x; columns++) {
                $("#container").append("<div class='grid'></div>");
            };
        };
        $(".grid").width("1%");
        $(".grid").height("1%");
    }else{
        createGrid(prompt("please pick a number under between 1 - 100!"));
    }
    
};

// function that clears the grid
function clearGrid(){
    $(".grid").remove();
};  

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(16);

    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });
    });
});





/**
 * function createGrid(gridSize) {
  for (let rows = 0; rows < gridSize; rows++) {
    for (let columns = 0; columns < gridSize; columns++) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute("class", "grid");
      newDiv.style.width = "20px";
      newDiv.style.height = "20px";     
      document.getElementById("container").appendChild(newDiv);
    }
  }
}
 * 
 **/

/**
 *
 *
 * $(".container-ui").append(document.createElement("<div class='grid'></div>"));
 * $(".grid").width(960/x);
 * $(".grid").height(960/x);
 *
 **/
