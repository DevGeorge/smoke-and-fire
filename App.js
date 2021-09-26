import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NumberOfPlayers from "./screens/NumberOfPlayers";
import PlayerInformation from "./screens/PlayerInformation";
import PlayerRounds from "./screens/PlayerRounds";
import StartScreen from "./screens/StartScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={StartScreen}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />
        <Stack.Screen
          name="Player Information"
          component={PlayerInformation}
          options={{
            title: " Player Names ",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />
        <Stack.Screen
          name="Number of Players"
          component={NumberOfPlayers}
          options={{
            title: "Select your players",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />
        <Stack.Screen
          name="Game Start"
          component={PlayerRounds}
          options={{
            title: " ",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
