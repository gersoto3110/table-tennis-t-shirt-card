import "./ProductInfo.css";

import { useColorPicker } from "../../context";
import { ColorsSelection, SizeSelection } from "../buttons-groups";

const ProductInfo = () => {
  const { currentColor } = useColorPicker();

  return (
    <article className="product-info">
      <h1 className="title">GS T-Shirt</h1>
      <span style={{"--tag-bg": `${currentColor}`}} className="tag">new</span>
      <h2 className="subtitle">Unisex breathable table tennis t-shirt</h2>

      <h3 className="title-description">Product Info</h3>
      <p className="description">
        Modern & stylish table tennis t-shirt ideal for a training or match
        play, lightweight & breathable with its quick-dry material makes it very
        comfortable.
      </p>

      <h3 className="title-color">Color</h3>
      <ColorsSelection />

      <h3 className="title-size">Size</h3>
      <SizeSelection />
    </article>
  );
};

export default ProductInfo;
