const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];


// animals.forEach(element => console.log(element));

// console.log(animals);
// const sort = animals.sort((a,b) => b.length - a.length);
// console.log(sort);

// animals.forEach((value, index, komoda) => console.log(value, index, komoda));

// animals.sort((a, b) => b.length - a.length)

//rusiavimas

let c = 0; // c rodys kiek kartu lyginami zodziai
console.log(animals.slice()); // slice kopija pries rusiavima
animals.sort((a, b) => {
    // console.log(++c, a, b);
   return  b.length - a.length
})
console.log(animals);


const V = 'Varle';

const niceSentence = 'Ruda ' + V + ' plaukia greitai plaukia greitai plaukia greitai plaukia greitai plaukia greitai plaukia greitai';
const niceSentence1 = `Ruda ${V} plaukia greitai ${V} plaukia greitai
 plaukia greitai ${V} plaukia greitai ${V} plaukia 
 greitai ${V} plaukia greitai `;
 // ${} nurodoma kad tai yra kintamasis


console.log(niceSentence1);


// animals.map((value, index) => console.log(`stalcius nr ${index} jame guli ${value}`))