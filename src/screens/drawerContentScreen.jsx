import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Box, Text } from "native-base";
import React from "react";

const DrawerContentScreen = (props) => {
  return (
    <Box flex={1} backgroundColor="#111">
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Home"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
        <Text>DrawerContentScreen</Text>
      </DrawerContentScrollView>
    </Box>
  );
};

export default DrawerContentScreen;
