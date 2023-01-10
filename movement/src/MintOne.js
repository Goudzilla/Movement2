import React, { useEffect } from "react";
import { useState } from "react";
import { ethers, BigNumber } from "ethers";

import contractAbi from "./movement.json";

const contractAddress = "0xce2962da0cb158c82bd81dfaca7dff65b232689a";

const mintOne = ({ accounts }) => {
  const isConnected = Boolean(accounts.length);
  const mintOne = async () => {
    if (isConnected) {
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
          let nftTxn = await nftContract.mint(1, {
            value: ethers.utils.parseEther(`${0.012 * 1}`),
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
    }
  };

  return (
    <div className="mint-section">
      {!isConnected}
      {isConnected && (
        <div className="connect-div">
          <button
            className="increment-decrement"
            onClick={() => {
              mintOne();
            }}
          >
            Mint 1
          </button>
        </div>
      )}
    </div>
  );
};

export default mintOne;
