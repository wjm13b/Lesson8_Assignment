/*  JavaScript 6th Edition
    Chapter 12
    Hands-on Project 12-1

    Author: 
    Date:   

    Filename: script.js
*/

function display(event) {
   $(event.currentTarget).next().fadeIn("slow");
      $(event.currentTarget).next().show();
}

function display2(event) {
   $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");

}


//$("h3").click(display);
//$("h3").click(display2);
$("h3").hover(display2);

$("h3").hover(
        function(){
            $(this).css("background-color", "yellow");
        }, 
        function(){
            $(this).css("background-color", "pink");
        }
);