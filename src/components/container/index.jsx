import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { AnimatePresence } from "moti";
import theme from "../../theme";

const AppContainer = ({ children }) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <StatusBar />
        <AnimatePresence>{children}</AnimatePresence>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default AppContainer;
