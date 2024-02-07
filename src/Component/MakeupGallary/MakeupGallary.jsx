import hero1 from "../../assets/makeupGallary/collection13.jpeg";
import hero2 from "../../assets/makeupGallary/collection12.jpg";
import hero4 from "../../assets/makeupGallary/collection9.webp";
import hero8 from "../../assets/makeupGallary/collection11.jpg";
import hero3 from "../../assets/makeupGallary/collection10.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const MakeupGallary = () => {
  return (
    <section className="w-11/12 m-auto">
      <h1 className="text-center text-2xl font-bold my-16">
        {" "}
        Product Category{" "}
      </h1>
      <div className="container grid grid-cols-2 gap-2 p-4 mx-auto md:grid-cols-4">
        <img
          src={hero1}
          alt=""
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <img
          src={hero2}
          alt=""
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"          
        />
        <img
          src={hero8}
          alt=""
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"          
        />
        <img
          src={hero3}
          alt=""
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          
        />
        <img
          src={hero4}
          alt=""
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"          
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
        />
      </div>
    </section>
  );
};
AOS.init();
export default MakeupGallary;
