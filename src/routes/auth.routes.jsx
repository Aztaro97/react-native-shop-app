import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useEffect, useState } from "react";
import DrawerContentScreen from "../screens/drawerContentScreen";
import MainTabsScreen from "../screens/MainTabsScreen";
import RegisterScreen from "../screens/registerScreen";
import RootStackScreen from "../screens/rootStackScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

const AuthRoutes = () => {
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
          {/* <Drawer.Screen name="Login" component={LoginScreen} /> */}
          <Drawer.Screen name="Register" component={RegisterScreen} />
        </Drawer.Navigator>
      ) : (
        <RootStackScreen />
      )}
    </>
  );
};

export default AuthRoutes;
