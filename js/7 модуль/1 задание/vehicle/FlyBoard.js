(function() {
	const ACCELERATION_DISTANCE_200KM = 200;
	const PASSENGER_WEIGHT = 70;
	window.FlyBoard = function() {
		Vehicle.apply(this, arguments);
		this.passengerBag = prompt('введите количество багажа на пассажира в кг');
		this.fullMass = +this.curbWeight + this.passengerNum * (PASSENGER_WEIGHT + +this.passengerBag);
		const flyBoardDinamysm = this.dinamysm;
		this.dinamysm = function() {
			return ACCELERATION_DISTANCE_200KM / (this.fullMass / this.hp) + ' секунд до Взлёта';
		}
	}
})();
