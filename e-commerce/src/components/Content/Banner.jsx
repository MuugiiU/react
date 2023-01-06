import AliceCarousel from "react-alice-carousel";
const Banner = () => {
  return (
    <div>
      {" "}
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src="./img/camera.png" className="sliderimg" />
        <img src="./img/pc.png" className="sliderimg" />
        <img src="./img/speaker.png" className="sliderimg" />
      </AliceCarousel>
    </div>
  );
};
export default Banner;
