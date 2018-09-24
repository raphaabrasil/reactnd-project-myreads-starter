import React, { Component } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Bookshelf from '../components/bookshelf/Bookshelf'
import Book from '../components/book/Book'
import Header from '../components/header/Header'
import CircularProgress from '@material-ui/core/CircularProgress'
import * as BooksAPI from '../api/BooksAPI'

class Home extends Component {
  state = {
    tab: 0,
    reading: [],
    toRead: [],
    read: [],
    loading: true,
  }

  componentDidMount() {
    BooksAPI.getAll().then( books => {
      const toRead = books.filter( book => book.shelf === 'wantToRead')
      const reading = books.filter( book => book.shelf === 'currentlyReading')
      const read = books.filter( book => book.shelf === 'read')
      this.setState({ toRead, reading, read, loading: false })
    })
  }

  handleTabChange = (event, tab) => {
    this.setState({ tab })
  }

  render() {
    const { tab, loading, reading, toRead, read } = this.state;

    return (
      <div className="list-books">
        <Header>
          <Tabs
            value={ tab }
            onChange={ this.handleTabChange }
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="To Read" to="/search" />
            <Tab label="Reading" />
            <Tab label="Read" />
          </Tabs>
        </Header>
        <div className="list-books-content">
          <div>
            { loading && (
              <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%' }} size={80} color="primary" />
            )}
            { tab === 0 &&
              <Bookshelf>
                { toRead.map( book => (
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
            }
            { tab === 1 &&
              <Bookshelf>
                { reading.map( book => (
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
            }
            { tab === 2 &&
              <Bookshelf>
                { read.map( book => (
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
            }
          </div>
        </div>
        <Link to="/search">
          <Button variant="fab" className="bottom-button" color="primary" aria-label="Add">
            <AddIcon />
          </Button>
        </Link>
      </div>
    )
  }
}

export default Home
