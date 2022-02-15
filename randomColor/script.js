function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return { r, g, b };
}

function rgbToCSS(rgbObject) {
  let rValue = rgbObject.r.toString();
  let gValue = rgbObject.g.toString();
  let bValue = rgbObject.b.toString();

  let cssString = `rgb(${rValue}, ${gValue}, ${bValue})`;
  console.log(cssString);
  return cssString;
}

function randomBackground() {
  document.querySelector("html").style.backgroundColor = rgbToCSS(randomColor());
}

randomBackground();
