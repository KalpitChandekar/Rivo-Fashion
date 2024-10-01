import { MoveRight, Star } from "lucide-react";
import Image from "next/image";

const card = [
  {
    backgroundColor: "#93B9A2",
    imgUrl: "/bestSold1.png",
    title: "Regular Fit Long Sleeve Shirt",
    price: "$38.99",
    rating: 5.0,
  },
  {
    backgroundColor: "#A9D4BA",
    imgUrl: "/bestSold2.png",
    title: "Black Crop Tailored Jacket",
    price: "$62.99",
    rating: 4.9,
  },
  {
    backgroundColor: "#CADCD0",
    imgUrl: "/bestSold3.png",
    title: "Textured Sunset Shirt",
    price: "$49.99",
    rating: 5.0,
  },
];

const Card = ({ backgroundColor, imgUrl, title, price, rating }) => {
  return (
    <div className="flex flex-col gap-10">
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

const BestSales = () => {
  return (
    <div className="max-w-5xl mx-auto my-20 flex flex-col items-center gap-8">
      <h1 className="text-5xl">Best selling</h1>
      <p className="text-primary">
        Get on the trend with our curated selection of best-selling styles.
      </p>
      <div className="grid grid-cols-3 gap-8">
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

      <button className="flex items-center justify-center gap-2 px-6 mt-6 py-1 border-2 border-[#224f34] text-sm">
        See all
        <MoveRight />
      </button>
    </div>
  );
};
export default BestSales;
