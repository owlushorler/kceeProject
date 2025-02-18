import Footer from "../component/secondCentent/footer";
import WhatsAppButton from "../whatapp/page";
import PriceList from "./roofingOptions";

import Nav from "../our-price/nav";
import FooterMessage from "../our-price/plsCall";

const Home = () => {
  return (
    <div>
      <Nav />
      <PriceList />
      <FooterMessage />
      <WhatsAppButton />
      <Footer />`
    </div>
  );
};

export default Home;
