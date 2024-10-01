import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";

const page = () => {
  return (
    <div className="bg-primary h-[38rem] pt-6">
      <Navbar />
      <Hero />
    </div>
  );
};
export default page;
