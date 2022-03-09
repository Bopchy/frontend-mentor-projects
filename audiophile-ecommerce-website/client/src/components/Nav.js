import { styled } from "@linaria/react";

import { WHITE } from "../theme/colors";
import IconButton from "./IconButton";

import { ReactComponent as Hamburger } from "../assets/icons/hamburger.svg";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Cart } from "../assets/icons/cart.svg";

const Navigation = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;
  border-bottom: 0.0625rem solid rgba(${WHITE}, 0.1);
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
