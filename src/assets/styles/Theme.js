import React from "react";
import { ThemeProvider } from "styled-components";

// Code is for navbar needs
const theme = {
  primaryDark: "#313030",
  primaryLight: "#EFFFFA",
  primaryHover: "#343078",
  mobile: "576px",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
