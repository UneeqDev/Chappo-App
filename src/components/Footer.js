import { Grid, Stack, Typography, Box, styled } from "@mui/material";
import React from "react";
import Logo from "../assets/Logo.png";
import Visa from "../assets/VisaLogo.png";
import MasterCard from "../assets/logos_mastercard.png";
import Bitcoin from "../assets/logos_bitcoin.png";
import {
  YouTube,
  WhatsApp,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";

const container = {
  width: "100%",
};
const gridStyle = {
  color: "white",
  width: "100%",
  // : "center",
  marginTop: "5rem",
  padding: "0 2rem 1rem 0",
  gap: { xs: "3rem", md: "0" },
  justiftContent: "space-between",
};

const cardContainer = {
  width: "90px",
  height: "65px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#060628cc",
  borderRadius: "15%",
};
const StyledImage = styled("img")({
  width: "55%",

  objectFit: "contain",
});
const StyledIcon = {
  color: "white",
  fontSize: "25px",
  transition: "0.2s ease-in-out",
  "&:hover": {
    color: "blue",
  },
};
function Footer() {
  return (
    <Box sx={container}>
      <Grid container sx={gridStyle}>
        <Grid item xs={12} md={3}>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
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
        </Grid>
        <Grid item md={3} xs={12}>
          <Stack
            direction="column"
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="p" fontSize="20px" fontWeight="bold">
              Quick Links
            </Typography>
            <Stack direction="column" spacing={1.5}>
              {["Home", "Products", "About", "Features", "Contact"].map(
                (item, index) => (
                  <Typography key={index} color="white" fontSize="16px">
                    {item}
                  </Typography>
                )
              )}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Stack
            direction="column"
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="p" fontSize="20px" fontWeight="bold">
              Resources Links
            </Typography>
            <Stack direction="column" spacing={1.5}>
              {[
                "Download Whitepaper",
                "Smart Token",
                "Blockchain Explore",
                "Crypto API",
              ].map((item, index) => (
                <Typography key={index} color="white" fontSize="16px">
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Stack
            direction="column"
            spacing={5}
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="p" fontSize="16.5px">
              We accept following payment systems
            </Typography>
            <Stack direction="row" spacing={1.5}>
              <Box sx={cardContainer}>
                <StyledImage src={Visa} alt="img" />
              </Box>

              <Box sx={cardContainer}>
                <StyledImage src={MasterCard} alt="img" />
              </Box>

              <Box sx={cardContainer}>
                <StyledImage src={Bitcoin} alt="img" />
              </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "2.5rem", md: "0" },
          justifyContent: { md: "space-between", xs: "center" },
        }}
        alignItems="center"
        mt={4}
        mb={5}
        ml={4}
        p={6}
      >
        <Typography
          variant="p"
          fontSize="17px"
          color="white"
          sx={{ fontSize: { xs: "15px", md: "17px" } }}
          textAlign="center"
        >
          © 2022 CRAPPO. All rights reserved.
        </Typography>

        <Stack direction="row" spacing={3} alignItems="center">
          <YouTube sx={StyledIcon} />
          <WhatsApp sx={StyledIcon} />
          <Instagram sx={StyledIcon} />
          <Twitter sx={StyledIcon} />
          <LinkedIn sx={StyledIcon} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
