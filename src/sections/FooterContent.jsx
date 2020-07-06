import React from "react";
import { Box } from "motor-ui";

const FooterContent = (props) => {
  return (
    // <Box>Hello Sidebar  <span role='img' aria-label='wave_emoji'>👋</span></Box>
    <Box
      gridArea="footer"
      border="top"
      align="center"
      justifyContent="center"
      direction="row"
      size="small"
    >
      {props.children}
    </Box>
  );
};

export default FooterContent;
