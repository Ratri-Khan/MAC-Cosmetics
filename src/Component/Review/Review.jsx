// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "./styles.css";

// import required modules


const Review = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold leading-none text-center mt-4" >
        What our customers are saying about us
      </h1>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <section className="my-8 bg-fuchsia-200 ">
            <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12"></div>
            <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
              <div className="flex flex-col items-center mx-12 lg:mx-0">
                <div className="relative text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute top-0 left-0 w-8 h-8 text-fuchsia-600 "
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  <p className="px-6 py-1 text-lg italic">
                  prices are waaay low and products excellent. i had a free sample which told me i did not like that particular smell. delivery is super quick, well packaged and faultless. 
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute bottom-0 right-0 w-8 h-8 text-fuchsia-600 "
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </div>
                <span className="w-12 h-1 my-2 rounded-lg bg-fuchsia-600 "></span>
                <p>Amina Jannat</p>
              </div>
              <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                <div className="relative text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="absolute top-0 left-0 w-8 h-8 text-fuchsia-600 "
                  >
                    <path
                      fill="currentColor"
                      d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                    ></path>
                  </svg>
                  <p className="px-6 py-1 text-lg italic">
                  This is 3rd time using makeup.uk, cannot fault them, their prices, delivery, and quality, of goods are excellent, especially when you have difficulty getting them .
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="absolute bottom-0 right-0 w-8 h-8 text-fuchsia-600 "
                  >
                    <path
                      fill="currentColor"
                      d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                    ></path>
                  </svg>
                </div>
                <span className="w-12 h-1 my-2 rounded-lg bg-fuchsia-600 "></span>
                <p>Riya Chowdury</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="my-8 bg-pink-200">
            <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12"></div>
            <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
              <div className="flex flex-col items-center mx-12 lg:mx-0">
                <div className="relative text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  <p className="px-6 py-1 text-lg italic">
                  After reading the reviews I was hesitant to order from this company, however my order arrived within a reasonable amount of time, well packaged. Very happy as the product I ordered is either out of stock or discontinued.
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </div>
                <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                <p>Maliha Khan</p>
              </div>
              <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                <div className="relative text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
                  >
                    <path
                      fill="currentColor"
                      d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                    ></path>
                  </svg>
                  <p className="px-6 py-1 text-lg italic">
                  Ordered Estee Lauder Perfectly Clean, on 02/05/23. Received it today from Makeup warehouse in Poland very well packaged [boxed] very pleased with my purchase. My only complaint was i received no order acknowledgement or order number, which was strange.
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
                  >
                    <path
                      fill="currentColor"
                      d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                    ></path>
                  </svg>
                </div>
                <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                <p>Momita banarji</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section className="my-8 bg-pink-200">
            <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12"></div>
            <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
              <div className="flex flex-col items-center mx-12 lg:mx-0">
                <div className="relative text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  <p className="px-6 py-1 text-lg italic">
                    My kids are very happy, amet consectetur adipisicing elit.
                    Voluptatibus quibusdam, eligendi exercitationem molestias
                    possimus facere.
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </div>
                <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                <p>Barish Jenci</p>
              </div>
              <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                <div className="relative text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
                  >
                    <path
                      fill="currentColor"
                      d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                    ></path>
                  </svg>
                  <p className="px-6 py-1 text-lg italic">
                  Ordered Estee Lauder Perfectly Clean, on 02/05/23. Received it today from Makeup warehouse in Poland very well packaged [boxed] very pleased with my purchase. My only complaint was i received no order acknowledgement or order number, which was strange.
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
                  >
                    <path
                      fill="currentColor"
                      d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                    ></path>
                  </svg>
                </div>
                <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                <p>Nura Fatiha</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section className="my-8 bg-fuchsia-200 ">
            <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12"></div>
            <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
              <div className="flex flex-col items-center mx-12 lg:mx-0">
                <div className="relative text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  <p className="px-6 py-1 text-lg italic">
                  I have used this foundation approx 5 times. When i went to use it nothing was coming out of the pump.
                  I opened it up to find that there was only a little left inside, enough probably to do approx another 2 applications.
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </div>
                <span className="w-12 h-1 my-2 rounded-lg bg-fuchsia-600 "></span>
                <p>Montor Bap</p>
              </div>
              <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                <div className="relative text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
                  >
                    <path
                      fill="currentColor"
                      d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                    ></path>
                  </svg>
                  <p className="px-6 py-1 text-lg italic">
                  The sculp oil I bought smelled lovely and has amazing ingredients, I love how it feels soothing and makes my hair shine encouraging curls.Affordable price as well.Very pleased with my order thank you!
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
                  >
                    <path
                      fill="currentColor"
                      d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                    ></path>
                  </svg>
                </div>
                <span className="w-12 h-1 my-2 rounded-lg bg-fuchsia-600 "></span>
                <p>Rabeya </p>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Review