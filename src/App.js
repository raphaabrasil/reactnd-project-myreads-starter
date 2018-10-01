import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './api/BooksAPI'
import Home from './pages/Home'
import Search from './pages/Search'
import Loader from './components/loader/Loader'
import './App.css'

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
		searchedBooks: [],
    loading: false,
  }


	async mountShelves() {
		this.setState({ loading: true })
		const books = await BooksAPI.getAll()
		const filter_books = ( books, shelf ) => books.filter( b => b.shelf === shelf )
		const filterBy = ( books, shelf ) => filter_books( books, shelf )
    const wantToRead = filterBy(books, 'wantToRead')
    const currentlyReading = filterBy(books, 'currentlyReading')
    const read = filterBy(books, 'read')

		this.setState({ wantToRead, currentlyReading, read, loading: false })
	}

	getAll = () => {
		this.setState({ loading: true })
    BooksAPI.getAll().then( books => {
      this.setState({ searchedBooks: books, loading: false })
    })
	}

  updateBook = ( book, newShelf ) => {
    this.setState({ loading: true })
    BooksAPI.update(book, newShelf).then( response => {
      const oldShelf = book.shelf
      book.shelf = newShelf
      if (oldShelf !== 'none' && newShelf !== 'none') {
        this.setState( state => ({
          ...state,
          [oldShelf] : state[oldShelf].filter( b => b.id !== book.id),
          [newShelf] : [...state[newShelf], book],
        }))
      } else if (oldShelf && newShelf === 'none') {
         this.setState( state => ({
          ...state,
          [oldShelf] : state[oldShelf].filter( b => b.id !== book.id),
        }))

      } else {
        this.setState( state => ({
          ...state,
          [newShelf] : [...state[newShelf], book],
        }))
      }
      this.setState({ loading: false })
    })
	}

	performSearch = e => {
    this.setState({ loading: true })

    BooksAPI.search(e.target.value).then( books => {
			if ( !books || books.error ) {
				this.setState({ searchedBooks: [] })
			} else {
				books.map( book => book.shelf = this.getBookShelf(book.id))
				this.setState({ searchedBooks: books })
			}
		  this.setState({ loading: false })
		})
	}

	getBookShelf = book_id => {
		const filter = shelf => this.state[shelf].filter( book => book.id === book_id)
		let found

		found = filter('wantToRead')
		if (found.length) return 'wantToRead'
		found = filter('currentlyReading')
		if (found.length) return 'currentlyReading'
		found = filter('read')
		if (found.length) return 'read'
		return 'none'
	}

	async componentDidMount() {
		await this.mountShelves()
	}

  render() {
    const { searchedBooks, currentlyReading, wantToRead, read, loading } = this.state

    return (
      <div className="app">
        { loading && (
          <Loader type="full" />
        )}

        <Route exact path="/" render={() => (
          <Home
            updateBook={ this.updateBook }
            currentlyReading={ currentlyReading }
            wantToRead= { wantToRead }
            read={ read }
          />
        )} />
        <Route exact path="/search" render={() => (
          <Search
						getAll={ this.getAll }
						updateBook={ this.updateBook }
						performSearch={ this.performSearch }
						searchedBooks={ searchedBooks }
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
