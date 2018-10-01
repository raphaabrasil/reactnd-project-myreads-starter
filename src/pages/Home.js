import React, { Component } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Bookshelf from '../components/bookshelf/Bookshelf'
import Book from '../components/book/Book'
import Header from '../components/header/Header'

class Home extends Component {
  state = {
    tab: 0,
  }

  static propTypes = {
    updateBook: PropTypes.func.isRequired,
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired,
  }

  handleTabChange = (event, tab) => {
    this.setState({ tab })
  }

  render() {
    const { tab } = this.state
    const { updateBook, currentlyReading, wantToRead, read } = this.props

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
            <Tab label="To Read" />
            <Tab label="Reading" />
            <Tab label="Read" />
          </Tabs>
        </Header>
        <div className="list-books-content">
          <div>
            { tab === 0 &&
              <Bookshelf>
                { wantToRead.map( book => (
                  <Book
                    key={ book.id }
                    book={ book }
                    updateBook={ updateBook }
                  />
                ))}
              </Bookshelf>
            }
            { tab === 1 &&
              <Bookshelf>
                { currentlyReading.map( book => (
                  <Book
                    key={ book.id }
                    book={ book }
                    updateBook={ updateBook }
                  />
                ))}
              </Bookshelf>
            }
            { tab === 2 &&
              <Bookshelf>
                { read.map( book => (
                  <Book
                    key={ book.id }
                    book={ book }
                    updateBook={ updateBook }
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
