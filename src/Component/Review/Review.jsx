

const Review = () => {
  const reviews = [
    {
      id: 1,
      details:
        "prices are low and products excellent. i had a free sample which told me i did not like that particular smell.delivery is super quick, well packaged and faultless.",
      name: "Amina Jannat",
    },
    {
      id: 2,
      details:
        "After reading the reviews I was hesitant to order from this company, however my order arrived within a reasonable amountof time, well packaged. Very happy as the product I ordered is either out of stock or discontinued.",
      name: "Rayana",
    },
    {
      id: 3,
      details:
        "My kids are very happy, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
      name: "Barish Jenci",
    },
    {
      id: 4,
      details:
        "I have used this foundation approx 5 times. When i went to use it nothing was coming out of the pump. I opened it up to find that there was only a little left inside, enough probably to do approx another 2 applications.",
      name: "Rabeya",
    },
    {
      id: 5,
      details:
        "This is 3rd time using makeup.uk, cannot fault them, their prices, delivery, and quality, of goods are excellent,especially when you have difficulty getting them .",
      name: "Riya Chowdury",
    },
    {
      id: 6,
      details:
        "The sculp oil I bought smelled lovely and has amazing ingredients, I love how it feels soothing and makes my hair shine encouraging curls.Affordable price as well.Very pleased with my order thank you!",
      name: "Maliha Mahi",
    },
    {
      id: 7,
      details:
        "Ordered Estee Lauder Perfectly Clean, on 02/05/23. Received it today from Makeup warehouse in Poland very well packaged [boxed] very pleased with my purchase. My only complaint was I received no order acknowledgement or order number, which was strange.",
      name: "Arifa",
    },
  ];
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl font-bold text-center my-16">
        What our customers are saying about us
      </h1>
      <div className="grid grid-cols-4 gap-3 pb-16">
        {reviews.map((review) => (
          <div key={review.id} className="bg-slate-600 text-slate-300 p-4">
             
             <p className="text-xl font-bold text-white"> {review.name}</p>
             <p>{review.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
