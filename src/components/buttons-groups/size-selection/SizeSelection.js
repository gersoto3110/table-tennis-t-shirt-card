import { useState } from "react";
import { useColorPicker } from "../../../context";
import { SizePicker } from "../../buttons";
import "./SizeSelection.css";

const tShirtSizes = ["xs", "s", "m", "l", "xl"];

const SizeSelection = () => {
  const { currentColor } = useColorPicker();
  const [active, setActive] = useState(tShirtSizes[0]);

  return (
    <div className="size-selection">
      {tShirtSizes.map((size) => (
        <SizePicker
          key={size}
          size={size}
          onClick={() => setActive(size)}
          bgColor={active === size && currentColor}
          textColor={active === size && "var(--white-color)"}
        />
      ))}
    </div>
  );
};

export default SizeSelection;
