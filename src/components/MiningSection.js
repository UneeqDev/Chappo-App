import { Box, Grid, Stack, Typography, styled, Button } from "@mui/material";
import React from "react";
import { varZoomIn, MotionInView } from "../animate";

const container = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // padding:"1rem"
};
const wrapper = {
  width: "90%",
  margin: { xs: " 0 1rem ", md: " 3.5rem 0" },
  backgroundColor: "#108fde",
  opacity: "0.8",
  padding: "3rem 2rem 4rem 2rem",
  borderRadius: "15px",
  margin: { xs: " 0 1rem ", md: " 10px" },
};
const gridStyle = {
  alignItems: "center",
  gap: "2rem",
};
const inputContainer = {
  minWidth: "70%",
  color: "white",
  height: "29px",
  fontSize: "17px",
  color: "white",
  // backgroundColor: "red",
  borderBottom: "1px solid white",
};
const StyledInput = styled("input")({
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  color: "white",
  fontSize: "17px",
  "&::placeholder": {
    color: "white",
    fontSize: "18px",
  },
});
function MiningSection() {
  return (
    <>
      <Box sx={container}>
        <MotionInView variants={varZoomIn} sx={wrapper}>
          <Grid container sx={gridStyle}>
            <Grid item xs={12} md={5}>
              <Stack direction="column" color="white" spacing={2.5} width="80%">
                <Typography variant="p" fontSize="23px" fontWeight="bold">
                  Start Mining Now
                </Typography>
                <Typography variant="p" fontSize="15px">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iste, ipsum. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Ad, saepe.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Stack
                sx={{
                  flexDirection: { md: "row", sm: "column" },
                  alignItems: { md: "flex-end", sm: "center" },
                  gap: { md: "1rem", sm: "5px" },
                }}
                spacing={2}
              >
                <Box sx={inputContainer}>
                  <StyledInput placeholder="enter message" type="text" />
                </Box>
                <Button
                  variant="contained"
                  sx={{ color: "black", backgroundColor: "white" }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </MotionInView>
      </Box>
    </>
  );
}

export default MiningSection;
