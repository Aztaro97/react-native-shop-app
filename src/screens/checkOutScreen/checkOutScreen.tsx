import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Pressable,
  Radio,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { AntDesign, FontAwesome5, Feather } from "@expo/vector-icons";
import { Color } from "../../constants/Color";
import { useNavigation } from "@react-navigation/native";
import { PermissionsAndroid } from "react-native";

const CheckOutScreen = () => {
  const [typePayment, setTypePayment] = useState("visa");
  const navigation = useNavigation();
  return (
    <Box flex={1} safeArea>
      <Box px={6} mb={10}>
        <Pressable onPress={() => navigation.goBack()} top={5}>
          <Icon
            size="lg"
            as={<AntDesign name="arrowleft" color={Color.secondary} />}
          />
        </Pressable>

        <Center>
          <Heading bold>Checkout</Heading>
        </Center>
      </Box>

      <Box px={7}>
        <HStack justifyContent="space-between" mb={5}>
          <Text fontSize={17} bold>
            Shipping Information
          </Text>
          <Pressable>
            <Text color={Color.primary} bold>
              Change
            </Text>
          </Pressable>
        </HStack>
        <VStack bg="#fff" borderRadius={15} mb={5} p={4} w="full">
          <Flex flexDir="row" alignItems="center" mb={3}>
            <Icon
              fontSize={24}
              mr={3}
              as={<FontAwesome5 name="user" color={Color.secondary} />}
            />
            <Text fontSize={16}>Rosina Doe</Text>
          </Flex>
          <Flex flexDir="row" alignItems="center" mb={3}>
            <Icon
              fontSize={24}
              mr={3}
              as={<Feather name="map-pin" color={Color.secondary} />}
            />
            <Text fontSize={16}>43 Oxford Road M13 4GR Manchester, UK</Text>
          </Flex>
          <Flex flexDir="row" alignItems="center" mb={3}>
            <Icon
              fontSize={24}
              mr={3}
              as={<Feather name="phone" color={Color.secondary} />}
            />
            <Text fontSize={16}>+234 9011039271</Text>
          </Flex>
        </VStack>

        <Box>
          <Text fontSize={17} bold mb={5}>
            Shipping Information
          </Text>
          <VStack bg="#fff" borderRadius={15} p={4} w="full">
            <Radio.Group
              name="paymentMethod"
              value={typePayment}
              onChange={(value) => setTypePayment(value)}
              space="xs"
            >
              <Radio size="sm" value="visa">
                <HStack space={4} alignItems="center">
                  <Image
                    h={45}
                    w={45}
                    resizeMode="contain"
                    source={require("../../assets/visaImg.png")}
                    alt="Image"
                  />
                  <Text fontSize={17}>**** **** **** 1234</Text>
                </HStack>
              </Radio>
              <Radio size="sm" value="masterCard">
                <HStack space={4} alignItems="center">
                  <Image
                    h={45}
                    w={45}
                    resizeMode="contain"
                    source={require("../../assets/masterImg.png")}
                    alt="Image"
                  />
                  <Text fontSize={17}>**** **** **** 1234</Text>
                </HStack>
              </Radio>
              <Radio size="sm" value="bank">
                <HStack space={4} alignItems="center">
                  <Image
                    h={45}
                    w={45}
                    resizeMode="contain"
                    source={require("../../assets/bankImg.png")}
                    alt="Image"
                  />
                  <Text fontSize={17}>**** **** **** 1234</Text>
                </HStack>
              </Radio>
            </Radio.Group>
          </VStack>
        </Box>
      </Box>

      <Box flex={1} mb={0} position="absolute" bottom={3} w="full" px={7}>
        <HStack justifyContent="space-between" mb={2} py={2}>
          <Text fontSize={20}>Total</Text>
          <Text fontSize={20} bold color={Color.primary}>
            $ 579
          </Text>
        </HStack>

        <Button
          onPress={() =>
            navigation.navigate("FavoritesTab", { screen: "Payment" })
          }
          size="lg"
          _text={{ fontWeight: "700" }}
          bg={Color.primary}
          py={4}
          borderRadius={10}
        >
          Confirm and pay
        </Button>
      </Box>
    </Box>
  );
};

export default CheckOutScreen;
