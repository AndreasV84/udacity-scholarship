/*
	Lesson 14.20

	Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

	laugh(3);

		Returns: hahaha!
*/

var laugh = function (num){
    var laugh = "";
    for(var x =0; x<num; x++){
        laugh += "ha";
    }
    return laugh + "!";
}

console.log(laugh(10));