import React, { Component } from 'react'
import { Link } from  'react-router-dom'
import Bookshelf from '../components/bookshelf/Bookshelf'
import Book from '../components/book/Book'

class Home extends Component {
  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf title='Currently Reading'>
              <Book />
              <Book />
            </Bookshelf>
            <Bookshelf title='Want to Read'>
              <Book />
              <Book />
            </Bookshelf>
            <Bookshelf title='Read'>
              <Book />
              <Book />
              <Book />
            </Bookshelf>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Home
