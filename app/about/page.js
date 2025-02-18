import TeamMembers from "../component/secondCentent/ccopicture";
import Footer from "../component/secondCentent/footer";
import WhatsAppButton from "../whatapp/page";
import AboutUs from "./about";
import CompanyInfo from "./Established";
import RoofingSolutions from "./makinDiffer";
import SatisfiedClients from "./satisfaction";

export default function Home() {
  return (
    <div>
      <AboutUs />
      <RoofingSolutions />
      <CompanyInfo />

      <SatisfiedClients />
      <TeamMembers />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
