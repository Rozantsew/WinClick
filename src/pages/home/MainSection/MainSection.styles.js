import styled from "styled-components";
import { mediaQueries } from "../../../assets/styles/mediaQueries";

export const ContentWrapper = styled.div`
  background-color: #f3f3f3;
`;
// Hero section wrapper
export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  ${mediaQueries("md")`
    flex-direction: row;
    padding-top: 100px;
    padding-bottom: 90px;
  `};
`;

export const HeroLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
  width: 100%;
  ${mediaQueries("md")`
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    margin: 0px;
  `}
`;
export const HeroRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
  position: relative;
  ${mediaQueries("md")`
    width: 50%;
  `}
`;
export const UnderTitle = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  ${mediaQueries("md")`
    text-align: left;
    font-size: 24px;
  `}
`;

// Hero bytton style
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 90%;

  ${mediaQueries("md")`
  justify-content: start;
  `}
`;

export const HeroImage = styled.img`
  max-height: 500px;
  width: auto;
  position: relative;
  margin: 30px 5px 50px 5px;

  ${mediaQueries("sm")`
    height: 550px;
  `}

  ${mediaQueries("md")`
  position: absolute;
  margin: 0px;
  right: 170px; 
  top: -40px;
  `}
`;
