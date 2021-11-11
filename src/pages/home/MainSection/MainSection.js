import React from "react";

// imporded Container components
import { StyledContainer } from "../../../layouts/Layouts";
import { Link } from "react-router-dom";
import Contact from "../../contact/Contact";

import {
  ContentWrapper,
  HeroWrapper,
  HeroLeftWrapper,
  HeroRightWrapper,
  UnderTitle,
  HeroImage,
} from "../MainSection/MainSection.styles";

import Button from "../../../component/Buttons/Buttons";
import { MainHeader } from "../../../component/mainHeader/MainHeader";
import { AsideLogo } from "../../../component/asideLogo/AsideLogo";

import PhoneIcon from "../../../assets/images/Phone-icon.png";
import Aside_Logo from "../../../assets/images/details.png";

const MainSection = () => {
  return (
    <ContentWrapper>
      <AsideLogo src={Aside_Logo}></AsideLogo>
      <StyledContainer>
        <HeroWrapper>
          <HeroLeftWrapper>
            <MainHeader>
              <b>You’ll</b> know me better by staying in touch I’m
              <b> Rozantsew Michał</b>
            </MainHeader>
            <UnderTitle>
              In my projects I am trying to create <b>clean</b> design and
              provide best practices in (my work-flow) creations web
              applications
            </UnderTitle>
            {/* <ButtonWrapper>
              <Link to="contact">
                <Button primary>Contact</Button>
              </Link>
              <Link to="/projects">
                <Button>Projects</Button>
              </Link>
            </ButtonWrapper> */}
          </HeroLeftWrapper>
          <HeroRightWrapper>
            <HeroImage src={PhoneIcon}></HeroImage>
          </HeroRightWrapper>
        </HeroWrapper>
      </StyledContainer>
    </ContentWrapper>
  );
};

export default MainSection;
