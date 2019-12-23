import React, { Component } from "react";
import TronWeb from "tronweb";

import Utils from "../../utils";

import TronLinkInfo from "../TronLinkInfo";
import TronLinkGuide from "../TronLinkGuide";
import "./App.scss";

const FOUNDATION_ADDRESS = "TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tronWeb: {
        installed: false,
        loggedIn: false
      }
    };
  }

  async componentDidMount() {
    await new Promise(resolve => {
      const tronWebState = {
        installed: !!window.tronWeb,
        loggedIn: window.tronWeb && window.tronWeb.ready
      };

      if (tronWebState.installed) {
        this.setState({
          tronWeb: tronWebState
        });

        return resolve();
      }

      let tries = 0;

      const timer = setInterval(() => {
        if (tries >= 10) {
          const TRONGRID_API = "https://api.trongrid.io";

          window.tronWeb = new TronWeb(
            TRONGRID_API,
            TRONGRID_API,
            TRONGRID_API
          );

          this.setState({
            tronWeb: {
              installed: false,
              loggedIn: false
            }
          });
          clearInterval(timer);
          return resolve();
        }

        tronWebState.installed = !!window.tronWeb;
        tronWebState.loggedIn = window.tronWeb && window.tronWeb.ready;

        if (!tronWebState.installed) {
          return tries++;
        }

        this.setState({
          tronWeb: tronWebState
        });

        resolve();
      }, 100);
    });

    if (!this.state.tronWeb.loggedIn) {
      // Set default address (foundation address) used for contract calls
      // Directly overwrites the address object if TronLink disabled the
      // function call
      window.tronWeb.defaultAddress = {
        hex: window.tronWeb.address.toHex(FOUNDATION_ADDRESS),
        base58: FOUNDATION_ADDRESS
      };

      window.tronWeb.on("addressChange", () => {
        if (this.state.tronWeb.loggedIn) {
          return;
        }

        this.setState({
          tronWeb: {
            installed: true,
            loggedIn: true
          }
        });
      });
    }

    Utils.setTronWeb(window.tronWeb);
  }

  render() {
    if (!this.state.tronWeb.installed) return <TronLinkGuide />;

    if (!this.state.tronWeb.loggedIn) return <TronLinkGuide installed />;

    return (
      <div>
        <header className="header-container">
          <div className="resource-links-container">
            <div className="app-title">Scheherezade Book</div>
            <a
              className="nav-link"
              href="https://developers.tron.network/docs"
              rel="noopener noreferrer"
              target="_blank"
            >
              Book Manager
            </a>
            &nbsp; &nbsp;
            <a
              className="nav-link"
              href="https://developers.tron.network/docs"
              rel="noopener noreferrer"
              target="_blank"
            >
              Scheherezade Book Market
            </a>
            &nbsp; &nbsp;
            <a
              className="nav-link"
              href="https://tronscan.org/#/"
              rel="noopener noreferrer"
              target="_blank"
            >
              MY Books
            </a>
            &nbsp; &nbsp;
            <a
              className="nav-link"
              href="https://tronstation.io/"
              rel="noopener noreferrer"
              target="_blank"
            >

            </a>
          </div>
          <TronLinkInfo />
        </header>
        <div>
          <ECommerce />
        </div>
      </div>
    );
  }
}
export default App;

// {tWeb()}
