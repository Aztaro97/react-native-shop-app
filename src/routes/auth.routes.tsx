import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useEffect, useState } from "react";
import DrawerContentScreen from "../screens/drawerContentScreen/drawerContentScreen";
import MainTabsScreen from "../screens/mainTabsScreen/MainTabsScreen";
import RegisterScreen from "../screens/registerScreen/registerScreen";
import LoginScreen from "../screens/loginScreen/loginScreen";
import RootStackScreen from "../screens/rootStackScreen/rootStackScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HomeDrawerParamsList } from "../types/navs";

const Drawer = createDrawerNavigator<HomeDrawerParamsList>();

const AuthRoutes = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(false);

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
    <>
      {!isAuthenticated ? (
        <Drawer.Navigator
          initialRouteName="HomeDrawer"
          drawerContent={(props) => <DrawerContentScreen {...props} />}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Drawer.Screen name="HomeDrawer" component={MainTabsScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Register" component={RegisterScreen} />
        </Drawer.Navigator>
      ) : (
        <RootStackScreen />
      )}
    </>
  );
};

export default AuthRoutes;
