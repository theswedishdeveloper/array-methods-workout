// includes
//
// metoden söker igenom en array med en funktion som argument
// den retunerar TRUE om något element uppfyller funktionens villkor!

const ages = [5, 10, 15, 20, 25, 30]

const checkAdult = (age) => age >= 18

console.log(ages.some(checkAdult)) //true

const checkPensioner = (age) => age >= 65

console.log(ages.some(checkPensioner)) //false