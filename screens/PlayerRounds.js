import React, { useState, useEffect } from "react";
import { Text, View, Alert, Image } from "react-native";
import GameState from "../components/GameState";
import { state } from "../GlobalState";
import { useSnapshot } from "valtio";
import CardContainer from "../components/CardContainer";

const PlayerRounds = ({ navigation }) => {
  const snap = useSnapshot(state);

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
            fontWeight:"bold"
            
          }}
        >
          {snap.allPlayers[snap.currentPlayerIndex].playerName + "'s Turn"}
        </Text>
        </View>
        <View style={{flex:0.7}}>
        <GameState />
        </View>
        <View style={{ flex:0.2,padding: 30}}>
          <CardContainer />
        </View>
      
    </View>
  );
};

export default PlayerRounds;
