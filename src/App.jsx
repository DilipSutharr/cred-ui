import React from "react";
import { Box } from "@mui/material";

import Hero from "./components/Hero";
import Rewards from "./components/Rewards";
import BrandsSection from "./components/BrandsSection";
import Experience from "./components/Experience";
import BecomeMember from "./components/BecomeMember";
import CREDStory from "./components/CREDStory";
import Downloads from "./components/Downloads";
import StaticSection from "./components/StaticSection";
import Header from "./components/Header";

const App = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Rewards />
      <BrandsSection />
      <Experience />

      <StaticSection />

      <BecomeMember />
      <CREDStory />
      <Downloads />
    </Box>
  );
};

export default App;
