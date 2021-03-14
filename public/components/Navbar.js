import { Link } from 'gatsby'
import React, { Component } from 'react'


export class Navbar extends Component {
  render() {
    return (
     
    <div className="navbar">
       <div className="container">
      <h1 className="logo">Logo Name</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
    </div>
    )
  }
}

export default Navbar
