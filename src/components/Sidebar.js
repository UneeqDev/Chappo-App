import React from "react";
import { Box, Drawer, Stack, Typography } from "@mui/material";
import { Cancel } from "@mui/icons-material";

const container = {
  display: "flex",
  width: "100vw",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  position: "relative,",
};
const TextStyle = {
  transition: "0.3s ease-in-out",
  "&:hover": {
    color: "blue",
    cursor: "pointer",
  },
};
function Sidebar({ sideNav, setSideNav, sideNavToggler }) {
  return (
    <>
      <Drawer
        anchor="right"
        transitionDuration={900}
        open={sideNav}
        onClose={() => setSideNav(false)}
        PaperProps={{
          sx: {
            width: "100vw",
            elevation: 6,

            backgroundColor: "#120535",
          },
        }}
      >
        <Box sx={container}>
          <Cancel
            onClick={sideNavToggler}
            sx={{
              color: "white",
              fontSize: "30px",
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
          />
          <Stack direction="column" spacing={5}>
            {["Products", "Feautures", "About", "Contact"].map(
              (item, index) => (
                <Typography
                  variant="p"
                  fontWeight="bold"
                  color="white"
                  fontSize="22px"
                  key={index}
                  sx={TextStyle}
                  onClick={sideNavToggler}
                >
                  {item}
                </Typography>
              )
            )}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

export default Sidebar;
