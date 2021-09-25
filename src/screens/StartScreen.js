import React from "react";
import { Button, Text, View, Modal } from "react-native";
import styles from "../../GlobalStyles";

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
        <View style={styles.container}>
          <Text style={styles.subTitle}></Text>
          <Text style={styles.subTitle}> Card you Picked: </Text>
          <Button
            title="Continue"
            color="#a22c22"
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default StartScreen;
