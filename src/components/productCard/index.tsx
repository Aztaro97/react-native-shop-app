import React, {FC, useState} from "react";
import {productProps} from "../../types/types";
import {View, Text, Image} from "native-base";
import {TouchableOpacity} from "react-native-gesture-handler";
import {Dimensions, Pressable, StyleSheet} from "react-native";
import {Icons} from "../icons";
import {Colors} from "../../constants";
import {useNavigation} from "@react-navigation/native";
import {SCREEN_WIDTH} from "../../constants/constantUtils";

const {width} = Dimensions.get("window");
const mWidth = width / 2;

interface props {
  item: productProps;
}

const ProductCard: FC<props> = ({item}) => {
  const [isLike, setIsLike] = useState(false);

  const navigation = useNavigation();

  const handleLikeItem = item => {
    setIsLike(!isLike);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Product", {item})}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: item?.image}}
          alt={item?.image}
        />
        <View style={styles.bodyWrapper}>
          <Text>{item?.name}</Text>
          <Pressable style={{zIndex: 10}} onPress={() => handleLikeItem(item)}>
            <Icons.AntDesign
              name={isLike ? "heart" : "hearto"}
              size={20}
              color={isLike ? Colors.primary : null}
            />
          </Pressable>
        </View>
        <Text style={styles.price}>AED 1000</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH / 2,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  bodyWrapper: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 15,
    // fontWeight: "700"
  },
});

export default ProductCard;
