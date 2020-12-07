// map
//
// metoden loppar igenom en array med en funktion som argument
// den modifierar varje element enligt funktionens villkor.


const numbers = [9, 25, 64, 256]

const getSquareRoot = (number) => Math.sqrt(number)

console.log(numbers.map(getSquareRoot)) //3, 5, 8, 16