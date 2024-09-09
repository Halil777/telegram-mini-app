import "./button.css";

interface ButtonProps {
  type: "add" | "remove" | "checkout";
  title: string;
  disable?: boolean;
  onClick?: () => void;
}

function Button({ type, title, disable, onClick }: ButtonProps) {
  return (
    <button
      className={`btn ${
        (type === "add" && "add") ||
        (type === "remove" && "remove") ||
        (type === "checkout" && "checkout")
      }`}
      disabled={disable}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
