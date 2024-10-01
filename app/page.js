import BestSales from "@/Components/BestSales";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";

const page = () => {
  return (
    <div>
      <div className="bg-primary h-[38rem] pt-6">
        <Navbar />
        <Hero />
      </div>
      <BestSales />
    </div>
  );
};
export default page;
