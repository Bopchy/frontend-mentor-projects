import React from "react";

import IconButton from "./IconButton";

import facebook from "../assets/icons/facebook";
import twitter from "../assets/icons/twitter";
import instagram from "../assets/icons/instagram";

const Paragraph = styled.p`
  margin: 0;
  font-size: ;
  line-height: ;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Footer = () => (
  <footer>
    <Paragraph>
      Audiophile is an all in one stop to fulfill your audio needs. We're a
      small team of music lovers and sound specialists who are devoted to
      helping you get the most out of personal audio. Come and visit our demo
      facility - we’re open 7 days a week.
    </Paragraph>
    <p>Copyright 2021. All Rights Reserved</p>
    <IconWrapper>
      <IconButton src={facebook} iconName={facebook} />
      <IconButton src={twitter} iconName={twitter} />
      <IconButton src={instagram} iconName={instagram} />
    </IconWrapper>
  </footer>
);

export default Footer;
