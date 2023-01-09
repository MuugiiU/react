import Carousel from "react-bootstrap/Carousel";
import Category from "../../data/Category";
import Carouselpr from "../../data/Carousel";
const Banner = () => {
  return (
    <div className="d">
      <Carousel.Caption>
        <Carouselpr />
      </Carousel.Caption>
    </div>
  );
};
export default Banner;
