import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Marquee from "react-fast-marquee";

const Featured = () => {
  const discounts = [
    {
      id: 1,
      name: "Foundation",
      discount: "30% discount",
      image: "https://i.ibb.co/qdPt9cS/img1.jpg",
    },
    {
      id: 2,
      name: "Blusher",
      discount: "40% discount",
      image: "https://i.ibb.co/QDWm48z/img6.jpg",
    },
    {
      id: 3,
      name: "Eye Shadow",
      discount: "35% discount",
      image: "https://i.ibb.co/VD6rbHJ/img3.jpg",
    },
    {
      id: 4,
      name: "Lipstick",
      discount: "25% discount",
      image: "https://i.ibb.co/XYxf6zg/img4.jpg",
    },
    {
      id: 5,
      name: "High Lighter",
      discount: "25% discount",
      image: "https://i.ibb.co/Bz5zVw7/img5.jpg",
    },
    {
      id: 6,
      name: "Blow Pomade",
      discount: "30% discount",
      image: "https://i.ibb.co/vhjJkrk/img2.jpg",
    },
  ];
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1); 
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(2); 
      } else {
        setSlidesPerView(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full mx-auto">
      <div>
        <h3 className="text-2xl text-center my-16 font-bold">Discount Price</h3>
      </div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {discounts.map((discount) => (
          <SwiperSlide key={discount.id}>
            <div
              className="hero h-96 w-80"
              style={{
                backgroundImage: `url("${discount.image}")`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="text-3xl font-bold">{discount.name}</h1>
                  <p className="text-xl font-bold">{discount.discount}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;
