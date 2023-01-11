import ProductsData from "./Product";
import { Rating } from "react-simple-star-rating";

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

const Popularproduct = () => {
  const SlideCount = Math.ceil(ProductsData.length / 8);
  for (let i = 0; i < SlideCount; i++) {
    <div>
      <AliceCarousel autoPlay autoPlayInterval="2000">
        i * 8;
      </AliceCarousel>
    </div>;
  }
  return <div>Popularproduct</div>;
};

export default Popularproduct;
