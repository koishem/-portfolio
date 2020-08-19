(function (){
	window.tryGame = function(userNumber, randomNumber, guessCounter, namedTry, FINAL_TRY) {
		while (userNumber !== randomNumber) {
			if (userNumber == null || guessCounter == FINAL_TRY) {
				alert('игра окончена');
				break;
			}
			if (userNumber < randomNumber) {
				alert('моё число больше!');
			}
			if (userNumber > randomNumber) {
				alert('мое число меньше');
			}
			userNumber = getUserNumber();
			guessCounter++;
			}
		if (userNumber !== null) {
		alert(`ты угадал! тебе потребовалось ${guessCounter+1} ${namedTry}`);
		}
	}
})();

