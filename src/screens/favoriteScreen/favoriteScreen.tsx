import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
} from "native-base";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../constants/Color";
import { FavoriteEmptyImg } from "../../assets";

const FavoriteScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} h="full" safeArea>
      <Box px={6}>
        <Pressable onPress={() => navigation.goBack()} top={5}>
          <Icon
            size="lg"
            as={<AntDesign name="arrowleft" color={Color.secondary} />}
          />
        </Pressable>

        <Center>
          <Heading bold>Favorites</Heading>
        </Center>
      </Box>
      <FavoriteEmptyScreen />
    </Box>
  );
};

const FavoriteEmptyScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} px={7}>
      <Center>
        <Image source={require("../../assets/favoriteImage.png")} alt="Image" />
        <Heading mb={3}>No favorites yet</Heading>
        <Text fontSize={17} textAlign={"center"} mb={4} color="gray.500">
          Hit the orange button down below to Create an order
        </Text>
        <Button
          onPress={() =>
            navigation.navigate("HomeDrawer", { screen: "HomeTab" })
          }
          _text={{ fontWeight: "700" }}
          w="full"
          size="lg"
          py={4}
          bg={Color.primary}
          borderRadius={10}
        >
          Start ordering
        </Button>
      </Center>
    </Box>
  );
};

export default FavoriteScreen;
