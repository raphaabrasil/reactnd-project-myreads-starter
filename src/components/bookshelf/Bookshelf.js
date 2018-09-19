import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Bookshelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    const { title, children } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ title }</h2>
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
