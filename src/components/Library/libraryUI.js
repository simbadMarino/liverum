import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import MenuBook from "@material-ui/icons/MenuBook";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { tileData } from "./bookList.js";
import { makeStyles } from "@material-ui/core/styles";
import LiverumBook from "./bookUI";
import { tokenIDsSide } from "../TronLinkInfo/index.js";
import { tileDataModSide } from "../TronLinkInfo/index.js";
import { tileDataMod } from "../TronLinkInfo/index.js";
import { sunNetworkAliveFlag } from "../TronLinkInfo/index.js";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "auto",
    height: "auto"
  },
  icon: {
    color: "#2E64FE"
  },
  card: {
    weight: 100,
    maxWidth: 100,
    maxHeight: 150,
    height: 300
  },
  media: {
    height: 350,
    maxHeight: 290,
    maxWidth: 190
  }
}));
export var bookURL = "";
export var bookTitle = "";

export default function TitlebarGridList() {
  const classes = useStyles();
  //window.alert(tokenIDs);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  var selected = "";

  const handleListItemClick = (tokenId, url, title) => {
    setSelectedIndex(tokenId);
    bookURL = url;
    bookTitle = title;
    console.log(bookTitle);
    console.log(tokenId);
    console.log(bookURL);
    console.log(selectedIndex);
  };

  if (sunNetworkAliveFlag == 1) {
    //SunNetwork is NOT available?
    //window.alert("TRON mainchain selected, SunNetwork not available");
    return (
      <div className={classes.root}>
        <Container maxWidth="md">
          MainChain Bookshelf
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={6}>
              <Grid container justify="center" spacing={3}>
                {tileDataMod.map(tile => (
                  <Grid item>
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={tile.img}
                          title={tile.title}
                          onClick={event =>
                            handleListItemClick(
                              tile.tokenid,
                              tile.url,
                              tile.title
                            )
                          }
                        />
                        <CardContent>
                          <Typography
                            variant="subtitle2"
                            color="textPrimary"
                            component="p"
                          >
                            {tile.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          {selectedIndex === "1002000" ? (
            <LiverumBook bookUrl={bookURL} bookTitle={bookTitle} />
          ) : null}
          {selectedIndex === "1000001" ? (
            <LiverumBook bookUrl={bookURL} bookTitle={bookTitle} />
          ) : null}
          {selectedIndex === "1002072" ? (
            <LiverumBook bookUrl={bookURL} bookTitle={bookTitle} />
          ) : null}
          {selectedIndex === "1000322" ? (
            <LiverumBook bookUrl={bookURL} bookTitle={bookTitle} />
          ) : null}
        </Container>
      </div>
    );
  } else {
    //window.alert("SunNetwork available :)");
    return (
      <div className={classes.root}>
        <Container maxWidth="md">
          SunNetwork Bookshelf
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={6}>
              <Grid container justify="center" spacing={3}>
                {tileDataModSide.map(tile => (
                  <Grid item>
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={tile.img}
                          title={tile.title}
                          onClick={event =>
                            handleListItemClick(
                              tile.tokenid,
                              tile.url,
                              tile.title
                            )
                          }
                        />
                        <CardContent>
                          <Typography
                            variant="subtitle2"
                            color="textPrimary"
                            component="p"
                          >
                            {tile.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          {selectedIndex === "1002000" ? (
            <LiverumBook bookUrl={bookURL} bookTitle={bookTitle} />
          ) : null}
          {selectedIndex === "1000001" ? (
            <LiverumBook bookUrl={bookURL} bookTitle={bookTitle} />
          ) : null}
          {selectedIndex === "1002072" ? (
            <LiverumBook bookUrl={bookURL} bookTitle={bookTitle} />
          ) : null}
          {selectedIndex === "1000322" ? (
            <LiverumBook bookUrl={bookURL} bookTitle={bookTitle} />
          ) : null}
        </Container>
      </div>
    );
  }
}
