import { Typography, Stack, Grid, Button, Box } from "@mui/material";
import React from "react";
import { varFadeIn, MotionInView, varZoomIn } from "../animate";
import Image from "../assets/feature-1-img.png";

const gridStyle = {
  maxWidth: "95%",
  // backgroundColor: "red",
  marginTop: "6rem",
  alignItems: { md: "flex-start", xs: "center" },
  justifyContent: { md: "center", xs: "center" },
  gap: "6rem",
  marginBottom: "3rem",
};
function FeaturesCard({ title, image, direction }) {
  return (
    <>
      <Grid container sx={gridStyle} direction={direction}>
        <Grid Item xs={12} md={4}>
          <Stack direction="column" spacing={2.8}>
            <Typography
              variant="p"
              color="white"
              fontWeight="bold"
              fontSize="22px"
            >
              {title}
            </Typography>
            <Typography variant="p" color="gray" fontSize="15px">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur rem ducimus vitae maiores dolorum alias.
            </Typography>
            <MotionInView variants={varZoomIn}>
              <Button
                size="small"
                variant="contained"
                fontSize="14px"
                sx={{
                  textTransform: "lowercase",
                  fontSize: "13px",
                  width: "100px !important",
                }}
              >
                learn more
              </Button>
            </MotionInView>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <MotionInView variants={varZoomIn}>
            <img
              src={image}
              alt="image"
              style={{ width: "90%", objectFit: "contain" }}
            />
          </MotionInView>
        </Grid>
      </Grid>
    </>
  );
}

export default FeaturesCard;
