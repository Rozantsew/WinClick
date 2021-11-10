import styled from "styled-components";

export const StyledCard = styled.div`
  width: 340px;
  min-width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(74, 74, 139, 0.1),
    0 2px 4px rgba(74, 74, 139, 0.06);
  transition: all 0.4s ease;
  margin: 10px 20px 40px 20px;
  &:hover {
    box-shadow: 0 10px 10px rgba(74, 74, 139, 0.04),
      0 20px 25px rgba(74, 74, 139, 0.1);
  }
`;
export const StyledImg = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const TextWrapper = styled.div`
  background: #fff;
  padding: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const StyledHeadline = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.334;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin: 15px 0px 10px;
`;

export const StyledParagraph = styled.p`
  color: #0000008a;
  line-height: 1.43;
  font-size: 0.875rem;
  margin: 15px 0px;
  padding-bottom: 10px;
`;

export const StyldeLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  color: #3f51b5;
  margin: 30px 0px 25;
  display: inline-block;
  align-self: flex-start;
`;
