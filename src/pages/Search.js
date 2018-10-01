import  React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import {default as SearchIcon} from '@material-ui/icons/Search'
import PropTypes from 'prop-types'
import Header from '../components/header/Header'
import Bookshelf from '../components/bookshelf/Bookshelf'
import Book from '../components/book/Book'
import './search.css'

class Search extends Component {
  static propTypes = {
    updateBook: PropTypes.func.isRequired,
    getAll: PropTypes.func.isRequired,
    performSearch: PropTypes.func.isRequired,
    searchedBooks: PropTypes.array.isRequired,
  }

  componentDidMount() {
    this.props.getAll()
  }

  render() {
    const { performSearch, updateBook, searchedBooks } = this.props

    let content
    if ( searchedBooks && searchedBooks.length ) {
      content = (
        <Bookshelf>
          { searchedBooks.map( book => (
            <Book
              key={ book.id }
              updateBook={ updateBook }
              book={ book }
            />
          ))}
        </Bookshelf>
      )
    } else if ( searchedBooks && !searchedBooks.length) {
      content = <h1>Coudn't find any book matching this search :(</h1>
    } else {
      content = <h1>Don't know what to read? What about 'Javascript'? :)</h1>
    }

    return (
      <div className="search">
        <Header hasBackButton>
          <div className="search__bar">
          <TextField
            placeholder="Search by title or author"
            fullWidth
            onChange={ performSearch }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          </div>
        </Header>
        <div className="search__results">
          { content }
        </div>
      </div>
    )
  }
}

export default Search
