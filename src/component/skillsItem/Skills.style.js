import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  margin-bottom: 50px;
  /* ${mediaQueries("sm")`
  flex-direction: row;
    justify-content: flex-start;
    width: 340px;
  `} */
`;
export const SkillIcon = styled.img`
  width: auto;
  height: auto;
  max-height: 70px;
  margin-bottom: 10px;
  /* ${mediaQueries("sm")`
  margin-bottom: 0px;
  margin-right: 10px;
  text-align: left;
  `} */
`;
export const SkillParagraph = styled.p`
  display: inline-block;
  width: 200px;
  margin: 0px;
  font-size: 18px;
  text-align: center;
  /* ${mediaQueries("sm")`
  text-align: left;
  `} */
`;
