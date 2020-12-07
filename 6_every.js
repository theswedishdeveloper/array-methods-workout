// every
//
// metoden söker igenom en array med en funktion som argument
// den retunerar TRUE om alla element uppfyller funktionens villkor!

const ages = [5, 10, 15, 20, 25, 30]

const checkAdult = (age) => age >= 18

console.log(ages.every(checkAdult)) //false