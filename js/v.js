const createDiv = () => document.createElement('DIV'); // sukurtas div'as

const createDivText = (text) => { // teksto sukurimas sukurtame div'e
    const element = document.createElement('DIV');
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;
}

const root = document.querySelector(`#root`) // surandamas div'as pagal id

root.appendChild(createDivText('Labas')) // idedamas norimas tekstas

//sukurti 5 div'ai su tekstu viduje is masyvo
const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];

// funkcija, kuri panaudoja css stiliu elementui
const addClass = (element, className) => element.classList.add(className)

animals.forEach(animal => {
    const div = createDivText(animal) // elemento sukurimas
    addClass(div, 'grozis')
    root.appendChild(div) // pridedamas elementas i root div'a
})

