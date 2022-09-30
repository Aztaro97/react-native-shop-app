import { Box, Button, Text } from "native-base";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems={"center"}
      backgroundColor="#111"
    >
      <Text color="#fff" fontSize={40}>
        Hello word
      </Text>
      <Button
        color="#fff"
        fontSize={40}
        onPress={() => navigation.navigate("Register")}
		// onPress={() => console.log(navigation)}
      >
        Open Drawer
      </Button>
    </Box>
  );
};

export default HomeScreen;
