import { Box, Button } from "native-base";
import React from "react";

const RegisterScreen = ({ navigation }) => {
  return (
    <Box>
      <Button
        color="#fff"
        fontSize={40}
        onPress={() => navigation.openDrawer()}
        // onPress={() => console.log(navigation)}
      >
        Open Drawer
      </Button>
    </Box>
  );
};

export default RegisterScreen;
