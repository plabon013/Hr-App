import "./Button.css";

const Button = ({ children, onClick, role = "primary" }) => {
  return (
    <button className={`btn ${role}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
