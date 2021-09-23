import React from "react";
import { View, Text, Image } from "react-native";

export default function Card(props) {
  let card = props.card;
  const getSource = () => {
    switch (card) {
      case "2s":
        return require("../images/2S.png");
      case "3s":
        return require("../images/3S.png");
      case "4s":
        return require("../images/4S.png");
      case "5s":
        return require("../images/5S.png");
      case "6s":
        return require("../images/6S.png");
      case "7s":
        return require("../images/7S.png");
      case "8s":
        return require("../images/8S.png");
      case "9s":
        return require("../images/9S.png");
      case "Ts":
        return require("../images/TS.png");
      case "Js":
        return require("../images/JS.png");
      case "Qs":
        return require("../images/QS.png");
      case "Ks":
        return require("../images/KS.png");
      case "As":
        return require("../images/AS.png");
      case "2h":
        return require("../images/2H.png");
      case "3h":
        return require("../images/3H.png");
      case "4h":
        return require("../images/4H.png");
      case "5h":
        return require("../images/5S.png");
      case "6h":
        return require("../images/6H.png");
      case "7h":
        return require("../images/7H.png");
      case "8h":
        return require("../images/8H.png");
      case "9h":
        return require("../images/9H.png");
      case "Th":
        return require("../images/TH.png");
      case "Jh":
        return require("../images/JH.png");
      case "Qh":
        return require("../images/QH.png");
      case "Kh":
        return require("../images/KH.png");
      case "Ah":
        return require("../images/AH.png");
      case "2d":
        return require("../images/2D.png");
      case "3d":
        return require("../images/3D.png");
      case "4d":
        return require("../images/4D.png");
      case "5d":
        return require("../images/5D.png");
      case "6d":
        return require("../images/6D.png");
      case "7d":
        return require("../images/7D.png");
      case "8d":
        return require("../images/8D.png");
      case "9d":
        return require("../images/9D.png");
      case "Td":
        return require("../images/TD.png");
      case "Jd":
        return require("../images/JD.png");
      case "Qd":
        return require("../images/QD.png");
      case "Kd":
        return require("../images/KD.png");
      case "Ad":
        return require("../images/AD.png");
      case "2c":
        return require("../images/2C.png");
      case "3c":
        return require("../images/3C.png");
      case "4c":
        return require("../images/4C.png");
      case "5c":
        return require("../images/5C.png");
      case "6c":
        return require("../images/6C.png");
      case "7c":
        return require("../images/7C.png");
      case "8c":
        return require("../images/8C.png");
      case "9c":
        return require("../images/9C.png");
      case "Tc":
        return require("../images/TC.png");
      case "Jc":
        return require("../images/JC.png");
      case "Qc":
        return require("../images/QC.png");
      case "Kc":
        return require("../images/KC.png");
      case "Ac":
        return require("../images/AC.png");
    }
  };
  return (
    <Image
      style={{ height: 80, resizeMode: "contain", flex: 0.2 }}
      source={getSource()}
    />
  );
}
