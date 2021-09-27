import React, { useEffect, useState } from "react";
import { View, Text, Modal } from "react-native";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import styles from "../GlobalStyles";
import Card from "./Card";
import Button from "../components/Button";

Number.prototype.between = function (a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
  return this > min && this < max;
};
Number.prototype.outsideOf = function (a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
  return this < min || this > max;
};

const BetweenOrOutside = () => {
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
    return value;
  };

  useEffect(() => {
    if (
      selected == "Between" &&
      translateValue(pickedCard.charAt(0)).between(
        translateValue(
          snap.allPlayers[snap.currentPlayerIndex].cards[0].charAt(0)
        ),
        translateValue(
          snap.allPlayers[snap.currentPlayerIndex].cards[1].charAt(0)
        )
      )
    ) {
      setPlayerCorrect(true);
      state.allPlayers[snap.currentPlayerIndex].cards.push(pickedCard);
      setTextColor("green");
      setModalVisible(true);
    } else if (
      selected == "Outside" &&
      translateValue(pickedCard.charAt(0)).outsideOf(
        translateValue(
          snap.allPlayers[snap.currentPlayerIndex].cards[0].charAt(0)
        ),
        translateValue(
          snap.allPlayers[snap.currentPlayerIndex].cards[1].charAt(0)
        )
      )
    ) {
      setPlayerCorrect(true);
      state.allPlayers[snap.currentPlayerIndex].cards.push(pickedCard);
      setTextColor("green");
      setModalVisible(true);
    } else if (pickedCard != "") {
      setPlayerCorrect(false);
      setModalVisible(true);
      setTextColor("red");
    }
  }, [pickedCard]);
  useEffect(() => {
    return () => {};
  }, []);

  const selectedBetween = () => {
    setSelected("Between");
    setPickedCard(state.deck.pop());
  };
  const selectedOutside = () => {
    setSelected("Outside");
    setPickedCard(state.deck.pop());
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
      <View>
        <Button
          title="Between"
          color="#a22c22"
          onPress={() => {
            selectedBetween();
          }}
        />
        <Text style={styles.title}> or </Text>

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
