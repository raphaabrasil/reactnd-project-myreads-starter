import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import PropTypes from 'prop-types'

import './book.css'

class Book extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    authors: PropTypes.array,
    imageLinks: PropTypes.object,
  }

  render() {
    const { title, subtitle, authors, imageLinks } = this.props
    const coverPlaceholder = 'https://i1.wp.com/inasmuchas.org/wp-content/uploads/2013/10/PLACEHOLDER.jpg?resize=178%2C178'
    return (
      <Card className="book">
        <CardMedia
          component="img"
          className="book__cover"
          image={ imageLinks ? imageLinks.thumbnail : coverPlaceholder }
          title="Contemplative Reptile"
        />
        <div className="book__description">
          <CardContent>
            <Typography variant="headline" component="h2">
              { title }
            </Typography>
            { subtitle && (
              <Typography variant="subheading" component="h3">
                { subtitle }
              </Typography>
            )}
            { authors && (
              <Typography paragraph component="p" className="book__authors">
                { authors.map( (author, idx) => (
                  idx === 0 ? author :  `, ${author}`
                ))}
              </Typography>
            )}
          </CardContent>
          <CardActions style={{ justifyContent: 'flex-end' }}>
            <Button color="primary" style={{ fontSize: 12 }} aria-label="Delete">
              <AddIcon style={{ fontSize: 18, marginRight: 4 }}/>
              Reading
            </Button>
            <Button color="primary" style={{ fontSize: 12 }} aria-label="Delete">
              <AddIcon style={{ fontSize: 18, marginRight: 4 }}/>
              Read
            </Button>
          </CardActions>
        </div>
      </Card>
    )
  }
}

export default Book
