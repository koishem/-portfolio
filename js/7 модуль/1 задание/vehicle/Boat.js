(function() {
	const KM_IN_KN = 1.85;
	const ACCELERATION_DISTANCE_30KN = 30 * KM_IN_KN;
	window.Boat = function() {
		Vehicle.apply(this, arguments);
		const boatDinamysm = this.dinamysm;
		this.dinamysm = function() {
			return ACCELERATION_DISTANCE_30KN / (this.fullMass / this.hp) + ' секунд до 30 узлов/час';
		}
	}
})();