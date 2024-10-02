import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-5xl mx-auto px-2 md:px-2 mt-12 flex md:flex-row flex-col gap-8 justify-between">
      <div className="max-w-lg mr-auto flex flex-col gap-8 ">
        <h1 className="text-6xl leading-tight">
          Discover and Find Your Own Fashion!
        </h1>
        <p className="max-w-sm leading-loose">
          Explore our curated collection of stylish clothing and accessories
          tailored to your unique taste.
        </p>
        <button className="w-44 py-2 font-normal text-white bg-[#224f34]">
          EXPLORE NOW
        </button>
      </div>
      <div className="bg-secondary rounded-bl-3xl rounded-tr-2xl rounded-tl-[6rem] rounded-br-[6rem] relative mx-4 md:mx-4">
        <Image
          src="/hero.png"
          width={570}
          height={717}
          alt="hero"
          className="w-[22rem]"
        />
        <Image
          src="/dotes.png"
          width={119}
          height={110}
          alt="hero"
          className="w-[5rem] absolute top-24 right-2"
        />
        <Image
          src="/dotes.png"
          width={119}
          height={110}
          alt="hero"
          className="w-[5rem] absolute bottom-12 left-2"
        />
      </div>
    </div>
  );
};
export default Hero;
