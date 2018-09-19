import React, { Component } from 'react'
import { Link } from  'react-router-dom'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Bookshelf from '../components/bookshelf/Bookshelf'
import Book from '../components/book/Book'

class Home extends Component {
  state = {
    tab: 0
  }

  handleTabChange = (event, tab) => {
    this.setState({ tab })
  }

  render() {
    const { tab } = this.state;

    return(
      <div className="list-books">
        <div className="list-books-header">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
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
        </div>
        <div className="list-books-content">
          <div>
            { tab == 0 &&
              <Bookshelf title='To Read'>
                <Book />
                <Book />
              </Bookshelf>
            }
            { tab == 1 &&
              <Bookshelf title='Reading'>
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
              </Bookshelf>
            }
            { tab == 2 &&
              <Bookshelf title='Read'>
                <Book />
                <Book />
              </Bookshelf>
            }
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
