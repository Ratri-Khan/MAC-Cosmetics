import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}" style="background-color: white; width:18px; height:18px"></span>`;
          },
        }}
        modules={[Pagination, Navigation]}
      >
       
        <SwiperSlide>
          <div className="hero min-h-screen"
            style={{ backgroundImage: `url(${banner1})` }}>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="hero min-h-screen"
            style={{ backgroundImage: `url(${banner2})`}}>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen"
            style={{ backgroundImage: `url(${banner3})` }}>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
