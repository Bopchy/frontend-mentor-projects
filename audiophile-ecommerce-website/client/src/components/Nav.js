import { styled } from "@linaria/react";

import IconButton from "./Buttons/IconButton";

import { ReactComponent as Hamburger } from "../assets/icons/hamburger.svg";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Cart } from "../assets/icons/cart.svg";

const Navigation = styled.nav`
  position: absolute;
  z-index: 10;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;
  border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.3);
`;

const Nav = () => (
  <Navigation>
    <IconButton iconName="Menu">
      <Hamburger />
    </IconButton>
    <Logo />
    <IconButton iconName="Cart">
      <Cart />
    </IconButton>
  </Navigation>
);

export default Nav;
