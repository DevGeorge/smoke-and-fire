import React from "react";
import { View, Text, Modal } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
const GameOver = () => {
  let snap = useSnapshot(state);
  return (
    <View style={{ flex: 1 }}>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.container}>
          <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
          <Text style={title}>
            Congratulations on Winning the Game{" "}
            {snap.allPlayers[snap.currentPlayerIndex].playerName} !!!
          </Text>
          <Card card={pickedCard} />
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
