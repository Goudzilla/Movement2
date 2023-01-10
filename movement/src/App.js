import logo from "./buttons/logo.png";
import pic1 from "./buttons/26.png";
import pic2 from "./buttons/27.png";
import pic3 from "./buttons/28.png";
import opensea from "./buttons/opensea.svg";
import twitter from "./buttons/twitter.svg";
import { useState } from "react";
import ConnectButton from "./Connect";
import MintOne from "./MintOne";
import MintTwo from "./MintTwo";

import "./App.css";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="landing-section">
      <div className="toolbar">
        <div className="icons">
          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div>
            <div className="buttons">
              <div classname="buttons-box">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/ozmandium"
                >
                  <img src={twitter} alt="logo" class="bi bi-twitter" />
                </a>
              </div>
              <div classname="buttons-box">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://opensea.io/collection/movement-by-ozmandium"
                >
                  <img src={opensea} alt="logo" class="logo2" />
                </a>
              </div>
              <div className="connect-div">
                <ConnectButton accounts={accounts} setAccounts={setAccounts}>
                  Connect
                </ConnectButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="App-header">
        <p className="App-title">Movement by Ozmandium</p>
        <p className="description-text">
          All AI-assisted, using my irl work to explore directions and <br></br>
          curated into one collection- Movement.
        </p>
        <div className="detail">
          <div className="section">
            <p>200</p>
            <p className="detail-text">Pieces</p>
          </div>
          <div className="section">
            <p>0.012 Ξ</p>
            <p className="detail-text">Price</p>
          </div>
          <div className="section">
            <p>2</p>
            <p className="detail-text">/Wallet</p>
          </div>
        </div>
      </div>
      <div className="mint-button-div">
        <MintOne
          accounts={accounts}
          setAccounts={setAccounts}
          className="connect"
        ></MintOne>
        <MintTwo
          accounts={accounts}
          setAccounts={setAccounts}
          className="connect"
        ></MintTwo>
      </div>
      <div className="tree-block">
        <img className="tree" src={pic1} alt="logo" />
        <img className="tree" src={pic2} alt="logo" />
        <img className="tree" src={pic3} alt="logo" />
      </div>
    </div>
  );
}

export default App;
