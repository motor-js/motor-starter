import React from "react";
import styled from "styled-components";
import "./App.css";
import {
  MainContent,
  SidebarContent,
  HeaderContent,
  FooterContent,
} from "./sections";
import { Grid, Box, useSidebar } from "@motor-js/core";
import { Filter } from "@styled-icons/ionicons-solid";

const FilterIcon = styled(Filter)`
  color: white;
  padding: 0px 30px 0px 5px;
`;

function App() {
  //use the Siderbar hook
  const { isOpen, toggle } = useSidebar();

  return (
    <Grid
      rows={["60px", "auto", "30px"]}
      cols={["auto"]}
      areas={[["header"], ["main"], ["footer"]]}
      backgroundColor="altGray1"
    >
      {/** HEADER */}
      <HeaderContent>
        <FilterIcon onClick={toggle} size={25} />
        <span style={{ color: "white", fontWeight: "bold" }}>
          Motor Starter Dashboard{" "}
          <span role="img" aria-label="peace_emoji">
            ✌️
          </span>
        </span>
      </HeaderContent>
      {/** SIDEBAR */}
      <SidebarContent onClick={toggle} isOpen={isOpen} />
      {/** MAIN */}
      <Box gridArea="main">
        <MainContent />
      </Box>
      {/** FOOTER */}
      <FooterContent>
        <span style={{ color: "white" }}>
          made with
          <span
            role="img"
            aria-label="heart_emoji"
            style={{ padding: "0px 5px" }}
          >
            ❤️
          </span>
          by motor
        </span>
      </FooterContent>
    </Grid>
  );
}

export default App;
