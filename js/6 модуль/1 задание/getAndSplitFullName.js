/*(function() {
	window.getAndSplitFullName = function() {
		const FIRSTNAME_LASTNAME = 2;
		let fullName = prompt('Введите имя и фамилию');
		if (fullName == null) {
			return null;
		}
		fullName = fullName.trim().split(' ');
		while (fullName.length !== FIRSTNAME_LASTNAME) {
			alert('формат ввода: *имя(пробел)фамилия*');
			fullName = prompt('Введите имя и фамилию');
			if (fullName == null) {
			return null;
			}
			fullName = fullName.trim().split(' ');
		}
		return fullName;
	}
})(); */



(function() {

	window.getAndSplitFullName = function() {
		const FIRSTNAME_LASTNAME = 2;
		let fullName;
		do{
			fullName = prompt('Введите имя и фамилию');
			if (fullName == null) {
			return null;
			}
			fullName = fullName.trim().split(' ');
			if (fullName.length !== FIRSTNAME_LASTNAME) {
				alert('формат ввода: *имя(пробел)фамилия*');
			}
		}while (fullName.length !== FIRSTNAME_LASTNAME);
		return fullName;
	}
})();




