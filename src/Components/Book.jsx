

function Book(props) {

    return (
        <div className="book"> Knygų sąrašas
            <div className="author">Autorius {props.data.author}</div>
            <div className="title">{props.data.title}</div>
            <img src={props.data.img} alt="#" />
            <div className="price">{props.data.price} Eur</div>
            <button className="buy">Pirkti</button>
        </div>
    )
}

export default Book;