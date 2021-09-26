import React, { useEffect, useState } from "react";
import { View, Text, Modal, Alert } from "react-native";
import styles from "../GlobalStyles";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import Card from "./Card";
import Button from "../components/Button";

const HighOrLow = (props) => {
  let snap = useSnapshot(state);
  const [modalVisible, setModalVisible] = useState(false);
  const [playerCorrect, setPlayerCorrect] = useState(false);
  const [pickedCard, setPickedCard] = useState("");
  const [selected, setSelected] = useState("");
  const [textColor, setTextColor] = useState("red");
  const translateValue = (value) => {
    switch (value) {
      case "A":
        return 1;
      case "2":
        return 2;
      case "3":
        return 3;
      case "4":
        return 4;
      case "5":
        return 5;
      case "6":
        return 6;
      case "7":
        return 7;
      case "8":
        return 8;
      case "9":
        return 9;
      case "T":
        return 10;
      case "J":
        return 11;
      case "Q":
        return 12;
      case "K":
        return 13;
    }
  };
  useEffect(() => {
    console.log("after picked card high/low " + pickedCard);

    if (
      selected == "Higher" &&
      translateValue(pickedCard.charAt(0)) >
        translateValue(
          snap.allPlayers[snap.currentPlayerIndex].cards[0].charAt(0)
        )
    ) {
      setPlayerCorrect(true);
      state.allPlayers[snap.currentPlayerIndex].cards.push(pickedCard);
      setTextColor("green");
      setModalVisible(true);
    } else if (
      selected == "Lower" &&
      translateValue(pickedCard.charAt(0)) <
        translateValue(
          snap.allPlayers[snap.currentPlayerIndex].cards[0].charAt(0)
        )
    ) {
      setPlayerCorrect(true);
      state.allPlayers[snap.currentPlayerIndex].cards.push(pickedCard);
      setTextColor("green");
      setModalVisible(true);
    } else if (pickedCard != "") {
      setPlayerCorrect(false);
      setTextColor("red");
      setModalVisible(true);
    }
  }, [pickedCard]);

  const selectedHigher = () => {
    setSelected("Higher");
    console.log("before pick card" + pickedCard);
    setPickedCard(state.deck.pop());
  };
  const selectedLower = () => {
    setSelected("Lower");
    console.log("before pick card" + pickedCard);

    setPickedCard(state.deck.pop());
  };
  useEffect(() => {
    return () => {
      console.log("high or low cleaned up");
    };
  }, []);

  const continuePlaying = () => {
    setModalVisible(!modalVisible);
    if (snap.currentPlayerIndex <= snap.allPlayers.length - 2) {
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
      <Button title="Higher" color="#a22c22" onPress={() => selectedHigher()} />
      <Text style={styles.title}> or </Text>
      <Button title="Lower" color="#a22c22" onPress={() => selectedLower()} />
    </View>
  );
};

export default HighOrLow;
