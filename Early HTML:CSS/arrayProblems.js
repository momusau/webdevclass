function printReverse(array) {
	var index = array.length - 1;

	array.forEach(function(items){
		console.log(array[index]);
		index--;
	}
)};


function isUniform(array) {

	// var firstIndex = 0;
	// var compare = 0;
	// var returnValue = true;
	// for(var i = 0; i < array.length; i++){
	// 	if(array[i] === array[firstIndex]){
	// 		i++;
	// 	}
	// 	else{
	// 		returnValue = false;
	// 	}
	// }
	// return returnValue;

	var first = array[0];
	for(var i = 1; i < array.length; i++){
		if(first !== array[i]){
			return false;
		}

	}
	return true;


}

function sumArray(array) {

	var sum = 0;
	for(var i = 0; i < array.length; i++) {

		sum += array[i];

	}

	return sum;

}

function max(array) {

	var largest = 0;

	array.forEach(function(items){

		if(array[items] > largest){
			largest = array[items];
		}

	});

	return largest;

}