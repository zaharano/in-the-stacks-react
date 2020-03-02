import React, { Component } from 'react';
import BookCard from './BookCard'
import './BookShelf.css';

// move default data into a defaultProps section here
class BookShelf extends Component {
    render() {
        return (
            <div className="BookShelf">
                {this.props.lib.map((book) => (
                    <BookCard 
                        key={book.id}
                        title={book.title} 
                        author={book.author}
                        numPages={book.numPages}
                        read={book.read} 
                    />
                ))}
            </div>
        )
    }
}

export default BookShelf;