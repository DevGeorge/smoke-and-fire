import React, { Component } from "react";

import React from "react";
import { View, Text, Button } from "react-native";
import { useSnapshot } from "valtio";
import { state } from "../GlobalState";
import Card from "@heruka-urgyen/react-playing-cards/lib/TcB";

const ShowCard = () => {
  let snap = useSnapshot(state);

  return (
    <View>
      <Text></Text>
      <Button title="Next Player" />
    </View>
  );
};

export default ShowCard;
