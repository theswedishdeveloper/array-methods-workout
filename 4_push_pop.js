// push & pop
//
// metoden tar emot ett argument och lägger till det i en array

const things = ['car', 'house', 'castle', 'bridge', 'tree']

console.log(things) //car, house, castle, bridge, tree

things.push("boat")

console.log(things) //car, house, castle, bridge, tree, boat

// pop
//
// metoden retunerar elementet med högst index
// samt raderar element ur arrayen.

const things2 = ['car', 'house', 'castle', 'bridge', 'tree']

console.log(things2.pop()) //tree

console.log(things2.pop()) //bridge
