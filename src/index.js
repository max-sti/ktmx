const BUTTONS = [
  "Nochmal!",
  "Noch eins!",
  "Eins mehr! 😇",
  "Mehr Liebe 😊",
  "Ist das alles?",
  "JA! NOCHMAL!",
  "Weiter!"
  "Ich mag es wenn man mir Komplimente macht, WEITER!",
  "OH! Zu nett. Mehr davon",
  "Einmal noch. :)",
  "Mach weiter."
  "😍 GO GO GO",
];

const COMPLIMENTS = [
  "Ti amo!",
  "Du bist schön!",
  "Ich mag dich!",
  "Ich mag deine Nase.",
  "Ich mag deine Augen.",
  "Du bist wunderschön!",
  "Ich liebe dich säääääähr!",
];

const wordsHTML = document.querySelector(".words");
const actionButtonHTML = document.querySelector(".button-action");
const stopButtonHTML = document.querySelector(".button-stop");

const createRandomIndex = (length) => {
  return Math.floor(Math.random() * length);
};

const generateCompliment = () => {
  const index = createRandomIndex(COMPLIMENTS.length);
  const text = COMPLIMENTS[index];

  wordsHTML.innerText = text;
};

const generateButton = () => {
  const index = createRandomIndex(BUTTONS.length);
  const text = BUTTONS[index];

  actionButtonHTML.innerText = text;
};

const generateColor = () => {
  const hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let newColor = "#";

  for (let i = 0; i < 6; i++) {
    var randomIndex = Math.floor(Math.random() * hexValues.length);
    var hexValue = hexValues[randomIndex];
    newColor += hexValue;
  }

  document.body.style.backgroundColor = newColor;
};

const stopItNow = () => {
  wordsHTML.innerText = "Das wars dann wohl für heute, bis bald! 😘";
  actionButtonHTML.innerText = "NEEEEIN, MEHR!";
  stopButtonHTML.style.display = "none";
};

const goForTheComplimentAndStyle = () => {
  generateColor();
  generateCompliment();
  generateButton();
  if (stopButtonHTML.style.display === "none") {
    stopButtonHTML.style.display = "inline-block";
  }
};

const init = () => {
  goForTheComplimentAndStyle();
  actionButtonHTML.addEventListener("click", goForTheComplimentAndStyle);
  stopButtonHTML.addEventListener("click", stopItNow);
};

init();