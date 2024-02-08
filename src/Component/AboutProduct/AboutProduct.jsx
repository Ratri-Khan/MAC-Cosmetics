import React from "react";
import about from '../../assets/perfume.jpg'

const AboutProduct = () => {
  const products = [
    {
      id: 1,
      title: "About Our Foundation:",
      details:
        "Our fandation imported from American Visual company . we are take enough research about it then we deal with them . Its totally safe for skin and you can use it .",
    },
    {
      id: 2,
      title: "About Our face pack :",
      details:
        "Our Face pack imported from Italian vanila company . we are take enough research about it then we deal with them . Its totally safe for skin and you can use it .",
    },
    {
        id: 1,
        title: "About Our Foundation:",
        details:
          "Our fandation imported from American Visual company . we are take enough research about it then we deal with them . Its totally safe for skin and you can use it .",
      },
      {
        id: 2,
        title: "About Our face pack :",
        details:
          "Our Face pack imported from Italian vanila company . we are take enough research about it then we deal with them . Its totally safe for skin and you can use it .",
      },
    {
      id: 3,
      title: "About Our hair Oil :",
      details:
        "Our Hail oil imported from Indian harbal company . we are take enough research about it then we deal with them . Its totally safe for hair and you can use it .",
    },
  ];
  return (
    <div className="w-11/12 mx-auto">
      <p className="text-2xl font-bold text-center my-16">
        Our Product Imported From :
      </p>
      <div className="md:flex w-full gap-4 items-center justify-between">
        <div className="md:w-3/5">
          {products.map((product) => (
            <div key={product.id} className="mb-4">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="text-lg">{product.details}</p>
            </div>
          ))}
        </div>
        <div className="md:w-4/12 rounded">
            <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
