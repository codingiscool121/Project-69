import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import insScreen from "./screens/ins.js";
import fbScreen from "./screens/fb.js";
import ScanScreen from "./screens/ScanScreen.js"
export default class App extends React.Component {
  render() {
    return <ScanScreen />;
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
