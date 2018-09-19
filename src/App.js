import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Home from './pages/Home'
import Search from './pages/Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Home />
        )} />
        <Route exact path='/search' render={() => (
          <Search />
        )} />
      </div>
    )
  }
}

export default BooksApp
