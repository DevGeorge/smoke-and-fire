import * as React from "react";
import { useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import Player from "../models/Player";
import { state } from "../GlobalState";
import { useSnapshot } from "valtio";
import styles from "../GlobalStyles";
const PlayerInformation = ({ navigation }) => {
  let snap = useSnapshot(state);
  let numb = snap.numberOfPlayers;
  let arr = [...getPlayers(numb)];
  const [inputField, setInputField] = useState(arr);

  const checkInputs = () => {
    let nameFilled = true;
    inputField.forEach((player) => {
      if (!player.isNameFilled()) {
        nameFilled = false;
        return;
      }
    });
    if (nameFilled) {
      state.allPlayers = [...inputField];
      navigation.navigate("Game Start");
    } else {
      alert("Fill in player names");
    }
  };
  const handleChangeInput = (index, text) => {
    const names = [...inputField];
    names[index].playerName = text;
    setInputField(names);
  };

  return (
    <View
      style={{
        backgroundColor: "black",
        alignItems: "center",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <Text style={styles.subTitle}>Write down the players names below</Text>
      <ScrollView
        style={{
          margin: 10,
          width: "40%",
        }}
      >
        {inputField.map((input, index) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              margin: 10,
            }}
            key={index}
          >
            <Text style={{ color: "#a22c22", fontSize: 20 }}>
              {index + 1 + ": "}
            </Text>
            <TextInput
              value={input.playerName}
              style={{
                flex: 1,
                color: "#a22c22",
                margin: 8,
              }}
              onChangeText={(text) => handleChangeInput(index, text)}
            />
          </View>
        ))}
        <Button
          title="Start Game"
          color="#a22c22"
          onPress={() => checkInputs()}
        />
      </ScrollView>
    </View>
  );
};

const getPlayers = (num) => {
  let players = [];
  for (let index = 0; index < num; index++) {
    players.push(new Player(index));
  }
  return players;
};

export default PlayerInformation;
