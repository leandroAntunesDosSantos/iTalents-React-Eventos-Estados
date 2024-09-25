import logoImg from '../../images/lovelace00.png';
import './Header.css';

export default function Header() {
    return (
        <header className="container mt20">
            <div className="logo">
                <img src={logoImg} alt="Ada Lovelace" />
                
            </div>
            <div className='bookstore-name'>
                <h1>Livraria Lovelace</h1>
            </div>
        </header>
    );
}