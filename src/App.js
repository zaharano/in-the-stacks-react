import React, { Component } from 'react';
import Modal from './Modal';
import AddBookForm from './AddBookForm';
import BookCard from './BookCard';

import myLibrary from './LibFind';

import { v4 as uuidv4 } from 'uuid';

import './App.css';

// removed Bookshelf because of the addBook/removeBook/toggleRead funcs
// issues with downstream to the modal/form, and passing funcs two levels
// there's def a better way to
// do this once data handling is separated from the components more,
// have to learn about that

// add in save to localstorage

class App extends Component {
  state = {
    showForm: false,
    library: [...myLibrary],
  };

  addBook = book => {
    const library = this.state.library.concat([
      {
        ...book,
        id: uuidv4(),
      },
    ]);
    this.setState({ library });
    setTimeout(this.libUpdate, 200);
  };

  removeBook = id => {
    for (const [i, book] of this.state.library.entries()) {
      if (book.id === id) {
        console.log('matched');
        const library = this.state.library
          .slice(0, i)
          .concat(this.state.library.slice(i + 1));
        this.setState({ library });
        break;
      }
    }
    setTimeout(this.libUpdate, 200);
  };

  toggleRead = id => {
    this.setState(st => {
      const library = st.library.map(book => {
        if (book.id === id) {
          return { ...book, read: !book.read };
        } else {
          return book;
        }
      });
      return { library };
    });
    setTimeout(this.libUpdate, 200);
  };

  libUpdate = () => {
    localStorage.setItem('myLibrary', JSON.stringify(this.state.library));
  };

  showModal = () => {
    this.setState({ showForm: true });
  };

  hideModal = () => {
    this.setState({ showForm: false });
  };

  render() {
    return (
      <div className="container">
        <Modal show={this.state.showForm}>
          <AddBookForm add={this.addBook} close={this.hideModal} />
        </Modal>
        <header className="App-header">
          <h1>My Library</h1>
          <button
            className="btn-primary"
            type="button"
            onClick={this.showModal}
          >
            Add Book
          </button>
        </header>
        <div className="BookShelf">
          {this.state.library.map(book => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              numPages={book.numPages}
              read={book.read}
              remove={this.removeBook}
              toggle={this.toggleRead}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

// {/* <div class="container">
//       <h1>&nbsp; My Library &nbsp;</h1>
//       <button id="add-book">Add a Book</button>
//       <div id="book-container"></div>
//     </div> */}
