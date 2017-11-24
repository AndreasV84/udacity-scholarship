/*
	Lesson 15.20

	Use the array's forEach() method to loop over the following array and add 100 to each of the values if the value is divisible by 3.

		var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

	Remember that the "Test Run" button will display any logged content, so feel free to use console.log() to test your code.
*/

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(element, i, array){
    if (element % 3 === 0){
        array[i] = element += 100;
    }
});

console.log(test);