import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";
// import { StyledComponents } from "@styled-icons/simple-icons/StyledComponents";

export const ContentWrapper = styled.div`
  background-color: #f3f3f3;
  padding: 100px 0px;
`;

export const SkillsHeader = styled.h3`
  font-weight: 400;
  margin: 30px 0px;
  ${mediaQueries("md")`
        text-align: left;
        font-size: 24px;
  `}
`;

export const StyledParagraph = styled.p`
  text-align: center;
  ${mediaQueries("sm")`
    text-align: left;
  `}
  ${mediaQueries("md")`
    margin-bottom: 30px;
  `}
`;

export const SkillsWrapper = styled.div`
  /* background-color: lightcoral; */
  padding: 100px 0px 50px;
  border-bottom: 1px solid rgb(52, 144, 255);
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${mediaQueries("md")`
  justify-content: flex-start;
  `}
`;
