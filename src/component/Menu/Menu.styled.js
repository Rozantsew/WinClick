import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #0f182c;
  text-align: left;
  padding: 5rem;
  position: absolute;
  top: 0;
  right: -70px;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  z-index: 9;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  /* transition: transform translateX(100%); */
  overflow: hidden;
  ${mediaQueries("md")`
        background: transparent;
        transform: translate(0%);
        width: 150px;
        right: 10px;
        flex-direction: row;
        padding: 0px;
        width: 70%;
        height: 100px;
        justify-content: flex-end;
        align-items: center;
    `} a {
    font-size: 16px;
    text-align: right;
    margin: 2rem 0;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.primaryLight};
    transition: color 0.3s linear;
    text-decoration: none;
    position: relative;

    ${mediaQueries("md")`
        margin: 0px 35px;
        text-align: center;

        &:last-child {
        margin-right: 0px;
    }
    `}

    &::after {
      content: "";
      width: 20px;
      height: 2px;
      background-color: #32cddc;
      position: absolute;
      bottom: -5px;
      text-decoration: none;
      right: 0;
      transition: all 0.4s ease;

    ${mediaQueries("md")`
        right: 0;
    `}
  }
    
    &:hover::after {
      width: 100%;
      height: 2px;
      background-color: #cf1e7c;
    }
  }
`;
