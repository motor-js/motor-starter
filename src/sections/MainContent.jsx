import React from "react";
import { Box, useScreenSize, CurrentSelections } from "motor-ui";

const MainContent = () => {
  const { screen } = useScreenSize();

  let flexDirection = "column";
  if (screen === "desktop" || screen === "largeDesktop") flexDirection = "row";

  const boxProps = {
    backgroundColor: "white",
    border: "dashed",
    margin: "5px",
  };

  const dynamicWidth = "calc(50% - 10px)";

  return (
    <Box padding="10px" width="100%" overflow="scroll" direction="column">
      <CurrentSelections minHeight="60px" width="100%" />
      <Box width="100%" direction={flexDirection}>
        <Box flex={true} height="120px" {...boxProps}></Box>
        <Box flex={true} height="120px" {...boxProps}></Box>
        <Box flex={true} height="120px" {...boxProps}></Box>
      </Box>

      <Box width="100%" flex="grow" wrapProp={true}>
        <Box width={dynamicWidth} {...boxProps}></Box>
        <Box width={dynamicWidth} {...boxProps}></Box>
        <Box width={dynamicWidth} {...boxProps}></Box>
        <Box width={dynamicWidth} {...boxProps}></Box>
      </Box>
    </Box>
  );
};

export default MainContent;
