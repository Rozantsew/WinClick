import React from "react";
import { StyledContainer } from "../../layouts/Layouts";

import {
  FooterWrapper,
  FooterContainer,
  StyledFooter,
  IconText,
  StyledLogoWrapper,
  StyledLogo,
  CopyrightWrapper,
  SocialWrapper,
  SocialIcon,
  CopyrightText,
} from "./Footer.styles";
import instagramIcon from "../../assets/images/icons/instagram.png";
import linkedinIcon from "../../assets/images/icons/linkedin.png";
import facebookIcon from "../../assets/images/icons/facebook.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <StyledFooter>
          <CopyrightWrapper>
            <SocialWrapper>
              <SocialIcon src={linkedinIcon}></SocialIcon>
              <SocialIcon src={facebookIcon}></SocialIcon>
              <SocialIcon src={instagramIcon}></SocialIcon>
            </SocialWrapper>
            <IconText>
              Obserwuj nas
            </IconText>
          </CopyrightWrapper>
            <CopyrightText>
              Polityka prywatności<br></br> © 2021 WinClick. All rights
              reserved
            </CopyrightText>
        </StyledFooter>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
