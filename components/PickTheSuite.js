import React, { useEffect, useState } from "react";
import { View, Button, Text, Modal, Alert } from "react-native";
import styles from "../GlobalStyles";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import Card from "./Card";

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
    console.log("before pick card" + pickedCard);
    setPickedCard(state.deck.pop());
  };
  const selectedHeart = () => {
    setSelected("Heart");
    console.log("before pick card" + pickedCard);

    setPickedCard(state.deck.pop());
  };
  const selectedSpade = () => {
    setSelected("Spade");
    console.log("before pick card" + pickedCard);
    setPickedCard(state.deck.pop());
  };
  const selectedClover = () => {
    setSelected("Clover");
    console.log("before pick card" + pickedCard);

    setPickedCard(state.deck.pop());
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
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
      <View style={{ width: "50%" }}>
        <Button
          title="Hearts"
          color="#a22c22"
          onPress={() => selectedHeart()}
        />
        <Button
          title="Spades"
          color="#a22c22"
          onPress={() => selectedSpade()}
        />
        <Button
          title="Diamonds"
          color="#a22c22"
          onPress={() => selectedDiamond()}
        />
        <Button
          title="Clovers"
          color="#a22c22"
          onPress={() => selectedClover()}
        />
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
