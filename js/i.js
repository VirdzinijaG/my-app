const createDiv = () => document.createElement('DIV');

const createDivText = (text) => {
    const element = document.createElement('DIV');
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;
}

const data = ['Labas', 'pats', 'tu labas'];

const root = document.querySelector('#root');

root.appendChild(createDivText("Valio"));

// function createDivOld1() {
//     const div = document.createElement('DIV');
//     return div;

// }

// const createDivOld2 = () => {
//     const div = document.createElement('DIV');
//     return div;

// }