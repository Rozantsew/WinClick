import React from "react";
import { SkillItem, SkillIcon, SkillParagraph } from "./Skills.style";

const SkillsItem = ({ imgUrl, skillDescription }) => {
  return (
    <>
      <SkillItem>
        <SkillIcon src={imgUrl}></SkillIcon>
        <SkillParagraph>{skillDescription}</SkillParagraph>
      </SkillItem>
    </>
  );
};

export default SkillsItem;
