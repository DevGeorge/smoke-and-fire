import React from "react";
import { View } from "react-native";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import Player from "../models/Player";
import BetweenOrOutside from "./BetweenOrOutside";
import FireOrSmoke from "./FireOrSmoke";
import HighOrLow from "./HighOrLow";
import PickTheSuite from "./PickTheSuite";

const GameState = (props) => {
  let snap = useSnapshot(state);

  const componentToRender = () => {
    switch (snap.allPlayers[snap.currentPlayerIndex].turn) {
      case 0:
        return <FireOrSmoke />;
      case 1:
        return <HighOrLow />;
      case 2:
        return <BetweenOrOutside />;
      case 3:
        return <PickTheSuite />;
    }
  };

  return <View>{componentToRender()}</View>;
};
export default GameState;
