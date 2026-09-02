import { ArrowUpRight } from 'lucide-react';

const LeftSection = () => {
  return (
    <div className="mt-20 ml-5 h-[75vh] flex flex-col justify-between">
      
      <div>
        <h1 className="font-bold text-6xl">
          Prospective customer segmentation
        </h1>

        <p className="mt-8 w-[90%] text-gray-500 text-xl font-extrabold">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eligendi dolor laudantium! Cumque laborum, voluptas repellat dicta pariatur magni explicabo delectus, quis quibusdam accusantium voluptatem?
        </p>
      </div>

      <ArrowUpRight size={120} color="#000000" />

    </div>
  );
};

export default LeftSection;