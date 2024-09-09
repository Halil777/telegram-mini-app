import { useState } from "react";
import "./card.css";
import Button from "../button/Button";

interface Food {
  title: string;
  image: string;
  price: number;
  id: number;
}

interface CardProps {
  food: Food;
  onAdd: (food: Food) => void;
  onRemove: (food: Food) => void;
}

function Card({ food, onAdd, onRemove }: CardProps) {
  const [count, setCount] = useState(0);
  const { title, image, price } = food;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food);
  };

  return (
    <div className="card">
      <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
      <div className="image__container">
        <img src={image} alt={title} />
      </div>
      <h4 className="card__title">
        {title} . <span className="card__price">{price} TMT</span>
      </h4>

      <div className="btn-container">
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count !== 0 ? (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;
