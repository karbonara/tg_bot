import React, { useEffect } from "react";
import { NavMenu } from "./widgets/NavMenu/NavMenu";

const tg = window.Telegram.WebApp;

function App() {
  const user = tg.initDataUnsafe?.user;

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
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
