/**
* Created with LIS2360_Lesson8_jQuery.
* User: wjm13b
* Date: 2015-11-14
* Time: 01:45 AM
* To change this template use Tools | Templates.

* Program Name: Recipe Display Application
* Author: William Mang
* Date: 11/13/15
* Filename: script.js


*/

function display(event){
  $(event.currentTarget).next().fadeIn("slow");
} //end of display

 $("h3").click(display);
