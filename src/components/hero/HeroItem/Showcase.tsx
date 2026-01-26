import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import Img1 from "../../../assets/img/img1.png";
import Img2 from "../../../assets/img/img2.png";


import "swiper/css";
import "swiper/css/pagination";

const Showcase = () => {
  return (
    <div className="w-full flex justify-center">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="w-[90%] h-[70vh] bg-[linear-gradient(135deg,rgba(245,245,245,0.5)_0%,rgba(245,245,245,0.5)_100%)]"
      >
        {[1, 2, 3].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="h-full flex items-center justify-between px-4 md:px-12 lg:px-16 py-8">
            
              <div className="max-w-xl">
                <h3 className="font-medium text-sm tracking-widest uppercase text-[#3d3d3d]">
                  Welcome to GreenShop
                </h3>

                <h1 className="font-black text-2xl md:text-[55px] leading-[100%] uppercase text-[#3d3d3d] py-3">
                  Let’s Make a Better{" "}
                  <span className="text-[#46a358]">Planet</span>
                </h1>

                <p className="text-sm leading-[171%] text-[#727272]">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>

                <button className="mt-10 w-35 h-10 rounded-md bg-[#46a358] font-semibold uppercase text-white">
                  Shop Now
                </button>
              </div>

             
              <div className="hidden md:block relative">
                <img
                  src={Img1}
                  alt="main plant"
                  className="w-112.5 h-auto object-cover"
                />

                <img
                  src={Img2}
                  alt="small plant"
                  className="absolute bottom-10 left-5 w-28 h-28"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Showcase;
