import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import styles from "../GlobalStyles";
import Card from "./Card";
const CardContainer = () => {
  let snap = useSnapshot(state);
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "#a22c22" }}> Current Hand: </Text>
      <View style={styles.cardContainer}>
        <Card card={snap.allPlayers[snap.currentPlayerIndex].cards[0]} />
        <Card card={snap.allPlayers[snap.currentPlayerIndex].cards[1]} />
        <Card card={snap.allPlayers[snap.currentPlayerIndex].cards[2]} />
        <Card card={snap.allPlayers[snap.currentPlayerIndex].cards[3]} />
      </View>
    </View>
  );
};
export default CardContainer;
