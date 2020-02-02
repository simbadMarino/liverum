import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { tileData } from "../Library/bookList.js";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
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
            CM
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
        title={tileData[0].title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          The book is considered a literary classic today. According to Luc
          Sante, "The Count of Monte Cristo has become a fixture of Western
          civilization's literature, as inescapable and immediately identifiable
          as Mickey Mouse, Noah's flood, and the story of Little Red Riding
          Hood.""
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
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
            The story takes place in France, Italy, and islands in the
            Mediterranean during the historical events of 1815–1839: the era of
            the Bourbon Restoration through the reign of Louis-Philippe of
            France. It begins just before the Hundred Days period (when Napoleon
            returned to power after his exile). The historical setting is a
            fundamental element of the book, an adventure story primarily
            concerned with themes of hope, justice, vengeance, mercy, and
            forgiveness. It centres on a man who is wrongfully imprisoned,
            escapes from jail, acquires a fortune, and sets about exacting
            revenge on those responsible for his imprisonment. His plans have
            devastating consequences for both the innocent and the guilty.
          </Typography>
        </CardContent>
      </Collapse>

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            RC
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={tileData[1].title}
        subheader={tileData[1].author}
      />
      <CardMedia
        className={classes.media}
        image={tileData[1].img}
        title={tileData[1].title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This book is a novel by Daniel Defoe, first published on 25 April
          1719. The first edition credited the work's protagonist Robinson
          Crusoe as its author, leading many readers to believe he was a real
          person and the book a travelogue of true incidents.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
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
            Despite its simple narrative style, Robinson Crusoe was well
            received in the literary world and is often credited as marking the
            beginning of realistic fiction as a literary genre. It is generally
            seen as a contender for the first English novel. Before the end of
            1719, the book had already run through four editions, and it has
            gone on to become one of the most widely published books in history,
            spawning so many imitations, not only in literature but also in
            film, television and radio, that its name is used to define a genre,
            the Robinsonade.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
