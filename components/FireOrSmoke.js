import React, { useEffect, useState } from "react";
import { View, Button, Text, Modal } from "react-native";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import styles from "../GlobalStyles";
import Card from "./Card";

const FireOrSmoke = (props) => {
  let snap = useSnapshot(state);
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState("");
  const [playerCorrect, setPlayerCorrect] = useState(false);
  const [pickedCard, setPickedCard] = useState("");

  //Selection Fire, if correct puts into players cards

  useEffect(() => {
    console.log("After new card " + pickedCard);
    if (
      selected == "Smoke" &&
      (pickedCard.charAt(1) == "s" || pickedCard.charAt(1) == "c")
    ) {
      setPlayerCorrect(true);
      console.log("smoke in if: " + pickedCard.charAt(1));
      state.allPlayers[snap.currentPlayerIndex].cards.push(pickedCard);
      setModalVisible(true);
    } else if (
      selected == "Fire" &&
      (pickedCard.charAt(1) == "d" || pickedCard.charAt(1) == "h")
    ) {
      setPlayerCorrect(true);
      console.log("fire in if: " + pickedCard.charAt(1));
      state.allPlayers[snap.currentPlayerIndex].cards.push(pickedCard);
      setModalVisible(true);
    } else if (selected != "") {
      setPlayerCorrect(false);
      setModalVisible(true);
    }
  }, [pickedCard]);
  const selectedFire = () => {
    setSelected("Fire");
    //Checks card Color
    console.log(pickedCard.charAt(1));
    setPickedCard(state.deck.pop());
  };
  //Selection Smoke, if correct puts into players card
  const selectedSmoke = () => {
    setSelected("Smoke");
    console.log("before new card " + pickedCard);
    setPickedCard(state.deck.pop());
    //Checks card Color
  };
  const continuePlaying = () => {
    setModalVisible(!modalVisible);

    if (snap.currentPlayerIndex <= snap.allPlayers.length - 2) {
      if (playerCorrect) {
        state.allPlayers[snap.currentPlayerIndex].turn++;
      }
      state.currentPlayerIndex++;
    } else {
      if (playerCorrect) {
        state.allPlayers[snap.currentPlayerIndex].turn++;
      }
      state.currentPlayerIndex = 0;
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
