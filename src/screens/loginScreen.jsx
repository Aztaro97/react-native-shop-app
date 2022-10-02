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
  useColorModeValue,
  View,
} from "native-base";
import React, { useState } from "react";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Animatable from "react-native-animatable";
import { MotiView } from "moti";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../utils/validationSchema";

import { Color } from "../Color";

const LoginScreen = ({ navigation }) => {
  const [showPwd, setShowPwd] = useState(false);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <Box flex={1} justifyContent="center" backgroundColor={Color.primary}>
        <Heading
          // animation="slideInDown"
          // iterationCount={5}
          // direction="alternate"
          size={"4xl"}
          px="10"
          mb="4"
          mt="20"
          color={"#fff"}
        >
          Welcome back
        </Heading>
        <MotiView
          from={{
            opacity: 0,
            scale: 0.8,
            translateY: 800,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            translateY: 0,
          }}
          transition={{
            loop: false,
            type: "timing",
            duration: 1500,
            delay: 100,
          }}
          style={{ backgroundColor: "#fff", borderRadius: 20, padding: 20 }}
        >
          <View
            flex={1}
            py="5"
            px="10"
            borderTopRadius="3xl"
            bg={useColorModeValue("#fff", "gray.800")}
          >
            <Text fontSize="3xl" fontWeight={"bold"}>
              Login
            </Text>
            <Stack space={4} mt="4">
              <FormControl isRequired>
                <Controller
                  control={control}
                  name="email"
                  rules={{ required: "The Email is required" }}
                  render={({
                    field: { onChange, onBlur, value },
                    fieldState: { error },
                  }) => (
                    <Box>
                      <Input
                        type="text"
                        placeholder="Enter the Email"
                        w="100%"
                        variant={"underlined"}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                      {error && (
                        <Text fontSize="xs" color="red.500" mt="1">
                          {error.message}
                        </Text>
                      )}
                    </Box>
                  )}
                />
              </FormControl>

              <FormControl isRequired>
                <Controller
                  control={control}
                  name="password"
                  rules={{
                    required: "The Password is required",
                    minLength: {
                      value: 6,
                      message: "Must be at least 6 characters.",
                    },
                  }}
                  render={({
                    field: { onChange, onBlur, value },
                    fieldState: { error },
                  }) => (
                    <Box>
                      <Input
                        type={showPwd ? "text" : "password"}
                        placeholder="Enter the Password"
                        w="100%"
                        variant={"underlined"}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        InputRightElement={
                          <Pressable onPress={() => setShowPwd(!showPwd)}>
                            <Text color={Color.primary}>
                              {showPwd ? "Hide" : "Show"}{" "}
                            </Text>
                          </Pressable>
                        }
                      />
                      {error && (
                        <Text fontSize="xs" color="red.500" mt="1">
                          {error.message}
                        </Text>
                      )}
                    </Box>
                  )}
                />
              </FormControl>

              <Pressable onPress={() => navigation.navigate("Home")}>
                <Text color={Color.primary}>Forgot passcode? </Text>
              </Pressable>

              <Button
                w="100%"
                py="4"
                _text={{ fontSize: "xl", fontWeight: "bold" }}
                bg={Color.primary}
                rounded="lg"
                color="#fff"
                onPress={handleSubmit(onSubmit)}
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
          </View>
        </MotiView>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
