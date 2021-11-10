import React from "react";
import { StyledContainer } from "../../layouts/Layouts";

import {
  StyledFooter,
  StyledLogoWrapper,
  StyledLogo,
  CopyrightWrapper,
  SocialWrapper,
  SocialIcon,
  CopyrightText,
} from "./Footer.styles";
import logo from "../../assets/images/logo.png";
import githubIcon from "../../assets/images/github.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";
import facebookIcon from "../../assets/images/facebook.svg";

const Footer = () => {
  return (
    <StyledContainer>
      <StyledFooter>
        <StyledLogoWrapper>
          <StyledLogo src={logo}></StyledLogo>
        </StyledLogoWrapper>
        <CopyrightWrapper>
          <SocialWrapper>
            <SocialIcon src={githubIcon}></SocialIcon>
            <SocialIcon src={linkedinIcon}></SocialIcon>
            <SocialIcon src={facebookIcon}></SocialIcon>
          </SocialWrapper>
          <CopyrightText>
            Polityka prywatności<br></br> © 2020 Michał Rozantsew. All rights
            reserved
          </CopyrightText>
        </CopyrightWrapper>
      </StyledFooter>
    </StyledContainer>
  );
};

export default Footer;
