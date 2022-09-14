import React from "react";
import { MotionInView, varFadeInUp, varZoomIn, varZoomInUp } from "../animate";
import { Grid, Typography, Box, Button, styled } from "@mui/material";
import WhyImage from "../assets/why-img.png";

const containerStyle = {
  width: "100%",
  marginTop: "3rem",
};

const styledHeading = {
  fontWeight: 500,
  fontSize: { md: "2.4rem", sm: "2.4rem", xs: "2rem" },
  color: "white",
  letterSpacing: "1.5px",
  lineHeight: { md: "3.2rem", xs: "3rem" },
};
const gridItemStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  justifyContent: "center",
  // backgroundColor: "blue",
};
const StyledImage = styled("img")(({ theme }) => ({
  objectFit: "cover",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    transform: "scale(0.7)",
  },
  [theme.breakpoints.down("md")]: {
    transform: "scale(0.9)",
  },
}));
function WhySection() {
  return (
    <>
      <Box sx={containerStyle}>
        <Grid
          container
          spacing={3}
          p={3}
          sx={{
            alignItems: "center",
            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },
          }}
        >
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              // backgroundColor: "orange",
            }}
          >
            <MotionInView
              variants={varZoomIn}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <StyledImage
                src={WhyImage}
                alt="whyImage"
                objectFit="cover"
                width="100%"
                style={{ marginBottom: "3rem !important" }}
              />
            </MotionInView>
          </Grid>
          <Grid item xs={12} md={7}>
            <MotionInView variants={varZoomIn} sx={gridItemStyle}>
              <Typography sx={styledHeading}>
                Why You Should Choose <br />
                CHAPPO
              </Typography>
              <Typography variant="p" fontSize="17px" color="gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. In, praesentium.
              </Typography>
              <Button
                variant="contained"
                size="medium"
                sx={{ width: "150px !important" }}
              >
                Learn More
              </Button>
            </MotionInView>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default WhySection;
