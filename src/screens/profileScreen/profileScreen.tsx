import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../constants/Color";

interface NavItemProps {
  title: string;
  link: string;
}

const navList = [
  {
    title: "Edit Profile",
    link: "Orders",
  },
  {
    title: "Shopping address",
    link: "Orders",
  },
  {
    title: "Order history",
    link: "Orders",
  },
  {
    title: "Cards",
    link: "Orders",
  },
  {
    title: "Notifications",
    link: "Orders",
  },
];

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <Box flex={1} bg={Color.bgGray} h="full" px={6} safeArea>
      <Pressable onPress={() => navigation.goBack()} top={5}>
        <Icon
          size="lg"
          as={<AntDesign name="arrowleft" color={Color.secondary} />}
        />
      </Pressable>

      <Box flex={1} px={4} h={"full"} mt={10}>
        <Heading mb={10} fontSize={34}>
          My profile
        </Heading>
        <Box bg="#fff" borderRadius={15} pt={20} pb={4} px={10}>
          <Center>
            <Image
              position={"absolute"}
              top={-100}
              w={90}
              h={90}
              rounded="full"
              source={{ uri: "https://i.pravatar.cc/300" }}
              alt="Avatar"
            />
            <Text fontSize={18} bold>
              Rosina Doe
            </Text>
            <HStack space={4}>
              <Icon
                size="lg"
                as={
                  <Feather name="map-pin" size={24} color={Color.secondary} />
                }
              />
              <Text>Address: 43 Oxford Road M13 4GR Manchester, UK</Text>
            </HStack>
          </Center>
        </Box>

        <VStack space={4} mt={5}>
          {navList.map((item, index) => (
            <NavItem {...item} key={index} />
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

const NavItem = ({ title, link }: NavItemProps) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(link)}>
      <HStack
        px={4}
        py={4}
        borderRadius={20}
        bg="#fff"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Text fontSize={18} bold>
          {title}
        </Text>
        <Icon
          size="lg"
          as={<AntDesign name="arrowright" color={Color.secondary} />}
        />
      </HStack>
    </Pressable>
  );
};

export default ProfileScreen;
