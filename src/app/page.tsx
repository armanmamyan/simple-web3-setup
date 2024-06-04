"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { useAccount } from "wagmi";
import Countdown from "../components/Countdown";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { address, isConnected } = useAccount();
  const [nftCount, setNFTCount] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0.08);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setNFTCount(val);
    setTotalPrice(0.08 * val);
  };

  return (
    <div className={styles.container}>
      <header className="p-2">
        <div className="container">
          <div className="row flex-nowrap justify-content-between">
            <a href="#" className="navbar-brand fs-1">
              Logo
            </a>
            <div className="d-flex flex-grow-1 flex-shrink-1 align-self-center align-items-center justify-content-end">
              <ConnectButton
                chainStatus='none'
                showBalance={true}
                accountStatus={{
                  smallScreen: "avatar",
                  largeScreen: "full",
                }}
              />
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className="container">
          <div className="row gap-2">
            <div className="col-lg-6 col-12 minting--details align-self-center">
              <div className="d-flex align-items-center justify-content-between minting--title">
                <h1>Join the club</h1>
              </div>
              <div className="counter--container">
                <div className="counter--slider">
                  <input
                    id="counter"
                    type="range"
                    min={1}
                    max={20}
                    step={1}
                    value={nftCount}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="counter">
                    {nftCount} NFT - Total: {totalPrice.toFixed(3)} ARB + GAS{" "}
                  </label>
                </div>
                <button type="button" className="btn btn-primary w-100 mb-4">
                  Mint Now
                </button>
                <h4 className="text-center">
                  Max 20 NFTs per TX in Presale (44 per wallet)
                </h4>
              </div>
              <div className="total-supply-container">
                <h5 className="text-uppercase text-center mb-2">
                  {0} / {2500} nfts minted
                </h5>
                <div className="d-flex align-items-center justify-content-center contract--links">
                  <a href="#" target="_blank" rel="noreferrer" className="me-2">
                    View on arbiscan
                  </a>
                  <hr />
                  <a href="#" target="_blank" rel="noreferrer" className="ms-2">
                    View on opensea
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <h5 className="mb-3 reveal--title">
                <span className="text-primary me-2">
                  <i className="fas fa-exclamation-circle"></i>
                </span>
                Reveal on opensea date - 27th of January
              </h5>
              <Countdown />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
