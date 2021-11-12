import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const FooterWrapper = styled.div`
  background: #20293D;
`;

export const FooterContainer = styled.div`
  padding: 0 20px;
  margin: auto;
  align-self: center;
  border-top: 1px solid #0A1120;

  ${mediaQueries("sm")`
    max-width: 768px;
  `};
  ${mediaQueries("sm")`
    max-width: 940px;
    padding: auto;
  `};
  ${mediaQueries("sm")`
    max-width: 1180px;
  `};
`;

export const StyledFooter = styled.footer`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 60px 0px;
  row-gap: 30px;
  ${mediaQueries("sm")`
    flex-direction: row-reverse;
    justify-content: space-between;
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
  align-self: flex-end;
  width: 110px;
`;

export const SocialIcon = styled.img`
  width: 25px;
  height: auto;
  margin-left: 10px;
  ${mediaQueries("md")`
    margin: auto;
  `}
`;

export const IconText = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  text-align: right;
  margin: 21px 0 0px;
`;

export const CopyrightText = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  text-align: right;
  margin: 25px 0 0px;
  ${mediaQueries("md")`
    text-align: left;
  `}
`;
