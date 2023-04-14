import PropTypes from "prop-types";

const Buttons = ({ color, text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="btn"
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};
Buttons.defaultProps = {
  color: "steelblue",
};
Buttons.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Buttons;
