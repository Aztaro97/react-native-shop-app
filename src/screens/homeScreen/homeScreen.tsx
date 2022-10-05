import {
  Box,
  Button,
  HStack,
  Input,
  Text,
  Icon,
  View,
  Heading,
  ScrollView,
  Pressable,
  FlatList,
} from "native-base";
import React, { useState } from "react";
import { EvilIcons, Octicons } from "@expo/vector-icons";
import { Color } from "../../constants/Color";
import ProductCard from "../../components/ProductCard";

const HomeScreen = ({ navigation }) => {
  return (
    <Box flex={1} backgroundColor="#ececec" safeArea py="6" px="7">
      <HomeHeader navigation={navigation} />
      <Heading mt={30} fontSize={40} fontWeight={"bold"}>
        Order online {"\n"}collect in store
      </Heading>
      <Tabulation />
      <ListProduct />
    </Box>
  );
};

const Tabulation = () => {
  const [active, setActive] = useState(0);

  const tabsAData = [
    "All",
    "Wearable",
    "Laptops",
    "Phones",
    "Drones",
    "Cameras",
    "Accessories",
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      px={2}
      mt={5}
    >
      <HStack space={4}>
        {tabsAData.map((tab, index) => (
          <Pressable key={index} onPress={() => setActive(index)}>
            <Text
              fontSize={20}
              bold
              pb={1}
              color={active === index ? Color.primary : "##9A9A9D"}
              borderBottomWidth={active === index ? 2 : 0}
              borderBottomColor={active === index ? Color.primary : "##9A9A9D"}
            >
              {tab}
            </Text>
          </Pressable>
        ))}
      </HStack>
    </ScrollView>
  );
};

const ListProduct = () => {
  const productsData = [
    {
      name: "Hello",
      image: require("../../assets/watch.png"),
      details: "lorem upsum	",
      price: 100,
    },
    {
      name: "Hello",
      image: require("../../assets/watch.png"),
      details: "lorem upsum	",
      price: 100,
    },
    {
      name: "Hello",
      image: require("../../assets/watch.png"),
      details: "lorem upsum	",
      price: 100,
    },
  ];

  return (
    <FlatList
      contentContainerStyle={{ marginTop: 20 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={productsData}
      renderItem={({ item }) => <ProductCard {...item} />}
    />
  );
};

const HomeHeader = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <HStack
      w="100%"
      space={3}
      alignItems="center"
      justifyContent={"space-between"}
    >
      <Icon
        size={8}
        as={<Octicons name="three-bars" color="black" />}
        onPress={() => navigation.openDrawer()}
      />
      <Input
        placeholder="Search"
        fontSize={18}
        variant="rounded"
        w="full"
        px="4"
        maxWidth="280px"
        InputLeftElement={
          <Icon
            ml="4"
            size={7}
            color="gray.500"
            as={<EvilIcons name="search" color="black" />}
          />
        }
        onChangeText={(text) => setSearch(text)}
        _focus={{ borderColor: Color.primary, backgroundColor: "gray.100" }}
      />
    </HStack>
  );
};

export default HomeScreen;
