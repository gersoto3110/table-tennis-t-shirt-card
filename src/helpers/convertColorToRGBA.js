const convertColorToRGBA = (color, alpha) => {
  if (alpha < 0 || alpha > 1) alpha = 0;

  const div = document.createElement("div");
  div.style.backgroundColor = color;
  document.body.appendChild(div);
  let rgba = getComputedStyle(div).getPropertyValue("background-color");
  div.remove();

  if (rgba.indexOf("rgba") === -1) {
    rgba = `${rgba.slice(0, rgba.length - 1)}, ${alpha})`;
    rgba = rgba.replace("rgb", "rgba")
  } else {
    let aux = rgba.split(",");
    aux[aux.length - 1] = ` ${alpha})`;
    rgba = aux.join(",")
  }

  return `${rgba}`;
};

export default convertColorToRGBA;
