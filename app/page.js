import BestSales from "@/Components/BestSales";
import DesignCloths from "@/Components/DesignClothes";
import Feedback from "@/Components/FeedbackCorner";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Offer from "@/Components/Offer";
import OurProducts from "@/Components/OurProducts";

const page = () => {
  return (
    <div>
      <div className="bg-primary h-[38rem] pt-6 max-w-7xl mx-auto">
        <Navbar />
        <Hero />
      </div>
      <BestSales />
      <OurProducts />
      <Offer />
      <DesignCloths />
      <Feedback />
    </div>
  );
};
export default page;
