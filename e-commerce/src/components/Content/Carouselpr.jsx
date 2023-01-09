import Category from "../../data/Category";
import Carousel from "react-bootstrap/Carousel";
const handlerClick = ({ children }) => {
  alert("Shop now," + "" + children);
  console.log(children);
};

const Caraouselmenu = (props) => {
  console.log(props.ind);
  return (
    <Carousel.Item interval={props.ind * 500}>
      <img src={props.image} className="camera d-block w-100" />
      <Carousel.Caption>
        {/* <div className="row">
          <div className="col">
            <h1>{props.title}</h1>
            <button className="shar" onClick={handlerClick}>
              Shop now
            </button>
            <button className="more">View more</button>
          </div>

          <div className="on">
            <button className="only">{props.price}</button>
          </div>
        </div> */}
        <h3>Second slide label</h3>
      </Carousel.Caption>
      {/* <div>
        <div className="row">
          <div className="col">
            <h1>{props.title}</h1>
            <button className="shar" onClick={handlerClick}>
              Shop now
            </button>
            <button className="more">View more</button>
          </div>

          <div className="col dis">
            <img src={props.image} className="camera" />
          </div>
          <div className="on">
            <button className="only">{props.price}</button>
          </div>
        </div>
      </div> */}
    </Carousel.Item>
  );
};

const Carouselpr = () => {
  return (
    <>
      {Category.map((category, index) => (
        <Caraouselmenu
          key={index}
          title={category.title}
          image={category.imageURL}
          price={category.price}
          ind={index}
        />
      ))}
    </>
  );
};
export default Carouselpr;
