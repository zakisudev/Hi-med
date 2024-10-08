import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex-col flex justify-center items-center w-full">
      <main className="flex-1 flex flex-col w-full justify-start items-center">
        <section className="flex w-full h-[250px] lg:h-[450px]">
          <div
            className="flex h-full w-full justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/About.png)',
            }}
          >
            <h2 className="text-center text-responsiveHeader font-bold text-gray-200">
              About Us
            </h2>
          </div>
        </section>
        <div className="flex flex-col w-full mx-auto max-w-[1460px] py-10 px-5 2xl:px-0">
          {/* Our story */}
          <section className="flex flex-col md:flex-row gap-10 w-full py-12">
            <h2 className="w-1/3 text-responsiveTag font-extrabold">Our Story</h2>
            <div className="flex flex-col gap-5 w-full md:w-2/3 md:px-10 2xl:px-0">
              <p className="leading-relaxed text-responsiveParagraph text-justify">
                In many parts of the world, the pursuit of lasting health and
                well-being for individuals, families, and society as a whole
                remains a challenge. However, I firmly believe that it
                doesn&apos;t have to stay that way, at least not for individuals
                who choose a different path.
              </p>
              <p className="leading-relaxed text-responsiveParagraph text-justify">
                After careful consideration of the current state of our world,
                I&apos;ve come to the conclusion that the most effective way to
                foster health and happiness within individuals, families, and
                society is to start at the most fundamental level – the
                individual. To achieve this, we decided to harness the power of
                the internet, creating this website as a bridge between those
                seeking health solutions and the empowerment they deserve
              </p>
            </div>
          </section>

          {/* Our Mission */}
          <section className="flex flex-col md:flex-row gap-10 w-full py-12">
            <h2 className="w-1/3 text-responsiveTag font-extrabold">Our Mission</h2>
            <div className="flex flex-col gap-5 w-full md:w-2/3 md:px-10 2xl:px-0">
              <p className="leading-relaxed text-responsiveParagraph text-justify">
                Our mission here doesn&apos;t follow the traditional theoretical
                approach to achieving good health and well-being. Instead, we
                are dedicated to pursuing practical and viable methods to attain
                the shared goal of a healthy and hearty populace, a desire held
                by the majority, if not everyone.
              </p>
              <p className="leading-relaxed text-responsiveParagraph text-justify">
                To begin, it&apos;s essential to recognize that many diseases
                lack a cure. Conventional medical facilities worldwide often
                fall short in meeting the healthcare needs of the majority. This
                realization has driven us to take action and contribute to
                bridging this gap.
              </p>
            </div>
          </section>

          {/* Meet the founder */}
          <section className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10 py-10 md:py-20">
            <div className="flex flex-col gap-10 md:max-w-[520px] w-full">
              <h2 className="text-responsiveTag text-left font-extrabold">
                Meet The Founder
              </h2>
              <p className="text-responsiveParagraph">
                Meet Dr. Olurotimi Nosa Aderemi the driving force behind Hi-med.
                With boundless passion and visionary leadership, Dr. Olurotimi
                Nosa Aderemi has shaped Hi-med&apos;s success, inspiring
                innovation and excellence in the industry
              </p>
            </div>
            <div className="flex flex-row md:flex-col items-center gap-4 md:gap-10">
              <div className="flex max-w-[360px] max-h-[360px] p-1">
                <Image
                  width={360}
                  height={360}
                  src="/Founder.png"
                  alt="Founder"
                  className="rounded-full w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col md:items-center gap-3">
                <h3 className="text-responsiveParagraph font-bold">
                  Dr. Olurotimi Nosa Aderemi
                </h3>
                <p className="text-gray-500 text-responsiveParagraph text-left md:text-center">
                  Founder, Public Health and General Physician
                </p>
              </div>
            </div>
          </section>

          {/* Our Partners */}
          <section className="flex flex-col gap-10 my-10">
            <h2 className="text-responsiveTag font-extrabold text-center">
              Out Partners
            </h2>
            <div className="flex gap-5 justify-between">
              <div className="flex max-w-[200px] max-h-[150px] w-full h-full">
                <Image
                  width={200}
                  height={150}
                  src="/Flag.png"
                  alt="Nigerian Flag"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex max-w-[150px] max-h-[150px] w-full h-full">
                <Image
                  width={150}
                  height={150}
                  src="/University.png"
                  alt="University"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex max-w-[150px] max-h-[150px] w-full h-full">
                <Image
                  width={150}
                  height={150}
                  src="/Medflyers.png"
                  alt="Medflyers"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex max-w-[150px] max-h-[150px] w-full h-full">
                <Image
                  width={150}
                  height={150}
                  src="/Cornell.png"
                  alt="Cornell"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
