import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  text-align: left;
  padding: 5rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 250px;
  z-index: 9;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  /* transition: transform translateX(100%); */
  overflow: hidden;
  ${mediaQueries("md")`
        background: #fff;
        transform: translate(0%);
        width: 150px;
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
    color: ${({ theme }) => theme.primaryDark};
    transition: color 0.3s linear;
    /* width: 100px; */
    position: relative;

    ${mediaQueries("md")`
        margin: 0px 35px;
        text-align: center;

        &:last-child {
        margin-right: 0px;
    }
    `}

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
    &::after {
      content: "";
      width: 20px;
      height: 2px;
      background-color: #32cddc;
      position: absolute;
      bottom: -2px;
      left: 0;
      transition: all 0.4s ease;

    ${mediaQueries("md")`
        right: 0;
    `}
  }
    
  &:hover::after {
    width: 100%;
    height: 2px;
    background-color: #3490ff;
  }
}
`;
