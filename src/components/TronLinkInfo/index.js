import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import "./TronLinkInfo.scss";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TronWeb from "tronweb";
import SunWeb from "sunweb";
//import TitlebarGridList from "../Library/libraryUI.js";
import { tileData } from "../Library/bookList.js";
import liverumLogo from "../files/LiverumLogo.png";
import MediaCard from "../LiverumIntroHome/intro.js";
export var tokenIDs = [];
export var tileDataMod = [];
export var tokenQty = [];

export var tokenIDsSide = [];
export var tileDataModSide = [];
export var tokenQtySide = [];
export var sunNetworkAliveFlag = 0;
export var tronAddress = "";
var j = 0;
const mainGatewayAddress = "TWaPZru6PR5VjgT4sJrrZ481Zgp3iJ8Rfo";
const sideGatewayAddress = "TGKotco6YoULzbYisTBuP6DWXDjEgJSpYz";
const sideChainId = "41E209E4DE650F0150788E8EC5CAFA240A23EB8EB7";

const mainchain = new TronWeb({
  fullNode: "https://api.trongrid.io",
  solidityNode: "https://api.trongrid.io",
  eventServer: "https://api.trongrid.io"
});

const sidechain = new TronWeb({
  fullNode: "https://sun.tronex.io",
  solidityNode: "https://sun.tronex.io",
  eventServer: "https://sun.tronex.io"
});

const liverumWeb = new SunWeb(
  mainchain,
  sidechain,
  mainGatewayAddress,
  sideGatewayAddress,
  sideChainId
);

async function myFunctionSide(item, index) {
  for (var i = 0; i < tokenIDsSide.length; i++) {
    if (tokenIDsSide[i] == item.tokenid) {
      console.log("SunNetwork match in: " + i + " " + j);
      tileDataModSide[j] = tileData[index];
      console.log("Token ID SUNnetwork: " + tokenIDsSide[i]);
      j++;
    }
  }
}

async function myFunction(item, index) {
  for (var i = 0; i < tokenIDs.length; i++) {
    if (tokenIDs[i] == item.tokenid) {
      console.log("match in: " + i + " " + j);
      tileDataMod[j] = tileData[index];
      console.log("Token ID: " + tokenIDs[i]);
      j++;
    }
  }
}

export default class TronLinkInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountAddressMainChain: "account address will show up here",
      accountBalanceMainChain: "account balance will show up here",
      accountBandwidthMainChain: "account bandwidth will show up here",
      accountTokensValueMainChain: "account tokens will show up here",
      accountTokensNameMainChain: "accout tokens name will show up here",
      accountNumberOfTokensMainChain: "account total no. of tokens",
      accountTokenIdsMainChain: "accout tokens",
      accountAddressSideChain: "account address will show up here",
      accountBalanceSideChain: "account balance will show up here",
      accountBandwidthSideChain: "account bandwidth will show up here",
      accountTokensValueSideChain: "account tokens will show up here",
      accountTokensNameSideChain: "accout tokens name will show up here",
      accountNumberOfTokensSideChain: "account total no. of tokens",
      accountTokenIdsSideChain: "accout tokens"
    };
  }

  // Uncomment each call one at a time to see your account information filled out
  componentDidMount() {
    this.fetchAccountAddressMain();
    this.fetchAccountBalanceMain();
    this.fetchAccountBandwidthMain();
    this.getTokensBalanceMain();
    this.fetchAccountAddressSide();
    this.fetchAccountBalanceSide();
    this.fetchAccountBandwidthSide();
    this.getTokensBalanceSide();
  }

  /*********************************Main Chain functions:*********************************************/

  async fetchAccountAddressMain() {
    const account = await window.tronWeb.trx.getAccount();
    const accountAddress = account.address; // HexString(Ascii)
    const accountAddressInBase58 = window.tronWeb.address.fromHex(
      accountAddress
    ); // Base58
    tronAddress = accountAddressInBase58;
    this.setState({
      accountAddressMainChain: accountAddressInBase58
    });
  }
  //
  // // The function below will return the account balance in SUN as a number
  async fetchAccountBalanceMain() {
    const balanceInSun = await window.tronWeb.trx.getBalance(); //number
    const balanceInTRX = window.tronWeb.fromSun(balanceInSun); //string
    const changeBackToSun = window.tronWeb.toSun(balanceInTRX); //string

    this.setState({
      accountBalanceMainChain: balanceInTRX
    });
  }
  //
  // // The function below will return the account bandwidth as a number
  async fetchAccountBandwidthMain() {
    const accountBandwidth = await window.tronWeb.trx.getBandwidth(); // number

    this.setState({
      accountBandwidthMainChain: accountBandwidth
    });
  }

  async getTokensBalanceMain() {
    //const WALLET_ADDRESS = 'TRxrmHDysqAMHNo2eEtSvcMoJpDnWLqnZ4';
    var tokenName = [];

    var books;
    var i;
    var tokenValue = [];
    let info = await window.tronWeb.trx.getAccount();
    var tokenTotals = 0;
    var tokenQuantityPositiveBalance = 0;
    //  window.alert("Wait until Book List update finishes...")
    console.log(
      "**********************MAIN CHAIN PROCESS***************************"
    );
    try {
      tokenTotals = info.assetV2.length;
      //console.log("Number of tokens: " + tokenTotals);

      for (i = 0; i < tokenTotals; i++) {
        if (info.assetV2[i].value > 0) {
          //Ignore assets with 0 banlance
          tokenQuantityPositiveBalance++; //Getting total amount of tokens with positive balance
          tokenIDs[i] = info.assetV2[i].key; //Taking token IDs
          books = await window.tronWeb.trx.getTokenFromID(tokenIDs[i]);
          console.log(books);
          tokenName[i] = books.name;
          tokenValue[i] = info.assetV2[i].value / Math.pow(10, books.precision); //Taking token values(Number of books per token)
          console.log(tokenIDs[i] + " " + tokenName[i] + " = " + tokenValue[i]); //Debug sentence
        }
      }
      /*tokenIDs = tokenIDs.filter(function (el) {
                    return el != null;
                });*/
    } catch (e) {
      window.alert("No TokenBooks found in wallet, please check");
    }
    tokenName = tokenName.filter(function(el) {
      return el != null;
    });

    tokenValue = tokenValue.filter(function(el) {
      return el != null;
    });
    tokenQty = tokenValue;

    //let booksjson = require("../bookList/books.json");
    console.log(tokenIDs);

    tileData.forEach(myFunction);
    j = 0;
    console.log(tileDataMod);
    //console.log(booksjson.tokenId[1]);

    this.setState({
      accountTokensValueMainChain: tokenValue,
      accountTokensNameMainChain: tokenName,
      accountNumberOfTokensMainChain: tokenQuantityPositiveBalance,
      accountTokenIdsMainChain: tokenIDs
    });

    console.log(
      "Number of tokens with positive balance: " + tokenQuantityPositiveBalance
    );
    //window.tronWeb.trx.sendToken("TYGajccn93oPPUvGfiueu8x7fMkVEPDgMB", 1000000, "1002736")
    //window.alert("Book list updated :)");
  }

  /*********************************Side Chain functions:*********************************************/

  async fetchAccountAddressSide() {
    const account = await window.tronWeb.trx.getAccount();
    const accountAddress = account.address; // HexString(Ascii)
    const accountAddressInBase58 = window.tronWeb.address.fromHex(
      accountAddress
    ); // Base58
    tronAddress = accountAddressInBase58;
    this.setState({
      accountAddressSideChain: accountAddressInBase58
    });
  }
  //
  // // The function below will return the account balance in SUN as a number
  async fetchAccountBalanceSide() {
    try {
      const balanceInSun = await window.sunWeb.sidechain.trx.getBalance(); //number
      const balanceInTRX = window.sunWeb.sidechain.fromSun(balanceInSun); //string
      const changeBackToSun = window.sunWeb.sidechain.toSun(balanceInTRX); //string

      this.setState({
        accountBalanceSideChain: balanceInTRX
      });
      sunNetworkAliveFlag = 0;
    } catch (e) {
      window.alert(
        "SunNetwork not supported in this browser, switching to Mainchain..."
      );
      sunNetworkAliveFlag = 1;
    }
  }
  //
  // // The function below will return the account bandwidth as a number
  async fetchAccountBandwidthSide() {
    const accountBandwidth = await window.tronWeb.trx.getBandwidth(); // number

    this.setState({
      accountBandwidthSideChain: accountBandwidth
    });
  }

  async getTokensBalanceSide() {
    //const WALLET_ADDRESS = 'TRxrmHDysqAMHNo2eEtSvcMoJpDnWLqnZ4';
    try {
      var tokenName = [];
      var books;
      var i;
      var tokenValue = [];
      let info = await window.sunWeb.sidechain.trx.getAccount();
      var tokenTotals = 0;
      var tokenQuantityPositiveBalance = 0;
      //  window.alert("Wait until Book List update finishes...")
      console.log(
        "**********************SIDE CHAIN PROCESS***************************"
      ); //DEbug

      tokenTotals = info.assetV2.length;
      //console.log("Number of tokens: " + tokenTotals);

      for (i = 0; i < tokenTotals; i++) {
        if (info.assetV2[i].value > 0) {
          //Ignore assets with 0 banlance
          tokenQuantityPositiveBalance++; //Getting total amount of tokens with positive balance
          tokenIDsSide[i] = info.assetV2[i].key; //Taking token IDs
          books = await window.sunWeb.sidechain.trx.getTokenFromID(
            tokenIDsSide[i]
          );
          console.log(books);
          tokenName[i] = books.name;
          tokenValue[i] = info.assetV2[i].value / Math.pow(10, books.precision); //Taking token values(Number of books per token)
          console.log(
            tokenIDsSide[i] + " " + tokenName[i] + " = " + tokenValue[i]
          ); //Debug sentence
        }
      }
      sunNetworkAliveFlag = 0;
    } catch (e) {
      window.alert("No SunNetwork TokenBooks found in wallet, please check...");
      sunNetworkAliveFlag = 1;
    }
    tokenName = tokenName.filter(function(el) {
      return el != null;
    });

    tokenValue = tokenValue.filter(function(el) {
      return el != null;
    });
    tokenQty = tokenValue;

    //let booksjson = require("../bookList/books.json");
    console.log(tokenIDsSide);

    tileData.forEach(myFunctionSide);
    j = 0;

    console.log(tileDataModSide);
    //console.log(booksjson.tokenId[1]);

    this.setState({
      accountTokensValue: tokenValue,
      accountTokensName: tokenName,
      accountNumberOfTokens: tokenQuantityPositiveBalance,
      accountTokenIds: tokenIDsSide
    });

    console.log(
      "Number of tokens with positive balance: " + tokenQuantityPositiveBalance
    );
  }

  /*************************Render**************************************************/

  render() {
    const {
      accountAddressMainChain,
      accountBalanceMainChain,
      accountBandwidthMainChain,
      accountTokensValueMainChain,
      accountTokensNameMainChain,
      accountNumberOfTokensMainChain,
      accountTokenIdsMainChain,
      accountAddressSideChain,
      accountBalanceSideChain,
      accountBandwidthSideChain,
      accountTokensValueSideChain,
      accountTokensNameSideChain,
      accountNumberOfTokensSideChain,
      accountTokenIdsSideChain
    } = this.state;
    return (
      <div className="tronLinkInfo-component-container">
        <MediaCard />
        <Divider />
        <div className="account-info-header">Liverum Account</div>
        <div className="account-info-address">
          MainChain Address: <span>{accountAddressMainChain}</span>
        </div>
        <div className="account-info-balance">
          MainChain TRON Balance: <span>{accountBalanceMainChain}</span>
        </div>
        <div className="account-info-bandwidth">
          MainChain Bandwidth: <span>{accountBandwidthMainChain}</span>
        </div>
        <div className="account-info-tokens"></div>
        <Divider />
        <div className="account-info-address">
          SunNetwork Address: <span>{accountAddressSideChain}</span>
        </div>
        <div className="account-info-balance">
          SunNetwork TRON Balance: <span>{accountBalanceSideChain}</span>
        </div>
        <div className="account-info-bandwidth">
          SunNetwork Bandwidth: <span>{accountBandwidthSideChain}</span>
        </div>
        <div className="account-info-tokens"></div>
      </div>
    );
  }
}
