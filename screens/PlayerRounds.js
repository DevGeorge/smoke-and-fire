import React, { useState, useEffect } from "react";
import { Text, View, Alert } from "react-native";
import styles from "../GlobalStyles";
import GameState from "../components/GameState";
import Cards from "../components/Cards";
import { state } from "../GlobalState";
import { useSnapshot } from "valtio";

const PlayerRounds = ({ navigation }) => {
  let snap = useSnapshot(state);
  const handleRestartSamePlayers = () => {
    setCurrentPlayer();
  };
  const handleRestartNewPlayers = () => {
    navigation.naviagte("Number of Players");
  };
  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert("Leave Game?", "Going back restarts the game", [
          { text: "Don't leave", style: "cancel", onPress: () => {} },
          {
            text: "Discard",
            style: "destructive",
            // If the user confirmed, then we dispatch the action we blocked earlier
            // This will continue the action that had triggered the removal of the screen
            onPress: () => {
              state.gameOver = false;
              navigation.dispatch(e.data.action);
            },
          },
        ]);
      }),
    [navigation]
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        padding: 20,
      }}
    >
      <View
        style={{
          flex: 0.3,
          alignItems: "center",
          margin: 50,
          justifyContent: "space-between",
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
        <View style={{ padding: 30 }}>
          <Cards />
        </View>
      </View>
    </View>
  );
};

export default PlayerRounds;
