import React from "react";
import { StyledContainer } from "../../layouts/Layouts";
import {
  ContactSectionWrapper,
  ContactHeader,
  ContentWrapper,
  DetailsWrapper,
  DetailsHeader,
  DetailsParagraph,
} from "./Contact.style";
import { ContactAsideLogo } from "../../component/asideLogo/AsideLogo";
import Michael from "../../assets/images/Michael.png";
import Aside_Logo from "../../assets/images/details.png";
const Contact = () => {
  return (
    <ContactSectionWrapper>
      <StyledContainer>
        <ContactAsideLogo primary src={Aside_Logo}></ContactAsideLogo>
        <ContactHeader>Kontakt</ContactHeader>
        <ContentWrapper>
          <DetailsWrapper>
            <DetailsHeader>
              CTO
            </DetailsHeader>
            <DetailsParagraph>
              Michał Rozantsew <br></br>
              Web Developer <br></br>
              663 794 612
            </DetailsParagraph>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsHeader>
              Head of Marketing
            </DetailsHeader>
            <DetailsParagraph>
              Michał Rozantsew <br></br>
              Alessandro Casetti <br></br>
              504 312 077
            </DetailsParagraph>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsHeader>
              Content Manager
            </DetailsHeader>
            <DetailsParagraph>
              Michał Rozantsew <br></br>
              Mateusz Dziuba <br></br>
              514 953 375
            </DetailsParagraph>
          </DetailsWrapper>
          <DetailsParagraph>
            <br></br>
            Wszelkie pytania prosimy kierować na adres mailowy: winclickpolska@gmail.com
          </DetailsParagraph>
        </ContentWrapper>
      </StyledContainer>
    </ContactSectionWrapper>
  );
};

export default Contact;
