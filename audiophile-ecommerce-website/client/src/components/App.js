import { styled } from "@linaria/react";

import globalStyles from "../theme/GlobalStyles";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

const Layout = styled.div`
  display: grid;
  grid-template-rows: min-content 2fr 1fr;
  height: 100%;
  width: 100%;
  position: relative;
`;

const App = () => {
  return (
    <Layout className={globalStyles}>
      <Nav />
      <Main />
      <Footer />
    </Layout>
  );
};

export default App;
