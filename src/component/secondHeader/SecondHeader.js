import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const SecondHeader = styled.h2`
  font-size: 28px;
  font-weight: 300;
  text-align: center;
  ${mediaQueries("md")`
        text-align: left;
        font-size: 32px;
    `}
`;

export const CenterHeader = styled(SecondHeader)`
  ${mediaQueries("md")`
        text-align: center;
        font-size: 32px;
    `}
`;
