class Vehicle {
	constructor(mark, hp, curbWeight, numOfPassengers) {
		this.passengerWeight = 70;
		this.passengerBag = 10;
		this.name = mark;
		this.hp = hp;
		this.curbWeight = curbWeight;
		this.numOfPassengers = numOfPassengers;
		this.fullMass = +this.curbWeight + this.numOfPassengers * (this.passengerWeight + this.passengerBag);
	}

	acceleration() {
		this.overclocking = this.fullMass / this.hp;
		return this.overclocking
	}
}


