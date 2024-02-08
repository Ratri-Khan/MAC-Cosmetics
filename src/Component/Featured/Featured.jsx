import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Featured = () => {
  const discounts = [
    {
      id: 1,
      name: "Foundation",
      discount: "30% discount",
      Details: "If you buy Foundation within the next 15 days",
      Details2: "you will get 30% discount.",
      image: "https://i.ibb.co/qdPt9cS/img1.jpg",
    },
    {
      id: 2,
      name: "Blusher",
      discount: "40% discount",
      Details: "If you buy Blusher within the next 15 days",
      Details2: "you will get 40% discount.",
      image: "https://i.ibb.co/QDWm48z/img6.jpg",
    },
    {
      id: 3,
      name: "Eye Shadow",
      discount: "35% discount",
      Details: "If you buy Eye Shadow within the next 15 days",
      Details2: "you will get 35% discount.",
      image: "https://i.ibb.co/VD6rbHJ/img3.jpg",
    },
    {
      id: 4,
      name: "Lipstick",
      discount: "25% discount",
      Details: "If you buy Lipstick within the next 15 days",
      Details2: "you will get 25% discount.",
      image: "https://i.ibb.co/XYxf6zg/img4.jpg",
    },
    {
      id: 5,
      name: "High Lighter",
      discount: "25% discount",
      Details: "If you buy High Lighter within the next 15 days",
      Details2: "you will get 25% discount.",
      image: "https://i.ibb.co/Bz5zVw7/img5.jpg",
    },
    {
      id: 6,
      name: "Blow Pomade",
      discount: "30% discount",
      Details: "If you buy Blow Pomade within the next 15 days",
      Details2: "you will get 30% discount.",
      image: "https://i.ibb.co/vhjJkrk/img2.jpg",
    },
  ];
  return (
    <div className="w-full  mx-auto">
      <div>
        <h3 className="text-2xl text-center my-16 font-bold">Discount Price</h3>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {discounts.map((discount) => (
          <div key={discount.id}>
            <SwiperSlide>
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
                      {/* <p className="text-lg">
                        {discount.Details} , <br />
                        {discount.Details2}
                      </p> */}
                    </div>
                  </div>
                </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;
