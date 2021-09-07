// Naujo elemto sukurimas ir jo grazinimas
// div sukurimas
// arrow function
const createDiv = () => document.createElement('DIV');


// // senesne funkcija, veikimas toks pats tik kitokia sintakse
// function createDivOld1() {
//     const div = document.createElement('DIV');
//     return div;
// }

// const createDivOld2 = () => {
//     const div = document.createElement('DIV');
//     return div;
// }

// const createDivOld3 = () => document.createElement('DIV');
// // supaprastintas uzrasymas, galima naudoti tada kai yra viena eilute funkcijoje




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