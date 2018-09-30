import  React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import {default as SearchIcon} from '@material-ui/icons/Search'
import Loader from '../components/loader/Loader'
import PropTypes from 'prop-types'
import Header from '../components/header/Header'
import Bookshelf from '../components/bookshelf/Bookshelf'
import Book from '../components/book/Book'
import * as BooksAPI from '../api/BooksAPI'
import './search.css'

class Search extends Component {
  state = {
    books: [],
    loading: true,
  }

  static propTypes = {
    updateBook: PropTypes.func.isRequired,
  }

  componentDidMount() {
    BooksAPI.getAll().then( books => {
      this.setState({ books, loading: false })
    })
  }

  performSearch = e => {
    this.setState({ loading: true })
    BooksAPI.search(e.target.value).then( books => {
      ( books && books.error ) ? this.setState({ books: [] }) : this.setState({ books })
      this.setState({ loading: false })
    })
  }

  render() {
    const { books, loading } = this.state

    let content
    if ( books && books.length ) {
      content = (
        <Bookshelf>
          { books.map( book => (
            <Book
              key={ book.id }
              updateBook={ this.props.updateBook }
              book={ book }
            />
          ))}
        </Bookshelf>
      )
    } else if ( books && !books.length) {
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
            onChange={this.performSearch}
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
          { loading ? (<Loader type="default" />) : content }
        </div>
      </div>
    )
  }
}

export default Search
