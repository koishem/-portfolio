(function() {
	const PASSENGER_WEIGHT = 70;
	const PASSENGER_BAG = 10;
	window.Vehicle = function() {
		this.hp = prompt('введите мощность транспортного средства л.с.');
		this.curbWeight = prompt('Введите массу полностью заправленного транспортного средства без учёта пассажиров в кг');
		this.passengerNum = prompt('Введите количество пассажиров включая водителя');
		this.fullMass = +this.curbWeight + this.passengerNum * (PASSENGER_WEIGHT + PASSENGER_BAG);
		this.dinamysm = function() {
			return this.fullMass / this.hp 
		}
	}
})();