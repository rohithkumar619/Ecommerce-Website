import React from "react";
import css from "../Reviews/Reviews.module.css";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
const Reviews = () => {
  return (
    <div className={css.reviews}>
      <div className={css.review}>
        <Swiper
          loopFillGroupWithBlank={true}
          slidesPerGroup={1}
          slidesPerView={3}
          spaceBetween={40}
          className={css.swiper}
        >
          {TestimonialsData.map((data, i) => (
            <SwiperSlide>
              <div className={css.slide}>
                <img src={data.image} alt="" />
                <span>{data.comment}</span>
                <span>{data.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
