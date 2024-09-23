import "./style.css";

// eslint-disable-next-line react/prop-types
const Button = ({ onClick, className }) => {
  return (
    <>
      <div className="custom-button-wrapper">
        <div
          className={`custom-button ${className}`}
          onClick={onClick ? onClick : () => {}}
        >
          Clickkkkkkk dzô đây
        </div>
      </div>
    </>
  );
};

export default Button;
