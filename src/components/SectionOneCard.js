import { MotionInView, varFadeInUp } from "../animate";
import { Grid, Typography, Stack, Box, Button } from "@mui/material";
import React, { useState } from "react";

const gridStyle = {
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
  padding: "1.5rem 0 ",
};
const fabStyle = {
  width: { md: "50px", xs: "80px" },
  height: { md: "50px", xs: "80px" },
  borderRadius: "50%",
  backgroundColor: "gray",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "1s ease-in-out",
  "&:hover": {
    backgroundColor: "white",
    cursor: "pointer",
  },
};
const stackStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};
function SectionOneCard({ title, subtitle, Icon }) {
  return (
    <>
      <Grid item xs={12} md={4} sx={gridStyle}>
        <MotionInView sx={stackStyle} variants={varFadeInUp}>
          <Box sx={fabStyle}>
            <Icon sx={{ color: "blue" }} />
          </Box>

          <Stack direction="column">
            <Typography
              fontWeight="bold"
              fontSize="22px"
              color="secondary"
              letterSpacing="1px"
            >
              {title}
            </Typography>
            <Typography color="gray" fontSize="14px">
              {subtitle}
            </Typography>
          </Stack>
        </MotionInView>
      </Grid>
    </>
  );
}

export default SectionOneCard;
