(function(){
		window.filterByType = function () {
		const argsArr = Array.prototype.slice.call(arguments);
		let filterType = typeof argsArr[0];

		if (Number.isNaN(argsArr[0])) {
			filterType = NaN;
		}

		if (argsArr[0] == undefined) {
			filterType = toString.call(argsArr[0]);
		}

		if (filterType == 'object') {
			filterType = toString.call(argsArr[0]);
		}


		console.log(filterType);
		argsArr.shift();

		const filteredArr = argsArr.filter(function(item) {
			if (filterType == '[object Null]' && item !== undefined) {
				return item == null;
			}
			if (filterType == '[object Object]' && item !== null && !Array.isArray(item)) {
				return typeof item == 'object'
			}
			if (filterType == '[object Array]' && Array.isArray(item)) {
				return typeof item == 'object'
			}
			if (filterType == '[object Undefined]') {
				return toString.call(item) == filterType 
			}
			if (Number.isNaN(filterType)) {
				return Number.isNaN(item)
			}
			return typeof item === filterType && !Number.isNaN(item)
		});
		return filteredArr
	}
})();

console.log(filterByType(1, 10,undefined, 20, 'a', 'b', {}, [true], NaN, false, null,{}, NaN, undefined ));