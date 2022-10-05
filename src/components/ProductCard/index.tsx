import { Box, Center, Heading, Image, Text } from "native-base";
import React from "react";
import { Color } from "../../constants/Color";

interface ProductProps {
  name: string;
  image: any;
  details: string;
  price: number;
}

const ProductCard = ({ name, image, price, details }: ProductProps) => {
  return (
    <Box
      bg="#fff"
      borderRadius={20}
      p={5}
      shadow={6}
      ml={3}
      w={200}
      h={270}
      zIndex={1}
      //   style={{
      //     shadowColor: "#000",
      //     shadowOffset: { width: 0, height: 2 },
      //     shadowOpacity: 0.25,
      //     shadowRadius: 3.84,
      //     elevation: 5,
      //   }}
    >
      <Center>
        <Image
          w={"100%"}
          h={160}
          source={image}
          alt={name}
          //   position="relative"
          //   bottom={20}
          zIndex={10}
        />
        <Heading fontSize={24}>{name}</Heading>
        <Text fontSize={15} color="gray.400">
          {details}
        </Text>
        <Text fontSize={19} bold color={Color.primary}>
          ${price}
        </Text>
      </Center>
    </Box>
  );
};

export default ProductCard;
