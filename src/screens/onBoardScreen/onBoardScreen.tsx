import React, { FC } from "react";
import { Box, Button, Center, FlatList, Image, Text, View } from "native-base";
import { Color } from "../../constants/Color";
import Onboarding from "react-native-onboarding-swiper";
import { StatusBar } from "expo-status-bar";
import { Pressable } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { HomeDrawerParamsList, RootStackParamList } from "../../types/navs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  DoneButtonProps,
  NextButtonProps,
  SkipButtonProps,
  SquareProps,
} from "../../types/onBoardSwiper";
import { MotiView } from "moti";
// import { OnBoardImageOne } from "../assets/index";

// type Props = CompositeScreenProps<
//   DrawerScreenProps<HomeDrawerParamsList>,
//   NativeStackScreenProps<RootStackParamList>
// >;

type Props = NativeStackScreenProps<RootStackParamList, "OnBoarding">;

const NextComponent: FC<NextButtonProps> = ({ ...props }) => {
  return (
    <Pressable>
      <Button size={"lg"} w={20} mx={2} py={2} borderRadius={30} {...props}>
        Next
      </Button>
    </Pressable>
  );
};

const SkipComponent: FC<SkipButtonProps> = ({ ...props }) => {
  return (
    <Pressable>
      <Button size={"lg"} w={20} mx={2} py={2} borderRadius={30} {...props}>
        Skip
      </Button>
    </Pressable>
  );
};

const DoneComponent: FC<DoneButtonProps> = ({ ...props }) => {
  return (
    <Pressable>
      <Button size={"lg"} w={20} mx={2} py={2} borderRadius={30} {...props}>
        Done
      </Button>
    </Pressable>
  );
};

const SquareComponent: FC<SquareProps> = ({ skipLabel, selected }) => {
  return (
    <Button
      bg={selected ? "#ffffff71" : "#04a78e"}
      _pressed={{ bg: selected ? "#ffffff71" : "#04a78e" }}
      w={3}
      h={3}
      rounded="full"
      p={0}
      mx={0.5}
    >
      {skipLabel}
    </Button>
  );
};

const OnBoardScreen = ({ navigation }: Props) => {
  return (
    <Onboarding
      //   DotComponent={SquareComponent}
      NextButtonComponent={NextComponent}
      SkipButtonComponent={SkipComponent}
      DoneButtonComponent={DoneComponent}
      onSkip={() => navigation.navigate("Login")}
      onDone={() => navigation.navigate("Login")}
      titleStyles={{ fontWeight: "700", fontSize: 45, marginBottom: 0 }}
      subTitleStyles={{ fontSize: 18, fontWeight: "400" }}
      pages={[
        {
          backgroundColor: Color.primary,
          title: "Find your Gadget",
          image: (
            <Image
              source={require("../../assets/onBoardImageOne.png")}
              alt=""
            />
          ),
          subtitle:
            "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi",
        },
        {
          backgroundColor: Color.secondary,
          image: (
            <Image
              source={require("../../assets/onBoardImageTwo.png")}
              alt=""
            />
          ),
          title: "Find your Product",
          subtitle:
            "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi",
        },
      ]}
    />
  );
};

export default OnBoardScreen;
