import Homeee from "../component/body2";
import Hom from "../component/bodycontrol";
import Homeeee from "../component/bodyscroll2";
import Footer from "../component/secondCentent/footer";
import ContractorSection from "../our-price/contractorSection";
import FooterMessage from "../our-price/plsCall";
import ServicesSection from "../our-price/serviceSection";
import WhatsAppButton from "../whatapp/page";
import Home from "./nav";
import Pic from "./pic";
import PricingSection from "./pricesection";
import Pricing from "./pricing";

export default function Nav() {
  return (
    <div>
      <Home />

      <Pic />
      <Pricing />
      <PricingSection />

      <ContractorSection />
      <FooterMessage />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
