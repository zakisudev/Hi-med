// components/Header.js
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex justify-between items-center sticky top-0 w-full h-[110px] px-20 bg-slate-100 shadow">
      <Link href="/">
        <Image width={72} height={72} src="/Logo.svg" alt="logo" />
      </Link>
      <nav>
        <ul className="flex justify-center gap-5 text-black text-xl">
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
              href="/categories"
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
      <button className="px-10 py-3 bg-[#0070f3] hover:bg-[#0265d7] text-white rounded-xl font-semibold">
        Get An Appointment
      </button>
    </header>
  );
}
