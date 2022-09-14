import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FeaturesCard from "./FeaturesCard";
import Image1 from "../assets/feature-1-img.png";
import Image2 from "../assets/feature-2-img.png";
import Image3 from "../assets/feature-3-img.png";
import { MotionInView, varZoomIn } from "../animate";
const container = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: "2rem",
  paddingLeft: { xs: "0.8rem", sm: "0" },
};

function FeaturesSection() {
  return (
    <>
      <Box sx={container}>
        <MotionInView variants={varZoomIn} sx={{ width: "90%" }}>
          <Typography
            variant="p"
            fontSize="24px"
            // fontWeight="bold"
            sx={{ textAlign: "center !important" }}
            color="white"
          >
            Market Sentiments, Portfolio, And Run The Infrastructure Of Your
            Choice
          </Typography>
        </MotionInView>
        <FeaturesCard
          title="Invest Smart"
          image={Image1}
          justifyContent="flex-start"
          alignItems="flex-start"
        />
        <FeaturesCard
          title="Detailed Statistics"
          image={Image2}
          direction="row-reverse"
          justifyContent="flex-end"
          alignItems="center"
        />

        <FeaturesCard
          title="Grow Your Profit And Track Your Investments"
          image={Image3}
          justifyContent="flex-start"
          direction="row"
          alignItems="center"
        />
      </Box>
    </>
  );
}

export default FeaturesSection;
