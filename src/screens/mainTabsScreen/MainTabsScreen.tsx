import React, {useRef, useEffect} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Icon} from "native-base";
import {TouchableOpacity} from "react-native-gesture-handler";
import {StyleSheet, View} from "react-native";

import HomeScreen from "../homeScreen/homeScreen";
import FavoritesScreen from "../favoriteScreen/favoriteScreen";
import OrdersScreen from "../orderScreen/orderScreen";
import CartScreen from "../cartScreen/cartScreen";
import SettingScreen from "../settingScreen/settingScreen";
import ProfileScreen from "../profileScreen/profileScreen";
import ProductScreen from "../productScreen/productScreen";
import DeliveryScreen from "../deliveryScreen/deliveryScreen";
import CheckOutScreen from "../checkOutScreen/checkOutScreen";
import ResetPasswordScreen from "../resetPassword/resetPasswordScreen";
import {Color} from "../../constants/Color";
import {RootStackParamList, RootTabParamList} from "../../types/navs";
import {Icons} from "../../components/icons";
import {Colors} from "../../constants";
import {MotiText, MotiView, useAnimationState, useDynamicAnimation} from "moti";

interface MainTabsScreenProps {
  navigation: any;
}

interface TabBarButtonProps {
  accessibilityState: any;
  onPress: any;
  item: {
    route: string;
    label: string;
    iconType: any;
    nameIcon: string;
    component: React.ReactNode;
  };
}

const HomeStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Product" component={ProductScreen} />
    </HomeStack.Navigator>
  );
};

const FavoritesStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Favorite"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Favorite" component={FavoritesScreen} />
      <HomeStack.Screen name="Checkout" component={CheckOutScreen} />
      <HomeStack.Screen name="Delivery" component={DeliveryScreen} />
    </HomeStack.Navigator>
  );
};

const ProfilesStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
      <HomeStack.Screen name="Setting" component={SettingScreen} />
      <HomeStack.Screen name="Orders" component={OrdersScreen} />
      <HomeStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </HomeStack.Navigator>
  );
};

const tabArray = [
  {
    route: "HomeTab",
    label: "Home",
    iconType: Icons.MaterialIcons,
    nameIcon: "home-filled",
    component: HomeStackScreen,
  },
  {
    route: "FavoritesTab",
    label: "Favorites",
    iconType: Icons.MaterialIcons,
    nameIcon: "favorite-outline",
    component: FavoritesStackScreen,
  },
  {
    route: "ProfilesTab",
    label: "Profile",
    iconType: Icons.FontAwesome5,
    nameIcon: "user",
    component: ProfilesStackScreen,
  },
  {
    route: "CartTab",
    label: "Cart",
    iconType: Icons.Feather,
    nameIcon: "shopping-cart",
    component: CartScreen,
  },
];

const animate1 = {
  0: {scale: 0.5, translateY: 7},
  0.92: {translateY: -34},
  1: {scale: 1.2, translateY: -24},
};
const animate2 = {
  0: {scale: 1.2, translateY: -24},
  1: {scale: 1, translateY: 7},
};

const circle1 = {
  0: {scale: 0},
  0.3: {scale: 0.9},
  0.5: {scale: 0.2},
  0.8: {scale: 0.7},
  1: {scale: 1},
};
const circle2 = {0: {scale: 1}, 1: {scale: 0}};

const TabBarButton = ({
  item,
  onPress,
  accessibilityState,
}: TabBarButtonProps) => {
  const focused = accessibilityState.selected;
  const viewRef = useRef<null>(null);
  const circleRef = useRef<null>(null);
  const textRef = useRef<null>(null);

  const viewAnimation = useDynamicAnimation(() => {
    return {
      scale: 1,
    };
  });
  const circleAnimation = useDynamicAnimation(() => {
    return {
      scale: 0.4,
    };
  });
  const textAnimation = useDynamicAnimation(() => {
    return {
      scale: 1,
    };
  });

  useEffect(() => {
    if (focused) {
      viewAnimation.animateTo({scale: 1.2, translateY: -24});
      circleAnimation.animateTo({scale: 1.3});
      textAnimation.animateTo({scale: 1.3});
      //   viewRef.current.animate(animate1);
      //   circleRef.current.animate(circle1);
      //   textRef.current.transitionTo({scale: 1});
    } else {
      //   viewRef.current.animate(animate2);
      //   circleRef.current.animate(circle2);
      //   textRef.current.transitionTo({scale: 0});
      viewAnimation.animateTo({scale: 1, translateY: 7});
      circleAnimation.animateTo({scale: 1});
      textAnimation.animateTo({scale: 0});
    }
  }, [focused]);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <MotiView state={viewAnimation} ref={viewRef} style={styles.container}>
        <View style={styles.btn}>
          <MotiView
            state={circleAnimation}
            ref={circleRef}
            style={styles.circle}
          />
          <Icon as={item.iconType} name={item.nameIcon} size={5} color="#fff" />
        </View>
        <MotiText state={textAnimation} ref={textRef} style={styles.text}>
          {item.label}
        </MotiText>
      </MotiView>
    </TouchableOpacity>
  );
};

const MainTabsScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveBackgroundColor: "#fff",
        tabBarStyle: styles.tabBar,
        tabBarInactiveTintColor: Color.secondary,
        headerShown: false,
      }}>
      {tabArray.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            tabBarLabel: item.label,
            tabBarButton: props => <TabBarButton item={item} {...props} />,
            headerShown: false,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 90,
  },
  tabBar: {
    height: 70,
    position: "absolute",
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
    elevation: 10,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "red",
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",

    zIndex: 10, // works on ios
    elevation: 10, // works on android
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: "center",
    color: Colors.primary,
  },
});

export default MainTabsScreen;
