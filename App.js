import React, { useEffect, useState } from "react";
import AppContainer from "./src/components/container";
import AuthRoutes from "./src/routes/auth.routes";

export default function App() {
  return (
    <AppContainer>
      <AuthRoutes />
    </AppContainer>
  );
}
