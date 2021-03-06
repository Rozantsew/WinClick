import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";
// import { motion } from "framer-motion";

// const motion = styled.div``;

export const NavWrapper = styled.div`
  position: fixed;
  background: #20293D;
  width: 100%;
  background: linear-gradient(#192236, #192236, #192236, #0A1328);
  border-bottom: 1px solid #000;
  z-index: 99;
`;

export const NavContainer = styled.div`
  padding: 0 20px;
  margin: auto;
  align-self: center;

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

export const StyledNav = styled.section`
  height: 80px;
  // width: 100%;
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
  width: 160px;
  height: auto;
  cursor: pointer;

  ${mediaQueries("sm")`
    width: 200px;
  `};
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
