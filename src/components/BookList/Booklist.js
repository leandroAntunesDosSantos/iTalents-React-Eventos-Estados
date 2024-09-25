import Book from '../Book/Book';
import './Booklist.css';
import book from '../DBbooks/DBbooks';
import Promotion from '../Promotion/Promotion';
import FormInput from '../FormInput/FormInput';
import { useState } from 'react';


export default function BookList() {
  
  const [books, setBooks] = useState(book);

  function handleSubmit(event) {
    event.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const imagem = document.getElementById('imagem').value;
    const alt = document.getElementById('alt').value;
    const newBook = {
      id: books.length + 1,
      titulo,
      autor,
      imagem,
      alt
    };
    setBooks([...books, newBook]);
    document.getElementById('titulo').value = '';
    document.getElementById('autor').value = '';
    document.getElementById('imagem').value = '';
    document.getElementById('alt').value = '';
  }
  
    return (
    <main id="books" className="container">
      <Promotion>
          Aproveite a nossa promoção de livros com até 50% de desconto!
          </Promotion>
          <form className='form'>
            <h2>Adicione um novo livro</h2>
            <FormInput type='titulo' placeholder='Digite o título do livro' id='titulo'/>
            <FormInput type='autor' placeholder='Digite o nome do autor' id='autor' />
            <FormInput type='imagem' placeholder='Digite a URL da imagem' name = 'imagem' id='imagem'/> 
            <FormInput type='alt' placeholder='Digite a descrição da imagem' name = 'alt' id='alt'/>
            <button type='submit' className='btn' onClick={handleSubmit}>Adicionar</button>
          </form>
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



