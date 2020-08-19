class Boat extends Vehicle {
	acceleration(accelerationDistance) {
		super.acceleration();
		this.accelerationDistance = 55.5;
		return (this.accelerationDistance / this.overclocking).toFixed(2) +' секунд до 30 узлов в час';
	}
}