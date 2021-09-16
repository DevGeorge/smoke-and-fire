import React from "react";
import { View, Button } from "react-native";

const BetweenOrOutside = (props) => {
  return (
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
      <View style={{ width: "50%" }}>
        <Button title="Between" color="white" />
        <Button title="Outside of" color="white" />
      </View>
    </View>
  );
};

export default BetweenOrOutside;
