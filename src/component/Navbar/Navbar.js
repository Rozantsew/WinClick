import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks/Hook";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import { bool } from "prop-types";
import { Link } from "react-router-dom";

import { StyledNav, StyledLogoWrapper, StyledLogo } from "./Navbar.styles";
import logo from "../../assets/images/logo.png";
import { StyledContainer } from "../../layouts/Layouts";

const Navbar = (children, ...props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledContainer>
      <StyledNav bgColor="#f2f2f2" open={open} setOpen={setOpen}>
        <StyledLogoWrapper
          {...props}
          whileHover={{ translateX: 4 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/">
            <StyledLogo src={logo}></StyledLogo>
          </Link>
        </StyledLogoWrapper>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </StyledNav>
    </StyledContainer>
  );
};
Navbar.propTypes = {
  open: bool.isRequired,
};

export default Navbar;
