import AliceCarousel from "react-alice-carousel";
import Category from "../../data/Category";

const Carouselpr = () => {
  return (
    <div>
      <AliceCarousel outoPlay autoPlayInterval="2000">
        {Category.map((category, index) => (
          <div className="container">
            <div className="card">
              <div className="col">
                <img src={category.imageURL} alt="" />
              </div>
              <div className="col">
                <h3>{category.title}</h3>
                <p>{category.item}</p>
              </div>
            </div>
            <div className="card">
              <div className="col">
                <img src={category.imageURL} alt="" />
              </div>
              <div className="col">
                <h3>{category.title}</h3>
                <p>{category.item}</p>
              </div>
            </div>
            <div className="card">
              <div className="col">
                <img src={category.imageURL} alt="" />
              </div>
              <div className="col">
                <h3>{category.title}</h3>
                <p>{category.item}</p>
              </div>
            </div>
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
};
export default Carouselpr;
