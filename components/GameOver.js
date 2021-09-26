import React, {useState} from "react";
import { View, Text, Modal} from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import styles from "../GlobalStyles"
import Button from "../components/Button";

const GameOver = ( { navigation }) => {
  let snap = useSnapshot(state);
  const [modalVisible] = useState(true);
const continuePlaying = () =>{
  state.allPlayers = []
 navigation.navigate("Home")
}
  return (
    <View style={{ flex: 1 }}>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.container}>
          <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
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
