/* eslint-disable no-console */
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

  let newDeck = cardSuits.flatMap(suits => {
    return cardValues.flatMap(values => {
      return { value: values, suit: suits };
    });
  });

  return newDeck;
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
  const { suit, value } = cardsDeck[cardsDeck.length - 1];
  const card = document.getElementById("card");

  const suitElement = document.createElement("p");
  suitElement.textContent = `${suit}`;
  suitElement.className = "text-left h1 pb-5";
  card.append(suitElement);

  const valueElement = document.createElement("p");
  valueElement.textContent = `${value}`;
  valueElement.className = "text-center h1 py-5";
  card.append(valueElement);

  const invertedSuitElement = document.createElement("p");
  invertedSuitElement.textContent = `${suit}`;
  invertedSuitElement.style.transform = "rotate(180deg)";
  invertedSuitElement.className = "text-right h1 pt-5";
  card.append(invertedSuitElement);

  const colorSelect = suit => {
    return suit === "♦" || suit === "♥" ? "red" : "black";
  };

  card.style.color = colorSelect(suit);
};

window.onload = function() {
  const newDeck = getDeck();
  shuffleCards(newDeck);
  renderCard(newDeck);
};
