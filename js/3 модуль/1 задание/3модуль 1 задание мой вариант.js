// Вариант, который сделал до того, как дочитал до конца!
/*function getRandom(number) {
	return Math.ceil(Math.random() * number);
}

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

let guess = prompt('я загадал число от 1 до 10, твой вариант?');
	number = getRandom(10);

if (!isNumber(guess) && guess !== null) {
	while(!isNumber(guess)){
		alert('нужно вводить числа');
		guess = prompt('твой вариант?');
	}
}

if (isNumber(guess)) {
	guess = +guess;
	while(guess != number){
		if (guess < number) {
			alert('моё число больше!');
			guess = prompt('твой вариант?');
		}

		if (guess > number) {
			alert('моё число меньше!');
			guess = prompt('твой вариант?');
		}
	}
	alert('ты угадал!');
}

if (guess == null) {
	alert('игра окончена');
}

*\
