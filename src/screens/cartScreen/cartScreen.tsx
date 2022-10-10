import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Color } from "../../constants/Color";
import { Dimensions } from "react-native";
import { useTypeSelector } from "../../hook/useTypeSelector";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../store/features/cartSlider";

const { width } = Dimensions.get("window");

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  //   useEffect(() => {
  //     console.log(quantity);
  //   }, []);

  const navigation = useNavigation();
  return (
    <Box h="full" py={6} px={6}>
      <HStack justifyContent={"space-between"} alignItems="center" py={4}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            size="lg"
            as={<AntDesign name="arrowleft" color={Color.secondary} />}
          />
        </Pressable>

        <Heading bold>Basket</Heading>

        <Pressable>
          <Icon
            size="2xl"
            // fontSize={50}
            color={"red.500"}
            as={<MaterialCommunityIcons name="delete-outline" />}
          />
        </Pressable>
      </HStack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={3} w="full" py={3}>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </VStack>
      </ScrollView>
      <HStack justifyContent="space-between" mb={2} py={2}>
        <Text fontSize={20}>Total</Text>
        <Text fontSize={20} bold color={Color.primary}>
          $ 579
        </Text>
      </HStack>
      <Pressable>
        <Button
          size="lg"
          _text={{ fontWeight: "700" }}
          bg={Color.primary}
          py={4}
        >
          Checkout
        </Button>
      </Pressable>
    </Box>
  );
};

const CardItem = () => {
  //   const [quantity, setQuantity] = useState(8);

  const { quantity } = useTypeSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <Box w="full" bg="#fff" borderRadius={20} p={5}>
      <HStack space={2}>
        <Image
          h={100}
          w={90}
          source={{
            uri: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
          }}
          alt="image"
        />
        <Box flex={1} justifyContent="space-between">
          <Heading bold fontSize={18}>
            2020 Apple iPad Air 10.9"
          </Heading>
          <Text color={Color.primary} bold>
            $579.00
          </Text>
          <Flex flexDir="row" w="full">
            <Text mr={2}>Quantity</Text>
            <HStack space={2}>
              <Button onPress={() => dispatch(decrement())} py={1}>
                -
              </Button>
              <Text w={30} textAlign="center" bold>
                {quantity}
              </Text>
              <Button onPress={() => dispatch(increment())} py={1}>
                +
              </Button>
            </HStack>
          </Flex>
        </Box>
      </HStack>
    </Box>
  );
};

export default CartScreen;
