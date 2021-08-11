import { useContext } from "react";
import { ColorPickerContext } from "./ColorPickerProvider";

export default function useColorPicker() {
  return useContext(ColorPickerContext);
}
