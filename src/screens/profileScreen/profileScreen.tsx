import { Box, Button, VStack } from "native-base";
import React from "react";

const ProfileScreen = ({ navigation }) => {
  return (
    <Box flex={1} justifyContent="center" alignItems={"center"}>
      <VStack space={4}>
        <Button
          color="#fff"
          fontSize={40}
          onPress={() => navigation.navigate("Profile")}
          // onPress={() => console.log(navigation)}
        >
          Profile
        </Button>
        <Button
          color="#fff"
          fontSize={40}
          onPress={() => navigation.navigate("Delivery")}
          // onPress={() => console.log(navigation)}
        >
          Delivery
        </Button>
        <Button
          color="#fff"
          fontSize={40}
          onPress={() => navigation.navigate("Setting")}
          // onPress={() => console.log(navigation)}
        >
          Setting
        </Button>
      </VStack>
    </Box>
  );
};

export default ProfileScreen;
