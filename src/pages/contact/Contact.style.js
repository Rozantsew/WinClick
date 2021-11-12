import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const ContactSectionWrapper = styled.div`
  background-color: #20293D;
  padding: 100px 0px;
`;

export const ContactHeader = styled.h1`
  font-weight: 300;
  margin: 100px 0 70px;
  text-align: Left;
  color: #fff;
  position: relative;
  ${mediaQueries("sm")`
    text-align: left;
  `};

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 80px;
    background: linear-gradient(0.25turn, #1982C2, #682E88, #DA1D7B);
    bottom: -10px;
    left: 0;
  }
`;


export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  ${mediaQueries("md")`
    // width: 100%;
    flex-direction: row;
    justify-content: space-between;
    
    `};
`;

export const DetailsWrapper = styled.div`
  width: auto;
  align-self: flex-start;
  justify-self: flex-start;
  width: 100%;
  ${mediaQueries("md")`
  width: 70%;
     align-items: flex-start;
    justify-content: flex-start;
    align-self: center;
  `};
`;

export const DetailsHeader = styled.h3`
  text-align: left;
  color: #fff;
  font-weight: 500;
  line-height: 22px;
  margin: 30px 0 0;
`;

export const DetailsParagraph = styled.div`
  line-height: 1.6em;
  text-align: left;
  max-width: 400px;
  color: #fff;
  ${mediaQueries("md")`
    margin: 20px 0px;
  `};
`;
