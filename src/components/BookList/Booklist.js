import Book from '../Book/Book';
import './Booklist.css';
import Promotion from '../Promotion/Promotion';
import FormInput from '../FormInput/FormInput';
import DBbooks from '../DBbooks/DBbooks';
import {useState } from 'react';
//import { useEffect } from 'react';

export default function BookList() {
  const [books, setBooks] = useState(DBbooks);

  // <-- requisicao GET caso use um servidor local
  // Pode ser utilizado json-server para simular um servidor local
  //para instalar o json-server, execute o comando npm install -g json-server
  //para rodar o json-server, execute o comando json-server --watch db.json --port 3005
  //Assim ele fara a leitura do arquivo db.json e disponibilizara os dados na porta 3005

  // useEffect(() => {
  //   fetch('http://localhost:3005/books')
  //     .then(response => response.json())
  //     .then(data => setBooks(data))
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }, []); 

  const handleSubmit = async(event) => {
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

    //<-- requisicao POST caso use um servidor local 
    // Pode ser utilizado json-server para simular um servidor local
    //para instalar o json-server, execute o comando npm install -g json-server
    //para rodar o json-server, execute o comando json-server --watch db.json --port 3005
    // assim ele fara a leitura do arquivo db.json e disponibilizara os dados na porta 3005
    
    // const response = await fetch('http://localhost:3005/books', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newBook),
    // })
    // const data = await response.json();
    // setBooks([...books, data]);
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



