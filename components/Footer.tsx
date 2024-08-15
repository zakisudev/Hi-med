import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 justify-start w-full h-[440px] py-[60px] px-[117px] bg-[#121212] text-white">
      <div className="flex justify-between w-[1440px] mx-auto">
        <div className="flex flex-col justify-start items-center gap-10 w-[391px] h-[238px]">
          <div className="flex flex-col gap-5">
            <div className="flex w-[72px] h-[72px] object-contain">
              <Image
                src="/Logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="">
              Hi-med Medical Consultation app aims to act as a bridge between
              the patient and possible health solutions.
            </p>
            <div className="flex gap-5">
              <Link
                href="#"
                className="flex w-[40px] h-[40px] rounded-full border border-gray-100 hover:scale-105"
              >
                <Image
                  width={40}
                  height={40}
                  quality={100}
                  src={'/Instagram.svg'}
                  alt="ig"
                  className="p-2 hover:p-1 transition-all duration-200"
                />
              </Link>
              <Link
                href="#"
                className="flex w-[40px] h-[40px] rounded-full border border-gray-100 hover:scale-105"
              >
                <Image
                  width={40}
                  height={40}
                  quality={100}
                  src={'/Linkedin.svg'}
                  alt="ln"
                  className="p-2 hover:p-1 transition-all duration-200"
                />
              </Link>
              <Link
                href="#"
                className="flex w-[40px] h-[40px] rounded-full border border-gray-100 hover:scale-105"
              >
                <Image
                  width={40}
                  height={40}
                  quality={100}
                  src={'/Email.svg'}
                  alt="em"
                  className="p-2 hover:p-1 transition-all duration-200"
                />
              </Link>
              <Link
                href="#"
                className="flex w-[40px] h-[40px] rounded-full border border-gray-100 hover:scale-105"
              >
                <Image
                  width={40}
                  height={40}
                  quality={100}
                  src={'/Whatsapp.svg'}
                  alt="wa"
                  className="p-2 hover:p-1 transition-all duration-200"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Quick Links</h1>
          <ul className="flex flex-col gap-5">
            <li>
              <Link href="#" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Health Specialization</h1>
          <ul className="flex flex-col gap-5">
            <li>
              <Link href="#" className="hover:underline">
                Gynecology
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Pediatrics
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Neurology
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Urology
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Legal</h1>
          <ul className="flex flex-col gap-5">
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border border-gray-500 w-[1440px] mx-auto" />
      <p className="text-center w-[1440px] mx-auto">
        Copyright © 2024 Hi-med medical consultation. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
