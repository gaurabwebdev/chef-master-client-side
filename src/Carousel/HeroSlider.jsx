import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "./HeroSlider.css";

const HeroSlider = () => {
  return (
    <div className="border-4 border-amber-200 border-t-amber-500">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img
            className="w-full"
            src="https://images.yourstory.com/cs/7/4c455a90a21411e98b07315772315642/SANJEEVKAPOORPLACEHOLDERFotor-1599113083364.png"
            alt=""
          />
        </SwiperSlide> */}
        <SwiperSlide>
          <img
            className="w-full"
            src="https://i.ibb.co/vmvQ0kx/slide-b.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://i.ibb.co/ZGNmSk7/slide-d.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://www.tofuchops.com/wp-content/uploads/2021/02/chef_ranveer_brar_fb.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
