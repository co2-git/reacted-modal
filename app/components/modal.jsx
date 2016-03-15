'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Stylesheet, MediaQuery } from 'cassis';

class Modal extends React.Component {

  view;

  css = {
    'modal' : new Stylesheet(`
      .reacted-modal {
        position : absolute;
        top : 0;
        height : 100vh;
        left : 0;
        right : 0;
        background : rgba(0, 0, 0, .6);
      }

      .reacted-modal--hidden {
        top : -99999px
      }
    `),

    box : new Stylesheet(`.reacted-modal-box {
      position : absolute;
      border : 5px solid black;
      background : #fff;
      top : 25%;
      left : 25%;
      right : 25%;
      bottom : 25%;
      z-index : 999;
    }`)
  };

  style = document.querySelector('#cassis-style');

  componentDidMount() {
    this.view = ReactDOM.findDOMNode(this.refs.view);

    if ( ! this.style ) {
      this.style = document.createElement('style');
      this.style.setAttribute('id', 'cassis-style');
      this.style.appendChild(document.createTextNode([
        this.css.modal.toString(),
        this.css.box.toString()
      ].join('\n')));

      document.body.appendChild(this.style);
    }
  }

  toggle (e) {
    this.props.toggle(e);
  }

  blockToggle (e) {
    e.stopPropagation();
  }

  render () {
    let show = false;

    if ( ( 'show' in this.props ) ) {
      show = this.props.show;
    }

    const classes = ['reacted-modal'];

    if ( ! show ) {
      classes.push('reacted-modal--hidden');
    }

    return (
      <div ref="view" className={ classes.join(' ') } onClick={::this.toggle}>
        <div className="reacted-modal-box" onClick={::this.blockToggle}>
          <h1>Hey!</h1>
        </div>
      </div>
    );
  }
}

export default Modal;
