import { styled } from "@linaria/react";

import HeroImage from "../assets/images/home/mobile/image-header.jpg";
import { Paragraph, Header, Light } from "./Typography";

const TextWrapper = styled.div`
  position: absolute;
  top: 0%;
`;

const Background = styled.img`
  width: 100%;
  position: relative;
`;

const Main = styled.main``;

const MainComponent = () => (
  <Main>
    <Background src={HeroImage} alt="Hero" />
    <TextWrapper>
      <Light>New product</Light>
      <Header>XX99 Mark II Headphones</Header>
      <Paragraph>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Paragraph>
      <button>SEE PRODUCT</button>
    </TextWrapper>
  </Main>
);

export default MainComponent;
