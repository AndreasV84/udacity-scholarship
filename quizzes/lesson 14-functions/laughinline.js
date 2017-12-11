/*
	Lesson 14.22

	Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

	emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes

		Prints: "I am happy, haha!"

*/

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(num){
	var laugh = "";
	for (var x=0; x<num; x++){
		laugh += "ha";
	} 
	return laugh + "!";
});