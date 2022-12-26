import React, {type PropsWithChildren} from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import AppContainer from "./src/components/container";
import AuthRoutes from "./src/routes/auth.routes";

import "react-native-gesture-handler";
import "react-native-reanimated";

const App = () => {
  return (
    <AppContainer>
      <AuthRoutes />
    </AppContainer>
  );
};

export default App;
