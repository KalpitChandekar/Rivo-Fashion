import BestSales from "@/Components/BestSales";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import OurProducts from "@/Components/OurProducts";

const page = () => {
  return (
    <div>
      <div className="bg-primary h-[38rem] pt-6">
        <Navbar />
        <Hero />
      </div>
      <BestSales />
      <OurProducts />
    </div>
  );
};
export default page;
