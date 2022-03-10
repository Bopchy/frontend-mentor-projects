import { styled } from "@linaria/react";

import HeroImage from "../assets/images/home/mobile/image-header.jpg";

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
      <p>New product</p>
      <h1>XX99 Mark II Headphones</h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <button>SEE PRODUCT</button>
    </TextWrapper>
  </Main>
);

export default MainComponent;
