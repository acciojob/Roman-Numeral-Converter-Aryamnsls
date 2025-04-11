function convertToRoman(num) {
  // Full Roman numeral map including subtractive notations
  const romanMap = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = "";

  for (let i = 0; i < romanMap.length; i++) {
    const [symbol, value] = romanMap[i];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// Uncomment the below line to test
// console.log(convertToRoman(36)); // Output: XXXVI

// do not edit below this line
module.exports = convertToRoman;
