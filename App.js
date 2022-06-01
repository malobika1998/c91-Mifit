import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

//import firebase from "firebase";
//import { firebaseConfig } from "./config";

//if (!firebase.apps.length) {
  //firebase.initializeApp(firebaseConfig);
//} else {
  //firebase.app();
//}
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

render() {
  const { fontLoaded } = this.state;
  if (fontLoaded) {
    return <AppContainer />;
  }
  return null;
}
}
const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
  HomeScreen: HomeScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
