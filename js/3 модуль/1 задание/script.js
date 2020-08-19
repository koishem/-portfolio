const SPAN_RANDOM = 10;
const randomNumber = getRandomNumber(SPAN_RANDOM);

startUserTry(randomNumber);

function getRandomNumber(numGap) {
	return Math.ceil(Math.random() * numGap);
}

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function getUserNumber() {
	let userNumber = prompt('отгадайте число от 1 до 10');
	while(!isNumber(userNumber)) {
		if (userNumber == null) {
			return null;
			break;
		}
		alert('Вводите число');
		userNumber = prompt('отгадайте число от 1 до 10');
	}
	return +userNumber;
}

function startUserTry(randomNumber){
	let userNumber = getUserNumber();
	do{
		if (userNumber == null) {
		alert('игра окончена');
		break;
		}
		if (userNumber < randomNumber) {
			alert('моё число больше!');
			userNumber = getUserNumber();
		}
		if (userNumber > randomNumber) {
			alert('моё число меньше!');
			userNumber = getUserNumber();
		}
	}while(userNumber !== randomNumber);
	if (userNumber == randomNumber) {
		alert('ты угадал!');
	}
}


