import logo from "./buttons/logo.png";
import pic1 from "./buttons/26.png";
import pic2 from "./buttons/27.png";
import pic3 from "./buttons/28.png";
import opensea from "./buttons/opensea.svg";
import twitter from "./buttons/twitter.svg";
import NavBar from "./NavBar";
import { useState } from "react";

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
          <div className="connect">
            <NavBar accounts={accounts} setAccounts={setAccounts} />
          </div>
          <div>
            <div className="buttons">
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/ozmandium"
                >
                  <img src={twitter} alt="logo" class="bi bi-twitter" />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://opensea.io/collection/movement-by-ozmandium"
                >
                  <img src={opensea} alt="logo" class="logo2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fex">
        <div className="App-header">
          <p className="App-title">Movement by Ozmandium</p>
          <p>
            All AI-assisted, using my irl work to explore directions and curated
            into one collection- Movement. 200 pieces available for sale at
            0.012eth per NFT, max 2 per wallet.
          </p>
        </div>
        <div className="tree-block">
          <img className="tree" src={pic1} alt="logo" />
          <img className="tree" src={pic2} alt="logo" />
          <img className="tree" src={pic3} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
