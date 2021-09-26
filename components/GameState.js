import React from "react";
import { View } from "react-native";
import { useSnapshot } from "valtio";
import { subscribeKey } from "valtio/utils";
import { state } from "../GlobalState";
import Player from "../models/Player";
import BetweenOrOutside from "./BetweenOrOutside";
import FireOrSmoke from "./FireOrSmoke";
import HighOrLow from "./HighOrLow";
import PickTheSuite from "./PickTheSuite";
import GameOver from "./GameOver";

const GameState = ({ navigation }) => {
  let snap = useSnapshot(state);

  const componentToRender = () => {
    console.log(
      "all players: " +
        snap.allPlayers +
        " Current player index: " +
        snap.currentPlayerIndex
    );
    switch (snap.allPlayers[snap.currentPlayerIndex].getTurn()) {
      case 0:
        return <FireOrSmoke />;
      case 1:
        return <HighOrLow />;
      case 2:
        return <BetweenOrOutside />;
      case 3:
        return <PickTheSuite />;
      case 4:
        return <GameOver />;
    }
  };

  return <View>{componentToRender()}</View>;
};
export default GameState;
