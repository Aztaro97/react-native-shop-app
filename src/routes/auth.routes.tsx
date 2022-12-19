import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useEffect, useState } from "react";
import DrawerContentScreen from "../screens/drawerContentScreen/drawerContentScreen";
import MainTabsScreen from "../screens/mainTabsScreen/MainTabsScreen";
import RegisterScreen from "../screens/registerScreen/registerScreen";
import LoginScreen from "../screens/loginScreen/loginScreen";
import RootStackScreen from "../screens/rootStackScreen/rootStackScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { HomeDrawerParamsList } from "../types/navs";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { RootState } from "../store";

const Drawer = createDrawerNavigator<HomeDrawerParamsList>();

const AuthRoutes = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(false);

  const isAuthenticated = true;
  const { isAuth } = useSelector((state: RootState) => state.auth);

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

  useEffect(() => {
    // setIsLoading(true);
    const unsubscribeAuthStateChanged = onAuthStateChanged(
      auth,
      (authenticatedUser) => {
        // authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        // setIsLoading(false);
        console.log(authenticatedUser);
      }
    );

    // unsubscribe auth listener on unmount
    return unsubscribeAuthStateChanged;
  }, [isAuthenticated]);

  return (
    <>
      {isAuth ? (
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
