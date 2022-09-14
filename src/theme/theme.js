import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "18px",
          borderRadius: "1rem",
          width: "100px",
          textTransform: "inherit",
        },
      },
    },

    // MuiFab:{
    //   styleOverrides:{
    //     secondary:{
    //     backgroundColor:"#030720fe"
    //     }
    //   }
    // }
  },

  typography: {
    fontFamily: ["sans-serif"].join(","),
  },
  palette: {
    secondary: {
      main: "#ffffff",
    },
  },
});
export default theme;
