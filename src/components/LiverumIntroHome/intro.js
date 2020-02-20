import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import bookShelf from "../files/bookshelf.jpg";

const useStyles = makeStyles({
  card: {
    maxWidth: 645
  },
  media: {
    height: 200,
    maxHeight: 450
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={bookShelf} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bookshelf, sweet bookshelf :)
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            This is your home page to a new way of owning your favorite digital
            books, Liverum is all about bringing True Book reading experience to
            the digital world. Buy, sell, lend and gift your books securely and
            piracy free.
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Make sure you have at least one of the following tokens to play
            around with your Demo Liverum book reader:
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            -Count of Montecristo book: BTT (TRC-10)
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            -Robinson Crusoe book: SEED (TRC-10)
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            -Mysterious Island book: TESTTWO (TRC-10)
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            -Sherlock Holmes book: CommunityNodeTOken (TRC-10)
          </Typography>
          <Typography variant="subtitle2" color="textPrimary" component="p">
            Built on TRON blockchain.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://liverum.blogspot.com/2020/02/liverum-introduction.html"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
