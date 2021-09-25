import React, { useState, useEffect } from "react";
import { Text, View, Alert, Image } from "react-native";
import styles from "../GlobalStyles";
import GameState from "../components/GameState";
import Cards from "../components/CardContainer";
import { state } from "../GlobalState";
import { useSnapshot } from "valtio";
import CardContainer from "../components/CardContainer";

const PlayerRounds = ({ navigation }) => {
  const snap = useSnapshot(state);

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
          <CardContainer />
        </View>
      </View>
    </View>
  );
};

export default PlayerRounds;
