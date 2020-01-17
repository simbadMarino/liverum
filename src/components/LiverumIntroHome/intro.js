import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import bookShelf from '../files/bookshelf.jpg'

const useStyles = makeStyles({
  card: {
    maxWidth: 845,
  },
  media: {
    height: 200,
    maxHeight: 450,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {bookShelf}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Home,sweet home :)
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            This is your home page to a new way of owning your favorite digital books,
            Liverum is all about bringing True Book reading experience to the digital world.
            Buy, sell, lend and gift your books securely and piracy free.
              <Typography variant="subtitle2" color="initial" component="p">
              Built on TRON blockchain.
              </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="http://31.220.60.243/">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
