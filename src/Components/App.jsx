import Mygtukas from "./Mygtukas";

const data = ['Spausk', "Spaudinėk", 'Klikink']

function App() {
    return (<>
        {data.map((b, i) => <Mygtukas key={i} tekstas={b} />)}
    </>); 
    }
export default App;