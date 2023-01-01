import {Box, Center, Heading, Image, View} from "native-base";
import React, {useState, useRef} from "react";
import {StyleSheet} from "react-native";
import Carousel, {Pagination} from "react-native-snap-carousel";
import {ITEM_WIDTH, SLIDER_WIDTH} from "../../constants/constantUtils";
import {Colors} from "../../constants";

interface renderItemProps {
  item: string;
  index: number;
}
interface renderDotsProps {
  activeIndex: number;
  total: number;
  context: any;
}

const ProductScreen = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const imageArray = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  ];

  const renderItem = ({item, index}: renderItemProps) => {
    return (
      <View key={index} style={styles.imageWrapper}>
        <Image style={styles.image} source={{uri: item}} alt={item} />
      </View>
    );
  };

  const renderDots = (activeIndex, total, context) => {
    return (
      <View style={styles.dotContainer}>
        {imageArray.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: 20,
                height: 20,
                borderRadius: 25,
                marginHorizontal: 5,
                // backgroundColor: index == activeIndex ? Colors.primary : "#fff",
                backgroundColor: "#fff",
                borderColor: index == activeIndex ? Colors.primary : "black",
                borderWidth: 2,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 25,
                  backgroundColor:
                    index == activeIndex ? Colors.primary : "black",
                }}
              />
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <Box flex={1}>
      <Center>
        <Carousel
          ref={isCarousel}
          layout="default"
          layoutCardOffset={2}
          loop={true}
          activeAnimationType={"spring"}
          autoplay={true}
          data={imageArray}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={10}
          useScrollView={true}
          onSnapToItem={index => setIndex(index)}
          contentContainerStyle={{}}
        />
        <Pagination
          dotsLength={imageArray.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          // ref={isCarousel}
          //   dotStyle={{
          //     width: 10,
          //     height: 10,
          //     borderRadius: 25,
          //     marginHorizontal: 1,
          //     backgroundColor: Colors.primary,
          //     borderColor: Colors.primary,
          //     borderWidth: 10,
          //   }}
          renderDots={renderDots}
          tappableDots={true}
          containerStyle={{
            paddingVertical: 15,
          }}
          inactiveDotStyle={{
            backgroundColor: "black",

            // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </Center>
      <Box flex={1} bg={"#fff"} borderTopRadius={30} top={5} px={5} py={5}>
        <Heading fontWeight={"bold"} color={Colors.primary}>
          Lorem ipsum, dolor sit amet consectetur
        </Heading>
        <View>
          <Heading fontSize={18} fontWeight={"bold"} color={"#000"}>
            Select Size
          </Heading>
        </View>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    width: 200,
    height: 250,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 20,
    position: "absolute",
    bottom: 0,
    backgroundColor: "transparent",
    opacity: 0.5,
  },
});

export default ProductScreen;
