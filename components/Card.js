import React from "react";
import { View, Text, Image } from "react-native";

export default function Card(props) {
  let card = props.card;
  const getSource = () => {
    switch (card) {
      case "2s":
        return require("../assets/2S.png");
      case "3s":
        return require("../assets/3S.png");
      case "4s":
        return require("../assets/4S.png");
      case "5s":
        return require("../assets/5S.png");
      case "6s":
        return require("../assets/6S.png");
      case "7s":
        return require("../assets/7S.png");
      case "8s":
        return require("../assets/8S.png");
      case "9s":
        return require("../assets/9S.png");
      case "Ts":
        return require("../assets/TS.png");
      case "Js":
        return require("../assets/JS.png");
      case "Qs":
        return require("../assets/QS.png");
      case "Ks":
        return require("../assets/KS.png");
      case "As":
        return require("../assets/AS.png");
      case "2h":
        return require("../assets/2H.png");
      case "3h":
        return require("../assets/3H.png");
      case "4h":
        return require("../assets/4H.png");
      case "5h":
        return require("../assets/5S.png");
      case "6h":
        return require("../assets/6H.png");
      case "7h":
        return require("../assets/7H.png");
      case "8h":
        return require("../assets/8H.png");
      case "9h":
        return require("../assets/9H.png");
      case "Th":
        return require("../assets/TH.png");
      case "Jh":
        return require("../assets/JH.png");
      case "Qh":
        return require("../assets/QH.png");
      case "Kh":
        return require("../assets/KH.png");
      case "Ah":
        return require("../assets/AH.png");
      case "2d":
        return require("../assets/2D.png");
      case "3d":
        return require("../assets/3D.png");
      case "4d":
        return require("../assets/4D.png");
      case "5d":
        return require("../assets/5D.png");
      case "6d":
        return require("../assets/6D.png");
      case "7d":
        return require("../assets/7D.png");
      case "8d":
        return require("../assets/8D.png");
      case "9d":
        return require("../assets/9D.png");
      case "Td":
        return require("../assets/TD.png");
      case "Jd":
        return require("../assets/JD.png");
      case "Qd":
        return require("../assets/QD.png");
      case "Kd":
        return require("../assets/KD.png");
      case "Ad":
        return require("../assets/AD.png");
      case "2c":
        return require("../assets/2C.png");
      case "3c":
        return require("../assets/3C.png");
      case "4c":
        return require("../assets/4C.png");
      case "5c":
        return require("../assets/5C.png");
      case "6c":
        return require("../assets/6C.png");
      case "7c":
        return require("../assets/7C.png");
      case "8c":
        return require("../assets/8C.png");
      case "9c":
        return require("../assets/9C.png");
      case "Tc":
        return require("../assets/TC.png");
      case "Jc":
        return require("../assets/JC.png");
      case "Qc":
        return require("../assets/QC.png");
      case "Kc":
        return require("../assets/KC.png");
      case "Ac":
        return require("../assets/AC.png");
    }
  };
  return (
    <Image
      style={{ height: 80, resizeMode: "contain", flex: 0.2 }}
      source={getSource()}
    />
  );
}
