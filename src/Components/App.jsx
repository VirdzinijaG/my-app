import Field from "./Field";

const letters = ['L', 'a', 'b', 'a', 's']

function App() {
    return (
        <>
            <Field letters={letters}></Field>
            <button className='field-button'>Theme 1</button>
            <button className='field-button'>Theme 2</button>
            <button className='field-button'>Theme 3</button>
        </>
    )
}
export default App;