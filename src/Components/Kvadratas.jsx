import Bebras from "./Bebras";

// Komponentas
function Kvadratas(props) {
    return (
        <div className="kvadratas">
            {/* <span>{props.bebras}</span> */}
            <Bebras bebras = {props.bebras}/>

        </div>
    );
}
export default Kvadratas;