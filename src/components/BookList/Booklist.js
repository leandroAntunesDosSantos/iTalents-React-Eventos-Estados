import Book from '../Book/Book';
import './Booklist.css';
import books from '../DBbooks/DBbooks';
import Promotion from '../Promotion/Promotion';

export default function BookList() {
  
    return (
    <main id="books" className="container">
      <Promotion>
          Aproveite a nossa promoção de livros com até 50% de desconto!
          </Promotion>
          <ul className="book-cards mb20 mt20">
          {
            books.map((book) => (
              <Book
                key={book.id}
                titulo={book.titulo}
                autor={book.autor}
                imagem={book.imagem}
                alt={book.alt}
            />
          ))}
          </ul>
        
    </main>
    );
}



