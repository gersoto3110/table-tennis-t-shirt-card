import "./ColorPicker.css";

const ColorPicker = ({ color, active, onClick }) => {
  const styleColorPicker = {
    "--bg-color-picker": `${color}`,
  };

  const cName = active ? "color-picker active" : "color-picker";

  return (
    <button style={styleColorPicker} className={cName} onClick={onClick} />
  );
};

export default ColorPicker;
