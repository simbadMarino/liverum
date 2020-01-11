import React, { Component } from "react";

import "./TronLinkInfo.scss";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default class TronLinkInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountAddress: "account address will show up here",
      accountBalance: "account balance will show up here",
      accountBandwidth: "account bandwidth will show up here",
      accountTokensValue: "account tokens will show up here",
      accountTokensName: "accout tokens name will show up here",
      accountNumberOfTokens: "account total no. of tokens"
    };
  }

  // Uncomment each call one at a time to see your account information filled out
  componentDidMount() {
    this.fetchAccountAddress();
    this.fetchAccountBalance();
    this.fetchAccountBandwidth();
    this.getTokensBalance();
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
      var tokenIDs = [];
      var books;
      var i;
      var tokenValue = [];
      let info = await window.tronWeb.trx.getAccount();
      var tokenQuantityHistory = 0;
      var tokenQuantityPositiveBalance = 0;


    //  console.log(info); //DEbug
      tokenQuantityHistory = info.assetV2.length;
      //console.log("Number of tokens: " + tokenQuantityHistory);

      for(i = 0; i <tokenQuantityHistory; i++)
      {
      	if(info.assetV2[i].value > 0)  //Ignore assets with 0 banlance
      	{
      	    tokenQuantityPositiveBalance ++; //Getting total amount of tokens with positive balance
      	    tokenIDs[i] = info.assetV2[i].key;  //Taking token IDs
      	    books =  await window.tronWeb.trx.getTokenFromID(tokenIDs[i]);
            //console.log(books);
      	    tokenName[i] = books.name;
      	    tokenValue[i] = info.assetV2[i].value/Math.pow(10,books.precision); //Taking token values(Number of books per token)
      	    console.log(tokenIDs[i] + " " + tokenName[i] + " = "+ tokenValue[i]);  //Debug sentence
      	}
      }

      let booksjson = require("../bookList/books.json");
      console.log(booksjson.tokenId[1]);


   this.setState({
     accountTokensValue: tokenValue,
     accountTokensName: tokenName,
     accountNumberOfTokens: tokenQuantityPositiveBalance
     });
       console.log("Number of tokens with positive balance: " + tokenQuantityPositiveBalance);

  }




  render() {
    const { accountAddress, accountBalance, accountBandwidth,accountTokensValue, accountTokensName,accountNumberOfTokens } = this.state;
    return (

      <div className="tronLinkInfo-component-container">
        <div className="account-info-header">
        TRON-Liverum Account
        </div>
        <div className="account-info-address">
          Address: <span>{accountAddress}</span>
        </div>
        <div className="account-info-balance">
          Balance: <span>{accountBalance}</span>
        </div>
        <div className="account-info-bandwidth">
          Bandwidth: <span>{accountBandwidth}</span>
        </div>
        <div className="account-info-tokens">

          List of Books:
          </div>
        <ButtonGroup
      orientation="vertical"
      color="primary"
      aria-label="vertical outlined primary button group"
    >
      {accountNumberOfTokens >= 1?(<Button>{accountTokensName[0]}:{accountTokensValue[0]}</Button>):null}
      {accountNumberOfTokens >= 2?(<Button>{accountTokensName[1]}:{accountTokensValue[1]}</Button>):null}
      {accountNumberOfTokens >= 3?(<Button>{accountTokensName[2]}:{accountTokensValue[2]}</Button>):null}
      {accountNumberOfTokens >= 4?(<Button>{accountTokensName[3]}:{accountTokensValue[3]}</Button>):null}
      {accountNumberOfTokens >= 5?(<Button>{accountTokensName[4]}:{accountTokensValue[4]}</Button>):null}
      {accountNumberOfTokens >= 6?(<Button>{accountTokensName[5]}:{accountTokensValue[5]}</Button>):null}
      {accountNumberOfTokens >= 7?(<Button>{accountTokensName[6]}:{accountTokensValue[6]}</Button>):null}
      {accountNumberOfTokens >= 8?(<Button>{accountTokensName[7]}:{accountTokensValue[7]}</Button>):null}
      {accountNumberOfTokens >= 9?(<Button>{accountTokensName[8]}:{accountTokensValue[8]}</Button>):null}
      {accountNumberOfTokens >= 10?(<Button>{accountTokensName[9]}:{accountTokensValue[9]}</Button>):null}
      {accountNumberOfTokens >= 11?(<Button>{accountTokensName[10]}:{accountTokensValue[10]}</Button>):null}
    </ButtonGroup>
        </div>



    );
  }
}
