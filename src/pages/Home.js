import React, { Component } from 'react'
import { Link } from  'react-router-dom'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Bookshelf from '../components/bookshelf/Bookshelf'
import Book from '../components/book/Book'
import Header from '../components/header/Header'

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
            { tab == 0 &&
              <Bookshelf>
                <Book />
                <Book />
              </Bookshelf>
            }
            { tab == 1 &&
              <Bookshelf>
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
              <Bookshelf>
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
