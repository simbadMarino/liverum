import React, { Component } from "react";
import 'typeface-roboto'; //Importing roboto font
import Button from '@material-ui/core/Button';  //Importing material button
import Utils from "../../utils";
//import "./App.scss";
import { createGlobalStyle } from "styled-components";
import { ReactReader } from "../../modules";
import {
  Container,
  ReaderContainer,
  Bar,
  Logo,
  CloseButton,
  CloseIcon,
  FontSizeButton
} from "../../Components";
var title = "";
const storage = global.localStorage || null;



class LiverumLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tronWeb: {
        installed: false,
        loggedIn: false
      },
      fullscreen: false,
      location:
        storage && storage.getItem("epub-location")
          ? storage.getItem("epub-location")
          : 2,
      largeText: false
    };
    this.rendition = null;
  }



  toggleFullscreen = () => {
    this.setState(
      {
        fullscreen: !this.state.fullscreen
      },
      () => {
        setTimeout(() => {
          const evt = document.createEvent("UIEvents");
          evt.initUIEvent("resize", true, false, global, 0);
        }, 1000);
      }
    );
  };

  onLocationChanged = location => {
    this.setState(
      {
        location
      },
      () => {
        storage && storage.setItem("epub-location", location);
      }
    );
  };

  onToggleFontSize = () => {
    const nextState = !this.state.largeText;
    this.setState(
      {
        largeText: nextState
      },
      () => {
        this.rendition.themes.fontSize(nextState ? "120%" : "100%");
      }
    );
  };

  getRendition = rendition => {
    // Set inital font-size, and add a pointer to rendition for later updates
    const { largeText } = this.state;
    this.rendition = rendition;
    rendition.themes.fontSize(largeText ? "120%" : "100%");
  };

  render() {
    const { fullscreen, location } = this.state;
    return (

        <ReaderContainer fullscreen={fullscreen}>
          <ReactReader
            url={
              "https://gateway.btfssoter.io/btfs/QmZVMJXP4o7QRHFHpqECbjwewJXHFHG46T5wrroL7tK6iM/Montecristo.epub"
            }
            locationChanged={this.onLocationChanged}
            title={"El Conde de Montecristo"}
            location={location}
            getRendition={this.getRendition}
          />

        </ReaderContainer>
    
    );
  }
}

export default LiverumLibrary;
