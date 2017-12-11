/*
	Lesson 14.16

	For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle. See the example output below.

	buildTriangle(10);

	Returns:

	* 
	* * 
	* * * 
	* * * * 
	* * * * * 
	* * * * * * 
	* * * * * * * 
	* * * * * * * * 
	* * * * * * * * * 
	* * * * * * * * * *

*/

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(lines){
    var triangle = "";
    for (var x = 0; x < lines; x++){
        triangle += makeLine(x+1);
    }
    return triangle;
}

console.log(buildTriangle(10));