import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";
// import { motion } from "framer-motion";

// const motion = styled.div``;

export const StyledNav = styled.section`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  width: 100%;
  overflow: visible;
  overflow: ${({ open }) => (open ? "visible" : "hidden")};
  position: relative;

  ${mediaQueries("sm")`
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

  `};
`;
// Logo style
export const StyledLogoWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  cursor: pointer;
`;

export const StyledLogo = styled.img`
  width: 200px;
  height: auto;
  cursor: pointer;
`;

// Nav bar list style

export const StyleListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyleList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  list-style: none;
  padding-left: 0px;

  ${mediaQueries("sm")`
    flex-direction: row;
    align-items: center;
    cursor: pointer
  `};
`;
export const StyleListItem = styled.li`
  margin: 10px 20px 10px 0px;
  font-size: 16px;
  text-align: left;
  &:last-child {
    margin-right: 0px;
  }
  ${mediaQueries("md")`
        text-align: center;
        margin: 10px 30px;
    `};
`;
