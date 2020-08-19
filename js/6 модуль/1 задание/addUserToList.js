/*(function(){
	window.addUserToListAndPrint = function() {
		const uList = new UserList();
		const OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
		let fullName = getAndSplitFullName();
		let firstName;
		let lastName;
		let regDate;
		while(fullName !== null){
			firstName = fullName[0];
			lastName = fullName[1];
			regDate = new Date().toLocaleString('ru', OPTIONS);
			user = new User(firstName, lastName, regDate);
			uList.add(user);
			fullName = getAndSplitFullName();
			}
		uList.getAllUsers().forEach(function(item, i, arr){
			console.log(item);
		});
	}
})(); */


(function(){
	window.addUserToListAndPrint = function() {
		const uList = new UserList();
		let firstName;
		let lastName;
		let regDate;
		do{
			fullName = getAndSplitFullName();
			if (fullName == null) continue;
			firstName = fullName[0];
			lastName = fullName[1];
			user = new User(firstName, lastName);
			uList.add(user);
			}while(fullName !== null)
		uList.getAllUsers().forEach(function(item, i, arr){
			console.log(item);
		});
	}
})();