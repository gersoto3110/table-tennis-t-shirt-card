import { createContext, useState } from "react";

const ColorPickerContext = createContext();

const tShirtColors = {
  blue: "rgb(30, 149, 192)",
  red: "rgb(220,0,0)",
  green: "rgb(0, 220, 0)",
  orange: "orange",
  pink: "pink",
  yellow: "yellow",
};

const ColorPickerProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState(tShirtColors.blue);

  const handleCurrentColor = (newColor) => {
    if (!(newColor in tShirtColors)) newColor = "blue";
    setCurrentColor(tShirtColors[newColor]);
  };

  const contextValue = { currentColor, handleCurrentColor, tShirtColors };

  return (
    <ColorPickerContext.Provider value={contextValue}>
      {children}
    </ColorPickerContext.Provider>
  );
};

export { ColorPickerContext };
export default ColorPickerProvider;
