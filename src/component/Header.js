import { Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";

const defaultTheme = createTheme();

export default function Header() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="relative"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            PIZZA SHOP
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
