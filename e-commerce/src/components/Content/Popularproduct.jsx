import ProductsData from "./Product";
import { Rating } from "react-simple-star-rating";
import AliceCarousel from "react-alice-carousel";

// const Popularproduct =ProductsData.map((ProductsData,index)=>{
//     return {
//         if(ProductsData <8){
//             <Products
//             id={Products.id}
//             title={Products.title}
//             image={Products.imageURL}
//             price={Products.price}
//             rating={Products.rating}

//             />
//         }
//     }
// })
import React from "react";
import Card from "react-bootstrap/Card";

const Popularproduct = () => {
  const SlideCount = Math.ceil(ProductsData.length / 8);
  for (let i = 0; i < SlideCount; i++) {
    <div></div>;
  }
  return (
    <div>
      {" "}
      <AliceCarousel autoPlay autoPlayInterval="2000">
        i * 8;
        <Card style={{ width: "18rem" }}>
          <Card.Img src={ProductsData.imageURL} />
          <Card.Body>
            <Card.Title>{ProductsData.title}</Card.Title>
            <Card.Text>{ProductsData.rating}</Card.Text>
          </Card.Body>
        </Card>
      </AliceCarousel>
    </div>
  );
};

export default Popularproduct;
