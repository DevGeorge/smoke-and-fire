import React, { useState } from "react";
import { View, Button } from "react-native";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";

const PickTheSuite = (props) => {
  let snap = useSnapshot(state);

  const [card, setCards] = useState("");
  return (
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
      <View style={{ width: "50%" }}>
        <Button
          title="Heart"
          color="white"
          onPress={() => console.log("heart")}
        />
        <Button
          title="Spades"
          color="white"
          onPress={() => console.log("heart")}
        />
        <Button
          title="Diamonds"
          color="white"
          onPress={() => console.log("heart")}
        />
        <Button
          title="Clover"
          color="white"
          onPress={() => console.log("heart")}
        />
      </View>
    </View>
  );
};

export default PickTheSuite;
