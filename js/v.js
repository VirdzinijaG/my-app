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

animals.forEach(animal => {
    const div = createDivText(animal) // elemento sukurimas
    root.appendChild(div) // pridedamas elementas i root div'a
})