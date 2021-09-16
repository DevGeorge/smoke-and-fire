import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../GlobalStyles";

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smoke & Fire</Text>
      <View style={styles.startLabel}>
        <Button
          title="Start Game"
          color="#a22c22"
          onPress={() => navigation.navigate("Number of Players")}
        />
      </View>
      <View style={styles.startLabel}>
        <Button
          title="How to Play"
          color="#a22c22"
          onPress={() => console.log("How to play")}
        />
      </View>
    </View>
  );
};

export default StartScreen;
