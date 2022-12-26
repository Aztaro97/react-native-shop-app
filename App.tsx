import React, { type PropsWithChildren } from "react";
import AppContainer from "./src/components/container";
import AuthRoutes from "./src/routes/auth.routes";

import "react-native-gesture-handler";
import "react-native-reanimated";

const App: React.FC = () => {
	return (
		<AppContainer>
			<AuthRoutes />
		</AppContainer>
	);
};

export default App;
