(function() {

	window.getUserNumber = function() {
		let userNumber = prompt('отгадайте число от 1 до 10');
		while(!isNumber(userNumber)) {
			if (userNumber == null) {
				return null;
			}
			alert('Вводите число');
			userNumber = prompt('отгадайте число от 1 до 10');
		}
		return +userNumber;
	}
})();