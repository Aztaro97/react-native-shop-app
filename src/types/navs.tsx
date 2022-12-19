import { NavigatorScreenParams } from "@react-navigation/native";

export type HomeDrawerParamsList = {
  HomeDrawer: undefined;
  Login: undefined;
  Register: undefined;
};

export type RootStackParamList = {
  OnBoarding: undefined;
  HomeDrawer: NavigatorScreenParams<HomeDrawerParamsList>;
  Login: undefined;
  Register: undefined;
  Favorite: undefined;
  Checkout: undefined;
  Delivery: undefined;
  Profile: undefined;
  ResetPassword: undefined;
  Orders: undefined;
  Setting: undefined;
};

export type RootTabParamList = {
  HomeTab: undefined;
  FavoritesTab: undefined;
  ProfilesTab: undefined;
  CartTab: undefined;
};
