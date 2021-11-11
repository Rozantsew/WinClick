import React from "react";
import { StyledContainer } from "../../layouts/Layouts";
import { ContactAsideLogo } from "../../component/asideLogo/AsideLogo";
import Button from "../../component/Buttons/Buttons";
import { Link } from "react-router-dom";
import {
  SecondHeader,
  CenterHeader,
} from "../../component/secondHeader/SecondHeader";
import {
  PageWrapper,
  AboutHeader,
  AboutSectionWrapper,
  AboutImage,
  ParagraphWrapper,
  AboutParagraph,
  WorkshopsWrapper,
  WorkshopSectionWrapper,
  WorkParagraphWrapper,
  WorkImageWrapper,
  WorkshopImage,
  FrelanceWrapper,
  FrelanceParagraph,
  ButtonWrapper,
} from "./About.style";
import Michael from "../../assets/images/Michael.png";
import DesignCodding from "../../assets/images/Design_&_Codding.svg";
import jsWorkshop from "../../assets/images/warsawJS.jpg";

const About = () => {
  return (
    <PageWrapper>
      <StyledContainer>
        <ContactAsideLogo src={DesignCodding}></ContactAsideLogo>
        <AboutHeader>
          About <b>me</b>
        </AboutHeader>
        <AboutSectionWrapper>
          <AboutImage src={Michael}></AboutImage>
          <ParagraphWrapper>
            <AboutParagraph>
              Since 2013 I have been working in the automotive industry in
              various companies and positions like a car painter, a car monter.
              In 2016 I started working for advertising company. I totally
              improved my soft and self-presentation skills. I am still studying
              Computer Science in my spare time. It took me two years to find
              the job as an assistant. In 2019 I gained a regular job as a web
              developer. I also do my own freelance projects and improve my
              personal brand. I believe that good business starts with good
              relationship.
            </AboutParagraph>
          </ParagraphWrapper>
        </AboutSectionWrapper>
      </StyledContainer>
      <WorkshopsWrapper>
        <StyledContainer>
          <SecondHeader>
            Workshops by <b>WarsawJS</b>
          </SecondHeader>
          <WorkshopSectionWrapper>
            <WorkParagraphWrapper>
              <AboutParagraph>
                I had a pleasure attending JavaScript workshop to feel a part of
                some great community, and be able to discuss different
                approaches in creation projects and solving problems. I spent a
                great day full of inspiration and mentoring.<br></br> Meetings
                like these gave me motivation and experience to deal with daily
                tasks and projects.
              </AboutParagraph>
            </WorkParagraphWrapper>
            <WorkImageWrapper>
              <WorkshopImage src={jsWorkshop}></WorkshopImage>
            </WorkImageWrapper>
          </WorkshopSectionWrapper>
        </StyledContainer>
      </WorkshopsWrapper>
      <FrelanceWrapper>
        <StyledContainer>
          <CenterHeader>
            Freelance <b>projects</b>
          </CenterHeader>
          <FrelanceParagraph>
            No matter what you are interested in, design or coding. I try to
            provide the best quality of a product, clean minimalistic design
            with high attention to details, and best practices which attract
            users' attention.
          </FrelanceParagraph>
          <ButtonWrapper>
            <Link to="contact">
              <Button primary>Contact</Button>
            </Link>
            <Link to="/projects">
              <Button>Projects</Button>
            </Link>
          </ButtonWrapper>
        </StyledContainer>
      </FrelanceWrapper>
    </PageWrapper>
  );
};

export default About;
