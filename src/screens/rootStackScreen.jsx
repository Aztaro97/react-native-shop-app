import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "./loginScreen";
import OnBoardScreen from "./onBoardScreen";
import RegisterScreen from "./registerScreen";

const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator initialRouteName="OnBoarding">
      <RootStack.Screen name="OnBoarding" component={OnBoardScreen} />
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Register" component={RegisterScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
