import { PALAVRAS } from "./palavras.js";
import { PALAVRAS_VALIDAS } from "./palavras_validas.js";

const numero_de_tentativas = 6;
let guessesRemaining = numero_de_tentativas;
let currentGuess = [];
let proximaLetra = 0;
let palavra_gabarito = PALAVRAS_VALIDAS[Math.floor(Math.random() * PALAVRAS_VALIDAS.length)];

console.log(palavra_gabarito);


function initBoard() {
  let board = document.getElementById("game-board");

  for (let i = 0; i < numero_de_tentativas; i++) {
    let row = document.createElement("div");
    row.className = "letter-row";

    for (let j = 0; j < 5; j++) {
      let box = document.createElement("div");
      box.className = "letter-box";
      row.appendChild(box);
    }

    board.appendChild(row);
  }
}

function shadeKeyBoard(letter, color) {
  for (const elem of document.getElementsByClassName("keyboard-button")) {
    if (elem.textContent === letter) {
      let oldColor = elem.style.backgroundColor;
      if (oldColor === "green") {
        return;
      }

      if (oldColor === "yellow" && color !== "green") {
        return;
      }

      elem.style.backgroundColor = color;
      break;
    }
  }
}

function deleteLetter() {
  let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
  let box = row.children[proximaLetra - 1];
  box.textContent = "";
  box.classList.remove("filled-box");
  currentGuess.pop();
  console.log(currentGuess);
  proximaLetra -= 1;
}

function checkGuess() {
  let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
  let guessString = "";
  let rightGuess = Array.from(palavra_gabarito);

  for (const val of currentGuess) {
    console.log(currentGuess);
    guessString += val;
  }

  if (guessString.length != 5) {
    toastr.error("Quantidade de letras insuficiente");
    return;
  }

  if (!PALAVRAS.includes(guessString)) {
    toastr.error("A palavra não está na lista de palavras válidas!");
    return;
  }

  var letterColor = ["gray", "gray", "gray", "gray", "gray"];

  //check green
  for (let i = 0; i < 5; i++) {
    if (rightGuess[i] == currentGuess[i]) {
      console.log(currentGuess);
      letterColor[i] = "green";
      rightGuess[i] = "#";
    }
  }

  //check yellow
  //checking guess letters
  for (let i = 0; i < 5; i++) {
    if (letterColor[i] == "green") continue;

    //checking right letters
    for (let j = 0; j < 5; j++) {
      if (rightGuess[j] == currentGuess[i]) {
        console.log(currentGuess);
        letterColor[i] = "yellow";
        rightGuess[j] = "#";
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    let box = row.children[i];
    let delay = 250 * i;
    setTimeout(() => {
      //flip box
      animateCSS(box, "flipInX");
      //shade box
      box.style.backgroundColor = letterColor[i];
      shadeKeyBoard(guessString.charAt(i) + "", letterColor[i]);
    }, delay);
  }

  if (guessString === palavra_gabarito) {
    toastr.success("Parabéns você acertoou!!");
    guessesRemaining = 0;
    return;
  } else {
    guessesRemaining -= 1;
    currentGuess = [];
    console.log(currentGuess);
    proximaLetra = 0;

    if (guessesRemaining === 0) {
      toastr.error("Fim de jogo!");
      toastr.info(`A palavra correta era: "${palavra_gabarito}"`);
    }
  }
}

function insertLetter(teclaClicada) {
  if (proximaLetra === 5) {
    return;
  }
  teclaClicada = teclaClicada.toLowerCase();

  let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
  let box = row.children[proximaLetra];
  animateCSS(box, "pulse");
  box.textContent = teclaClicada;
  box.classList.add("filled-box");
  currentGuess.push(teclaClicada);
  console.log(currentGuess);
  proximaLetra += 1;
}

const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    // const node = document.querySelector(element);
    const node = element;
    node.style.setProperty("--animate-duration", "0.3s");

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

document.addEventListener("keyup", (e) => {
  if (guessesRemaining === 0) {
    return;
  }

  let teclaClicada = String(e.key);
  if (teclaClicada === "Backspace" && proximaLetra !== 0) {
    deleteLetter();
    return;
  }

  if (teclaClicada === "Enter") {
    checkGuess();
    return;
  }

  let found = teclaClicada.match(/[a-z]/gi);
  if (!found || found.length > 1) {
    return;
  } else {
    insertLetter(teclaClicada);
  }
});

document.getElementById("keyboard-cont").addEventListener("click", (e) => {
  const target = e.target;

  if (!target.classList.contains("keyboard-button")) {
    return;
  }
  let key = target.textContent;

  if (key === "Del") {
    key = "Backspace";
  }

  document.dispatchEvent(new KeyboardEvent("keyup", { key: key }));
});

initBoard();