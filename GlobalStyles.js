import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "black",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 45,
    textAlign: "center",
    color: "#a22c22",
    margin: 5,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#a22c22",
    margin: 5,
  },
  startLabel: {
    padding: 10,
    textAlign: "center",
    margin: 10,
    justifyContent: "space-evenly",
  },
  cardContainer: {
    width: Dimensions.get("window").width - 40,
    justifyContent: "space-evenly",

    height: 100,
    shadowColor: "red",
    backgroundColor: "#a22c22",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 3,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
});
