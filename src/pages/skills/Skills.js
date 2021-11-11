import React, { Fragment } from "react";
import { StyledContainer } from "../../layouts/Layouts";
import SkillsArray from "../../component/skillsItem/SkillsArray";
import SkillsItem from "../../component/skillsItem/SkillsItem";
import {
  ContentWrapper,
  StyledParagraph,
  SkillsWrapper,
  ItemsWrapper,
} from "./Skills.style";
import { SkillsMainHeader } from "../../component/mainHeader/MainHeader";
import { SkilsAsideLogo } from "../../component/asideLogo/AsideLogo";
// Images for the skills page
import DesignCodding from "../../assets/images/skills.png";

const Skils = (props) => {
  const SkillsItems = SkillsArray.map(({ id, imgUrl, skillDescription }) => {
    return (
      <SkillsItem
        key={id}
        imgUrl={imgUrl}
        skillDescription={skillDescription}
      />
    );
  });
  return (
    <>
      <ContentWrapper>
        <StyledContainer>
          <SkilsAsideLogo src={DesignCodding}></SkilsAsideLogo>
          <SkillsMainHeader>
            Skills I wanted to <b>share</b>
          </SkillsMainHeader>
          <StyledParagraph>
            During my study journey, I always tried to learn on the projects I
            created. Of course, I did a lot of courses and tutorials but I
            believe that the real studying process starts when you try to build
            something valuable, initiate some projects, or solve some problems
            for you or your customers.
          </StyledParagraph>
        </StyledContainer>
      </ContentWrapper>
      <SkillsWrapper>
        <StyledContainer>
          <ItemsWrapper>{SkillsItems}</ItemsWrapper>
        </StyledContainer>
      </SkillsWrapper>
    </>
  );
};

export default Skils;
