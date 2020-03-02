import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  render() {
    const showHideClass = this.props.show ? 'overlay' : 'hide';

    return (
      <div className={showHideClass}>
        <section className="container">{this.props.children}</section>
      </div>
    );
  }
}

export default Modal;
