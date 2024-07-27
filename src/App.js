import React, { useState, useEffect } from "react";

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
      <h1>Welcome, {user?.first_name}</h1>
      {wallet ? (
        <div>
          <p>Wallet Address: {wallet}</p>
          <button onClick={onDeposit}>Deposit 0.1 TON</button>
        </div>
      ) : (
        <button onClick={onConnectWallet}>Connect Wallet</button>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
