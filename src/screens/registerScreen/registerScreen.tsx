import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MotiView } from "moti";
import { Box, Button } from "native-base";
import React from "react";
import { HomeDrawerParamsList, RootStackParamList } from "../../types/navs";

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamsList>,
  NativeStackScreenProps<RootStackParamList, "Register">
>;

const RegisterScreen = ({ navigation }: Props) => {
  return (
    <Box flex={1} alignItems={"center"} justifyContent="center">
      <MotiView
        from={{
          opacity: 0,
          scale: 0.8,
          translateY: 800,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          translateY: 0,
        }}
        transition={{
          type: "timing",
          duration: 1500,
          delay: 100,
        }}
      >
        <Button
          color="#fff"
          fontSize={40}
          onPress={() => navigation.openDrawer()}
          // onPress={() => console.log(navigation)}
        >
          Reset
        </Button>
      </MotiView>
    </Box>
  );
};

export default RegisterScreen;
