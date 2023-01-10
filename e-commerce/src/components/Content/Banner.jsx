import AliceCarousel from "react-alice-carousel";
import Category from "../../data/Category";

const Banner = () => {
  return (
    <div className="App">
      <AliceCarousel autoPlay autoPlayInterval="2000">
        {Category.map((category, index) => (
          <div className="row" key={index}>
            <div className="col">
              <h1>{category.title}</h1>
              <button className="shar"> Shop now</button>
              <button className="more">View more</button>
            </div>
            <div className="col">
              <img
                src={category.imageURL}
                className="sliderimg"
                id={category.id}
              />
              <button className="only">{category.price}</button>
            </div>
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
};
export default Banner;
