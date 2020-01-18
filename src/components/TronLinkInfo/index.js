import React, { Component } from "react";
import Divider from '@material-ui/core/Divider';
import "./TronLinkInfo.scss";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//import TitlebarGridList from "../Library/libraryUI.js";
import {tileData} from '../Library/bookList.js';
import liverumLogo from '../files/LiverumLogo.png'
import MediaCard from '../LiverumIntroHome/intro.js'
export var tokenIDs = [];
export var tileDataMod = [];
export var tronAddress = "";
var j = 0;


async function myFunction(item,index)
{

  for(var i=0;i<tokenIDs.length;i++)
  {
    if(tokenIDs[i] == item.tokenid)
    {
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
      accountAddress: "account address will show up here",
      accountBalance: "account balance will show up here",
      accountBandwidth: "account bandwidth will show up here",
      accountTokensValue: "account tokens will show up here",
      accountTokensName: "accout tokens name will show up here",
      accountNumberOfTokens: "account total no. of tokens",
      accountTokenIds: "accout tokens"
    };
  }

  // Uncomment each call one at a time to see your account information filled out
  componentDidMount() {
    this.fetchAccountAddress();
    this.fetchAccountBalance();
    this.fetchAccountBandwidth();
    this.getTokensBalance();
    //this.myFunction();
    //Promise.all([promise1,promise2,promise3]);

  }

  // // The function below will return an object with address, balance, create_time,
  // // account_resource;
  async fetchAccountAddress() {
    const account = await window.tronWeb.trx.getAccount();
    const accountAddress = account.address; // HexString(Ascii)
    const accountAddressInBase58 = window.tronWeb.address.fromHex(
   accountAddress
     ); // Base58
     tronAddress = accountAddressInBase58;
    this.setState({
      accountAddress: accountAddressInBase58
    });
  }
  //
  // // The function below will return the account balance in SUN as a number
  async fetchAccountBalance() {
    const balanceInSun = await window.tronWeb.trx.getBalance(); //number
     const balanceInTRX = window.tronWeb.fromSun(balanceInSun); //string
     const changeBackToSun = window.tronWeb.toSun(balanceInTRX); //string

    this.setState({
      accountBalance: balanceInTRX
    });
  }
  //
  // // The function below will return the account bandwidth as a number
  async fetchAccountBandwidth() {
    const accountBandwidth = await window.tronWeb.trx.getBandwidth(); // number

    this.setState({
      accountBandwidth: accountBandwidth
    });
  }

  async getTokensBalance() {
      //const WALLET_ADDRESS = 'TRxrmHDysqAMHNo2eEtSvcMoJpDnWLqnZ4';
      var tokenName = [];

      var books;
      var i;
      var tokenValue = [];
      let info = await window.tronWeb.trx.getAccount();
      var tokenQuantityHistory = 0;
      var tokenQuantityPositiveBalance = 0;


      //console.log(info); //DEbug
      tokenQuantityHistory = info.assetV2.length;
      //console.log("Number of tokens: " + tokenQuantityHistory);

      for(i = 0; i <tokenQuantityHistory; i++)
      {
      	if(info.assetV2[i].value > 0)  //Ignore assets with 0 banlance
      	{
      	    tokenQuantityPositiveBalance ++; //Getting total amount of tokens with positive balance
      	    tokenIDs[i] = info.assetV2[i].key;  //Taking token IDs
      	    books =  await window.tronWeb.trx.getTokenFromID(tokenIDs[i]);
            console.log(books);
      	    tokenName[i] = books.name;
      	    tokenValue[i] = info.assetV2[i].value/Math.pow(10,books.precision); //Taking token values(Number of books per token)
      	    console.log(tokenIDs[i] + " " + tokenName[i] + " = "+ tokenValue[i]);  //Debug sentence
      	}
      }
      /*tokenIDs = tokenIDs.filter(function (el) {
                return el != null;
            });*/

      tokenName = tokenName.filter(function (el) {
                return el != null;
            });

      tokenValue = tokenValue.filter(function (el) {
                return el != null;
            });

      //let booksjson = require("../bookList/books.json");
    console.log(tokenIDs);


    tileData.forEach(myFunction);
    j=0;
    console.log(tileDataMod);
      //console.log(booksjson.tokenId[1]);


   this.setState({
     accountTokensValue: tokenValue,
     accountTokensName: tokenName,
     accountNumberOfTokens: tokenQuantityPositiveBalance,
     accountTokenIds : tokenIDs
     });
       //console.log("Number of tokens with positive balance: " + tokenQuantityPositiveBalance);

  }




  render() {
    const { accountAddress, accountBalance, accountBandwidth,accountTokensValue, accountTokensName,accountNumberOfTokens,accountTokenIds } = this.state;
    return (

      <div className="tronLinkInfo-component-container">
        <MediaCard/>
        <Divider />
        <div className="account-info-header">
        Liverum Account
        </div>
        <div className="account-info-address">
          Address: <span>{accountAddress}</span>
        </div>
        <div className="account-info-balance">
          TRON Balance: <span>{accountBalance}</span>
        </div>
        <div className="account-info-bandwidth">
          Bandwidth: <span>{accountBandwidth}</span>
        </div>
        <div className="account-info-tokens">
          </div>
      </div>



    );
  }
}
