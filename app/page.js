import Image from "next/image";
import SlidingContent from "./component/Nav";
import Apppo from "./component/Alart";
import ExpandableContent from "./component/expand";
import Carousel from "./component/Carosual";
import ScrollEffect from "./component/Body";
import Homeee from "./component/body2";
import CappedScrolll from "./component/bodyScroll";
import Homeeee from "./component/bodyscroll2";
import Homeee1 from "./component/bodycontent2";
import CappedScrolll2 from "./component/bodyscrol2";
import Hom from "./component/bodycontrol";
import RoofingProcess from "./component/secondCentent/roofingProcess";
import StepTiles from "./component/secondCentent/typeOfAll";
import ContactSection from "./component/secondCentent/getInTouch";
import Footer from "./component/secondCentent/footer";
import WhatsAppButton from "./whatapp/page";
import HamburgerMenu from "./component/Alart";
import Experts from "./component/secondCentent/ccopicture";
import TeamMembers from "./component/secondCentent/ccopicture";

export default function Home() {
  return (
    <div>
      <Carousel />
      <ExpandableContent />
      <Homeee />
      <Homeeee />

      <Homeee1 />

      <StepTiles />
      <RoofingProcess />
      <TeamMembers />
      <ContactSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
