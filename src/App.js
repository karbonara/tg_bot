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
          {/* {user?.is_premium && <p>Премиум пользователь</p>} */}
          {user?.is_premium ? (
            <p>ТЫ МАЖОРИК С ПРЕМКОЙ</p>
          ) : (
            <p>ТЫ ЛОХ БЕЗ ПРЕМИУМА</p>
          )}
          {user?.is_bot && <p>Это бот</p>}
          {user?.added_to_attachment_menu && <p>Добавлен в меню вложений</p>}
          {user?.allows_write_to_pm && <p>Разрешены сообщения в личку</p>}
        </div>
        <button onClick={onClose}>закрыть</button>
      </header>
    </div>
  );
}

export default App;
