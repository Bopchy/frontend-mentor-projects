import React from "react";
import { styled } from "@linaria/react";

import { PRIMARY_DARK, WHITE } from "../../theme/colors";

const Button = styled.button`
  background-color: ${PRIMARY_DARK};
  color: ${WHITE};
  font-weight: 700;
  font-size: 0.8125rem;
  line-height: 1.11rem;
  letter-spacing: 0.0625rem;
  border: none;
  width: 10rem;
  height: 3rem;
`;

const DefaultButton = ({ buttonText }) => <Button>{buttonText}</Button>;

export default DefaultButton;
