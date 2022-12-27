import React, {FC} from "react";
import {productProps} from "../../types/types";
import {View, Text, Image} from "native-base";
import {TouchableOpacity} from "react-native-gesture-handler";

interface props {
  item: productProps;
}

const ProductCard: FC<props> = ({item}) => {
	console.log(item)
  return (
    <TouchableOpacity>
      <View>
        <Image source={{uri: item?.image}} width={500} height={100} />
        <Text>{item?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
