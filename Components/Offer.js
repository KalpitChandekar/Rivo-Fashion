import Image from "next/image";

const Offer = () => {
  return (
    <div className="max-w-5xl mb-36 -z-20 bg-primary mx-auto mt-12 flex justify-between items-center">
      <div className="relative w-1/2 flex justify-center items-center">
        <Image
          src="/offer.png"
          width={482}
          height={596}
          alt="hero"
          className="w-[22rem] z-20"
        />
        <Image
          src="/dotes.png"
          width={119}
          height={110}
          alt="hero"
          className="w-[6rem] absolute bottom-8 left-8 z-10"
        />
        <div className="bg-[#DFFBEA] w-28 h-28 absolute bottom-12 left-20"></div>
      </div>

      <div className="flex flex-col w-1/2 gap-8 ">
        <h1 className="text-3xl font-bold">Exclusive offer</h1>
        <p className="max-w-sm leading-loose">
          Unlock the ultimate style upgrade with our exclusive offer Enjoy
          savings of up to 40% off on our latest New Arrivals
        </p>
        <div className="flex gap-6 text-center font-semibold">
          <div className="flex flex-col bg-white py-4 px-8">
            <h1 className="text-2xl">06</h1>
            <p className="font">Days</p>
          </div>
          <div className="flex flex-col bg-white py-4 px-8">
            <h1 className="text-2xl">18</h1>
            <p className="font">Hour</p>
          </div>
          <div className="flex flex-col bg-white py-4 px-8">
            <h1 className="text-2xl">44</h1>
            <p className="font">Min</p>
          </div>
        </div>
        <button className="w-44 py-2 font-normal text-white bg-[#224f34]">
          BUY NOW
        </button>
      </div>
    </div>
  );
};
export default Offer;
