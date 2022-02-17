import { styled } from "@linaria/react";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

const Layout = styled.div`
  display: grid;
  grid-template-rows: min-content 2fr 1fr;
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <Layout>
      <Nav />
      <Main />
      <Footer />
    </Layout>
  );
};

export default App;
