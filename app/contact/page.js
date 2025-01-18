import Footer from "../component/secondCentent/footer";
import WhatsAppButton from "../whatapp/page";
import Form from "./form";
import Map from "./map";
import Nav from "./nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <Form />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Home;
