import {
  Box,
  Button,
  HStack,
  Input,
  Text,
  Icon,
  View,
  Heading,
} from "native-base";
import React, { useState } from "react";
import { EvilIcons, Octicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <Box flex={1} backgroundColor="#ececec" safeArea py="6" px="7">
      <HomeHeader navigation={navigation} />
      <Heading mt={30} fontSize={40} fontWeight={"bold"}>
        Order online {"\n"}collect in store
      </Heading>
    </Box>
  );
};

const HomeHeader = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <HStack w="100%" space={3} alignItems="center" justifyContent={"space-between"}>
      <Icon
        size={8}
        as={<Octicons name="three-bars" color="black" />}
        onPress={() => navigation.openDrawer()}
      />
      <Input
        placeholder="Search"
        fontSize={18}
        variant="rounded"
        w="100%"
        px="4"
        maxWidth="250px"
        InputLeftElement={
          <Icon
            ml="4"
            size={7}
            color="gray.500"
            as={<EvilIcons name="search" color="black" />}
          />
        }
        onChangeText={(text) => setSearch(text)}
      />
    </HStack>
  );
};

export default HomeScreen;
