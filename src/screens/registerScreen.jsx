import { Box, Button } from "native-base";
import React from "react";

const RegisterScreen = ({ navigation }) => {
  return (
    <Box flex={1} alignItems={"center"} justifyContent="center">
      <Button
        color="#fff"
        fontSize={40}
        onPress={() => navigation.openDrawer()}
        // onPress={() => console.log(navigation)}
      >
        Reset
      </Button>
    </Box>
  );
};

export default RegisterScreen;
