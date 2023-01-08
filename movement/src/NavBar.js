import React, { useEffect } from "react";
import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import contractAbi from "./movement.json";

const contractAddress = "0xce2962da0cb158c82bd81dfaca7dff65b232689a";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  useEffect(() => {
    connectAccount();
  }, []);

  const [mintAmount, setMintAmount] = useState(1);
  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractAbi.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount));
        console.log("response", response);
      } catch (err) {
        console.log("error", err);
      }
    }
  }

  return (
    <div>
      {accounts.length && (
        <div>
          <button onClick={() => setMintAmount(mintAmount - 1)}>-</button>
          {mintAmount}
          <button onClick={() => setMintAmount(mintAmount + 1)}>+</button>
          <button onClick={handleMint}>Mint</button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
