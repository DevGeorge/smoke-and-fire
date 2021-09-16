import React from "react";
import { View, Button, Text } from "react-native";
import styles from "../GlobalStyles";

const HighOrLow = (props) => {
  return (
    <View>
      <Button title="Higher" color="#a22c22" />
      <Text style={styles.title}> or </Text>
      <Button title="Lower" color="#a22c22" />
    </View>
  );
};

export default HighOrLow;
