import Player from "./models/Player";
import { proxy } from "valtio";
import { derive, proxyWithComputed } from "valtio/utils";
import { buildRandomDeck } from "./models/Deck";

let state = proxy({
  allPlayers: [new Player(0)],
  currentPlayerIndex: 0,
  numberOfPlayers: 2,
  deck: buildRandomDeck(),
  gameOver: false,
});
export { state };
