import React from "react";
import styled from "styled-components";
import "./App.css";
import MainContent from "./sections/MainContent.jsx";
import SidebarContent from "./sections/SidebarContent.jsx";
import HeaderContent from "./sections/HeaderContent.jsx";
import FooterContent from "./sections/FooterContent.jsx";
import { Grid, Box, Sidebar, useSidebar } from "motor-ui";
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
      <Sidebar
        width="30%"
        collapsable
        padding="15px 20px"
        isOpen={isOpen}
        backgroundColor="altGray1"
        justifyContent="top"
      >
        <Filter
          onClick={toggle}
          size={25}
          style={{ color: "black", padding: "0px 30px 0px 5px" }}
        />
        <SidebarContent />
      </Sidebar>
      {/** MAIN */}
      <Box gridArea="main">
        <MainContent />
      </Box>
      {/** FOOTER */}
      <FooterContent>made with ❤️ by motor</FooterContent>
    </Grid>
  );
}

export default App;
