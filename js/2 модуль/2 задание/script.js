function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function isLeapYear(year) {
	return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

function inputYear(gap) {
	if (!isNumber(gap)) {
		do{
		alert('Это не число');
		gap = prompt("Введите год");
		}while (!isNumber(gap));
	}
	return +gap;
}

let startingYear = inputYear(prompt('Год начала промежутка'));
	endYear = inputYear(prompt('Год окончания промежутка'));

if (startingYear > endYear) {
	startingYear = startingYear + endYear;
	endYear = startingYear - endYear;
	startingYear = startingYear - endYear;
}

for (startingYear; startingYear <= endYear; startingYear ++)
	isLeapYear(startingYear) && console.log(startingYear);


/*let startingYear = prompt("Введите начальный год");

if (!isNumber(startingYear)) {
	do{
		alert('Это не число');
		startingYear = prompt("Введите начальный год");
	}while (!isNumber(startingYear));
}

startingYear = +startingYear;

let endYear = prompt('Введите конечный год');

if (!isNumber(endYear)) {
	do{
		alert('Это не число');
		endYear = prompt("Введите конечный год");
	}while (!isNumber(endYear));
}

endYear = +endYear;*/


