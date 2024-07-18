import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
const tg = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Привет - {tg.initDataUnsafe?.user?.username}</p>
        <p>Твой АЙДИ - {tg.initDataUnsafe?.user?.id}</p>

        <button onClick={onClose}>закрыть</button>
      </header>
    </div>
  );
}

export default App;
