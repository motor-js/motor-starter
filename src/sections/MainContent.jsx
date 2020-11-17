import React from "react";
import { Box, useScreenSize, CurrentSelections } from "@motor-js/core";

const MainContent = () => {
  const { screen } = useScreenSize();

  let flexDirection = "column";
  if (screen === "desktop" || screen === "largeDesktop") flexDirection = "row";

  const boxProps = {
    backgroundColor: "white",
    border: { color: "brand" },
    margin: "5px",
    borderRadius: "8px",
  };

  const dynamicWidth = "calc(50% - 10px)";

  return (
    <Box padding="10px" width="100%" overflow="scroll" direction="column">
      <CurrentSelections minHeight="60px" width="100%" />
      <Box width="100%" direction={flexDirection}>
        <Box flex={true} height={{min: '120px'}} {...boxProps}></Box>
        <Box flex={true} height={{min: '120px'}} {...boxProps}></Box>
        <Box flex={true} height={{min: '120px'}} {...boxProps}></Box>
      </Box>

      <Box width="100%" flex="grow" wrapProp={true} overflow="visble">
        <Box width={dynamicWidth} height={{min: '200px'}} {...boxProps} overflow="visble"></Box>
        <Box width={dynamicWidth} height={{min: '200px'}} {...boxProps} overflow="visble"></Box>
        <Box width={dynamicWidth} height={{min: '200px'}} {...boxProps} overflow="visble"></Box>
        <Box width={dynamicWidth} height={{min: '200px'}} {...boxProps} overflow="visble"></Box>
      </Box>
    </Box>
  );
};

export default MainContent;
