import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons, FontAwesome5, Feather } from "@expo/vector-icons";

import HomeScreen from "./homeScreen";
import FavoritesScreen from "./favoriteScreen";
import OrdersScreen from "./orderScreen";
import CartScreen from "./cartScreen";
import SettingScreen from "./settingScreen";
import ProfileScreen from "./profileScreen";
import DeliveryScreen from "./deliveryScreen";
import CheckOutScreen from "./checkOutScreen";
import ResetPasswordScreen from "./resetPasswordScreen";

import { Color } from "../Color";

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabsScreen = () => {
  return (
    <Tab.Navigator
        initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveBackgroundColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#E5E5E5",
          borderTopColor: Color.primary,
          borderTopWidth: 0,
          position: "absolute",
          bottom: 16,
          right: 16,
          left: 16,
          //   elevation: 0,
          borderRadius: 15,
          height: 60,
        },
        tabBarActiveTintColor: Color.primary,
        tabBarInactiveTintColor: Color.secondary,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
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
            <Feather name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
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
    </HomeStack.Navigator>
  );
};

const ProfilesStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
      <HomeStack.Screen name="Delivery" component={DeliveryScreen} />
      <HomeStack.Screen name="Setting" component={SettingScreen} />
      <HomeStack.Screen name="Orders" component={OrdersScreen} />
      <HomeStack.Screen name="Reset-Password" component={ResetPasswordScreen} />
    </HomeStack.Navigator>
  );
};

export default MainTabsScreen;
