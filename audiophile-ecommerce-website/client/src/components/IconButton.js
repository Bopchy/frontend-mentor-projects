import React from "react";
import { styled } from "@linaria/react";

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const IconButton = (iconPath, iconName) => (
  <Image src={iconPath} alt={iconName} />
);

export default IconButton;
