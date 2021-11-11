import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const ProjectDescriptionWrapper = styled.div`
  padding: 100px 0px;
  background: #f3f3f3;
`;
export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaQueries("sm")`
    align-items: flex-start;
  `}
`;

export const StyledParagraph = styled.p`
  text-align: center;
  ${mediaQueries("sm")`
    text-align: left;
  `}
`;

export const ProjectWrapper = styled.div`
  padding: 100px 0px;
  border-bottom: 1px solid #3490ff;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${mediaQueries("sm")`
    justify-content: flex-start;
  `}
`;
