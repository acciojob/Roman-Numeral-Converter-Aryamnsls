function convertToRoman(num){
	const romanMap = [ 
	  ['M',1000],
	  ['CM', 900],
      ['D', 500], 
	  ['CD', 400],
      ['C', 100],
		['XC', 90],
      ['L', 50], 
		['XL', 40],
		['IX', 9],
		['IV', 4],
      ['X', 10], 
      ['V', 5], 
      ['I', 1]
	];

	let result = " ";

	for(let i = 0; i<roadMap.length; i++){
		const [symbol, value] = roadMap[i];
		while(num >= value){
           result += symbol;
			num -= value;
		}
	}
	return result;
}

module.export = convertToRoman;