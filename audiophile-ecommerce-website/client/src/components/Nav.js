import { styled } from "@linaria/react";
import { BACKGROUND_DARK, WHITE } from "../theme/colors";
import { ReactComponent as Hamburger } from "../assets/icons/hamburger.svg";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Cart } from "../assets/icons/cart.svg";

const Navigation = styled.nav`
  background-color: ${BACKGROUND_DARK};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;
  border-bottom: 0.0625rem solid rgba(${WHITE}, 0.1);
`;

const Nav = () => (
  <Navigation>
    <Hamburger />
    <Logo />
    <Cart />
  </Navigation>
);

export default Nav;
