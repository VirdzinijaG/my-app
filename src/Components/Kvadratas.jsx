import Bebras from "./Bebras";

// Komponentas
function Kvadratas(props) {
    if ('Brigadininkas' === props.bebras) {
        return (
            <div className="kvadratas br">
           <b> <Bebras bebras = {props.bebras}/> </b>

        </div>
    );
    }
    return (
        <div className="kvadratas">
            {/* <span>{props.bebras}</span> */}
            <Bebras bebras = {props.bebras}/>

        </div>
    );
}
export default Kvadratas;