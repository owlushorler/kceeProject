import Footer from "../component/secondCentent/footer";
import WhatsAppButton from "../whatapp/page";
import ContractorSection from "./contractorSection";
import Nav from "./nav";
import Pic from "./pic";
import FooterMessage from "./plsCall";
import ServicesSection from "./serviceSection";
import PriceTable from "./tablePrice";

const Home = () => {
  return (
    <div>
      <Nav />
      <Pic />
      <PriceTable />
      <FooterMessage />
      <ServicesSection />
      <ContractorSection />
      <WhatsAppButton />
      <Footer />`
    </div>
  );
};

export default Home;
