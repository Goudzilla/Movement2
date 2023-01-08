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
  }, [connectAccount]);

  const [mintAmount, setMintAmount] = useState(1);
  // async function handleMint() {
  //   if (window.ethereum) {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(
  //       contractAddress,
  //       contractAbi.abi,
  //       signer
  //     );
  //     try {
  //       const gasLimit = 160000; // set the gas limit manually
  //       const response = await contract.mint(BigNumber.from(mintAmount), {
  //         gasLimit: gasLimit,
  //       });

  //       console.log("response", response);
  //     } catch (err) {
  //       console.log("error", err);
  //     }
  //   }
  // }
  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(
          contractAddress,
          contractAbi.abi,
          signer
        );

        console.log("Initialize payment");
        let nftTxn = await nftContract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther(`${0.012 * mintAmount}`),
        });

        console.log("Mining... please wait");
        await nftTxn.wait();
        console.log(
          `Mined, see transaction: https://etherscan.io/tx${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {accounts.length && (
        <div className="connect">
          <button onClick={() => setMintAmount(mintAmount - 1)}>-</button>
          <div classname="mint-number">
            <p>{mintAmount}</p>
          </div>
          <button onClick={() => setMintAmount(mintAmount + 1)}>+</button>
          <button onClick={mintNftHandler}>Mint</button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
