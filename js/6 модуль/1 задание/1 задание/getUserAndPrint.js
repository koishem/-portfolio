(function(){
	const uList = new UserList();
	const CORRECT_WORDS_COUNT = 2;
	let fullName;
	window.getUserAndPrint = function() {
		while (fullName !== null) {
			fullName = prompt('введите имя и фамилию!');
			if (fullName !== null) {
				fullName = fullName.trim().split(' ');
				if (fullName.length == CORRECT_WORDS_COUNT) {
					const firstName = fullName[0];
					const lastName = fullName[1];
					const user = new User(firstName, lastName);
					uList.add(user);
				}
				if (fullName.length !== CORRECT_WORDS_COUNT) {
					alert('формат ввода: *имя(пробел)фамилия*');
				}
			}
		}
		uList.getAllUsers().forEach(function(item){
			console.log(item);
		});
	}
})();


