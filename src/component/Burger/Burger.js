import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./Byrger.styled";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
Burger.popTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
