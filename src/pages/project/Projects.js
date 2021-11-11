import React from "react";
import { StyledContainer } from "../../layouts/Layouts";
import { ProductAsideLogo } from "../../component/asideLogo/AsideLogo";
import ProjectData from "../../component/projectCard/Project-Array";
import {
  ProjectDescriptionWrapper,
  DescriptionBox,
  StyledParagraph,
  ProjectWrapper,
  CardWrapper,
} from "./Projects.style";
import { MainHeader } from "../../component/mainHeader/MainHeader";
import ProjectCard from "../../component/projectCard/ProjectCard";
import DesignCodding from "../../assets/images/Design_&_Codding.png";

// mapping through Project Card Data to get the data
const Projects = (props) => {
  const ProjectCardsComponent = ProjectData.map(
    ({ id, imgUrl, header, description, link, placeholder }) => {
      return (
        <ProjectCard
          key={id}
          imgUrl={imgUrl}
          header={header}
          description={description}
          link={link}
          placeholder={placeholder}
        />
      );
    }
  );
  return (
    <>
      <ProjectDescriptionWrapper>
        <StyledContainer>
          <ProductAsideLogo src={DesignCodding}></ProductAsideLogo>
          <DescriptionBox>
            <MainHeader>Projects</MainHeader>
            <StyledParagraph>
              There are several of my freelance projects and I would say that
              with each project I was able to learn some important lessons,
              every new interaction brought value to my professional growth. I
              had the opportunity to work with great people from whom I can
              learn and improve my soft and hard skills, also become better in
              solving clients' problems. It helped me to build the ability to
              feed clients' needs and see opportunities while others see
              problems.
            </StyledParagraph>
          </DescriptionBox>
        </StyledContainer>
      </ProjectDescriptionWrapper>
      <ProjectWrapper>
        <StyledContainer>
          <CardWrapper>{ProjectCardsComponent}</CardWrapper>
        </StyledContainer>
      </ProjectWrapper>
    </>
  );
};

export default Projects;
