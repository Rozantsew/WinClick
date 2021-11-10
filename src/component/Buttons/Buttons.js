import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { mediaQueries } from "../../assets/styles/mediaQueries";

const StyledButtons = styled(motion.button)`
  background: ${(props) => (props.primary ? "#313030" : "white")};
  color: ${(props) => (props.primary ? "white" : "#313030")};

  font-size: 1.2em;
  margin: 10px 20px;
  padding: 0.3em 1.5em;
  border: 1px solid #313030;
  border-radius: 3px;
  cursor: pointer;

  ${mediaQueries("md")`
    :nth-child(1) {
    margin-left: 0px;
  }
  `}
`;

const Button = ({ children, ...props }) => {
  return (
    <>
      <StyledButtons
        {...props}
        whileHover={{ translateY: -4 }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </StyledButtons>
    </>
  );
};

export default Button;
