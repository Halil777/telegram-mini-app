import pizzaImg from "../images/pizza.png";
import burgerImg from "../images/burger.png";
import cocaImg from "../images/coca.png";
import saladImg from "../images/salad.png";
import waterImg from "../images/water.png";
import iceCreamImg from "../images/icecream.png";
import kebabImg from "../images/kebab.png";

export function getData() {
  return [
    {
      title: "title.pizza",
      price: 50,
      image: pizzaImg,
      id: 1,
      category: "Fast Food",
      description: ["description.pizza"],
    },
    {
      title: "title.burger",
      price: 35,
      image: burgerImg,
      id: 2,
      category: "Fast Food",
      description: ["description.burger"],
    },
    {
      title: "title.coca",
      price: 15,
      image: cocaImg,
      id: 3,
      category: "Drinks",
      description: ["description.coca"],
    },
    {
      title: "title.kebab",
      price: 50,
      image: kebabImg,
      id: 4,
      category: "Fast Food",
      description: ["description.kebab"],
    },
    {
      title: "title.salad",
      price: 30,
      image: saladImg,
      id: 5,
      category: "Salads",
      description: ["description.salad"],
    },
    {
      title: "title.bottle_of_water",
      price: 5,
      image: waterImg,
      id: 6,
      category: "Drinks",
      description: ["description.bottle_of_water"],
    },
    {
      title: "title.ice_cream",
      price: 20,
      image: iceCreamImg,
      id: 7,
      category: "Desserts",
      description: ["description.ice_cream"],
    },
  ];
}
