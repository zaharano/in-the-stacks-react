import React, { Component } from 'react';
import './BookCard.css';

class BookCard extends Component {
  handleEx = e => {
    this.props.remove(this.props.id);
  };

  handleToggle = e => {
    this.props.toggle(this.props.id);
  };

  render() {
    let readPrint = this.props.read ? (
      <button className="read yep" onClick={this.handleToggle}>
        read
      </button>
    ) : (
      <button className="read nope" onClick={this.handleToggle}>
        unread
      </button>
    );
    return (
      <div className="BookCard">
        <button className="remove nope" onClick={this.handleEx}>
          X
        </button>
        <h3>{this.props.title}</h3>
        <p>by {this.props.author}</p>
        <p>{this.props.numPages} pages</p>
        {readPrint}
      </div>
    );
  }
}

export default BookCard;
