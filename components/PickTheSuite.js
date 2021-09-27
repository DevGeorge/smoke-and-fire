import React, { useEffect, useState } from "react";
import { View, Text, Modal, Alert } from "react-native";
import styles from "../GlobalStyles";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import Card from "./Card";
import Button from "../components/Button";

const PickTheSuite = (props) => {
  let snap = useSnapshot(state);
  const [modalVisible, setModalVisible] = useState(false);
  const [playerCorrect, setPlayerCorrect] = useState(false);
  const [pickedCard, setPickedCard] = useState("");
  const [selected, setSelected] = useState("");
  const [textColor, setTextColor] = useState("red");
  useEffect(() => {
    console.log("after picked card high/low " + pickedCard);

    if (selected == "Clover" && pickedCard.charAt(1) == "c") {
      setPlayerCorrect(true);
      state.allPlayers[snap.currentPlayerIndex].cards.push(pickedCard);
      setTextColor("green");
      setModalVisible(true);
    } else if (selected == "Heart" && pickedCard.charAt(1) == "h") {
      setPlayerCorrect(true);
      state.allPlayers[snap.currentPlayerIndex].cards.push(pickedCard);
      setTextColor("green");
      setModalVisible(true);
    } else if (selected == "Diamond" && pickedCard.charAt(1) == "d") {
      setPlayerCorrect(true);
      state.allPlayers[snap.currentPlayerIndex].cards.push(pickedCard);
      setTextColor("green");
      setModalVisible(true);
    } else if (selected == "Spade" && pickedCard.charAt(1) == "s") {
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

  const selectedDiamond = () => {
    setSelected("Diamond");
    setPickedCard(state.deck.pop());
  };
  const selectedHeart = () => {
    setSelected("Heart");

    setPickedCard(state.deck.pop());
  };
  const selectedSpade = () => {
    setSelected("Spade");
    setPickedCard(state.deck.pop());
  };
  const selectedClover = () => {
    setSelected("Clover");
    setPickedCard(state.deck.pop());
  };
  const continuePlaying = () => {
    setModalVisible(false);

    if (snap.currentPlayerIndex <= snap.allPlayers.length - 2) {
      if (playerCorrect) {
        state.allPlayers[snap.currentPlayerIndex].turn++;
      } else {
        state.currentPlayerIndex++;
      }
      console.log("Reached end of continue");
    } else {
      if (playerCorrect) {
        state.allPlayers[snap.currentPlayerIndex].turn++;
      } else {
        state.currentPlayerIndex = 0;
      }
      console.log("Reached end of continue");
    }
  };
  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", margin: 10 }}>
      <Text style={{ ...styles.subTitle }}> Pick one: </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          margin: 20,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Button title="Hearts" style={{}} onPress={() => selectedHeart()} />
        <Button title="Spades" onPress={() => selectedSpade()} />
        <Button title="Diamonds" onPress={() => selectedDiamond()} />
        <Button title="Clovers" onPress={() => selectedClover()} />
      </View>
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

export default PickTheSuite;
