import { View, Text } from "react-native";
import React, { useState } from "react";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import styles from "../GlobalStyles";

const CardContainer = (props) => {
  let snap = useSnapshot(state);
  state.allPlayers[state.currentPlayerIndex].cards.push("a2");
  console.log(snap.allPlayers[snap.currentPlayerIndex].cards);
  const showCards = () => {
    return (
      <View style={styles.cardContainer}>
        {snap.allPlayers[snap.currentPlayerIndex].cards.forEach((cardIndex) => (
          <Text style={{ color: "red" }}>
            {snap.allPlayers[snap.currentPlayerIndex].cards[cardIndex]}
          </Text>
        ))}
      </View>
    );
  };
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "#a22c22" }}> Current Hand: </Text>
      {showCards()}
    </View>
  );
};
export default CardContainer;
