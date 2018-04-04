/*
Program Name: Recipe Display Application
Author: Kristin Jones
Date: April 3, 2018
Filename: script.js
*/

//displays the next element after the current target
    function display(event) {
    $ (event.currentTarget) .next () .fadeIn ("slow");
       
    }//end of display
    
    //attach event listeners to h3 elements to invoke display function when clicked
    $ ("h3") .click(display);