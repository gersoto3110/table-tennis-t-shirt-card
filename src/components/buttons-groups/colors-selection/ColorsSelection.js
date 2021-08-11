import "./ColorsSelection.css";

import { ColorPicker } from "../../buttons";
import { useColorPicker } from "../../../context";
import { useState } from "react";

const ColorsSelection = () => {
  const { tShirtColors, handleCurrentColor } = useColorPicker();
  const [ active, setActive ] = useState(null);

  const handleClick = (key) => {
    setActive(key);
    handleCurrentColor(key);
  }

  return (
    <div className="colors-selection">
      {Object.entries(tShirtColors).map(([key, value]) => (
        <ColorPicker
          key={key}
          color={value}
          onClick={() => handleClick(key)}
          active={active === key}
        />
      ))}
    </div>
  );
};

export default ColorsSelection;
