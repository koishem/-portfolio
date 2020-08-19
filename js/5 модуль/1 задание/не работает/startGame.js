(function (){
	const DECLENSION_TRY = ['попытка', 'попытки', 'попыток'];
	const SPAN_RANDOM = 10;
	const FINAL_TRY = 10;
	const TRY_NUMBER = 0;
	let randomNumber = getRandomNumber(SPAN_RANDOM);
	let guessCounter = TRY_NUMBER;
	let userNumber = getUserNumber();
	let namedTry = declOfNum(guessCounter, DECLENSION_TRY);
	window.startGame = function() {
		tryGame(userNumber, randomNumber, guessCounter, namedTry, FINAL_TRY);
		const gameLaunch = confirm('Сыграть еще раз?');
		if (gameLaunch) {
			randomNumber = getRandomNumber(SPAN_RANDOM);
			guessCounter = TRY_NUMBER;
			userNumber = getUserNumber();
			tryGame(userNumber, randomNumber, guessCounter, namedTry, FINAL_TRY);
		}
		alert('Пока!');
	}
})();

