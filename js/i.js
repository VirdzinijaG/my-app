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


// sukurto elemto div idejimas i html div'a
const root = document.querySelector('#root') // surastas elementas su id
root.appendChild(createDiv()); // i elementa idedamas naujas sukuratas elementas (div'as)

//  funkcija su string'o argumentu, kuris patampa tekstu sukurto div'o viduje
const createDivText = (text) => {
    const element = document.createElement('DIV');
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;
}

root.appendChild(createDivText('Valio')); // idedmas tekstas i div'a


// sugeneruoti tris div'us, ir i kiekviena div'a paimamas tekstas is masyvo
const data = ['Labas', 'pats', 'tu labas'];

// let html = "";
// for (let i = 0; i <= data.length; i++) {
//     console.log(data[i]);
//     html +=data[i];
// }
// document.getElementById('root').innerHTML += html;

const data2 = new Set(['Labas', 'pats', 'tu labas']);

const data3 = new Map([
    ['viens', 'Labas'],
    ['du', 'pats'],
    ['trys', 'tu labas']
]);

const data4 = {
    viens: 'Labas',
    du: 'pats',
    trys: 'tu labas'
}

console.log(data4);





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