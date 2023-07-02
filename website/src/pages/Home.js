import Header from "../components/header/Header";
import SimpleSlider from "./slider/Slider";
import List from "./list/List";
import PauseOnHover from "./list/SliderList";
import NewArrival from "./list/NewArrival";
import OurHappyFaces from "./list/review/OurHappy";
import Review from "./list/review/Review";
import Footer from "../components/footer/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <SimpleSlider />
      <List />
      <PauseOnHover />
      <NewArrival />
      <OurHappyFaces />
      <Review />
      <Footer />
    </div>
  );
}
