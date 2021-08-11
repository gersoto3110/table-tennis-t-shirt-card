import "./SizePicker.css";

const SizePicker = ({ size, bgColor, textColor, onClick }) => {
  const styleSizePicker = {
    "--bg-size-picker": bgColor ? `${bgColor}` : "rgb(238, 238, 238)",
    "--text-color-size-picker": textColor ? `${textColor}` : "rgb(0,0,0)",
  };

  return (
    <button style={styleSizePicker} className="size-picker" onClick={onClick}>
      {size}
    </button>
  );
};

export default SizePicker;
