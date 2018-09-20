import  React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import {default as SearchIcon} from '@material-ui/icons/Search'
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

  performSearch = e => {
    this.setState({ loading: true })
    BooksAPI.search(e.target.value).then( books => {
      books.error ? this.setState({ books: [] }) : this.setState({ books })
      this.setState({ ...this.state, loading: false })
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="search-books">
        <div className="list-books-header">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        </div>
        <TextField
          id="input-with-icon-textfield"
          label="TextField"
          style={{ padding: '60px 120px 0' }}
          placeholder="Search by title or author"
          fullWidth
          onChange={this.performSearch}
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
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
