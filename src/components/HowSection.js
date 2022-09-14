import {
  Button,
  MenuItem,
  TextField,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { MotionInView, varFadeInUp, varZoomIn, varZoomInUp } from "../animate";

const container = {
  width: "100vw",
  marginTop: "4rem",
  // padding: "0 1rem",
};
const topContainer = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "1.3rem",

  //   flexDirection: { md: "column", sm: "column" },
  flexDirection: "column",
};
const styledCard = {
  width: { sm: "70%", xs: "90%" },
  backgroundColor: "white",
  borderRadius: "15px",
  padding: "4rem 2rem ",
  zIndex: "999",
};

const styledStack = {
  flexDirection: { md: "row", sm: "column" },
  backgroundColor: "green",
};

const rates = [
  {
    value: "USD",
    label: "TH/s",
  },
  {
    value: "EUR",
    label: "H/s",
  },
  {
    value: "BTC",
    label: "KH/s",
  },
  {
    value: "JPY",
    label: "MH/s",
  },
  {
    value: "JPY",
    label: "GH/s",
  },
];
function HowSection() {
  const [rate, setRate] = useState("EUR");
  const handleChange = (event) => {
    setRate(event.target.value);
  };
  return (
    <>
      <Box sx={container}>
        <MotionInView variants={varFadeInUp} sx={topContainer}>
          <Typography
            variant="p"
            fontWeight="bold"
            color="white"
            sx={{ fontSize: { md: "1.9rem", sm: "1.6rem" } }}
          >
            How Much Can You Earn With Us
          </Typography>
          <Typography color="gray" fontSize="13px" textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id
            similique temporibus dignissimos tempore odio?
          </Typography>

          <MotionInView variants={varZoomIn} sx={styledCard}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: { md: "30ch", sm: "100%", xs: "100%" },
                },
                //   backgroundColor: "red",
                display: "flex",
                flexDirection: { md: "row", xs: "column" },
                alignItems: { md: "row", xs: "flex-start" },
                justifyContent: "space-between",
                gap: { md: "2px", xs: "2rem" },
              }}
              noValidate
              autoComplete="off"
            >
              {/* <Stack sx={styledStack} spacing={5}> */}
              <TextField
                placeholder="Enter your hash rate"
                variant="standard"
                fontSize="18px"
              />

              <TextField
                //   id="standard-select-currency"
                select
                value={rate}
                onChange={handleChange}
                variant="standard"
                // sx={{ width: { xs: "100%" } }}
              >
                {rates.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Button variant="contained">Calculate</Button>
              {/* </Stack> */}
            </Box>
            <Stack direction="column" spacing={3.5} mt={5}>
              <Typography
                color="primary"
                fontSize="17px"
                variant="p"
                letterSpacing="0.9px"
                fontWeight={599}
              >
                ESTIMATED 24 HOUR REVENUE
              </Typography>
              <Typography
                variant="p"
                fontSize="30px"
                fontWeight={599}
                color="black"
              >
                0.055 130 59 ETH
                <Typography variant="span" color="primary">
                  ($1275)
                </Typography>
              </Typography>
              <Typography variant="p" color="gray" fontSize="17px">
                Revenue will change based on mining difficulty and Ethereum
                price.
              </Typography>
            </Stack>
          </MotionInView>
        </MotionInView>
      </Box>
    </>
  );
}

export default HowSection;
