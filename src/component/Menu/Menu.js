import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/about">About me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skils">Skills</Link>
      <Link to="contact">Contact</Link>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
