import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box, Center } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>Hello word</Box>
      </Center>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
