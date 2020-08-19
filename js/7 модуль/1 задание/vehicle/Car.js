(function() {
	window.Car = function() {
		Vehicle.apply(this, arguments);
		const vehicleDinamysm = this.dinamysm;
		this.dinamysm = function() {
			return this.fullMass / this.hp + ' секунд до 100 км\ч';
		}
	}
})();