// filter
//
// metoden loppar igenom en array med en funktion som argument
// den filterar bort alla element som inte uppfyller funktionens villkor


const numbers = [9, 25, 64, 256]

const isNine = (number) => number === 9

console.log(numbers.filter(isNine)) //9

const isNotNine = (number) => number !== 9

console.log(numbers.filter(isNotNine)) //25, 64, 256