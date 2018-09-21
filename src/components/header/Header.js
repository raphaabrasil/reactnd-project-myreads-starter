import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

class Header extends Component {
  render() {
    const subHeader = this.props.children

    return (
      <header className="header-bar">
        <div className="header-bar__title">
          <h1><Link to="/">MyReads</Link></h1>
        </div>
        { subHeader }
      </header>
    )
  }
}

export default Header
