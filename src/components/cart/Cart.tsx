import "./cart.css";
import Button from "../button/Button";
interface CartItem {
  price: number;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  onCheckout: () => void;
}

function Cart({ cartItems, onCheckout }: CartProps) {
  const totalPrice = cartItems.reduce(
    (a: number, c: CartItem) => a + c.price * c.quantity,
    0
  );

  return (
    <div className="cart__container">
      {cartItems.length === 0 ? "No items in cart" : ""}
      <br /> <span>Total Price: {totalPrice.toFixed(2)} TMT</span>
      <Button
        title={`${cartItems.length === 0 ? "Order !" : "Checkout"} `}
        type={"checkout"}
        disable={cartItems.length === 0}
        onClick={onCheckout}
      />
    </div>
  );
}

export default Cart;
