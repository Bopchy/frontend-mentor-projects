import { styled } from "@linaria/react";

import { Paragraph, Header, Light } from "./Typography";
import { WHITE } from "../theme/colors";

import HeroImage from "../assets/images/home/mobile/image-header.jpg";

const Background = styled.img`
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  position: relative;
  min-height: 80%;
`;

const TextWrapper = styled.div`
  position: absolute;
  text-align: center;
  border-top: 0.0625rem solid rgba(${WHITE}, 0.1);
`;

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
