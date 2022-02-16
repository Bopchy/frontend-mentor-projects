import { styled } from "@linaria/react";
import "./App.css";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

const Layout = styled.div`
  display: grid;
  grid-template-columns: min-content 2fr 1fr;
`;

function App() {
  return (
    <Layout>
      <Nav />
      <Main />
      <Footer />
    </Layout>
  );
}

export default App;
