import React, { Component } from 'react'

import './bookshelf.css'

class Bookshelf extends Component {
  render() {
    const { children } = this.props

    return (
      <div className="bookshelf">
        <ol className="bookshelf__books-container">
          { children.map((book, idx) => (
            (<li key={idx}>{book}</li>)
          ))}
        </ol>
      </div>
    )
  }
}

export default Bookshelf
