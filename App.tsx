import React, { useEffect, useState } from "react";
import AppContainer from "./src/components/container";
import AuthRoutes from "./src/routes/auth.routes";

// App.js
import 'react-native-reanimated'


export default function App() {
  return (
    <AppContainer>
      <AuthRoutes />
    </AppContainer>
  );
}
