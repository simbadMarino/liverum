import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import TuneIcon from "@material-ui/icons/Tune";
import TronLinkInfo from "../components/TronLinkInfo";
import RecipeReviewCard from "../components/Store/Store";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import StorefrontIcon from "@material-ui/icons/Storefront";
//import LiverumBook from "../components/Library/bookUI.js";
import TitlebarGridList from "../components/Library/libraryUI.js";
import HomeIcon from "@material-ui/icons/Home";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import SendIcon from "@material-ui/icons/Send";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { tronAddress } from "../components/TronLinkInfo";
import QRcodeReader from "../components/qrcodeReader/codeReader.js";
import liverumLogo from "../components/files/LiverumLogo.png";
//import QRcode from '../components/receiveBooks/qrcode_gen.js

var QRCode = require("qrcode.react");
const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log(index);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            size="medium"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" noWrap>
            <img src={liverumLogo} width="50" height="50" />
            Liverum
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List component="nav" aria-label="main liverum menus">
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Library" />
          </ListItem>

          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={event => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <CallReceivedIcon />
            </ListItemIcon>
            <ListItemText primary="Receive Books" />
          </ListItem>

          <ListItem
            button
            selected={selectedIndex === 4}
            onClick={event => handleListItemClick(event, 4)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Send Books" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />

        {selectedIndex === 0 ? (
          <TronLinkInfo />
        ) : selectedIndex === 1 ? (
          <TitlebarGridList />
        ) : selectedIndex === 2 ? (
          <RecipeReviewCard />
        ) : selectedIndex === 3 ? (
          <Card className={classes.card}>
            <CardActionArea>
              <QRCode value={tronAddress} size={256} />
            </CardActionArea>
          </Card>
        ) : selectedIndex === 4 ? (
          <QRcodeReader />
        ) : null}
      </main>
    </div>
  );
}

/*


<ListItem
  button
  selected={selectedIndex === 2}
  onClick={event => handleListItemClick(event, 2)}
>
  <ListItemIcon>
    <StorefrontIcon />
  </ListItemIcon>
  <ListItemText primary="Liverum Store" />
</ListItem>

<List component="nav" aria-label="secondary liverum menus">
<ListItem
  button
  selected={selectedIndex === 5}
  onClick={event => handleListItemClick(event, 5)}
>
  <ListItemIcon>
    <TuneIcon />
  </ListItemIcon>
  <ListItemText primary="Settings" />
</ListItem>
</List>

<Divider />



<CardActions>
  <Button size="small" color="default" >
    <FileCopyIcon/>
  </Button>

  <Button size="small" color="default" >
    <ShareIcon/>
  </Button>
</CardActions>



*/
