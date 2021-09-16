import React from "react";
import { Button, Text, View } from "react-native";
import InputSpinner from "react-native-input-spinner";
import styles from "../GlobalStyles";
import { state } from "../GlobalState";
const NumberOfPlayers = ({ navigation }) => {
  let players = 2;
  return (
    <View
      style={{
        ...styles.container,
        justifyContent: "space-between",
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          margin: 40,
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>How Many Players are in the game?</Text>
        <InputSpinner
          max={9}
          min={2}
          textColor="#a22c22"
          fontSize={40}
          width={200}
          color="#a22c22"
          onChange={(num) => {
            state.numberOfPlayers = num;
          }}
        />
        <Button
          title="Continue"
          color="#a22c22"
          onPress={() => {
            navigation.navigate("Player Information", { num: players });
          }}
        />
      </View>
    </View>
  );
};

export default NumberOfPlayers;
