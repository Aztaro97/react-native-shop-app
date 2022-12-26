import * as React from "react";
import {View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {NativeBaseProvider, extendTheme} from "native-base";
import {AnimatePresence} from "moti";
import {Provider} from "react-redux";

import theme from "../../theme";
import {store} from "../../store";

interface Props {
  children: React.ReactNode;
}

const AppContainer: React.FC<Props> = ({children}) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <AnimatePresence>{children}</AnimatePresence>
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default AppContainer;
