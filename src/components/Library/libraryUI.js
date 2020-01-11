import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import MenuBook from '@material-ui/icons/MenuBook'
import {tileData} from './bookList.js';
import { makeStyles } from '@material-ui/core/styles';
import LiverumBook from './bookUI'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 'auto',
  },
  icon: {
    color: '#2E64FE',
  },
}));
export var bookURL = '';
export var bookTitle = '';


export default function TitlebarGridList() {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = React.useState(1);
  var selected ='';

  const handleListItemClick = (event, tokenId, url, title) => {
    setSelectedIndex(tokenId);
    console.log(tokenId);
    bookURL = url;
    bookTitle = title;
    console.log(bookTitle);
    console.log(bookURL);
  };



  return (
    <div className={classes.root}>
      <GridList cellHeight={380} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} rows={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Available Books:</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`read book ${tile.title}`} className={classes.icon}
                onClick={event => handleListItemClick(event, tile.tokenid, tile.url, tile.title )}
                >

                  <MenuBook />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      {selectedIndex==='1002544' ?(<LiverumBook bookUrl={bookURL} bookTitle={bookTitle}/>): null}
      {selectedIndex==='1002672' ?(<LiverumBook bookUrl={bookURL} bookTitle={bookTitle}/>): null}
    </div>

  );
}
