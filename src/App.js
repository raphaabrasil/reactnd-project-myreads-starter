import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './api/BooksAPI'
import Home from './pages/Home'
import Search from './pages/Search'
import CircularProgress from '@material-ui/core/CircularProgress'
import './App.css'

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    loading: false,
  }

  updateShelves = (wantToRead = [], currentlyReading = [], read = []) => {
    this.setState({ wantToRead, currentlyReading, read, loading: false })
  }

  updateBook = ( book, newShelf ) => {
    this.setState({ loading: true })
    BooksAPI.update(book, newShelf).then( response => {
      const oldShelf = book.shelf
      book.shelf = newShelf
      if (oldShelf) {
        this.setState( state => ({
          ...state,
          [oldShelf] : state[oldShelf].filter( b => b.id !== book.id),
          [newShelf] : [...state[newShelf], book],
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

  render() {
    const { currentlyReading, wantToRead, read, loading } = this.state

    return (
      <div className="app">
        { loading && (
          <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%' }} size={80} color="primary" />
        )}
        <Route exact path='/' render={() => (
          <Home
            updateShelves={ this.updateShelves }
            updateBook={ this.updateBook }
            currentlyReading={ currentlyReading }
            wantToRead= { wantToRead }
            read={ read }
          />
        )} />
        <Route exact path='/search' render={() => (
          <Search
            updateBook={ this.updateBook }
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
