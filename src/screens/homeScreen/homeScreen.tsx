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
  VStack,
  KeyboardAvoidingView,
} from "native-base";
import {
  CompositeScreenProps,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import React, { useState } from "react";
import { EvilIcons, Octicons } from "@expo/vector-icons";
import { Color } from "../../constants/Color";
import ProductCard from "../../components/ProductCard";
import { HomeDrawerParamsList, RootStackParamList } from "../../types/navs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamsList>,
  NativeStackScreenProps<RootStackParamList, "HomeDrawer">
>;

const HomeScreen = ({ navigation, ...rest }: Props) => {
  return (
    <Box flex={1} bg={Color.bgGray} safeArea pt={6} pb={10} px={7}>
      <HomeHeader navigation={navigation} {...rest} />
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Heading mt={15} fontSize={40} fontWeight={"bold"}>
            Order online {"\n"}collect in store
          </Heading>
          <Tabulation />
          <HomeProducts />
        </ScrollView>
      </KeyboardAvoidingView>
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
    <Box mt={5}>
      <ScrollView
        horizontal={true}
        h={20}
        showsHorizontalScrollIndicator={false}
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
                borderBottomColor={
                  active === index ? Color.primary : "##9A9A9D"
                }
              >
                {tab}
              </Text>
            </Pressable>
          ))}
        </HStack>
      </ScrollView>
    </Box>
  );
};

const HomeProducts = () => {
  const navigation = useNavigation();

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
    <View flex={1} alignItems="center">
      <FlatList
        contentContainerStyle={{
          paddingTop: 70,
          paddingBottom: 10,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={productsData}
        renderItem={({ item }) => <ProductCard {...item} />}
      />
      <View flex={1} alignItems={"flex-end"} w="full">
        <Pressable onPress={() => navigation.navigate("Profile")} mt={5}>
          <Text fontSize={20} bold color={Color.primary}>
            See more
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const HomeHeader = ({ navigation }: Props) => {
  const [search, setSearch] = useState("");

  return (
    <HStack
      w="100%"
      space={3}
      alignItems="center"
      justifyContent={"space-between"}
      pb={4}
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
