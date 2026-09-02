import { ArrowUpRight } from 'lucide-react';

const LeftSection = () => {
  return (
    <div className="mt-20 ml-5 h-[75vh] flex flex-col justify-between">
      
      <div>
        <h1 className="font-bold text-6xl">
          Prospective customer segmentation
        </h1>

        <p className="mt-8 w-[80%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          commodi ea ut libero, ab amet officiis quidem facere reprehenderit
          excepturi tenetur? Iure soluta suscipit aliquid sed labore quisquam
          maxime ipsam.
        </p>
      </div>

      <ArrowUpRight size={120} color="#000000" />

    </div>
  );
};

export default LeftSection;