import React, { useState } from "react";
import { Text, View, Modal, ScrollView } from "react-native";
import styles from "../GlobalStyles";
import Button from "../components/Button";

const StartScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const getInformation = () => {
    setModalVisible(false);
    navigation.navigate("Number of Players");
  };
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
      }}
    >
      <View
        style={{
          ...styles.startLabel,
          marginTop: 100,
          justifyContent: "center",
        }}
      ></View>
      <Text style={styles.title}>Smoke & Fire</Text>

      <View style={styles.startLabel}>
        <Button
          title="Start Game"
          color="#a22c22"
          onPress={() => getInformation()}
        />
        <Button
          title="How to Play"
          color="#a22c22"
          onPress={() => setModalVisible(true)}
        />
      </View>
      <Modal animationType="slide" visible={modalVisible} transparent={false}>
        <ScrollView style={{ backgroundColor: "black" }}>
          <Text style={styles.subTitle}>How To:</Text>
          <Text style={{ ...styles.subTitle, fontSize: 13 }}>
            This game is an adaptaion of ride the bus card drinking game
          </Text>
          <Button
            title="Continue"
            color="#a22c22"
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </ScrollView>
      </Modal>
    </View>
  );
};

export default StartScreen;
