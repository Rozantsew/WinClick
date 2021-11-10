import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const StyledFooter = styled.footer`
  width: 100%;
  color: white;
  display: grid;
  padding: 60px 0px;
  grid-template-columns: auto;
  grid-template-rows: auto;
  row-gap: 30px;
  ${mediaQueries("sm")`
  grid-template-columns: 200px auto 200px;
`}
`;

// Logo style
export const StyledLogoWrapper = styled.div`
  width: auto;
  justify-self: center;
  margin: 0px 0px 20px;
  ${mediaQueries("md")`
    justify-self: left;
  `}
`;

export const StyledLogo = styled.img`
  width: 200px;
  height: auto;
  margin: auto;
  ${mediaQueries("md")`
    margin: auto;
  `}
`;

// Copyright style
export const CopyrightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  margin: auto;
`;

export const SocialIcon = styled.img`
  width: 25px;
  height: auto;
  margin: auto;
  ${mediaQueries("md")`
    margin: auto;
  `}
`;

export const CopyrightText = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #585757;
  text-align: center;
  margin: 25px auto 0px;
`;
