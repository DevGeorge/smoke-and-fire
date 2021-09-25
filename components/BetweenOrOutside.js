import React, { useEffect, useState } from "react";
import { View, Button, Text, Modal } from "react-native";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import styles from "../GlobalStyles";
import Card from "./Card";

const BetweenOrOutside = (props) => {
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
      selected == "Between" &&
      translateValue(snap.allPlayers[currentPlayerIndex].cards[0]) >
        translateValue(pickedCard.charAt(0)) >
        translateValue(snap.allPlayers[currentPlayerIndex].cards[1])
    ) {
      setPlayerCorrect(true);
      console.log("smoke in if: " + pickedCard.charAt(1));
      state.allPlayers[snap.currentPlayerIndex].cards.push(pickedCard);
      setModalVisible(true);
    } else if (
      selected == "Outside" &&
      translateValue(pickedCard.charAt(0)) <
        translateValue(snap.allPlayers[snap.currentPlayerIndex].cards[0])
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

  const selectedBetween = () => {
    setSelected("Between");
    setPickedCard(state.deck.pop());
  };
  const selectedOutside = () => {
    setSelected("Outside");
    setPickedCard(state.deck.pop());
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
      <View style={styles.container}>
        <Button
          title="Between"
          color="#a22c22"
          onPress={() => {
            selectedBetween();
          }}
        />
        <Button
          title="Outside of"
          color="#a22c22"
          onPress={() => {
            selectedOutside();
          }}
        />
      </View>
    </View>
  );
};

export default BetweenOrOutside;
