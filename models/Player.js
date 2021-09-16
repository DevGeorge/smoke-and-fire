class Player {
  constructor(id) {
    this.id = id;
    this.playerName = "";
    this.cards = [""];
  }
  setName(name) {
    return (this.playerName = name);
  }
  getName() {
    return this.playerName;
  }
  getTurn() {
    return this.cards.length;
  }
  isNameFilled() {
    let bool = false;
    if (this.playerName != "") {
      bool = true;
    }
    return bool;
  }
  getCards() {
    return this.cards;
  }
  pickCard(card) {
    this.cards.push(card);
  }
}
export default Player;
