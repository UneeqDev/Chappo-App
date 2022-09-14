import React, { useState } from "react";
import { styled, Box, Stack, Typography, Button, Fab } from "@mui/material";
import { theme } from "../theme/theme";
import {
  MotionInView,
  varFadeInLeft,
  varFadeInUp,
  varZoomIn,
} from "../animate";
import { Menu, PlayArrow } from "@mui/icons-material";
import HeroImage from "../assets/Illustration.png";
import Logo from "../assets/Logo.png";
import Sidebar from "./Sidebar";

const NavSection = styled(Box)({
  width: "90%",
  height: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "2rem 0",
  color: "white",
  padding: "2rem 0 0rem 1.2rem",

  [theme.breakpoints.down("md")]: {
    // padding: "2rem 0 2rem 1.2rem",
    justifyContent: "space-between",
  },
  // [theme.breakpoints.down("sm")]: {
  //   padding: "2rem 0 2rem 1rem",
  //   justifyContent: "space-between",
  // },
});
const StyledLink = styled("a")({
  color: "white",
  position: "relative",
  textDecoration: "none",
  cursor: "pointer",
  padding: "0 10px",
});

const HeroSection = styled(Box)({
  width: "100%",
  display: "flex",
  height: "100%",
  alignItems: "center",
  // padding: " 6rem 2rem 2rem 2rem ",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: " 1rem 2rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: " 1rem 1.5rem",
  },
});

const GrayBoxStyle = {
  width: { sm: "300px", xs: "285px" },
  height: "29px",
  backgroundColor: "#2d3241",
  borderRadius: "15px",
  padding: "2px 3px",
  alignItems: "center",
  justifyContent: "space-between",
};

const WhiteBoxStyle = {
  width: "30%",
  height: "85%",
  fontSize: "15px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  borderRadius: "15px",
  display: "flex",

  color: "gray",
  // #535252;
};

const LeftStack = {
  padding: { md: "6rem 2rem 2rem 2rem ", sm: "2rem" },
  height: "80%",
  alignItems: { sm: "center", md: "flex-start" },
};
const RightStack = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  margin: "0 4rem 0 0",
};
const IconStyle = {
  color: "white ",
  fontWeight: "bold ",
  fontSize: "30px ",
  // marginRight: "3rem",

  display: { xs: "flex", md: "none" },
};
const iconContainer = {
  flex: "1",
  // backgroundColor: "green",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};
function Hero() {
  const [sideNav, setSideNav] = useState(false);

  const sideNavToggler = () => {
    setSideNav((prev) => !prev);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Sidebar
          sideNav={sideNav}
          setSideNav={setSideNav}
          sideNavToggler={sideNavToggler}
        />
        <NavSection>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            flex={1}
            pl={3}
          >
            <img src={Logo} alt="logoImage" />
            <Typography
              variant="p"
              fontWeight={500}
              fontSize="17.5px"
              sx={{ letterSpacing: "1px" }}
            >
              CRAPPO
            </Typography>
          </Stack>
          <Box sx={iconContainer}>
            <Menu sx={IconStyle} onClick={sideNavToggler} />
          </Box>
          <Stack
            direction="row"
            flex={1}
            spacing={4}
            alignItems="center"
            sx={{
              paddingLeft: "2rem",
              width: "50%",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Stack direction="row" spacing={1}>
              {["Products", "Feautures", "About", "Contact"].map(
                (item, index) => (
                  <StyledLink href="#" key={index}>
                    {item}
                  </StyledLink>
                )
              )}
            </Stack>
            <Stack direction="row" spacing={3} alignItems="center">
              <Typography variant="p" fontSize="17px">
                Login
              </Typography>
              <Box
                sx={{ height: "20px", width: "1px", backgroundColor: "gray" }}
              ></Box>
              <Button variant="contained" size="small">
                Register
              </Button>
            </Stack>
          </Stack>
        </NavSection>
        <HeroSection>
          <Stack flex={1} spacing={3.3} sx={LeftStack}>
            <Stack direction="row" sx={GrayBoxStyle}>
              <MotionInView variants={varZoomIn} sx={WhiteBoxStyle}>
                {/* <Stack > */}
                <Typography fontSize="13.5px">70% SAVE</Typography>
                {/* </Stack> */}
              </MotionInView>
              <Typography
                sx={{ fontSize: { xs: "11.5px", sm: "13px" } }}
                color="white"
                width="60%"
              >
                for the best black friday deals
              </Typography>
            </Stack>
            <MotionInView
              variants={varFadeInUp}
              sx={{ width: { md: "80%", sm: "60%", xs: "85%" } }}
            >
              <Stack direction="column" spacing={2}>
                <Typography
                  // variant="h3"
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "3.3rem", sm: "3.3", xs: "2.3rem" },
                    color: "white",
                    letterSpacing: "1.5px",
                    lineHeight: { md: "3.5rem", xs: "2.5rem" },
                  }}
                >
                  Fastest & Secure Platform To Invest In Cypto
                </Typography>
                <Typography variant="p" fontSize="12px" color="lightgray">
                  buy and sell cyptocurrencies by trusted 10M wallets, in over
                  100m transactions
                </Typography>
              </Stack>
            </MotionInView>
            <Button
              variant="contained"
              sx={{
                width: "175px !important",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="p" fontSize="16px">
                Try For FREE
              </Typography>
              <MotionInView
                sx={{
                  width: "31px",
                  height: "31px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variants={varFadeInLeft}
              >
                <PlayArrow color="primary" sx={{ fontSize: "9px" }} />
              </MotionInView>
            </Button>
          </Stack>
          <Stack
            direction="row"
            flex={1}
            sx={{
              height: "100%",
              justifyContent: { md: "flex-start", sm: "center" },
              alignItems: "center",
            }}
          >
            <MotionInView variants={varZoomIn}>
              <Box sx={RightStack}>
                <img
                  src={HeroImage}
                  alt="img"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    transform: "scale(0.8)",
                  }}
                />
              </Box>
            </MotionInView>
          </Stack>
        </HeroSection>
      </Box>
    </>
  );
}

export default Hero;
