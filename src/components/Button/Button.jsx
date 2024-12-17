import "./Button.css";

const Button = ({
  children,
  onClick,
  text,
  type = "button",
  role = "primary",
}) => {
  return (
    <button className={`btn ${role}`} type={type} onClick={onClick}>
      {children} {text}
    </button>
  );
};

export default Button;