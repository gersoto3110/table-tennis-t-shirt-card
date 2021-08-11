import "./ProductImage.css";

import { Logo, TShirt } from "..";
import { useColorPicker } from "../../context";
import convertColorToRGBA from "../../helpers/convertColorToRGBA";

const ProductImage = () => {
  const { currentColor } = useColorPicker()

  const styleProductImg = {
    "--to-linear-gradient": convertColorToRGBA(currentColor, .2),
    "--from-linear-gradient": convertColorToRGBA(currentColor, .05),
  }

  return (
    <article style={styleProductImg} className="product-img">
      <Logo className="logo" />
      <TShirt style={{"--tshirt-fill-color": `${currentColor}`}} classname="tshirt" />
    </article>
  );
};

export default ProductImage;
