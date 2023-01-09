import Category from "./Category";
const Carouselpr = () => {
  const Caraouselmenu = (props) => {
    return (
      <div className="row">
        <div className="col">
          <h1>{props.title}</h1>
          <button className="shar">Shop now</button>
          <button className="more">View more</button>
        </div>
        <div className="col dis">
          <img src={props.image} className="camera" />
          <div className="on">
            <button className="only">{props.price}</button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {Category.map((category, index) => (
        <Caraouselmenu
          key={index}
          title={category.title}
          image={category.imageURL}
          price={category.price}
        />
      ))}
    </div>
  );
};
export default Carouselpr;
