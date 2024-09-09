import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Cart from "./components/cart/Cart";
import { getData } from "./db/db";

const foods = getData();

interface TelegramMainButton {
  text: string;
  show: () => void;
  hide: () => void;
  isVisible: boolean;
  setText: (text: string) => void;
  onClick: (callback: () => void) => void;
}

interface TelegramWebApp {
  ready: () => void;
  close: () => void;
  sendData: (data: string) => void;
  onEvent: (eventType: string, callback: () => void) => void;
  offEvent: (eventType: string, callback: () => void) => void;
  expand: () => void;
  themeParams: Record<string, string>;
  user: { id: number; first_name: string; last_name: string };
  MainButton: TelegramMainButton;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}

const tele = window.Telegram?.WebApp;

interface Food {
  title: string;
  image: string;
  price: number;
  id: number;
}

interface CartItem extends Food {
  quantity: number;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (tele) {
      tele.ready();
    }
  }, [tele]);

  const onAdd = (food: Food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food: Food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist && exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    if (tele) {
      tele.MainButton.setText("Pay :)");
      tele.MainButton.show();
    }
  };

  return (
    <>
      <h1 className="heading">Order Food</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className="cards__container">
        {foods.map((food) => (
          <Card
            food={{ ...food, image: food.Image }}
            key={food.id}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
    </>
  );
}

export default App;
