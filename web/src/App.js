import './App.css';
// import { useEtherBalance, useEthers } from '@usedapp/core'
import React, { useState, useEffect } from 'react';


function App() {
  const [isLogged, setisLogged] = useState(0);

  if (!isLogged){
    return(
      <div className="App">
        <header className="App-header">
          <h1>
            DINO ICO    
            <span class="uk-badge">666</span>   
          </h1>
          <img src="https://image.pngaaa.com/672/696672-middle.png" width="500" height="600"/>
          <div>
            <div>
                <button class="uk-button uk-button-primary" onClick={() => generateLogin(setisLogged)}>Start using</button>
            </div>
          </div>
        </header>
      </div>
    )
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <h1 class=".uk-text-large">
            DINO ICO   
            <span class="uk-badge">666</span>      
          </h1>
          <img src="https://image.pngaaa.com/672/696672-middle.png" width="500" height="600"/>
          <div>
            <div>
              <p> Receive DINO Token by sending ETH to this Address: 0x5dC02a8f6A504a0D0cf95EbEEd78B1276ceeD61F </p>
              <button class="uk-button uk-button-primary" onClick={() => inputTokenIntoWallet()}>Add Token to Wallet</button>
            </div>
  
          </div>
        </header>
      </div>
    );
  } 
}

async function inputTokenIntoWallet(){
  let tokenAddress = '0x5dC02a8f6A504a0D0cf95EbEEd78B1276ceeD61F';
  let tokenSymbol = 'DNO';
  let tokenDecimals = 18;
  let tokenImage = '';

  try {
    let ethereum = window.ethereum
    let addAccountSuccess = await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
          address: tokenAddress, // The address that the token is at.
          symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
          decimals: tokenDecimals, // The number of decimals in the token
          image: tokenImage, // A string url of the token logo
        },
      },
    });

    if (addAccountSuccess) {
      alert('Added to your wallet');
    } else {
      console.log('xd');
    }
  } catch (error) {
    console.log(error);
  }
}

async function generateLogin(loginHook){
  try{
    const ethereum = window.ethereum
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    loginHook(1)
  }catch (error){
    console.log(error)
  }
}

export default App;
