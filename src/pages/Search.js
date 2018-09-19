import  React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from '../components/bookshelf/Bookshelf'
import Book from '../components/book/Book'
import * as BooksAPI from '../api/BooksAPI'


class Search extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })

  }

  render() {
    const { books } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <Bookshelf>
            { books.map( book => (
              <Book
                key={ book.id }
                title={ book.title }
                subtitle={ book.subtitle }
                description={ book.description }
                authors={ book.authors }
                imageLinks={ book.imageLinks }
                shelf={ book.shelf }
              />
            ))}
          </Bookshelf>
        </div>
      </div>
    )
  }
}

export default Search
