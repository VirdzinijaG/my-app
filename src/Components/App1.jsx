import Component from './Component';
import Stalas from './Stalas';

function App(props) {
    return (
        <>
            <Component per={props.per} name={"Labas "} surname={"Petraiti"} />
            <Stalas per={props.per} name={"Labas "} surname={"Petraiti"} />
        </>
    );
}

export default App;