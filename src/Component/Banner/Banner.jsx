import banner3 from "../../assets/banner/banner3.jpg";
import banner5 from "../../assets/banner/banner5.jpg";
import banner6 from "../../assets/banner/banner6.jpg";

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
            style={{ backgroundImage: `url(${banner3})` }}>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="hero min-h-screen"
            style={{ backgroundImage: `url(${banner5})`}}>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen"
            style={{ backgroundImage: `url(${banner6})` }}>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
