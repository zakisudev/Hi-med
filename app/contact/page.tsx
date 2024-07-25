// pages/contact.js
import Head from 'next/head';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us for more information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-1 flex min-h-screen flex-col w-full justify-start items-center">
        <section className="flex w-full h-[450px] relative mb-20">
          <div
            className="flex h-full w-full justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/Contact.png)',
            }}
          >
            <h2 className="text-center text-7xl font-bold text-gray-200">
              Contact Us
            </h2>
          </div>
          <div className="flex absolute top-[70%] left-28 bg-white shadow-lg w-[580px] p-10">
            <form className="flex flex-col w-full gap-10">
              <h2 className="text-3xl font-bold text-gray-800">
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
        <div className="flex flex-col gap-5 w-[415px] p-10 bg-[#29a8e2] self-center ml-64">
          <Link href="#" className="flex gap-5 items-center">
            <div className="flex w-[40px] h-[40px] rounded-full border-2 border-white">
              <Image
                width={40}
                height={40}
                quality={100}
                src={'/Email.svg'}
                alt="email"
                className="p-2 transition-all duration-200"
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
            <p className="text-xl text-white font-bold">123-4567</p>
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
            <p className="text-xl text-white font-bold">info@hi-med.com</p>
          </Link>
        </div>
      </main>

      <div className="flex mt-20"></div>

      <Footer />
    </div>
  );
}
