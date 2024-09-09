import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [user, setUser] = useState<{
    first_name: string;
    username?: string;
  } | null>(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();

      // Получаем данные о пользователе
      const user = window.Telegram.WebApp.user;
      setUser(user);
    }
  }, []);

  const sendDataToBot = () => {
    // Отправляем данные в бота
    window.Telegram?.WebApp.sendData("Данные, отправленные из Mini App!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Привет, {user?.first_name}!</h1>
      <h2>Твое имя пользователя: {user?.username}</h2>
      <button onClick={sendDataToBot}>Отправить данные боту</button>
    </div>
  );
};

export default App;
