import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

class Book extends Component {
  render() {
    return (
      <Card style={{ display: 'flex' }}>
        <CardMedia
          component="img"
          className="book-cover"
          image="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
          title="Contemplative Reptile"
        />
        <div>
          <CardContent>
            <Typography gutterBottom  variant="headline" component="h2">
              Lizard
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: 'flex-end' }}>
            <Button color="primary" style={{ fontSize: 12 }} aria-label="Delete">
              <AddIcon style={{ fontSize: 18, marginRight: 4 }}/>
              To Read
            </Button>
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
