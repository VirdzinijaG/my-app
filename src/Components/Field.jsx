import Letter from './Letter';


// function Field({ letters, theme }) {
// console.log(letters);
function Field({ letters }) {
    return (
        <>
            <div className='field'>
                {/* {letters.map(l => console.log(l))} */}
                {/* {letters.map((l, i) => <Letter key={i} letter={l} theme={theme}></Letter>)} */}
                {letters.map((l, i) => <Letter key={i} letter={l}></Letter>)}
            </div>
        </>
    )
}
export default Field;