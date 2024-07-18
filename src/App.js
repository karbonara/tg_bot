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

  const user = tg.initDataUnsafe?.user;
  const profilePhotoUrl = user?.photo_url;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {profilePhotoUrl && (
          <div className="profile-photo-container">
            <img
              src={profilePhotoUrl}
              className="profile-photo"
              alt="User Profile"
            />
          </div>
        )}
        <p>Привет - {user?.username}</p>
        <p>Твой АЙДИ - {user?.id}</p>

        <button onClick={onClose}>закрыть</button>
      </header>
    </div>
  );
}

export default App;
