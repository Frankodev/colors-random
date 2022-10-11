/** @format */

// 1.- declarar las variables que vamos a utilizar en el programa
const btn = document.getElementById("btn");
const colorRandom = document.getElementById("colorRandom");
const colorHexa = document.getElementById("colorhexa");

// 2.- tener una colección (Array) de colores
let colectionColors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

// 3.- crear una función que tome un color al azar de la colección de colores y aplicar ese color al div contenedor del color "colorRandom"
const changeColor = () => {
  // 3.1.- extraer al azar un color de la colección de colores
  let indColor;
  let color;

  colectionColors.forEach((element, ind) => {
    indColor = Math.floor(Math.random() * ind);
    color = colectionColors[indColor];
    // bonus - colorHexa es el span en donde se mostrará el código en hexadecimal del color que se mostrará en el div "colorRandom".
    // innerText - agrega el texto del código hexadecimal (#FFFFFF)
    colorHexa.innerText = `${color}`;
    // style.color - cambia el color al texto del span
    colorHexa.style.color = `${color}`;
  });
  // console.log - para ver en consola el evento del click del btn
  console.log("ind color", indColor);
  console.log("color hex", color);
  // 3.2.- aplicar el color extraido al azar, al div colorRandom
  colorRandom.style.backgroundColor = `${color}`;
};

// 4.- llamar a la función que cambia el color al hacer click en el "btn Change Color"
// 4.1.- escuchar el evento del click del btn
// 4.2.- llamar a la función que hace el cambio del color
btn.addEventListener("click", changeColor);

//NOTAS - LECTURAS

// función Math.floor()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

// función Math.random()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
