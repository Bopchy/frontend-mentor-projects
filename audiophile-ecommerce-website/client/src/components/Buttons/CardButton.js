import { styled } from "@linaria/react";

import { BLACK } from "../../theme/colors";
import { ReactComponent as Caret } from "../../assets/icons/caret.svg";

const ButtonStyles = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: space-between;
  width: 3.5825rem;
  height: 1.125rem;
  line-height: 1.125rem;
  letter-spacing: 0.0625rem;
  color: "${BLACK}50";
  text-transform: uppercase;
`;

const CardButton = ({ buttonText }) => (
  <ButtonStyles>
    <span>{buttonText}</span>
    <Caret />
  </ButtonStyles>
);

export default CardButton;
