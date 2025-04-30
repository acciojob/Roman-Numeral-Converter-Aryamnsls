function convertToRoman(num){
	const romanMap = [ 
	  ['M',1000], 
      ['D', 500], 
      ['C', 100], 
      ['L', 50], 
      ['X', 10], 
      ['V', 5], 
      ['I', 1]
	];

	let result = " ";

	for(let i = 0; i<roadMap.length; i++){
		const [symbol, value] = romanMap[i];
		while(num >= value){
           result += symbol;
			num -= value;
		}
	}
	return result;
}

module.export = convertToRoman;