import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Box,
  Button,
  Center,
  FlatList,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  View,
  VStack,
} from "native-base";
import React, { FC, useCallback, useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Color } from "../../constants/Color";
import { HomeDrawerParamsList, RootStackParamList } from "../../types/navs";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamsList>,
  NativeStackScreenProps<RootStackParamList, "SingleProduct">
>;

interface ColorItemProps {
  item: string;
  index: number;
  setActiveColor: (arg0: string) => void;
  activeColor: string;
}

const SingleProducts: FC<Props> = ({ navigation, route }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [activeColor, setActiveColor] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const { name, image, price, details } = route.params;

  const colorsData = ["blue", "red", "green", "yellow", "black", "white"];

  return (
    <Box flex={1} safeArea>
      <HStack justifyContent={"space-between"} px={7} py={6}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            size="lg"
            as={<AntDesign name="arrowleft" color={Color.secondary} />}
          />
        </Pressable>

        <Pressable onPress={() => setIsLiked(!isLiked)}>
          <Icon
            size="lg"
            color={isLiked ? "secondary.600" : Color.secondary}
            as={
              isLiked ? <AntDesign name="heart" /> : <AntDesign name="hearto" />
            }
          />
        </Pressable>
      </HStack>
      <CustomCarousel />

      <Box flex={1} bg="#fff" px={7} py={5} borderTopRadius={40}>
        <Heading fontSize={28} w="full" mb={2}>
          2020 Apple iPad Air 10.9"
        </Heading>
        <Box w="full" mb={4}>
          <Heading bold size="md" mb={2}>
            Colors
          </Heading>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={colorsData}
            renderItem={({ item, index }) => (
              <ColorItem
                item={item}
                index={index}
                setActiveColor={setActiveColor}
                activeColor={activeColor}
              />
            )}
          />
        </Box>
        <Box w="full" mb={2}>
          <Heading>Get Apple TV+ free for a year</Heading>
          <Text
            color="gray.500"
            lineHeight={"lg"}
            noOfLines={isReadMore ? 0 : 2}
          >
            Available when you purchase any new iPhone, iPad, iPod Touch, Mac or
            Apple TV, £4.99/month after free trial. Available when you purchase
            any new iPhone, iPad, iPod Touch, Mac or Apple TV, £4.99/month after
            free trial.
          </Text>
          <Pressable
            flexDirection="row"
            alignItems={"center"}
            onPress={() => setIsReadMore(!isReadMore)}
          >
            <Text fontSize={17} bold color={Color.primary}>
              {isReadMore ? "Less description" : "Full description"}
            </Text>
            <Icon
              position={"relative"}
              top={1}
              ml={2}
              fontSize={20}
              color={Color.primary}
              as={<AntDesign name="arrowright" />}
              name="chevron-right"
            />
          </Pressable>
        </Box>
        <HStack justifyContent="space-between" mb={2}>
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
            Add to basket
          </Button>
        </Pressable>
      </Box>
    </Box>
  );
};

const ColorItem = ({
  item,
  index,
  setActiveColor,
  activeColor,
}: ColorItemProps) => {
  return (
    <Pressable onPress={() => setActiveColor(item)} key={index}>
      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent={"center"}
        borderWidth={1}
        borderColor={activeColor === item ? `${item}.400` : "gray.200"}
        px={4}
        py={2}
        borderRadius={10}
        mr={2}
      >
        <Box w={5} h={5} bg={`${item}.400`} mr={1} rounded="full"></Box>
        <Text fontSize={14} bold>
          {item}
        </Text>
      </Flex>
    </Pressable>
  );
};

const exampleItems = [
  {
    title: "Item 1",
    text: "Text 1",
    imgUrl: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
  },
  {
    title: "Item 2",
    text: "Text 2",
    imgUrl: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
  },
  {
    title: "Item 3",
    text: "Text 3",
    imgUrl: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
  },
  {
    title: "Item 4",
    text: "Text 4",
    imgUrl: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
  },
  {
    title: "Item 5",
    text: "Text 5",
    imgUrl: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
  },
];

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const isCarousel = useRef(null);

  const CarouselCardItem = ({ item, index }) => {
    return (
      <Image
        h={"full"}
        w={width - 20}
        resizeMode="contain"
        source={{ uri: item.imgUrl }}
        alt={item.text}
      />
    );
  };
  return (
    <VStack h={height / 3} alignItems="center" space={4} mt={7} px={7}>
      <Carousel
        layout="tinder"
        ref={isCarousel}
        data={exampleItems}
        sliderWidth={width - 20}
        itemWidth={width - 60}
        renderItem={CarouselCardItem}
        onSnapToItem={(index: number) => setActiveIndex(index)}
        inactiveSlideShift={0}
        useScrollView={true}
      />
      <Pagination
        dotsLength={exampleItems.length}
        activeDotIndex={activeIndex}
        carouselRef={isCarousel}
        dotStyle={{
          width: 20,
          height: 20,
          borderRadius: 50,
          marginHorizontal: -8,
          backgroundColor: "#5956E9",
        }}
        inactiveDotOpacity={0.3}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </VStack>
  );
};

export default SingleProducts;
