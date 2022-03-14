import { styled } from "@linaria/react";
import { WHITE } from "../theme/colors";

export const Header = `
  font-weight: 700;
  font-size: 3.5rem;
  font-style: normal;
  line-height: 3.625rem;
  letter-spacing: 0.125rem;
`;

export const MenuItem = `
  color: ${WHITE};
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  line-height: 1.5625rem;
  font-weight: 700;
  font-size: 0.8125rem;
  font-style: normal;
`;

export const Paragraph = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 0.9375rem;
  font-style: normal;
  line-height: 1.5625rem;
`;

export const Light = styled.p`
  color: ${WHITE};
  opacity: 0.5;
  margin: 0;
  font-weight: 400;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.625rem;
  line-height: 1.1875rem;
`;
