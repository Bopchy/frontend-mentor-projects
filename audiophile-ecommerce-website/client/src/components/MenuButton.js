import { styled } from "@linaria/react";

import { MenuItem } from "./Typography";

const MenuButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  ${MenuItem}
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
      <MenuButton>{item}</MenuButton>
    ))}
  </MenuButtonWrapper>
);

export default Menu;
