import { styled } from "@linaria/react";

import CardButton from "./Buttons/CardButton";
import { BACKGROUND_GRAY } from "../theme/colors";

import speakers from "../assets/images/shop-items-list/speaker.png";
import earphones from "../assets/images/shop-items-list/earphones.png";
import headphones from "../assets/images/shop-items-list/headphones.png";

const CardWrapper = styled.section`
  height: 13.5625rem;
  width: 20.4375rem;
  border-radius: 0.5rem;

  div {
    width: 100%;
    height: 10.3125rem;
    background-color: "${BACKGROUND_GRAY}";
  }
`;

const itemList = [
  { cardImage: speakers, cardText: "speakers" },
  { cardImage: earphones, cardText: "earphones" },
  { cardImage: headphones, cardText: "headphones" },
];

const ShopItemCard = ({ cardImage, imageAltText, cardText }) => (
  <CardWrapper>
    <img alt={imageAltText} src={cardImage} />
    <div>
      <p>{cardText}</p>
      <CardButton buttonText="Shop" />
    </div>
  </CardWrapper>
);

const ShopItemCardList = () =>
  itemList.map((item) => (
    <ShopItemCard
      cardImage={item.cardImage}
      imageAltText={item.cardText}
      cardText={item.cardText}
    />
  ));

export default ShopItemCardList;
