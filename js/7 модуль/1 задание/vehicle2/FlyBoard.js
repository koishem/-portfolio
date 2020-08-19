class FlyBoard extends Vehicle {
	_acceletarionDistance = 120;
	setAccelerationDistance(value) {
		if (value < 100) throw new Error("Введите расстояние на котором самолёт должен взлететь. > 100км");
		this._accelerationDistance = value;
	}
	setPassengerBagWeight(value) {
		if (value < 0) throw new Error("вес багажа не может быть меньше 0");
		this.passengerBag = value;
	}
	acceleration() {
		super.acceleration();
		return (this._accelerationDistance / this.overclocking).toFixed(2) +' секунд до взлёта';
	}
}