import React from "react";
import { View, Button, Text } from "react-native";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import styles from "../GlobalStyles";

const FireOrSmoke = (props) => {
  let snap = useSnapshot(state);
  let playerName = "";

  const selectedFire = () => {
    state.allPlayers[snap.currentPlayerIndex].pickCard(state.deck.pop());
  };
  const selectedSmoke = () => {};
  const pickCard = () => {};
  return (
    <View>
      <Button title="Smoke" color="#a22c22" onPress={() => selectedSmoke()} />
      <Text style={styles.title}> or </Text>
      <Button title="Fire" color="#a22c22" onPress={() => selectedFire()} />
    </View>
  );
};

export default FireOrSmoke;
