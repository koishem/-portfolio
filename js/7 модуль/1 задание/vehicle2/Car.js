class Car extends Vehicle {
	acceleration() {
		super.acceleration();
		return this.overclocking.toFixed(2) +' секунд до 100 км\ч';
	}
}