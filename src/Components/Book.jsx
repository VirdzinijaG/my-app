import '../books.css';

function Book(props) {

    return (
        <div className="book">
            <div className="author">Autorius {props.data.author}</div>
            <div className="title">{props.data.title}</div>
            <img src={props.data.img} alt="#" />
            <div className="price">Kaina {props.data.price} Eur
                <button className="buy" onClick={() => props.delete(props.data.id)}>Pirkti</button>
            </div>
        </div>
    )
}

export default Book;