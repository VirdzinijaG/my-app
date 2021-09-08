const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];


// animals.forEach(element => console.log(element));

// console.log(animals);
// const sort = animals.sort((a,b) => b.length - a.length);
// console.log(sort);

animals.forEach((value, index, komoda) => console.log(value, index, komoda));

console.log(animals.slice());
animals.sort((a, b) => b.length - a.length)
console.log(animals);


const V = 'Varle';

const niceSentence = 'Ruda ' + V + ' plaukia greitai';

console.log(niceSentence);


animals.map((value, index) => console.log(`stalcius nr ${index} jame guli ${value}`))