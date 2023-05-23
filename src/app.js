/* eslint-disable no-console */
const getCardButton = document.getElementById("get-card");
const shuffleCardButton = document.getElementById("shuffle-card");
const title = document.querySelector("h1");
const card = document.getElementById("card");
const suitElement = document.createElement("p");
const valueElement = document.createElement("p");
const invertedSuitElement = document.createElement("p");

suitElement.className = "text-left h3 pb-4";
valueElement.className = "text-center h1 py-5";
invertedSuitElement.className = "text-right h3 pb-4";
invertedSuitElement.style.transform = "rotate(180deg)";

card.append(suitElement);
card.append(valueElement);
card.append(invertedSuitElement);

const getDeck = () => {
  const cardSuits = ["♦", "♥", "♠", "♣"];
  const cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let generatedDeck = cardSuits.flatMap(suits => {
    return cardValues.flatMap(values => {
      return { value: values, suit: suits };
    });
  });

  return generatedDeck;
};

const shuffleCards = cardsDeck => {
  for (let i = cardsDeck.length - 1; i > 0; i--) {
    let shuffler = Math.floor(Math.random() * (i + 1));
    let auxCard = cardsDeck[i];
    cardsDeck[i] = cardsDeck[shuffler];
    cardsDeck[shuffler] = auxCard;
  }

  return cardsDeck;
};

const renderCard = cardsDeck => {
  if (cardsDeck.length === 0) {
    title.textContent = "There're no cards left";
    suitElement.textContent = "★";
    valueElement.textContent = "🤡";
    invertedSuitElement.textContent = "★";
    return;
  }

  title.textContent = "This is your card";
  const { suit, value } = cardsDeck.pop();
  suitElement.textContent = suit;
  valueElement.textContent = value;
  invertedSuitElement.textContent = suit;
  card.classList.remove("text-danger", "text-dark");
  suit === "♦" || suit === "♥"
    ? card.classList.add("text-danger")
    : card.classList.add("text-dark");
};

let newDeck = getDeck();

window.onload = function() {
  shuffleCards(newDeck);
  renderCard(newDeck);
};

getCardButton.addEventListener("click", () => {
  renderCard(newDeck);
});

shuffleCardButton.addEventListener("click", () => {
  newDeck = getDeck();
  shuffleCards(newDeck);
  renderCard(newDeck);
});
