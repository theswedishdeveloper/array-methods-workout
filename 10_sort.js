// sort
//
// metoden sorterar en array
// om du mattar in en funktion som array i sort metoden
// kommer den sorterar enligt din sorterings logik.

let numbers = [25, 5, 3, 355]

//sorterar i storleksordning
numbers.sort((number1, number2) => number1 - number2);

console.log(numbers) // 3, 5, 25, 355