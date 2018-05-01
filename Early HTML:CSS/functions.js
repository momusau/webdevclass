function isEven(num) {
	if (num % 2 === 0){
		return true;
	}
	else {
		return false;
	}
}

function factorial(num) {
	var results = 1;
	for(var i = 2; i <= num; i++){
		results *=  * i;
	}
	return results;
}



function kebabToSnake(word) {
	var newWord = word.replace("-", "_");
	return newWord;
}