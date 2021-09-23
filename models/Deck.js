export const buildRandomDeck = () => {
  let cards = buildDeck();
  return randomize(cards);
};
export const build4Decks = () => {
  let cards = [...buildDeck, ...buildDeck(), ...buildDeck(), ...buildDeck()];
  return randomize(cards);
};
const buildDeck = () => {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
  ];
  const suits = ["h", "d", "s", "c"];
  let cards = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      const value = values[j];
      const suit = suits[i];
      cards.push(value + suit);
    }
  }
  return cards;
};
const randomize = (cards) => {
  let array = [...cards];
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
