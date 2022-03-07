import React from "react";
import { styled } from "@linaria/react";

import { Paragraph } from "./Typography";
import { WHITE, BLACK, PRIMARY_DARK } from "../theme/colors";
import Menu from "./MenuButton";
import IconButton from "./IconButton";

import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  background-color: ${BLACK};
  padding: 3rem 1.5rem 2.375rem;
  position: relative;
`;

const FooterParagraph = styled(Paragraph)`
  color: ${WHITE};
  opacity: 0.5;
  text-align: center;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Rectangle = styled.div`
  background-color: ${PRIMARY_DARK};
  width: 6.3125rem;
  height: 0.25rem;
  position: absolute;
  top: 0%;
`;

const Footer = () => (
  <FooterWrapper>
    <Rectangle />
    <Logo />
    <Menu />
    <FooterParagraph>
      Audiophile is an all in one stop to fulfill your audio needs. We're a
      small team of music lovers and sound specialists who are devoted to
      helping you get the most out of personal audio. Come and visit our demo
      facility - we’re open 7 days a week.
    </FooterParagraph>
    <FooterParagraph>Copyright 2021. All Rights Reserved</FooterParagraph>
    <IconWrapper>
      <IconButton iconName="Facebook">
        <Facebook />
      </IconButton>
      <IconButton iconName="Twitter">
        <Twitter />
      </IconButton>
      <IconButton iconName="Instagram">
        <Instagram />
      </IconButton>
    </IconWrapper>
  </FooterWrapper>
);

export default Footer;
