const SECOND_INTERVAL_SHOW_TIME = 1000;
const hourArr = ['час', 'часа', 'часов'];
const minuteArr = ['минута', 'минуты', 'минут'];
const secondArr = ['секунда', 'секунды', 'cекунд'];

setInterval(showExactTime, SECOND_INTERVAL_SHOW_TIME);

function getExactTime() {
	let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		 now = new Date()
		 year = now.getFullYear();
		 date = now.getDate();
		 hour = now.getHours();
		 minute = now.getMinutes();
		 second = now.getSeconds();
	if (hour < 10) {
		 hour = "0" + hour;
	};
	if (minute < 10) {
		 minute = "0" + minute;
	};
	return now.toLocaleString('ru', options);
}


function declOfNum(number, titles) {
	cases = [2, 0, 1, 1, 1, 2];
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]; 
}




function showExactTime() {
	const nowTime = getExactTime();
	const dateArr = nowTime.split(' ');
	const weekday = dateArr[0];
	const month = dateArr[2];
	const namedHour = declOfNum(hour, hourArr);
	const namedMinute = declOfNum(minute, minuteArr);
	const namedSecond = declOfNum(second, secondArr);
	const today = `
		Сегодня ${date} ${month} ${year} года,
		${weekday} ${hour} ${namedHour} 
		${minute} ${namedMinute} 
		${second} ${namedSecond}
		`;
	console.log(today);
}



