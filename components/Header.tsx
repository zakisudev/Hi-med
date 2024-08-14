// components/Header.js
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex sticky top-0 w-full h-[110px] px-20 bg-slate-100 shadow z-50">
      <div className="flex w-[1440px] justify-between items-center mx-auto">
        <Link href="/">
          <Image width={72} height={72} src="/Logo.svg" alt="logo" />
        </Link>
        <nav>
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
        <Link
          href="/book"
          className="px-10 py-3 bg-[#29a8e2] hover:bg-[#2d93c3] text-white rounded-xl text-lg font-bold transition-all duration-200"
        >
          Get An Appointment
        </Link>
      </div>
    </header>
  );
}
