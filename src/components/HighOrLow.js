import React, { useEffect, useState } from "react";
import { View, Button, Text, Modal, Alert } from "react-native";
import styles from "../GlobalStyles";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import Card from "./Card";

const HighOrLow = (props) => {
  let snap = useSnapshot(state);
  const [modalVisible, setModalVisible] = useState(false);
  const [playerCorrect, setPlayerCorrect] = useState(false);
  const [pickedCard, setPickedCard] = useState("");
  const [selected, setSelected] = useState("");
  const translateValue = (value) => {
    switch (value.toLowerCase()) {
      case "A":
        return 1;
      case "J":
        return 11;
      case "Q":
        return 12;
      case "K":
        return 13;
    }
    return value;
  };
  useEffect(() => {
    console.log("After new card " + pickedCard);
    if (
      selected == "Higher" &&
      translateValue(pickedCard.charAt(0)) >
        translateValue(snap.allPlayers[snap.currentPlayerIndex].cards[0])
    ) {
      setPlayerCorrect(true);
      console.log("Higher in If: " + pickedCard.charAt(0));
      state.allPlayers[snap.currentPlayerIndex].cards.push(pickedCard);
      setModalVisible(true);
    } else if (
      selected == "Lower" &&
      translateValue(pickedCard.charAt(0)) <
        translateValue(snap.allPlayers[snap.currentPlayerIndex].cards[0])
    ) {
      setPlayerCorrect(true);
      console.log(
        "Lower: Picked: " +
          pickedCard.charAt(0) +
          " current: " +
          snap.allPlayers[snap.currentPlayerIndex].cards[0]
      );
      state.allPlayers[snap.currentPlayerIndex].cards.push(pickedCard);
      setModalVisible(true);
    } else if (selected != "") {
      setPlayerCorrect(false);
      setModalVisible(true);
    }
  }, [pickedCard]);

  const selectedHigher = () => {
    setSelected("Higher");
    setPickedCard(state.deck.pop());
  };
  const selectedLower = () => {
    setSelected("Lower");
    setPickedCard(state.deck.pop());
  };

  const continuePlaying = () => {
    setModalVisible(false);
    if (playerCorrect) {
      state.allPlayers[snap.currentPlayerIndex].turn++;
    }
    if (snap.currentPlayerIndex <= snap.allPlayers.length - 2) {
      state.currentPlayerIndex++;
    } else {
      state.currentPlayerIndex = 0;
    }
  };
  return (
    <View>
      <Modal animationType="slide" visible={modalVisible} transparent={false}>
        <View style={styles.container}>
          <Text style={styles.subTitle}>
            You Selected {selected}. Your selection was{" "}
            {playerCorrect ? "correct! " : "wrong! "}
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
      <Button title="Higher" color="#a22c22" onPress={() => selectedHigher()} />
      <Text style={styles.title}> or </Text>
      <Button title="Lower" color="#a22c22" onPress={() => selectedLower()} />
    </View>
  );
};

export default HighOrLow;
