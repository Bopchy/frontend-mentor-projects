import React from "react";
import { styled } from "@linaria/react";

import IconButton from "./IconButton";
import { Paragraph } from "./Typography";

import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const FooterWrapper = styled.footer`
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    <Paragraph>
      Audiophile is an all in one stop to fulfill your audio needs. We're a
      small team of music lovers and sound specialists who are devoted to
      helping you get the most out of personal audio. Come and visit our demo
      facility - we’re open 7 days a week.
    </Paragraph>
    <p>Copyright 2021. All Rights Reserved</p>
    <IconWrapper>
      <Facebook />
      <Twitter />
      <Instagram />
    </IconWrapper>
  </FooterWrapper>
);

export default Footer;
