import React from "react";
import { Box } from "motor-ui";

const HeaderContent = (props) => {
  return (
    // <Box>Hello Sidebar  <span role='img' aria-label='wave_emoji'>👋</span></Box>
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
