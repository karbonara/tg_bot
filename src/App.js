import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

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

  const connectTonkeeper = async () => {
    try {
      const tonkeeperUrl = `ton://connect`;
      window.location.href = tonkeeperUrl;
    } catch (error) {
      console.error("Error connecting to Tonkeeper:", error);
    }
  };

  const fetchWalletData = async () => {
    try {
      // Replace with actual logic to fetch wallet data from your server or directly from Tonkeeper
      const data = {
        address: "EQD...your_wallet_address",
        balance: "100 TON",
      };
      setWallet(data);
    } catch (error) {
      console.error("Error fetching wallet data:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchWalletData();
    }
  }, [user]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {user?.photo_url && (
          <div className="profile-photo-container">
            <img
              src={user.photo_url}
              className="profile-photo"
              alt="User Profile"
            />
          </div>
        )}
        <div className="user-info">
          <p>ID: {user?.id}</p>
          <p>Логин: {user?.username}</p>
          <p>Имя: {user?.first_name}</p>
          <p>Фамилия: {user?.last_name}</p>
          <p>Язык: {user?.language_code}</p>
          {user?.is_premium && <p>Премиум пользователь</p>}
          {user?.is_bot && <p>Это бот</p>}
          {user?.added_to_attachment_menu && <p>Добавлен в меню вложений</p>}
          {user?.allows_write_to_pm && <p>Разрешены сообщения в личку</p>}
        </div>
        <button onClick={connectTonkeeper}>Подключить Tonkeeper</button>
        {wallet ? (
          <div className="wallet-info">
            <p>Кошелек: {wallet.address}</p>
            <p>Баланс: {wallet.balance}</p>
          </div>
        ) : (
          <button onClick={connectTonkeeper}>Подключить Tonkeeper</button>
        )}
        <button onClick={onClose}>закрыть</button>
      </header>
    </div>
  );
}

export default App;
