import { MoveRight, Star } from "lucide-react";
import Image from "next/image";

const card = [
  {
    backgroundColor: "#D3E2D7",
    imgUrl: "/cloth1.png",
    title: "Accessories",
    description:
      "Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.",
  },
  {
    imgUrl: "/cloth2.png",
    title: "Dresses",
    description:
      "Explore a stunning range of designer dresses, including evening gowns and chic day dresses.",
  },
  {
    imgUrl: "/cloth3.png",
    title: "Quterwear",
    description:
      "Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.",
  },
];

const Card = ({ backgroundColor,imgUrl, title,description }) => {
  return (
    <div className="flex flex-col gap-6 text-center">
      <div className="" style={{ backgroundColor }}>
        <Image src={imgUrl} alt="bestSold" width={430} height={566} />
      </div>
      <div className="flex flex-col items-center justify-center gap-1 text-secondary">
        <h1 className="font-semibold text-2xl">{title}</h1>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

const DesignCloths = () => {
  return (
    <div className="max-w-5xl mx-auto my-20 flex flex-col items-center gap-8">
      <h1 className="text-5xl">Designer Clothes For You</h1>
      <p className="text-primary">
        {" "}
        Immerse yourself in the world of luxury fashion with our meticulously
        crafted designer clothes!
      </p>
      <div className="grid grid-cols-3 gap-8">
        {card.map(({ backgroundColor,imgUrl, title, description }) => (
          <Card
            backgroundColor={backgroundColor}
            imgUrl={imgUrl}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};
export default DesignCloths;
