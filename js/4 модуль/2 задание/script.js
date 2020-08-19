const users = [
	{
		login : 'admin',
		password : '123',
		userName : 'Константин'
	},

	{
		login : 'holop',
		password : '321',
		userName : 'Вадик'
	},

	{
		login : 'guest',
		password : '',
		userName : 'Гость'
	},
];

userGreeting();
function userAuthorization(usersArr){
	const login = prompt('Введите логин');
	for (let i = 0; i < usersArr.length; i++) {
		let userLogin = usersArr[i].login;
			 userPassword = usersArr[i].password;
		if (login == userLogin){
			const password = prompt('введите пароль');
			if (userPassword == password) {
				return usersArr[i].userName;
				break;
			}else {
				alert('невверный пароль!');
				alert('ошибка авторизации!');
				break;
			}
		}else {
			alert('невверный логин!');
			alert('ошибка авторизации!');
			break;
		}
	}
}

function userGreeting() {
	const userName = userAuthorization(users);
	if(userName !== undefined) {
		alert(`привет ${userName}!`);
	}
}
