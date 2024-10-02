import { ChevronLeft, ChevronRight, MoveRight, Star } from "lucide-react";
import Image from "next/image";

const card = [
  {
    title: "Emily Wilson",
    description:
      "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!",
  },
  {
    backgroundColor: "#C2EFD4",
    title: "Sarah Thompson",
    description:
      "I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!",
  },
  {
    title: "Olivia Martinez",
    description:
      "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!",
  },
];

const Card = ({ backgroundColor, title, description }) => {
  return (
    <div
      className="flex flex-col gap-6 p-6 shadow-lg"
      style={{ backgroundColor }}
    >
      <Image src="/inverted.png" alt="inverted" width={24} height={18} />
      <h1 className="font-semibold text-2xl">{title}</h1>
      <p className="text-sm font-normal">{description}</p>
    </div>
  );
};

const Feedback = () => {
  return (
    <div className="max-w-6xl mx-auto my-40 flex flex-col items-center gap-8">
      <h1 className="text-5xl mb-8">Feedback Corner</h1>
      <div className="grid grid-cols-3 gap-2">
        {card.map(({ backgroundColor, title, description }) => (
          <Card
            backgroundColor={backgroundColor}
            title={title}
            description={description}
          />
        ))}
      </div>
      <div className="flex gap-8 justify-center ">
        <button className="shadow-xl">
          <ChevronLeft />
        </button>
        <button className="bg-primary">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
export default Feedback;
