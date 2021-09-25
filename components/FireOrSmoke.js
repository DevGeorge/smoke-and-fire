import React, { useEffect, useState } from "react";
import { View, Button, Text, Modal } from "react-native";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import styles from "../GlobalStyles";
import Card from "./Card";

const FireOrSmoke = () => {
  let snap = useSnapshot(state, { sync: true });
  const [modalVisible, setModalVisible] = useState(false);
  const [playerCorrect, setPlayerCorrect] = useState(false);
  const [pickedCard, setPickedCard] = useState("");
  const [selected, setSelected] = useState("");
  const [textColor, setTextColor] = useState("red");
  //Selection Fire, if correct puts into players cards

  useEffect(() => {
    console.log("after picked card smoke/fire " + pickedCard);
    if (
      selected == "Smoke" &&
      (pickedCard.charAt(1) == "s" || pickedCard.charAt(1) == "c")
    ) {
      setPlayerCorrect(true);
      state.allPlayers[snap.currentPlayerIndex].cards.push(pickedCard);
      setModalVisible(true);
      setTextColor("green");
    } else if (
      selected == "Fire" &&
      (pickedCard.charAt(1) == "d" || pickedCard.charAt(1) == "h")
    ) {
      setPlayerCorrect(true);
      state.allPlayers[snap.currentPlayerIndex].cards.push(pickedCard);
      setModalVisible(true);
      setTextColor("green");
    } else if (pickedCard != "") {
      setPlayerCorrect(false);
      setModalVisible(true);
      setTextColor("red");
    }
  }, [pickedCard]);
  const selectedFire = () => {
    setSelected("Fire");
    //Checks card Color
    setPickedCard(state.deck.pop());
  };
  //Selection Smoke, if correct puts into players card
  const selectedSmoke = () => {
    setSelected("Smoke");
    setPickedCard(state.deck.pop());
    //Checks card Color
  };
  const continuePlaying = () => {
    setModalVisible(!modalVisible);
    setPickedCard("");
    if (snap.currentPlayerIndex < snap.allPlayers.length - 2) {
      if (playerCorrect) {
        state.allPlayers[snap.currentPlayerIndex].turn++;
      }
      state.currentPlayerIndex++;
      console.log("Reached end of continue");
    } else {
      if (playerCorrect) {
        state.allPlayers[snap.currentPlayerIndex].turn++;
      }
      state.currentPlayerIndex = 0;
      console.log("Reached end of continue");
    }
  };
  return (
    <View>
      <Button title="Smoke" color="#a22c22" onPress={() => selectedSmoke()} />
      <Text style={styles.title}> or </Text>
      <Button title="Fire" color="#a22c22" onPress={() => selectedFire()} />
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.container}>
          <Text style={styles.subTitle}>
            You Selected {selected}. Your selection was
          </Text>
          <Text style={{ ...styles.title, color: textColor }}>
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
    </View>
  );
};

export default FireOrSmoke;
