import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const MainHeader = styled.h1`
  font-size: 28px;
  color: #313030;
  font-weight: 300;
  width: 80%;
  text-align: center;
  margin: 0px 0px 40px;
  ${mediaQueries("md")`
          font-size: 42px;
          width: 70%;
          text-align: left;
      `};
`;

export const SkillsMainHeader = styled(MainHeader)`
  width: 100%;
  ${mediaQueries("md")`
          font-size: 42px;
          width: 70%;
          text-align: left;
      `};
`;
