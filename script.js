function convertToRoman(num) {
    // Define the Roman numeral symbols and their corresponding values
    const romanSymbols = [
        ['M', 1000],
        ['CM', 900], // Special cases for subtractive notation
        ['D', 500],
        ['CD', 400], // Special cases for subtractive notation
        ['C', 100],
        ['XC', 90],  // Special cases for subtractive notation
        ['L', 50],
        ['XL', 40],  // Special cases for subtractive notation
        ['X', 10],
        ['IX', 9],   // Special cases for subtractive notation
        ['V', 5],
        ['IV', 4],   // Special cases for subtractive notation
        ['I', 1]
    ];

    let result = ''; // Initialize the result string

    // Iterate through the Roman symbols
    for (const [symbol, value] of romanSymbols) {
        // Append the symbol while the number is greater than or equal to the value
        while (num >= value) {
            result += symbol; // Append the symbol to the result
            num -= value;      // Subtract the value from the number
        }
    }

    return result; // Return the final Roman numeral
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
