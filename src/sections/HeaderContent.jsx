import React from "react";
import { Box } from "@motor-js/core";

const HeaderContent = (props) => {
  return (
    <Box
      gridArea="header"
      backgroundColor="brand"
      border="bottom"
      direction="row"
      align="center"
      padding="12px"
      size="large"
      overflow="hidden"
    >
      {props.children}
    </Box>
  );
};

export default HeaderContent;
