import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const PageWrapper = styled.div`
  padding: 100px 0px 0px;
  background: #f3f3f3;
`;

export const AboutHeader = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-bottom: 70px;
  ${mediaQueries("md")`
    text-align: left;
  `}
`;

export const AboutSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries("md")`
        flex-direction: row;
        justify-content: space-between;
    `};
`;

export const AboutImage = styled.img`
  width: 250px;
  height: auto;
  margin: 30px 0px 0px;
  ${mediaQueries("md")`
    margin-bottom: 5px;
    `}
`;
export const ParagraphWrapper = styled.div`
  ${mediaQueries("md")`
    align-self: center;
    justify-self: flex-start;
    display: flex;
    width: 70%;
    `}
`;

export const AboutParagraph = styled.p`
  width: 100%;
  text-align: center;
  ${mediaQueries("md")`
    width: 70%;
    max-width: 600px;
    text-align: left;
    `}
`;

export const WorkshopsWrapper = styled.div`
  margin-top: 100px;
  padding: 100px 0px;
  background-image: linear-gradient(to bottom right, #90e5e4, #89bce6, #3490ff);
`;

export const WorkshopSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries("md")`
        flex-direction: row;
        justify-content: space-between;
    `};
`;

export const WorkParagraphWrapper = styled.div`
  ${mediaQueries("md")`
    align-self: center;
    justify-self: flex-start;
    display: flex;
    width: 50%;
    `}
`;

export const WorkImageWrapper = styled.div`
  ${mediaQueries("md")`
        display: flex;
        justify-content: flex-start;
        width: 50%;
    `}
`;

export const WorkshopImage = styled.img`
  margin: 20px 0px;

  ${mediaQueries("md")`
    width: 350px;
    align-self: center;
    margin-bottom: 44px;
`}
`;

export const FrelanceWrapper = styled.div`
  padding: 100px 0px;
  border-bottom: 1px solid #3490ff;
`;

export const FrelanceParagraph = styled.p`
  margin: 50px auto;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
