(function() {
	const OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
	window.User = function(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.regDate = new Date().toLocaleString('ru', OPTIONS);
	}
})();
