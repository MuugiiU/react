import Category from "../../data/Category";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SlideNextButton from "./NextSlider";

const Swiperpr = () => {
  return (
    <Swiper
      className="swiper"
      spaceBetween={5}
      slidesPerView={3}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      onSlideChange={() => console.log("slide change")}
    >
      {Category.map((category, index) => (
        <SwiperSlide>
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
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Swiperpr;
