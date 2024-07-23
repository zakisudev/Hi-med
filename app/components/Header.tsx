// components/Header.js
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full h-[110px] px-20 bg-slate-100 border-b border-slate-400">
      <Image width={72} height={72} src="/Logo.svg" alt="logo" />
      <nav>
        <ul className="flex justify-center gap-5 text-black">
          <li className="mx-[1rem]">
            <Link
              className="font-semibold hover:text-[#0070f3] transition-all duration-300"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="mx-[1rem]">
            <Link
              className="font-semibold hover:text-[#0070f3] transition-all duration-300"
              href="/about"
            >
              About
            </Link>
          </li>

          <li className="mx-[1rem]">
            <Link
              className="font-semibold hover:text-[#0070f3] transition-all duration-300"
              href="/about"
            >
              Categories
            </Link>
          </li>
          <li className="mx-[1rem]">
            <Link
              className="font-semibold hover:text-[#0070f3] transition-all duration-300"
              href="/contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <button className="px-10 py-3 bg-[#0070f3] hover:bg-[#0265d7] rounded-xl font-semibold">
        Get An Appointment
      </button>
    </header>
  );
}
