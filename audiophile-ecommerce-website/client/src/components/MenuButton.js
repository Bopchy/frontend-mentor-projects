import { styled } from "@linaria/react";

import { MenuItem } from "./Typography";
import { PRIMARY_DARK } from "../theme/colors";

const MenuButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${MenuItem}

  &:hover, &:active {
    color: ${PRIMARY_DARK};
  }
`;

const MenuButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const Menu = () => (
  <MenuButtonWrapper>
    {["home", "headphones", "speakers", "earphones"].map((item) => (
      <MenuButton key={item}>{item}</MenuButton>
    ))}
  </MenuButtonWrapper>
);

export default Menu;
