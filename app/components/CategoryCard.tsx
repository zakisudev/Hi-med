import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type CategoryCardProps = {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  imgSrc,
  title,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col justify-between w-[450px] h-[600px] bg-white rounded-2xl py-7 px-5 shadow-lg">
      <div className="flex flex-col gap-7 object-cover">
        <Image
          width={500}
          height={500}
          quality={100}
          src={imgSrc}
          alt={title}
          className="w-full rounded-lg "
        />
        <h1 className="text-[24px] font-semibold">{title}</h1>
        <p className="text-[16px]">{description}</p>
      </div>
      <Link
        href={`/${link}`}
        className="text-lg font-bold flex items-center gap-3 w-fit"
      >
        <p className="text-[#36b2eb]">Learn more</p>
        <div className="flex w-[14px] items-center justify-center h-[14px]">
          <Image
            width={20}
            height={10}
            quality={100}
            src={'/learn-more.png'}
            alt="learn more"
            className="w-full h-full"
          />
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
