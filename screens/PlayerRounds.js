import React, { useEffect } from "react";
import { Text, View, Image } from "react-native";
import { state } from "../GlobalState";
import { useSnapshot } from "valtio";
import CardContainer from "../components/CardContainer";
import BetweenOrOutside from "../components/BetweenOrOutside";
import FireOrSmoke from "../components/FireOrSmoke";
import HighOrLow from "../components/HighOrLow";
import PickTheSuite from "../components/PickTheSuite";

const PlayerRounds = ({ navigation }) => {
  const snap = useSnapshot(state);
  const componentToRender = () => {
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
        return navigation.navigate("Game Over");
    }
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "black",
        padding: 20,
      }}
    >
      <View
        style={{
          flex: 0.1,
          alignItems: "center",
          margin: 10,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: "#a22c22",
            textDecorationLine: "underline",
            fontWeight: "bold",
          }}
        >
          {snap.allPlayers[snap.currentPlayerIndex].playerName + "'s Turn"}
        </Text>
      </View>
      <View style={{ flex: 0.7 }}>{componentToRender()}</View>
      <View style={{ flex: 0.2, padding: 30 }}>
        <CardContainer />
      </View>
    </View>
  );
};

export default PlayerRounds;
