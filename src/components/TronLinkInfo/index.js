import React, { Component } from "react";

import "./TronLinkInfo.scss";

export default class TronLinkInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountAddress: "account address will show up here",
      accountBalance: "account balance will show up here",
      accountBandwidth: "account bandwidth will show up here"
    };
  }

  // Uncomment each call one at a time to see your account information filled out
  componentDidMount() {
    this.fetchAccountAddress();
    this.fetchAccountBalance();
    this.fetchAccountBandwidth();
    this.getTokensBalance();
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
      const btt_address = '1002000';
      //var fs = require('fs');
      //var fd = fs.openSync('Books.txt', 'w');


      //var obj = JSON.parse(info);
     // console.log(info); //DEbug
      tokenQuantityHistory = info.assetV2.length;
      //console.log("Number of tokens: " + tokenQuantityHistory);

      for(i = 0; i <tokenQuantityHistory; i++)
      {
  	if(info.assetV2[i].value > 0)  //Ignore assets with 0 banlance
  	{
  	    tokenQuantityPositiveBalance ++; //Getting total amount of tokens with positive balance
  	    tokenIDs[i] = info.assetV2[i].key;  //Taking token IDs
  	    books =  await window.tronWeb.trx.getTokenFromID(tokenIDs[i]);
  	    tokenName[i] = books.name;
  	    tokenValue[i] = info.assetV2[i].value; //Taking token values(Number of books per token)
  	    console.log(tokenIDs[i] + " " + tokenName[i] + " = "+ tokenValue[i]);  //Debug sentence








          //fs.writeSync(fd, tokenIDs[i] + '\n', null, null);

          //console.log('Write string %s which is %d bytes.', codingArray[i], bytes);




  	}
  	//console.log(tokenValue[i]);


      }
   //fs.closeSync(fd);


       console.log("Number of tokens with positive balance: " + tokenQuantityPositiveBalance);







  	//console.log(info.assetV2); //get Full list of tokens
  //	let info_1 = await tronWeb.trx.getTokensFromID(btt_address).then(balance => {
  //	console.log({balance});
  //	}).catch(err => console.error(err));

      //let books = await tronWeb.trx.getTokenFromID(btt_address);
     // console.log(books); //Debug
  //	console.log(books.name + " : " + info.assetV2[0].value);
  }



  render() {
    const { accountAddress, accountBalance, accountBandwidth } = this.state;
    return (

      <div className="tronLinkInfo-component-container">
        <div className="account-info-header">
        TRON Account info
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
      </div>

    );
  }
}
