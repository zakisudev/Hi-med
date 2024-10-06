"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePath = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }
  , [isMenuOpen]);

  return (
    <header className="flex sticky top-0 w-full h-[60px] lg:h-[110px] bg-slate-100 shadow z-50 px-10">
      <div className="flex max-w-[1460px] w-full mx-auto justify-between items-center">
        <button onClick={()=> handlePath('/')} className="w-[36px] h-[54px] lg:h-[72px]">
          <Image width={36} height={72} src="/Logo.svg" alt="logo" className="w-full h-full object-contain"/>
        </button>

        <nav className="hidden lg:flex">
          <ul className="flex justify-center gap-5 text-black text-xl">
            <li className="mx-[1rem]">
              <Link
                className="font-semibold hover:text-[#0070f3] transition-all duration-200"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="mx-[1rem]">
              <Link
                className="font-semibold hover:text-[#0070f3] transition-all duration-200"
                href="/about"
              >
                About
              </Link>
            </li>

            <li className="mx-[1rem]">
              <Link
                className="font-semibold hover:text-[#0070f3] transition-all duration-200"
                href="/categories"
              >
                Categories
              </Link>
            </li>
            <li className="mx-[1rem]">
              <Link
                className="font-semibold hover:text-[#0070f3] transition-all duration-200"
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => handlePath("/book")}
          className="hidden sm:flex px-10 py-1 lg:py-3 bg-[#29a8e2] hover:bg-[#2d93c3] text-white rounded-xl text-lg font-bold transition-all"
        >
          Get An Appointment
        </button>

        <button
          className="flex lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <div className="w-6 h-6 p-0.5">
              <Image
              src="/close.svg"
              alt="close"
              width={24}
              height={24}
              className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="w-6 h-6">
              <Image
              src="/menu.svg"
              alt="menu"
              width={24}
              height={24}
              className="w-full h-full object-contain"
              />
            </div>
          )}
        </button>

        {isMenuOpen && (
        <nav className={`${isMenuOpen ? "top-[60px]" : "-top-[60px]"} absolute transition-all duration-300 ease-in-out right-0 left-0 bg-slate-100 shadow-lg lg:hidden mx-auto w-full h-96`}>
          <ul className="flex flex-col justify-evenly items-center mx-auto gap-5 text-black text-xl py-5 h-full">
            <li className="mx-[1rem]">
              <button
                onClick={() => handlePath("/")}
                className="font-semibold hover:text-[#0070f3] transition-all duration-200"
              >
                Home
              </button>
            </li>
            <li className="mx-[1rem]">
              <button
                onClick={() => handlePath("/about")}
                className="font-semibold hover:text-[#0070f3] transition-all duration-200"
              >
                About
              </button>
            </li>

            <li className="mx-[1rem]">
              <button
              onClick={() => handlePath("/categories")}
                className="font-semibold hover:text-[#0070f3] transition-all duration-200"
              >
                Categories
              </button>
            </li>
            <li className="mx-[1rem]">
              <button
              onClick={() => handlePath("/contact")}
                className="font-semibold hover:text-[#0070f3] transition-all duration-200"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
        )}
      </div>
    </header>
  );
}