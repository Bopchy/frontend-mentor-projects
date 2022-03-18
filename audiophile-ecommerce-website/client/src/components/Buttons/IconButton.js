import React from "react";
import { styled } from "@linaria/react";

import { PRIMARY_DARK } from "../../theme/colors";

const Button = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  cursor: pointer;
  border: none;
  background-color: transparent;

  & > svg {
    position: absolute;
    top: 0%;
    left: 0%;
  }

  &:hover,
  &:active {
    svg > *,
    g > * {
      fill: ${PRIMARY_DARK};
    }
  }
`;

const IconButton = ({ children, iconName }) => (
  <Button aria-label={iconName}>{children}</Button>
);

export default IconButton;
