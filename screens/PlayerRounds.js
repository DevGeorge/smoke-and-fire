import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "../GlobalStyles";
import GameState from "../components/GameState";
import Cards from "../components/Cards";
import { state } from "../GlobalState";
import { useSnapshot } from "valtio";

const PlayerRounds = ({ navigation }) => {
  let snap = useSnapshot(state);

  let arr = [...snap.allPlayers];

  const handleRestartSamePlayers = () => {
    setCurrentPlayer();
  };
  const handleRestartNewPlayers = () => {
    navigation.naviagte("Number of Players");
  };

  return (
    <View
      style={{
        ...styles.container,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "#a22c22",
          textDecorationLine: "underline",
          padding: 10,
        }}
      >
        {snap.allPlayers[snap.currentPlayerIndex].playerName + "'s Turn"}
      </Text>
      <GameState />
      <Cards />
    </View>
  );
};

export default PlayerRounds;
