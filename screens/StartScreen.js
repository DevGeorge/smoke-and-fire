import React, { useState } from "react";
import { Button, Text, View, Modal, ScrollView } from "react-native";
import styles from "../GlobalStyles";

const StartScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

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
