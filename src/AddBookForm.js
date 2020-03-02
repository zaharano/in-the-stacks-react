import React, { Component } from 'react';
import './AddBookForm.css';

// have to add requirements - can't rely on HTML required in React it seems

class AddBookForm extends Component {
  state = {
    title: '',
    author: '',
    numPages: '',
    read: true,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
      title: '',
      author: '',
      numPages: '',
      read: true,
    });
    this.props.close();
  };

  handleCancel = e => {
    e.preventDefault();
    this.props.close();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleReadChange = e => {
    this.setState(state => {
      return { read: !state.read };
    });
  };

  render() {
    return (
      <div className="Add-book">
        <h1>Add a Book</h1>
        <form id="new">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            required
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={this.state.author}
            required
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="numPages"
            placeholder="Pages"
            value={this.state.numPages}
            required
            onChange={this.handleChange}
          />
          <label htmlFor="yep">
            <input
              type="checkbox"
              name="read"
              id="yep"
              checked={this.state.read}
              onChange={this.handleReadChange}
            />
            Read{' '}
          </label>
          <fieldset>
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
            <button onClick={this.handleCancel} className="cancel">
              Cancel
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddBookForm;
