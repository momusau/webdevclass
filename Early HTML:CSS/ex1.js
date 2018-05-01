// var userFname = prompt("What is your first name?");
// var userLname = prompt("What is your last name?");
// var age = prompt("What is your age?");

// var fullName = userFname + " " + userLname;
// console.log("The user's name is: " +  fullName);
// console.log(userFname + "'s age is: " + age);


// var age = prompt("What is your age?");

// var daysAlive = age * 365;

// console.log(age + " is roughly " + daysAlive + " days.");


// var age = prompt("What is your age? ");

// if(age < 0) {
// 	console.log("Error, must be greater than 0");
// }

// if(age < 21) {
// 	console.log("You cannot enter the venue");
// }

// if(age === 21){
// 	console.log("Happy 21st!");
// }

// if(age % 2 ==! 0) {
// // 	console.log("Your age is odd");
// }


// Guessing Game

// var secretNumber = 4;

// var stringGuess = Number(prompt("Guess a number: "));
// var guess = Number(stringGuess);

// if(guess === secretNumber) {
// 	alert("You got the number right!");
// } 

// else if(guess > secretNumber) {
// 	alert("Too high");
// }
// else  {
// 	alert("Too low");
// }

// WHILE Loops

// var num = -10;

// while(num <= 19){
// 	console.log(num);
// 	num++;
// }

// var num = 10;

// while(num <= 40) {
// 	if(num % 2 == 0) {
// 		console.log(num);
// 	}
// 	num++;
// }

// var num = 300;

// while(num <= 333) {
// 	if(num % 2 ==! 0) {
// 		console.log(num);
// 	}
// 	num++;
// }

var num = 5;

while(num <= 50){
	if((num % 5 == 0) && (num % 3 == 0)) {
		console.log(num)
	}
	num++;
}
