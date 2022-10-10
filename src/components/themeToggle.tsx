import { Box, HStack, Switch, Text, useColorMode, useColorModeValue } from "native-base";
import React from "react";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={4} alignItems="center" justifyContent={"space-between"}>
      <Text fontSize="lg" fontWeight="bold" color={useColorModeValue("gray.100", "gray.200")}>
        Dark Theme
      </Text>
      <Switch
        size="lg"
        isChecked={colorMode === "dark"}
        onToggle={toggleColorMode}
        colorScheme="cyan"
        offTrackColor="primary.700"
      />
    </HStack>
  );
};

export default ThemeToggle;
