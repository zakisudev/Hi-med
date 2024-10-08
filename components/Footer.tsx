import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full h-full lg:h-[440px] py-10 lg:py-[60px] bg-[#121212] text-white px-5 2xl:px-0">
      <div className="flex flex-col gap-10 justify-start max-w-[1460px] w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          <div className="flex flex-col justify-start items-center gap-10 w-full lg:w-[391px] h-[238px]">
            <div className="flex flex-col items-center lg:items-start gap-5">
              <div className="flex w-[72px] h-[72px] object-contain">
                <Image
                  src="/Logo.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="px-10 lg:px-0 text-center lg:text-left text-balance">
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

          <div className="flex w-full sm:gap-10 lg:w-3/4 items-start px-0 sm:px-5 lg:px-0 justify-between">
            <div className="flex flex-col gap-5">
              <h1 className="text-responsiveText font-extrabold">Quick Links</h1>
              <ul className="flex flex-col gap-5">
                <li>
                  <Link href="#" className="hover:underline font-light text-responsiveParagraph">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline font-light text-responsiveParagraph">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline font-light text-responsiveParagraph">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline font-light text-responsiveParagraph">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="text-responsiveText font-extrabold">Health Specialization</h1>
              <ul className="flex flex-col gap-5">
                <li>
                  <Link href="#" className="hover:underline font-light text-responsiveParagraph">
                    Gynecology
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline font-light text-responsiveParagraph">
                    Pediatrics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline font-light text-responsiveParagraph">
                    Neurology
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline font-light text-responsiveParagraph">
                    Urology
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="text-responsiveText font-extrabold">Legal</h1>
              <ul className="flex flex-col gap-5">
                <li>
                  <Link href="#" className="hover:underline font-light text-responsiveParagraph">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline font-light text-responsiveParagraph">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border border-gray-500 w-full max-w-[1440px] mx-auto" />
        <p className="text-center w-full max-w-[1440px] mx-auto text-responsiveText">
          Copyright © 2024 Hi-med medical consultation. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
