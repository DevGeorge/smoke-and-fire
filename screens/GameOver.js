import React, { useState, useEffect } from "react";
import { View, Text, Modal, Dimensions, DevSettings } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import styles from "../GlobalStyles";
import Button from "../components/Button";
import Player from "../models/Player";
// Displays Modal with confetti
const GameOver = ({ navigation }) => {
  let snap = useSnapshot(state);
  const widthGet = Dimensions.get("screen") * 0.5 - 10;
  const [modalVisible] = useState(true);
  const continuePlaying = () => {
    state.allPlayers = [new Player(0)];
    navigation.navigate("Home");
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Button title="" />
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.container}>
          <ConfettiCannon count={200} origin={{ x: widthGet, y: -60 }} />
          <Text style={styles.title}>
            Congratulations on Winning the Game{" "}
            {snap.allPlayers[snap.currentPlayerIndex].playerName} !!!
          </Text>
          <Button
            title="Continue"
            color="#a22c22"
            onPress={() => {
              continuePlaying();
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default GameOver;
