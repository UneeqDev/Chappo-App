import React from "react";
import { Grid } from "@mui/material";
import SectionOneCard from "./SectionOneCard";
import { MotionInView, varFadeInUp } from "../animate";
import { BarChart, NetworkLocked, Person } from "@mui/icons-material";

const containerStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: { xs: "2rem", sm: "3rem" },

  padding: "1rem 0",
};
const gridStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
function SectionOne() {
  return (
    <>
      <MotionInView sx={containerStyle} variants={varFadeInUp}>
        <Grid container width="90%" sx={gridStyle}>
          <SectionOneCard
            title="$30B"
            subtitle="Digital Currency Exchange"
            Icon={BarChart}
          />
          <SectionOneCard
            title="190+"
            subtitle="Countries Around The World"
            Icon={NetworkLocked}
          />
          <SectionOneCard
            title="$10M"
            subtitle="Trusted Wallet Investors"
            Icon={Person}
          />
        </Grid>
      </MotionInView>
    </>
  );
}

export default SectionOne;
