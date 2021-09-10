import Kvadratas from './Kvadratas';

const data = ['Rudasis', 'Juodasis', 'Brigadininkas']

function App() {
    return (<>
        {data.map((b, i) => <Kvadratas key={i} bebras={b} />)}
    </>); // i masyvo indeksai
    }
export default App;


// pries tai naudotas return vietoj data
   {/* <Kvadratas bebras = {'Rudasis'}/> 
           <Kvadratas bebras = {'Juodasis'}/> 
           <Kvadratas bebras = {'Brigadininkas'}/>  */}