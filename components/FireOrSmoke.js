import React, { useState } from "react";
import { View, Button, Text, Modal } from "react-native";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import styles from "../GlobalStyles";
import Card from "./Card";

const FireOrSmoke = (props) => {
  let snap = useSnapshot(state);
  const [modalVisible, setModalVisible] = useState(false);
  const [pickedCard, setPickedCard] = useState(state.deck.pop());
  const [selected, setSelected] = useState("");
  let playerCorrect = false;
  //Selection Fire, if correct puts into players cards
  const selectedFire = () => {
    setSelected("Fire");
    //Checks card Color
    if (pickedCard.charAt(1) == "d" || pickedCard.charAt(1) == "h") {
      playerCorrect = true;
      state.allPlayers[snap.currentPlayerIndex].cards.push(pickedCard);
    } else {
      playerCorrect = false;
    }
    setModalVisible(true);
  };
  //Selection Smoke, if correct puts into players card
  const selectedSmoke = () => {
    setSelected("Smoke");
    //Checks card Color
    console.log(pickedCard);
    if (
      pickedCard.charAt(1).toLowerCase() == "s" ||
      pickedCard.charAt(1).toLowerCase() == "c"
    ) {
      playerCorrect = true;
      console.log(pickedCard);

      state.allPlayers[snap.currentPlayerIndex].cards.push(pickedCard);
    } else {
      playerCorrect = false;
    }
    setModalVisible(true);
  };
  const continuePlaying = () => {
    setModalVisible(!modalVisible);
    if (playerCorrect) {
      state.allPlayers[snap.currentPlayerIndex].turn++;
    }
    if (snap.currentPlayerIndex <= snap.allPlayers.length - 2) {
      state.currentPlayerIndex++;
    } else {
      state.currentPlayerIndex = 0;
    }
    setPickedCard(state.deck.pop());
  };
  return (
    <View>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.container}>
          <Text style={styles.subTitle}>
            You Selected {selected}. Your selection was
            {playerCorrect ? " correct! " : " wrong! "}
          </Text>
          <Text style={styles.subTitle}> Card you Picked: </Text>
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
      <Button title="Smoke" color="#a22c22" onPress={() => selectedSmoke()} />
      <Text style={styles.title}> or </Text>
      <Button title="Fire" color="#a22c22" onPress={() => selectedFire()} />
    </View>
  );
};

export default FireOrSmoke;
