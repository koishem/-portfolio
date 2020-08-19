const userCode = prompt('введите JS код для его компиляции в строгом режиме');
try{
	eval(`'use strict'; ${userCode}`);
}
catch(ex) {
	console.log('возникла ошибка ' + ex);
}
