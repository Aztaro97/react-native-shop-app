import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import auth, {FirebaseAuthTypes} from "@react-native-firebase/auth";

import {HomeDrawerParamsList} from "../types/navs";
import {RootState} from "../store";
import DrawerContentScreen from "../screens/drawerContentScreen/drawerContentScreen";
import MainTabsScreen from "../screens/mainTabsScreen/MainTabsScreen";
import RegisterScreen from "../screens/registerScreen/registerScreen";
import LoginScreen from "../screens/loginScreen/loginScreen";
import RootStackScreen from "../screens/rootStackScreen/rootStackScreen";
import {setAuth} from "../store/features/authReducers/authSliders";

const Drawer = createDrawerNavigator<HomeDrawerParamsList>();

const AuthRoutes: React.FC = () => {
  //   const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(false);

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const dispatch = useDispatch();

  const {isAuth} = useSelector((state: RootState) => state.auth);

  // Handle user state changes
  const onAuthStateChanging = (user: any) => {
    setUser(user);
    dispatch(setAuth(user));

    initializing && setInitializing(false);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanging);
    () => {
      return subscriber; // unsubscribe on unmount
    };
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <>
      {isAuth ? (
        <Drawer.Navigator
          initialRouteName="HomeDrawer"
          drawerContent={props => <DrawerContentScreen {...props} />}
          screenOptions={{
            headerShown: false,
          }}>
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
