class One {
	constructor(name) {
		this.name = name;
	};

	print(){
		console.log('One!');
	};
};

class Two extends One {
	print(){
		super.print();
		console.log('TWO!');
	};
};

let oone = new One('первый');
let twoo = new Two('второй');
