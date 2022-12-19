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
  KeyboardAvoidingView,
} from "native-base";
import { Platform, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import React, { FC, useState } from "react";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AnimatePresence, MotiView, motify, MotiText } from "moti";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LoginSchema } from "../../utils/validationSchema";

import { Color } from "../../constants/Color";
import { HomeDrawerParamsList, RootStackParamList } from "../../types/navs";
import { CompositeScreenProps } from "@react-navigation/native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { NBMotiView } from "../../components/animation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { RootState } from "../../store";
import { setAuth } from "../../store/features/authReducers/authSliders";

const { height, width } = Dimensions.get("window");

type UserLoginProps = {
  email: string;
  password: string;
};

// type Props = CompositeScreenProps<
//   DrawerScreenProps<HomeDrawerParamsList>,
//   NativeStackScreenProps<RootStackParamList, "Login">
// >;

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen = ({ navigation }: Props) => {
  const [showPwd, setShowPwd] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { handleSubmit, control } = useForm<UserLoginProps>({
    resolver: yupResolver(LoginSchema),
  });

  const { isAuth } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const onSubmit = async (data: UserLoginProps) => {
    const { email, password } = data;
    setIsLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res.user) {
        dispatch(setAuth(true));
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <Box flex={1} justifyContent="space-between" bg={Color.primary} safeArea>
      <MotiText
        from={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "timing",
          duration: 1000,
          delay: 100,
        }}
        style={{
          marginTop: 50,
          marginLeft: 20,
        }}
      >
        <Heading
          fontSize={70}
          fontWeight="bold"
          lineHeight={65}
          px="10"
          mb="4"
          mt="20"
          color="#fff"
          position={"relative"}
        >
          Welcome back
        </Heading>
      </MotiText>
      <MotiView
        from={{
          opacity: 0.5,
          scale: 0.5,
          translateY: 800,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          translateY: 0,
        }}
        transition={{
          type: "timing",
          duration: 1500,
          delay: 800,
        }}
      >
        <KeyboardAvoidingView
          h={{
            base: height / 1.5,
            lg: "auto",
          }}
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
          bg={useColorModeValue("#fff", "gray.800")}
          borderTopLeftRadius={30}
          borderTopRightRadius={30}
          py="5"
          px="10"
        >
          <Box flex={1}>
            <Heading fontSize="3xl" fontWeight={"bold"}>
              Login
            </Heading>
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
                        size={"lg"}
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
                        size={"lg"}
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

              <Pressable onPress={() => navigation.navigate("ResetPassword")}>
                <Text color={Color.primary}>Forgot passcode? </Text>
              </Pressable>

              <Button
                w="100%"
                mt={5}
                py="4"
                _text={{ fontSize: "xl", fontWeight: "bold" }}
                bg={Color.primary}
                rounded="lg"
                color="#fff"
                isLoading={isLoading}
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
          </Box>
        </KeyboardAvoidingView>
      </MotiView>
    </Box>
  );
};

export default LoginScreen;
