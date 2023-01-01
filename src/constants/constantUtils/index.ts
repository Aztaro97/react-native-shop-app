import { Dimensions } from "react-native";

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SLIDER_WIDTH = Dimensions.get("window").width + 13;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * .8);