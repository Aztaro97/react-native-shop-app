import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box, Center } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/homeScreen";
import OnBoardScreen from "./src/screens/onBoardScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "./src/screens/loginScreen";
import RegisterScreen from "./src/screens/registerScreen";
import DrawerContentScreen from "./src/screens/drawerContentScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabsScreen from "./src/screens/MainTabsScreen";
import RootStackScreen from "./src/screens/rootStackScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  const isAuthenticated = true;

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true"); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  }, []);

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {isAuthenticated ? (
          <Drawer.Navigator
            initialRouteName="HomeDrawer"
            drawerContent={(props) => <DrawerContentScreen {...props} />}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Drawer.Screen name="HomeDrawer" component={MainTabsScreen}  />
            {/* <Drawer.Screen name="Login" component={LoginScreen} /> */}
            <Drawer.Screen name="Register" component={RegisterScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
