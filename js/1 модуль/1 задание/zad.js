let user = prompt('введите логин');
if (user=='Admin') {
	let pas = prompt('password');
	if (pas=='Glav') {
		alert('zdarova');
	}else if (pas=='' || pas==null){
		alert('otmena');
	}else{
		alert('neverny pas')
	}
}else{
	alert('ne znayu')
}