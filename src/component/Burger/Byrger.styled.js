import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const StyledBurger = styled.button`
  position: absolute;
  top: 29px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(47deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) =>
        open ? "translateX(-20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-47deg)" : "rotate(0deg)")};
      background: linear-gradient(0.25turn, #1982C2, #64328B, #DA1D7B);
    }
  }
  ${mediaQueries("md")`
        display: none;
    `}
`;
