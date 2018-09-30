import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import './book.css'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func,
  }

  render() {
    const { book, updateBook } = this.props
    const coverPlaceholder = 'https://i1.wp.com/inasmuchas.org/wp-content/uploads/2013/10/PLACEHOLDER.jpg?resize=178%2C178'
    return (
      <Card className="book">
        <CardMedia
          component="img"
          className="book__cover"
          image={ book.imageLinks ? book.imageLinks.thumbnail : coverPlaceholder }
          title={ book.title }
        />
        <div className="book__description">
          <CardContent>
            <Typography variant="headline" component="h2">
              { book.title }
            </Typography>
            { book.subtitle && (
              <Typography variant="subheading" component="h3">
                { book.subtitle }
              </Typography>
            )}
            { book.authors && (
              <Typography paragraph component="p" className="book__authors">
                { book.authors.map( (author, idx) => (
                  idx === 0 ? author :  `, ${author}`
                ))}
              </Typography>
            )}
          </CardContent>
          <CardActions className="book__description__buttons">
            <Button
              color="primary"
              disabled={ book.shelf === 'wantToRead' }
              aria-label="To Read"
              onClick={ () => updateBook(book, 'wantToRead') }
            >
              To Read
            </Button>
            <Button
              color="primary"
              disabled={ book.shelf === 'currentlyReading'}
              aria-label="Reading"
              onClick={ () => updateBook(book, 'currentlyReading') }
            >
              Reading
            </Button>
            <Button
              color="primary"
              disabled={ book.shelf === 'read' }
              aria-label="Already Read"
              onClick={ () => updateBook(book, 'read') }
            >
              Read
            </Button>
          </CardActions>
        </div>
      </Card>
    )
  }
}

export default Book
