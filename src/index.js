/*jshint esversion: 6 */

const BUTTONS = [
  "Nochmal!",
  "Noch eins!",
  "Eins mehr! 😇",
  "Mehr Liebe 😊",
  "Ist das alles?",
  "JA! NOCHMAL!",
  "Weiter!",
  "Ich mag es wenn man mir Komplimente macht, WEITER!",
  "OH! Zu nett. Mehr davon",
  "Einmal noch. :)",
  "Mach weiter.",
  "😍 MÄÄÄÄHRRRRRRR",
];

const COMPLIMENTS = [
  "Ti amo!",
  "Du bist die schönste Frau auf der Welt!",
  "Max mag dich! 🥰",
  "Max mag deine Nase.",
  "Max mag deine Augen.",
  "Du bist wunderschön! 😍",
  "Du hast einen sehr schönen Nachnamen. 😉",
  "Du bist die klügste!",
  "Du bist der tollste Mensch!",
  "Du bist ein guter Mensch!",
  "Ohne dich wäre Max sehr einsam.",
  "Du bist süß.",
  "Du bist die liebevollste Person die es gibt.",
  "Du hast die richtigen Werte.",
  "Zusammen können Max und du alles schaffen!",
  "Du schaffst das!",
  "Es ist schön dich anzusehen. 🤩",
  "Es ist wunderbar mit dir verheiratet zu sein.",
  "Du bist der Lieblingsmensch von Max.",
  "Max ist sehr stolz auf dich.",
  "Cooler Style! 🧢👗",
  "Es macht spaß dir zuzuhören.",
  "Es gibt keinen tolleren Menschen als dich!",
  "Du bist besser als Max in Mathe. 🧮",
  "Du bist lustig. 🥸",
  "Jeder ist neidisch auf deine schönen Wimpern!",
  "Dein Talent fürs zeichnen ist bemerkenswert."
];

const wordsHTML = document.querySelector(".words");
const actionButtonHTML = document.querySelector(".button-action");
const stopButtonHTML = document.querySelector(".button-stop");
const wipeRight = document.getElementById("wiperightid");
const wipeLeft = document.getElementById("wipeleftid");

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

  document.getElementById("mywrapper").style.backgroundColor = newColor;
};

const stopItNow = () => {
  wordsHTML.innerText = "Das wars dann wohl für heute, bis bald! 😘";
  actionButtonHTML.innerText = "NEEEEIN, MEHR!";
  stopButtonHTML.style.display = "none";
  wipeRight.classList.add('wiper-right--on');
  wipeLeft.classList.add('wiper-left--on');
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