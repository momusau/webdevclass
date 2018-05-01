// var answer = prompt("are we there yet?");

// while (answer !== "yes") {
// 	answer = prompt("are we there yet?");
// }

// var done = prompt("We finally made it!");

var answer = prompt("are we there yet?");

while (answer.indexOf("yes") === -1) { /*The -1 means that the word is NOT in the value*/
	answer = prompt("are we there yet?");
}

var done = prompt("We finally made it!");