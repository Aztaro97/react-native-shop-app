import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Center,
  Heading,
  Image,
  Pressable,
  Text,
  View,
} from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Color } from "../../constants/Color";

interface ProductProps {
  name: string;
  image: any;
  details: string;
  price: number;
}

const ProductCard = (props: ProductProps) => {
  const { name, image, price, details } = props;
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("SingleProduct", props)}>
      <Box
        bg="#fff"
        borderRadius={20}
        px={5}
        py={1}
        shadow={1}
        mr={3}
        w={200}
        h={200}
        zIndex={1}
        flex={1}
        alignItems="center"
        justifyContent="center"
      >
        <Center flex={1} w="full" h="full">
          <Image
            w="full"
            // h={160}
            source={image}
            alt={name}
            bg="transparent"
            width={120}
            position="absolute"
            top={-80}
            zIndex={10}
            resizeMode="contain"
          />
          <Heading fontSize={24} mt={35} isTruncated w="full">
            {name}
          </Heading>
          <Text fontSize={15} color="gray.400">
            {details}
          </Text>
          <Text fontSize={19} bold color={Color.primary}>
            ${price}
          </Text>
        </Center>
      </Box>
    </Pressable>
  );
};

export default ProductCard;
