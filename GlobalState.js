import Player from "./models/Player";
import { proxy } from "valtio";
import { buildRandomDeck } from "./models/Deck";

export let state = proxy({
  allPlayers: [],
  currentPlayerIndex: 0,
  numberOfPlayers: 2,
  deck: buildRandomDeck(),
  gameOver: false,
});
