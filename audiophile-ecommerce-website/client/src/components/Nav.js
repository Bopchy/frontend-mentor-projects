import { styled } from "@linaria/react";
import { BACKGROUND_DARK } from "../utils/colors";
import { ReactComponent as Hamburger } from "../assets/hamburger.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Cart } from "../assets/cart.svg";

const Navigation = styled.nav`
  background-color: ${BACKGROUND_DARK};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;
`;

const Nav = () => (
  <Navigation>
    <Hamburger />
    <Logo />
    <Cart />
  </Navigation>
);

export default Nav;
