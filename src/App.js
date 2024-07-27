import React, { useState, useEffect } from "react";
import { NavMenu } from "./widgets/NavMenu/NavMenu";

const tg = window.Telegram.WebApp;

function App() {
  const [wallet, setWallet] = useState(null);
  const user = tg.initDataUnsafe?.user;

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  const onConnectWallet = () => {
    // Замените YOUR_APP_ID на ваш реальный client_id, полученный от Tonkeeper
    const clientId = "YOUR_APP_ID";
    window.location.href = `https://tonkeeper.com/connect?client_id=${clientId}&scope=wallet&redirect_uri=${encodeURIComponent(
      window.location.href
    )}`;
  };

  useEffect(() => {
    // Check if Tonkeeper has redirected back with wallet address
    const urlParams = new URLSearchParams(window.location.search);
    const walletAddress = urlParams.get("walletAddress");
    if (walletAddress) {
      setWallet(walletAddress);
    }
  }, []);

  const onDeposit = async () => {
    if (!wallet) return;
    const amount = 0.1; // Amount in TON
    const paymentLink = `ton://transfer/${wallet}?amount=${
      amount * 1e9
    }&text=Payment for service`;
    window.location.href = paymentLink;
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "#fff" }}>
        Привет, {user?.first_name} Затупка
      </h1>
      <div className="cases-section__title">
        <div className="new-title new-title_with-icon new-title_icon-rarity">
          <div className="new-title__text">
            <img src="https://forcedrop.win/public/img/new-title/rarity.svg" />
            Кейсы по раритетности
          </div>
        </div>
      </div>
      <div className="case">
        <div className="cases__item">
          <img
            src="https://images.steamcdn.io/forcedrop/cases/newfreecase1.png"
            alt=""
            width={162}
          />
          <div className="case__name">Кейс 1</div>
          <div className="case__current-price">Цена: 0.1 TON</div>
        </div>
        <div className="cases__item">
          <img
            src="https://images.steamcdn.io/forcedrop/cases/FarmButterfly.png"
            alt=""
            width={162}
          />
          <div className="case__name">Кейс 1</div>
          <div className="case__current-price">Цена: 0.1 TON</div>
        </div>
        <div className="cases__item">
          <img
            src="https://images.steamcdn.io/forcedrop/cases/FARMKNIFENEW.png"
            alt=""
            width={162}
          />
          <div className="case__name">Кейс 1</div>
          <div className="case__current-price">Цена: 0.1 TON</div>
        </div>
        <div className="cases__item">
          <img
            src="https://images.steamcdn.io/forcedrop/cases/farmdopplerknife.png"
            alt=""
            width={162}
          />
          <div className="case__name">Кейс 1</div>
          <div className="case__current-price">Цена: 0.1 TON</div>
        </div>
      </div>
      <button onClick={onClose}>Close</button>
      <NavMenu />
    </div>
  );
}

export default App;
