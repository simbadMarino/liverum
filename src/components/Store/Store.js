import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {tileData} from '../Library/bookList.js';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            Liv
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={tileData[0].title}
        subheader={tileData[0].author}
      />
      <CardMedia
        className={classes.media}
        image={tileData[0].img}
        title= {tileData[0].title}
       />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          The book is considered a literary classic today. According to Luc Sante,
          "The Count of Monte Cristo has become a fixture of Western civilization's literature,
          as inescapable and immediately identifiable as Mickey Mouse, Noah's flood, and the story of Little Red Riding Hood.""
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to ShoppingCart">
          <ShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

          <Typography paragraph>
          The story takes place in France, Italy, and islands in the Mediterranean during the historical events of 1815–1839:
          the era of the Bourbon Restoration through the reign of Louis-Philippe of France.
          It begins just before the Hundred Days period (when Napoleon returned to power after his exile).
          The historical setting is a fundamental element of the book, an adventure story primarily concerned with themes of
          hope, justice, vengeance, mercy, and forgiveness. It centres on a man who is wrongfully imprisoned, escapes from jail,
          acquires a fortune, and sets about exacting revenge on those responsible for his imprisonment.
          His plans have devastating consequences for both the innocent and the guilty.
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}
