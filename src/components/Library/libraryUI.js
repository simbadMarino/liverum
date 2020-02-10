import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import MenuBook from "@material-ui/icons/MenuBook";
import { tileData } from "./bookList.js";
import { makeStyles } from "@material-ui/core/styles";
import LiverumBook from "./bookUI";
import { tokenIDsSide } from "../TronLinkInfo/index.js";
import { tileDataModSide } from "../TronLinkInfo/index.js";
import { tileDataMod } from "../TronLinkInfo/index.js";
import { sunNetworkAliveFlag } from "../TronLinkInfo/index.js";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "auto",
    height: "auto"
  },
  icon: {
    color: "#2E64FE"
  }
}));
export var bookURL = "";
export var bookTitle = "";

export default function TitlebarGridList() {
  const classes = useStyles();
  //window.alert(tokenIDs);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  var selected = "";

  const handleListItemClick = (event, tokenId, url, title) => {
    setSelectedIndex(tokenId);
    bookURL = url;
    bookTitle = title;
  };

  if (sunNetworkAliveFlag == 1) {
    //SunNetwork is NOT available?
    //window.alert("TRON mainchain selected, SunNetwork not available");
    return (
      <div className={classes.root}>
        <Container maxWidth="xs">
          MainChain Bookshelf
          <GridList cellHeight={200} className={classes.gridList}>
            <GridListTile
              key="Subheader"
              cols={2}
              rows={2}
              spacing={5}
              style={{ height: 50 }}
            >
              <ListSubheader component="div"></ListSubheader>
            </GridListTile>
            {tileDataMod.map(tile => (
              <GridListTile key={tile.img}>
                <img
                  src={tile.img}
                  onClick={event =>
                    handleListItemClick(
                      event,
                      tile.tokenid,
                      tile.url,
                      tile.title
                    )
                  }
                />
                <GridListTileBar />
              </GridListTile>
            ))}
          </GridList>
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
        <Container maxWidth="xs">
          SunNetwork Bookshelf
          <GridList cellHeight={200} className={classes.gridList}>
            <GridListTile
              key="Subheader"
              cols={2}
              rows={2}
              style={{ height: 50 }}
            >
              <ListSubheader component="div"></ListSubheader>
            </GridListTile>

            {tileDataModSide.map(tile => (
              <GridListTile key={tile.img}>
                <img
                  src={tile.img}
                  onClick={event =>
                    handleListItemClick(
                      event,
                      tile.tokenid,
                      tile.url,
                      tile.title
                    )
                  }
                />
                <GridListTileBar />
              </GridListTile>
            ))}
          </GridList>
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
