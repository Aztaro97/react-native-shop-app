import React from "react";
import { Box, Button, Center, FlatList, Image } from "native-base";
import { Color } from "../Color";
import Onboarding from "react-native-onboarding-swiper";
import { StatusBar } from "expo-status-bar";
// import { OnBoardImageOne } from "../assets/index";

const NextComponent = ({ ...props }) => {
  return (
    <Box alignContent={"center"}>
      <Button {...props}>Next</Button>
    </Box>
  );
};

const SkipComponent = ({ ...props }) => {
  return (
    <Box alignContent={"center"}>
      <Button {...props}>Skip</Button>
    </Box>
  );
};

const OnBoardScreen = ({ navigator }) => {
  return (
    <Onboarding
      NextButtonComponent={NextComponent}
      SkipButtonComponent={SkipComponent}
      pages={[
        {
          backgroundColor: Color.primary,
          image: <Image source={require("../assets/onBoardImageOne.png")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: Color.secondary,
          image: <Image source={require("../assets/onBoardImageOne.png")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
};

export default OnBoardScreen;
