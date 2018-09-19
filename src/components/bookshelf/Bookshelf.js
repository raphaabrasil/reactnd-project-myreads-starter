import React, { Component } from 'react'

class Bookshelf extends Component {
  render() {
    const { children } = this.props

    return (
      <div className="bookshelf">
        <div className="bookshelf-books">
          <ol className="books-grid">
            { children.map((book, idx) => (
              (<li key={idx}>{book}</li>)
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
