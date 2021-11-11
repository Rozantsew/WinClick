import React from "react";

// imporded Container components
import { StyledContainer } from "../../../layouts/Layouts";

import {
  AboutSectionWrapper,
  AboutContentWrapper,
  AboutLeftWrapper,
  AboutRightWrapper,
  AboutImage,
  AboutParagraph,
} from "./AboutSection.styles";

import Michael from "../../../assets/images/Michael.png";

const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <StyledContainer>
        <AboutContentWrapper>
          <AboutLeftWrapper>
            <AboutImage src={Michael}></AboutImage>
          </AboutLeftWrapper>
          <AboutRightWrapper>
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
          </AboutRightWrapper>
        </AboutContentWrapper>
      </StyledContainer>
    </AboutSectionWrapper>
  );
};
export default AboutSection;
