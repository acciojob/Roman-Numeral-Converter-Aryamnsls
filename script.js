function convertToRoman(num){
const romanMap  = [
	['M', 1000],
	['D', 500],
	['CM', 900],
	['CD', 400],
	['L', 50],
	['XC', 90],
	['XL', 40],
	['X', 10],
	['IX', 9],
	['V', 5],
	['IV', 4],
	['I', 1]
];
	let result = "";
	for(let i = 0; i<romanMap.length(); i++){
		const[symbol, value] = romanMap[i];
		// Check the conditon that 
		while (num>=value) {
			result += symbol;
			num -= value;
		}
}
	return result;
}
module.exports = convertToRoman;