// pages/contact.js
import Head from 'next/head';
import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col w-full items-center">
      <section className="flex w-full h-[250px] lg:h-[450px]">
        <div
          className="flex h-full w-full justify-center items-center bg-cover bg-center bg-no-repeat -px-5"
          style={{
            backgroundImage: 'url(/Contact.png)',
          }}
        >
          <h2 className="text-center text-responsiveHeader font-bold text-gray-200">
            Contact Us
          </h2>
        </div>
      </section>
      <div className="flex flex-col-reverse min-h-screen gap-10 justify-center items-center px-5 2xl:px-0 relative max-w-[1460px] w-full mx-auto my-10">
        <section className="flex justify-center w-full flex-1">
          <div className="flex relative lg:absolute lg:-top-[10%] lg:left-0 right-0 items-center bg-white shadow-lg w-full max-w-[580px] p-10">
            <form className="flex flex-col w-full gap-10">
              <h2 className="text-responsiveTag text-center lg:text-left font-bold text-gray-800">
                Get In Touch With Us
              </h2>
              <p>How can we help you?</p>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full name"
                className="w-full h-[52px] p-2 bg-transparent border-2 rounded-lg border-gray-300 focus:outline-none focus:border-[#29a8e2]"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="w-full h-[52px] p-2 bg-transparent border-2 rounded-lg border-gray-300 focus:outline-none focus:border-[#29a8e2]"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="w-full h-[200px] p-2 bg-transparent border-2 rounded-lg border-gray-300 focus:outline-none focus:border-[#29a8e2]"
              ></textarea>
              <button
                type="submit"
                className="w-full text-xl h-[52px] bg-[#29a8e2] text-white font-bold rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </section>

        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col gap-5 max-w-[415px] w-full bg-[#29a8e2] p-10 self-center lg:self-end lg:ml-auto">
            <Link href="#" className="flex gap-5 items-center">
              <div className="flex w-[40px] h-[40px] rounded-full border-2 border-white">
                <Image
                  width={40}
                  height={40}
                  quality={100}
                  src={'/Email.svg'}
                  alt="email"
                  className="w-full h-full p-2 transition-all duration-200"
                />
              </div>
              <p className="text-xl text-white font-bold">info@hi-med.com</p>
            </Link>
            <Link href="#" className="flex gap-5 items-center">
              <div className="flex w-[40px] h-[40px] rounded-full border-2 border-white">
                <Image
                  width={40}
                  height={40}
                  quality={100}
                  src={'/Whatsapp.svg'}
                  alt="whatsapp"
                  className="p-2 transition-all duration-200"
                />
              </div>
              <p className="text-xl text-white font-bold">123-456-7890</p>
            </Link>
            <Link href="#" className="flex gap-5 items-center">
              <div className="flex w-[40px] h-[40px] rounded-full">
                <Image
                  width={40}
                  height={40}
                  quality={100}
                  src={'/Phone.svg'}
                  alt="Instagram"
                  className="transition-all duration-200"
                />
              </div>
              <p className="text-xl text-white font-bold">123-456-7890</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
