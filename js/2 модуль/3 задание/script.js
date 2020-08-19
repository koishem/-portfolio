function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

let sum = 0;
let count;
do{
	count = prompt('введите число для суммирования');
	if (isNumber(count)) {
		sum+=+count;
	}
	if (!isNumber(count) && count !== null) {
		alert('вы ввели не число!');
	}
}while(count != null);

alert(sum);