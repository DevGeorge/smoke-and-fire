import React from "react";
import { View, Button, Text } from "react-native";
import styles from "../GlobalStyles";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";

const HighOrLow = (props) => {
  let snap = useSnapshot(state);

  return (
    <View>
      <Button title="Higher" color="#a22c22" />
      <Text style={styles.title}> or </Text>
      <Button title="Lower" color="#a22c22" />
    </View>
  );
};

export default HighOrLow;
