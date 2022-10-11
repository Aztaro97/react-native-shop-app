import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons, FontAwesome5, Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/homeScreen/homeScreen";
import FavoritesScreen from "../screens/favoriteScreen/favoriteScreen";
import OrdersScreen from "../screens/orderScreen/orderScreen";
import CartScreen from "../screens/cartScreen/cartScreen";
import SettingScreen from "../screens/settingScreen/settingScreen";
import ProfileScreen from "../screens/profileScreen/profileScreen";
import DeliveryScreen from "../screens/deliveryScreen/deliveryScreen";
import CheckOutScreen from "../screens/checkOutScreen/checkOutScreen";
import ResetPasswordScreen from "../screens/resetPassword/resetPasswordScreen";
import SingleProductScreen from "../screens/singleProductScreen";

import { Color } from "../constants/Color";
import { RootStackParamList, RootTabParamList } from "../types/navs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Badge, View } from "native-base";

interface MainTabsScreenProps {
  navigation: any;
}

const HomeStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const MainTabsScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Color.bgGray,
          borderTopWidth: 0,
          height: 50,
        },
        tabBarInactiveTintColor: Color.secondary,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-filled" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoritesTab"
        component={FavoritesStackScreen}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfilesTab"
        component={ProfilesStackScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <>
              <Badge
                position={"absolute"}
                bottom={6}
                right={5}
                rounded="full"
                zIndex={1}
                variant="solid"
                colorScheme="primary"
                color="#fff"
                _text={{ fontSize: 10, color: "#fff" }}
              >
                2
              </Badge>
              <Feather name="shopping-cart" size={size} color={color} />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeDrawer"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="HomeDrawer" component={HomeScreen} />
      <HomeStack.Screen name="SingleProduct" component={SingleProductScreen} />
    </HomeStack.Navigator>
  );
};

const FavoritesStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Favorite"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Favorite" component={FavoritesScreen} />
      <HomeStack.Screen name="Checkout" component={CheckOutScreen} />
      <HomeStack.Screen name="Delivery" component={DeliveryScreen} />
    </HomeStack.Navigator>
  );
};

const ProfilesStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
      <HomeStack.Screen name="Setting" component={SettingScreen} />
      <HomeStack.Screen name="Orders" component={OrdersScreen} />
      <HomeStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </HomeStack.Navigator>
  );
};

export default MainTabsScreen;
