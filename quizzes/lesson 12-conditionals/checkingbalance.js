/*
	Lesson 12.12

	Using the flowchart (checkingbalance-flowchart.jpg), write the code to represent checking your balance at the ATM. The yellow diamonds represent conditional statements and the blue rectangles with rounded corners represent what should be printed to the console.

	Flowchart for checking your balance at the ATM (Click the image to enlarge the flowchart).
	Use the following variables in your solution:

		- balance - the account balance
		- isActive - if account is active
		- checkBalance - if you want to check balance

*/

var balance = 2312.00;
var checkBalance = true;
var isActive = true;

if (!checkBalance) {
	console.log("Thank you. Have a nice day!");
} 
else {
    if (!isActive){
        console.log("Your account is no longer active.");
    }
	else if (balance > 0) {
		console.log("Your balance is $" + balance.toFixed(2) + ".");
	}
	else if (balance === 0) {
		console.log("Your account is empty.");
	} 
	else if (balance < 0) {
		console.log("Your balance is negative. Please contact bank.");
	}
}