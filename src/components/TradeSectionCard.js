import { Box, Grid, styled, Typography, Button, Stack } from "@mui/material";
import React from "react";

import { ArrowForwardIos } from "@mui/icons-material";

const gridStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "1.5rem",
  justifyContent: "center",
  padding: "1.5rem 0 ",
  // backgroundColor: "white",
  borderRadius: "15px",
  marginBottom: "2.2rem",
  paddingBottom: "3rem",
};
const StyledImage = styled("img")({
  width: "5rem",
  transform: "scale(1.1)",
  ObjectFit: "contain",
  marginTop: "2rem",
});

const styledCircle = {
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  border: "1px solid gray",
};

function TradeSectionCard({
  color,
  index,
  toggleActive,
  bgColor,
  image,
  title,
  subtitle,
  text,
  showButton,
}) {
  return (
    <Grid
      item
      sx={gridStyle}
      xs={12}
      md={3.7}
      onClick={() => toggleActive(index)}
      backgroundColor={bgColor}
      color={color}
    >
      {/* <Box sx={imageContainer}> */}
      <StyledImage src={image} alt="bitcoin logo" />
      {/* </Box> */}
      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        // backgroundColor="red"
        mt={4}
      >
        <Typography variant="p" fontWeight="bold" fontSize="28px">
          {title}
        </Typography>
        <Typography
          variant="p"
          fontWeight="bold"
          fontSize="20px"
          mt={6}
          color="gray"
        >
          {subtitle}
        </Typography>
      </Stack>
      <Typography variant="p" fontSize="16.5px" textAlign="center">
        {text}
      </Typography>

      <Box sx={styledCircle}>
        <ArrowForwardIos sx={{ color: "blue", fontSize: "18px" }} />
      </Box>
    </Grid>
  );
}

export default TradeSectionCard;
