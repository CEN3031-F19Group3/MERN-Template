import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.css';  

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">CareKeeper</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          
        </ul>
        </div>
      </nav>
    );
  }
}
