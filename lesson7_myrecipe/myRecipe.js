/*Program Name: Recipe Display Application
Author: Kristin Jones
Date: April 3, 2018
Filename: myRecipe.js
*/

//displays the next element after the current target
    function display(event) {
    $ (event.currentTarget) .next () .fadeIn ("slow");
       
    }//end of display
    
    //attach event listeners to h3 elements to invoke display function when clicked
    //$ ("h3") .click(display);
    
    //displays and animates the next element after the current target 
    function display2 (event) {
        $(event.currentTarget) .next() .animate( {height: 'toggle'}, "slow");
        
    }//end of display2
    
    //attach event listener to h3 elements to invoke display function when clicked
    $("h3") .click(display2);
    
    //change background color h3 element when mouse hovers over it
    $("h3") .hover(function() {
        $(this) .css("background-color", "blue");
    } , function () {
        $(this) .css("background-color", "yellow");
        
    });
    
    //change text color h3 element when mouse hovers over it
    $("h3") .hover(function() {
        $(this) .css("color", "white");
    } , function () {
        $(this) .css("color", "black");
        
    });
    
    //hover() will trigger display2 method each time mouse hovers over header
    $("h3") .hover(display2);