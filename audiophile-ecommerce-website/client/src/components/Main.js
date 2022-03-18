import { styled } from "@linaria/react";

import { WHITE } from "../theme/colors";
import { Paragraph, Header, Light } from "./Typography";
import DefaultButton from "./Buttons/DefaultButton";

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
  padding: 6.75rem 1.5rem 7rem 1.5rem;

  ${Light} {
    padding-bottom: 1rem;
  }

  ${Header} {
    color: ${WHITE};
    font-size: 2.25rem;
    line-height: 2.5rem;
    letter-spacing: 0.080625rem;
    text-transform: uppercase;
    padding-bottom: 1.5rem;
    margin: 0;
  }

  ${Paragraph} {
    font-size: 0.9375rem;
    line-height: 1.5625rem;
    opacity: 0.75;
    color: ${WHITE};
    text-align: center;
    padding-bottom: 1.75rem;
  }
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
      <DefaultButton buttonText="SEE PRODUCT" />
    </TextWrapper>
  </Main>
);

export default MainComponent;
