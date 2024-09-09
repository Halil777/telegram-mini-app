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
      price: 17.99,
      image: pizzaImg,
      id: 1,
      category: "Fast Food",
      description: ["Cheese", "Tomato Sauce", "Pepperoni", "Oregano"],
    },
    {
      title: "title.burger",
      price: 15,
      image: burgerImg,
      id: 2,
      category: "Fast Food",
      description: ["Beef patty", "Lettuce", "Tomato", "Cheese"],
    },
    {
      title: "title.coca",
      price: 3.5,
      image: cocaImg,
      id: 3,
      category: "Drinks",
      description: ["Coca-Cola soft drink"],
    },
    {
      title: "title.kebab",
      price: 13.99,
      image: kebabImg,
      id: 4,
      category: "Fast Food",
      description: ["Grilled meat", "Onions", "Tomatoes", "Pita bread"],
    },
    {
      title: "title.salad",
      price: 2.5,
      image: saladImg,
      id: 5,
      category: "Salads",
      description: ["Lettuce", "Tomato", "Cucumber", "Olive Oil"],
    },
    {
      title: "title.bottle_of_water",
      price: 0.99,
      image: waterImg,
      id: 6,
      category: "Drinks",
      description: ["500ml mineral water"],
    },
    {
      title: "title.ice_cream",
      price: 2.99,
      image: iceCreamImg,
      id: 7,
      category: "Desserts",
      description: ["Vanilla ice cream", "Chocolate sprinkles"],
    },
  ];
}
