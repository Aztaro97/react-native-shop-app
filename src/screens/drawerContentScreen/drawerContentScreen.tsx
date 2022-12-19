import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  Box,
  Divider,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "native-base";
import React from "react";
import {
  Feather,
  FontAwesome,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { Color } from "../../constants/Color";
import ThemeToggle from "../../components/themeToggle";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { logout } from "../../store/features/authReducers/authSliders";

const DrawerContentScreen = (props: DrawerContentComponentProps) => {
  const dispatch = useDispatch();

  return (
    <Box flex={1} bg={useColorModeValue(Color.primary, "gray.500")} safeArea>
      <DrawerContentScrollView {...props}>
        <Box flex={1} justifyContent={"space-between"} h="full" px="3" py="3">
          <DrawerNavigation {...props} />
          <Divider
            _light={{
              bgColor: "gray.400",
            }}
            _dark={{
              bgColor: "gray.300",
            }}
          />
          <Text fontSize={20} mt={3} color="gray.300">
            Preferences
          </Text>
          <ThemeToggle />
          <Divider
            _light={{
              bgColor: "gray.400",
            }}
            _dark={{
              bgColor: "gray.300",
            }}
          />
        </Box>
      </DrawerContentScrollView>
      <DrawerItem
        labelStyle={{ color: "#fff" }}
        label="Sign Out"
        onPress={() => dispatch(logout())}
        icon={({ color, size, focused }) => (
          <Feather name="log-out" size={size} color={"#fff"} />
        )}
      />
    </Box>
  );
};

const DrawerNavigation = (props: DrawerContentComponentProps) => {
  return (
    <VStack space={4} mt={10}>
      <DrawerItem
        style={{ backgroundColor: "transparent", color: "#fff" }}
        labelStyle={{ color: "#fff", fontWeight: "bold" }}
        icon={({ color, size }) => (
          <FontAwesome name="user-o" size={size} color={color} />
        )}
        label="Profile"
        onPress={() => props.navigation.navigate("Profile")}
        activeBackgroundColor={useColorModeValue("#333", "gray.500")}
      />

      <DrawerItem
        labelStyle={{ color: "#fff", fontWeight: "bold" }}
        icon={({ color, size }) => (
          <Feather name="shopping-cart" size={size} color={color} />
        )}
        label="My Orders"
        onPress={() => props.navigation.navigate("Orders")}
        activeBackgroundColor={useColorModeValue("#333", "gray.500")}
      />

      <DrawerItem
        labelStyle={{ color: "#fff", fontWeight: "bold" }}
        icon={({ color, size }) => (
          <MaterialIcons name="favorite-outline" size={size} color={color} />
        )}
        label="Favorites"
        onPress={() => props.navigation.navigate("Favorite")}
        activeBackgroundColor={useColorModeValue("#333", "gray.500")}
      />

      <DrawerItem
        labelStyle={{ color: "#fff", fontWeight: "bold" }}
        icon={({ color, size }) => (
          <MaterialIcons name="delivery-dining" size={size} color={color} />
        )}
        label="Delivery"
        onPress={() => props.navigation.navigate("Delivery")}
        activeBackgroundColor={useColorModeValue("#333", "gray.500")}
      />

      <DrawerItem
        labelStyle={{ color: "#fff", fontWeight: "bold" }}
        icon={({ color, size }) => (
          <Ionicons name="settings-outline" size={size} color={color} />
        )}
        label="Setting"
        onPress={() => props.navigation.navigate("Setting")}
        activeBackgroundColor={useColorModeValue("#333", "gray.500")}
      />
    </VStack>
  );
};

export default DrawerContentScreen;
