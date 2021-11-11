import styled from "styled-components";
import { mediaQueries } from "../../../assets/styles/mediaQueries";

export const AboutSectionWrapper = styled.div`
  background-color: #8bc9e5;
  background-image: linear-gradient(to bottom right, #32cddc, #5fd0fb, #3490ff);
`;
export const AboutContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  margin: 30px 0px;

  ${mediaQueries("md")`
    flex-direction: row;
    justify-content: center;
    padding: 100px 0px 100px 0px;
    margin: 0px;
  `}
`;

export const AboutLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  ${mediaQueries("md")`
    justify-content: center;
    align-items: flex-start;
    width: 30%
  `}
`;
export const AboutRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${mediaQueries("md")`
  justify-content: center;
  align-items: center;
    width: 70%
  `};
`;

export const AboutImage = styled.img`
  width: 250px;
  height: auto;
  margin: 30px 0px 0px;
  ${mediaQueries("md")`
    margin-bottom: 5px;
    `}
`;

export const AboutParagraph = styled.p`
  width: 90%;
  text-align: center;
  margin: 20px 0px 30px;

  ${mediaQueries("md")`
    text-align: left;
    margin-bottom: 0px;
    width: 80%;
  `}
`;
