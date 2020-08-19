const firstName = prompt('Как вас зовут? Whtat`s you name?');
	lastName = prompt('Ваша Фамилия? What`s you surname?');
	birthday = prompt('Введите год вашего рождения');
	now = new Date();
	currentYear = now.getFullYear();
	age = currentYear - birthday;

if( age < 20){
	alert('Привет,' + lastName + ' ' + firstName);
}
if(age >= 20 && age<40 ){
	alert('добрый день,' + lastName + ' ' + firstName);
}
if(age >= 40 ){
	alert('Здравствуйте!' + lastName + ' ' + firstName);
};