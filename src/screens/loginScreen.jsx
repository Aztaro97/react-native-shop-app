import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Pressable,
  Stack,
  Text,
} from "native-base";
import React, { useState } from "react";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import { Color } from "../Color";

const LoginScreen = ({ navigation }) => {
  const [showPwd, setShowPwd] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPAssword = () => {
    setShowPwd(!showPwd);
  };

  const handleSubmit = () => {
    console.log("Login");
  };

  return (
    <Box flex={1} justifyContent="center" backgroundColor={Color.primary}>
      <Heading size={"4xl"} px="10" mb="4" mt="20" color={"#fff"}>
        Welcome back
      </Heading>
      <Box flex={1} py="5" px="10" borderTopRadius="3xl" backgroundColor="#fff">
        <Text fontSize="3xl" fontWeight={"bold"}>
          Login
        </Text>
        <Stack space={4} mt="4">
          <FormControl isRequired>
            <FormControl.Label
              alignItems={"center"}
              _text={{ fontSize: "lg", color: Color.textGray }}
            >
              <SimpleLineIcons
                name="envelope"
                size={20}
                color={Color.textGray}
              />{" "}
              Email
            </FormControl.Label>
            <Input
              type="text"
              placeholder="Email"
              w="100%"
              variant={"underlined"}
              onChangeText={(text) => setEmail(text)}
            />
            <FormControl.ErrorMessage>
              The Email is required
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label
              alignItems={"center"}
              _text={{ fontSize: "lg", color: Color.textGray }}
            >
              <Feather name="lock" size={18} color={Color.textGray} />
              Password
            </FormControl.Label>
            <Input
              type={showPwd ? "text" : "password"}
              placeholder="Password"
              w="100%"
              variant={"underlined"}
              onChangeText={(text) => setPassword(text)}
              InputRightElement={
                <Pressable onPress={handleShowPAssword}>
                  <Text color={Color.primary}>
                    {showPwd ? "Hide" : "Show"}{" "}
                  </Text>
                </Pressable>
              }
            />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage>
              The Password is required
            </FormControl.ErrorMessage>
          </FormControl>

          <Pressable onPress={() => navigation.navigate("Home")}>
            <Text color={Color.primary}>Forgot passcode? </Text>
          </Pressable>

          <Button
            w="100%"
            py="4"
            _text={{ fontSize: "xl" }}
            backgroundColor={Color.primary}
            color="#fff"
            onPress={handleSubmit}
          >
            Login
          </Button>

          <Center>
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text fontSize={"lg"} color={Color.primary}>
                Create account
              </Text>
            </Pressable>
          </Center>
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginScreen;
