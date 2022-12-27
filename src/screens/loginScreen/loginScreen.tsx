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
  HStack,
} from "native-base";
import {Platform, Dimensions, StyleSheet} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import React, {FC, useState} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {LoginSchema} from "../../utils/validationSchema";

import auth from "@react-native-firebase/auth";
import {
  GoogleSignin,
  GoogleSigninButton,
  NativeModuleError,
  statusCodes,
} from "@react-native-google-signin/google-signin";

// import { auth } from "../../config/firebase";
import {RootState} from "../../store";
import {setAuth} from "../../store/features/authReducers/authSliders";
import {NBMotiView} from "../../components/animation";
import {HomeDrawerParamsList, RootStackParamList} from "../../types/navs";
import {Color} from "../../constants/Color";
import {onGoogleButtonPress} from "../../utils/utils";

const {height, width} = Dimensions.get("window");

type UserLoginProps = {
  email: string;
  password: string;
};
type Props = NativeStackScreenProps<RootStackParamList, "Login">;

GoogleSignin.configure({
  webClientId:
    "300055833730-43a3j5uq78488unu9ui3o0p2710gdocf.apps.googleusercontent.com",
});

const LoginScreen: FC<Props> = ({navigation}) => {
  const [showPwd, setShowPwd] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {handleSubmit, control} = useForm<UserLoginProps>({
    resolver: yupResolver(LoginSchema),
  });

  const {isAuth, user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const onSubmit = async (data: UserLoginProps) => {
    const {email, password} = data;
    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
        if (result.user) {
          dispatch(setAuth(result.user));
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const facebookLogin = async () => {
    console.log("hell");
  };

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      //   const currentUser = await GoogleSignin.getCurrentUser();
      //   this.setState({userInfo});
      console.log("User Info", userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log("SIGN_IN_CANCELLED");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log("IN_PROGRESS");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not avai :lable or outdated
        console.log("PLAY_SERVICES_NOT_AVAILABLE");
      } else {
        // some other error happened
        console.log("some other error happened", error);
      }
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
        }}>
        <Heading
          fontSize={70}
          fontWeight="bold"
          lineHeight={65}
          px="10"
          mb="4"
          mt="20"
          color="#fff"
          position={"relative"}>
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
        }}>
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
          px="10">
          <Box flex={1}>
            <Heading fontSize="3xl" fontWeight={"bold"}>
              Login
            </Heading>
            <Stack space={4} mt="4">
              <FormControl isRequired>
                <Controller
                  control={control}
                  name="email"
                  rules={{required: "The Email is required"}}
                  render={({
                    field: {onChange, onBlur, value},
                    fieldState: {error},
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
                    field: {onChange, onBlur, value},
                    fieldState: {error},
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
                _text={{fontSize: "xl", fontWeight: "bold"}}
                bg={Color.primary}
                rounded="lg"
                color="#fff"
                isLoading={isLoading}
                onPress={handleSubmit(onSubmit)}>
                Login
              </Button>

              <HStack
                justifyContent={"center"}
                alignItems={"center"}
                space={10}
                mt={5}>
                <GoogleSigninButton
                  style={{width: 192, height: 48}}
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Dark}
                  onPress={googleLogin}
                  //   disabled={this.state.isSigninInProgress}
                />
                {/* <Pressable onPress={}>
                  <FontAwesome
                    style={styles.icon}
                    name="facebook-f"
                    size={24}
                    color="#fff"
                  />
                </Pressable> */}
              </HStack>

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

const styles = StyleSheet.create({
  icon: {
    padding: 10,
    backgroundColor: Color.primary,
    borderRadius: 50,
    width: 50,
    height: 50,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
