import Button from '../Button/Button';
import './Book.css';

export default function Book(props) {
    return (
        <li className="book-card">
            <div>
                <img src={props.imagem} alt={props.alt} />
            </div>
            <div className="book-info">
                <h2>{props.titulo}</h2>
                <p>{props.autor}</p>
                <Button className="btn-buy">Comprar</Button>
            </div>
        </li>
    );
}

