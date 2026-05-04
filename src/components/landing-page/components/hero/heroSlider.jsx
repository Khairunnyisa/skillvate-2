import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      style={{ width: "100%", height: "100%" }}
    >
      <SwiperSlide>
        <img
          src="public/static/images/hero/sliderHero-1.png"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="public/static/images/hero/sliderHero-1.png"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="public/static/images/hero/sliderHero-1.png"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;