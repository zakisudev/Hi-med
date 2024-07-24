import Image from 'next/image';
import React from 'react';

type TestimonialProp = {
  testimonial: string;
  avatar: string;
  name: string;
  profession: string;
};
const TestimonialCard: React.FC<TestimonialProp> = ({
  testimonial,
  avatar,
  name,
  profession,
}) => {
  return (
    <div className="w-[387px] h-[389px] bg[#F2FFFB] shadow-lg rounded-xl p-10">
      <div className="flex flex-col gap-5 justify-center items-start w-full">
        <div className="flex w-[65px] h-[65px] object-cover self-start">
          <Image
            width={300}
            height={300}
            quality={100}
            src={'/quote.png'}
            alt="quote"
          />
        </div>
        <p className="text-justify text-wrap">{testimonial}</p>
        <div className="flex gap-5 justify-start items-start mt-5">
          <div className="flex w-[50px] h-[50px] object-cover">
            <Image
              width={100}
              height={100}
              quality={100}
              src={avatar}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <h4 className="font-semibold">{name}</h4>
            <p className="text-gray-500">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
