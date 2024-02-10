import banner3 from "../../assets/banner/Banner3.jpg";
import banner5 from "../../assets/banner/banner5.jpg";
import banner6 from "../../assets/banner/banner6.jpg";
import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        // className="mySwiper"
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
