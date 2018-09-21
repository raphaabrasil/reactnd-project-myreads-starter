import React, { Component } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
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
