import { useState } from "react";
import "./card.css";
import Button from "../button/Button";
import { useTranslation } from "react-i18next";

interface Food {
  title: string;
  image: string;
  price: number;
  id: number;
  description: string[];
}

interface CardProps {
  food: Food;
  onAdd: (food: Food) => void;
  onRemove: (food: Food) => void;
}

function Card({ food, onAdd, onRemove }: CardProps) {
  const [count, setCount] = useState(0);
  const [showIngredients, setShowIngredients] = useState(false);
  const { title, image, price, description } = food;
  const { t } = useTranslation();

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food);
  };

  const toggleIngredients = () => {
    setShowIngredients(!showIngredients);
  };

  return (
    <div className="card" onClick={toggleIngredients}>
      <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
      <div className="image__container">
        <img src={image} alt={title} />
      </div>
      <h4 className="card__title">
        {t(title)} . <span className="card__price">{price} TMT</span>
      </h4>

      <div className="btn-container">
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count !== 0 && (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        )}
      </div>

      {showIngredients && (
        <ul className="card__description">
          {description.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Card;
