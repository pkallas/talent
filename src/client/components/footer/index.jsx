import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar-fixed-bottom footer" >
          <p>Hi</p>
        </Navbar>
      </div>
    );
  }
}