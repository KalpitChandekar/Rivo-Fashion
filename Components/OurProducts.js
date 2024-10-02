import { Star } from "lucide-react";
import Image from "next/image";

const card = [
  {
    imgUrl: "/product1.png",
    title: "Spread Collar Shirt",
    price: "$48.99",
    rating: 5.0,
  },
  {
    backgroundColor: "#EAEBF0",
    imgUrl: "/product2.png",
    title: "White Solid Formal Shirt",
    price: "$32.99",
    rating: 4.9,
  },
  {
    imgUrl: "/product3.png",
    title: "Shine On Me Blouse",
    price: "$39.99",
    rating: 5.0,
  },
  {
    imgUrl: "/product4.png",
    title: "Gray Solid Padded Jacket",
    price: "$49.99",
    rating: 4.8,
  },
  {
    imgUrl: "/product5.png",
    title: "Printed Loose T-shirt",
    price: "$49.99",
    rating: 5.0,
  },
  {
    imgUrl: "/product6.png",
    title: "Summer Wind Crop Shirt",
    price: "$59.99",
    rating: 4.9,
  },
  {
    imgUrl: "/product7.png",
    title: "Tailored Jacket",
    price: "$49.99",
    rating: 5.0,
  },
  {
    backgroundColor: "#DDECE2",
    imgUrl: "/product8.png",
    title: "Solid Round Neck T-shirt",
    price: "$39.99",
    rating: 4.8,
  },
];

const Card = ({ backgroundColor, imgUrl, title, price, rating }) => {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <div className="" style={{ backgroundColor }}>
        <Image src={imgUrl} alt="bestSold" width={430} height={566} />
      </div>
      <div className="flex flex-col items-center justify-center gap-1 text-secondary">
        <h1 className="font-semibold">{title}</h1>
        <div className="flex justify-center items-center gap-6 font-normal">
          <p>{price}</p>
          <span>|</span>
          <div className="flex justify-center items-center gap-1">
            {rating}
            <Star style={{ color: "#FFD700" }} fill="#FFD700" size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

const OurProducts = () => {
  return (
    <div className="max-w-5xl mx-auto my-36 px-2 md:px-2 flex flex-col items-center gap-8">
      <h1 className="text-5xl">Our products</h1>
      <div className="flex md:gap-20 gap-10">
        <a href="/" className="">
          SALE
        </a>
        <a href="/" className="border-b-2 border-primary">
          HOT
        </a>
        <a href="/" className="">
          NEW ARRIVALS
        </a>
        <a href="/" className="">
          ACCESSORIES
        </a>
      </div>
      <div className="grid md:grid-cols-4 gap-28 md:gap-8">
        {card.map(({ backgroundColor, imgUrl, title, price, rating }) => (
          <Card
            backgroundColor={backgroundColor}
            imgUrl={imgUrl}
            title={title}
            price={price}
            rating={rating}
          />
        ))}
      </div>
    </div>
  );
};
export default OurProducts;
