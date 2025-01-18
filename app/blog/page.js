import Footer from "../component/secondCentent/footer";
import WhatsAppButton from "../whatapp/page";
import RoofingPost from "./blogPage";
import Nav from "./nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <RoofingPost />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
