import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

//import firebase from "firebase";
//import { firebaseConfig } from "./config";

//if (!firebase.apps.length) {
  //firebase.initializeApp(firebaseConfig);
//} else {
  //firebase.app();
//}

const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
  HomeScreen: HomeScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
