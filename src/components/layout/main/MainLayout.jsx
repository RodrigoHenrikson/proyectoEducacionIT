import "./MainLayout.scss";
import MainHeader from "../header/header";
import NavBar from "../header/navbar";
import Footer from "../footer/footer";
import Aside from "../aside/aside";
import SectionHeader from "../section.cards.header/section-cards-header";
import SearchBar from "../../search/searchbar";
import Container from "../container/container";

const MainLayout = ({ pageTitle, pageDescription, children }) => (
  <>
    <MainHeader>
      <SearchBar />
      <div className="nameandlogo__container">
        <div id="namePhoenix">
          <h1 className="name__Phoenix">Phoenix Store</h1>
        </div>
        <div className="logo">
          <img src="" alt="" />
        </div>
      </div>
      <NavBar />
          </MainHeader>

        
        <Container pageTitle={pageTitle} pageDescription={pageDescription} >
            {children}
        </Container>

    <Footer />
  </>
);

export default MainLayout;