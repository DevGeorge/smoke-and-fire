class Player {
  constructor(id) {
    this.id = id;
    this.playerName = "";
    this.cards = [];
    this.turn = 0;
  }
  getName() {
    return this.playerName;
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
  getTurn() {
    return this.turn;
  }
}
export default Player;
