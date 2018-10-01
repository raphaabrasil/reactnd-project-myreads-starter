import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import PropTypes from 'prop-types'
import ReactStars from 'react-stars'
import './book.css'
import coverPlaceholder from './cover_placeholder.jpg'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func,
  }

  getLabel = shelf => {
    if ( shelf === 'wantToRead') {
      return 'To Read'
    } else if ( shelf === 'currentlyReading') {
      return 'Reading'
    }
    return 'Read'
  }

  ratingChanged = (newRating) => {
    localStorage.setItem(`my-reads-rating-${this.props.book.id}`, newRating)
  }

  getRatingValue = ( book_id ) => {
    const value = localStorage.getItem(`my-reads-rating-${book_id}`)
    return value ? parseFloat(value) : 0
  }

  render() {
    const { book, updateBook } = this.props
    const hasShelf = !!book.shelf && book.shelf !== 'none' // converting value to bool
    const ratingValue = this.getRatingValue(book.id)
    let shelfIndicator
    if ( hasShelf ) {
      shelfIndicator = (
        <div className="book__current-shelf">
          { this.getLabel(book.shelf) }
        </div>
      )
    }
    return (
      <Card className="book">
        { hasShelf && shelfIndicator }
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
            <ReactStars
              className="book__description__rating"
              onChange={ this.ratingChanged }
              value={ ratingValue }
              size={ 20 }
              color2={ "#e8cb31" }
            />
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
            { hasShelf  && (
              <IconButton
                aria-label="Delete"
                onClick={ () => updateBook(book, 'none') }
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            )}
          </CardActions>
        </div>
      </Card>
    )
  }
}

export default Book
