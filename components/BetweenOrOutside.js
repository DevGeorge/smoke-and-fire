import React from "react";
import { View, Button } from "react-native";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";

const BetweenOrOutside = (props) => {
  let snap = useSnapshot(state);

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
