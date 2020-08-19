function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}


let firstNumber = prompt("Введите первое число");

if (!isNumber(firstNumber)) {
	do{
		alert('Это не число');
		firstNumber = prompt("Введите первое число");
	}while (!isNumber(firstNumber));
}

firstNumber = +firstNumber;

let secondNumber = prompt('Введите второе число');

if (!isNumber(secondNumber)) {
	do{
		alert('Это не число');
		secondNumber = prompt("Введите первое число");
	}while (!isNumber(secondNumber));
}

secondNumber = +secondNumber;

if (firstNumber > secondNumber) {
	alert('Первое число больше второго');
}
if (firstNumber < secondNumber) {
	alert('Второе число больше первого');
}
if (firstNumber == secondNumber) {
	alert('Числа равны');
}



