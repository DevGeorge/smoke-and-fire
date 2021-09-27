import React, { useState, useEffect } from "react";
import { View, Text, Modal, Dimensions } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import styles from "../GlobalStyles";
import Button from "../components/Button";
import Player from "../models/Player";
// Displays Modal with confetti
const GameOver = ({ navigation }) => {
  let snap = useSnapshot(state);
  const [modalVisible] = useState(true);
  const continuePlaying = () => {
    navigation.popToTop();
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.container}>
          <ConfettiCannon count={200} origin={{ x: 200, y: -60 }} />
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
