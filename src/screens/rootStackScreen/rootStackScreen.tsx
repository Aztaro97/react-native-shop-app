import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../../types/navs";
import LoginScreen from "../loginScreen/loginScreen";
import OnBoardScreen from "../onBoardScreen/onBoardScreen";
import RegisterScreen from "../registerScreen/registerScreen";
import ResetPasswordScreen from "../registerScreen/registerScreen";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="OnBoarding" component={OnBoardScreen} />
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Register" component={RegisterScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
