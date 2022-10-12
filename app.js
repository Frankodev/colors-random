/** @format */
console.log("Hello devs!");

//importando el modulo de código que almacena el listado de colores desde el archivo 'colorsList.js'
import { colorsList } from "./colorsList.js";

// 1.- declarar las variables que vamos a utilizar en el programa
const btn = document.getElementById("btn");
const colorRandom = document.getElementById("colorRandom");
const colorHexa = document.getElementById("colorhexa");
const copy = document.getElementById("copy");

// 2.- tener una colección (Array) de colores
let colectionColors = colorsList;

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

// 5.- copiar código hexadecimalal hacer click sobre el
colorHexa.addEventListener("click", copyPapper);
// 5.1.- función que copia el código hexadecimal del color al portapapeles
function copyPapper(elementCopy) {
  let input = document.createElement("input");
  input.setAttribute("value", elementCopy.target.innerText);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);

  // aparece mensaje copy
  copy.classList.add("active");

  // remove mensaje copy
  setTimeout(() => {
    copy.classList.remove("active");
  }, 990);
}

//NOTAS - LECTURAS

// función Math.floor()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

// función Math.random()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
