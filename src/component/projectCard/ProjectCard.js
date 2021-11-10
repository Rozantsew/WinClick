import React from "react";
import {
  StyledCard,
  StyledImg,
  TextWrapper,
  StyledHeadline,
  StyledParagraph,
  StyldeLink,
} from "./ProjectCard.style";

const ProjectCard = ({ imgUrl, header, description, link, placeholder }) => {
  return (
    <StyledCard>
      <StyledImg src={imgUrl}></StyledImg>
      <TextWrapper>
        <StyledHeadline>{header}</StyledHeadline>
        <StyledParagraph>{description}</StyledParagraph>
        <StyldeLink href={link} target="_blank">
          {placeholder}
        </StyldeLink>
      </TextWrapper>
    </StyledCard>
  );
};

export default ProjectCard;
