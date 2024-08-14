import React, { useEffect } from 'react';
import Image from 'next/image';
import CategoryCard from '@/components/CategoryCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import Spinner from '@/components/ui/Spinner';
import { fetchCategories } from '../services/api';

export default async function Home() {
  const categories = await fetchCategories();

  return (
    <div className="min-h-screen px-[0.5rem] -mt-[110px] w-full flex flex-col justify-center items-center">
      <main className="flex flex-col justify-center items-center w-full">
        {/* Hero */}
        <section className="flex min-h-screen justify-center items-center w-full bg-[#F2FFFB]">
          <div className="flex w-1/2 justify-start items-center pl-[240px]">
            <div className="flex flex-col gap-5">
              <h1 className="text-[56px] leading-none font-bold w-[487px]">
                Expert Guidance for{' '}
                <span className="text-[#29a8e2]">Healthy Living</span>
              </h1>
              <p className="w-[487px] text-[20px]">
                Rely on Our Expert Guidance to Make Well-Informed Choices and
                Achieve Your Health Goals with Confidence.{' '}
              </p>
              <div className="flex gap-10 mt-5">
                <Link
                  href="/book"
                  className="text-lg px-10 py-3 bg-[#29a8e2] hover:bg-[#2d93c3] text-white rounded-xl font-bold transition-all duration-200"
                >
                  Get An Appointment
                </Link>
                <Link
                  href="/categories"
                  className="flex justify-center items-center text-lg w-[230px] h-[54px] rounded-xl border-2 border-[#29a8e2] hover:shadow-inner font-semibold transition-all duration-200"
                >
                  See Categories
                </Link>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 justify-center items-center h-full relative">
            <Image
              width={1000}
              height={1000}
              quality={100}
              src="/hero.png"
              alt="hero"
              className="absolute right-0 left-0 w-full object-cover"
            />
            <Image
              width={400}
              height={500}
              quality={100}
              src="/hero-doctor.png"
              alt="doctor"
              className="absolute -bottom-70 left-10"
            />
            <Image
              width={396}
              height={385}
              quality={100}
              src="/hero-family.png"
              alt="hero"
              className="absolute top-10 right-20"
            />
          </div>
        </section>

        {/* Out features */}
        <section className="flex flex-col min-h-screen py-7 items-center w-full bg-gray-100">
          <div className="flex flex-col justify-center w-[1440px]">
            <div className="flex flex-col w-full gap-3 justify-start items-center">
              <h3 className="uppercase font-extrabold text-[#226699] text-center">
                OUR FEATURES
              </h3>
              <h2 className="text-[#121212] text-[40px] ">
                What We Have To Offer
              </h2>
              <p className="max-w-[853px] text-center text-[20px]">
                Explore our comprehensive range of offerings, including expert
                articles, interactive tools, preventive and curative health
                tips, symptom checkers, and more.{' '}
              </p>
            </div>
            <div className="flex gap-5 justify-between w-full max-h-[564px] mt-10">
              <div className="flex flex-col w-1/2 justify-center items-stretch">
                <div className="flex w-[525px] h-[269px] object-cover self-end">
                  <Image
                    width={525}
                    height={269}
                    quality={100}
                    src={'/home-children.png'}
                    alt="children"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex w-[525px] h-[258px] object-cover self-start">
                  <Image
                    width={525}
                    height={258}
                    quality={100}
                    src={'/home-doctor.png'}
                    alt="doctor-treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col w-[480px] gap-10">
                <div className="flex flex-col gap-5 bg-[#FBFCCF] p-5 rounded-xl">
                  <h3 className="text-xl font-semibold text-left">
                    Lifestyle tips
                  </h3>
                  <p className="text-sm">
                    We&apos;re dedicated to providing you with a wealth of
                    resources, information, and expert guidance to help you lead
                    a healthier, happier life.
                  </p>
                </div>
                <div className="flex flex-col gap-5 bg-[#ffd0fa7e] p-5 rounded-xl">
                  <h3 className="text-xl font-semibold text-left">
                    Self Diagnosis Tool
                  </h3>
                  <p className="text-sm">
                    Our self diagnosis tool helps you to explore and understand
                    your symptoms further. Input your symptoms and get a list of
                    possible illnesses.
                  </p>
                </div>
                <div className="flex flex-col gap-5 bg-[#DDEEFF] p-5 rounded-xl">
                  <h3 className="text-xl font-semibold text-left">
                    Consultations
                  </h3>
                  <p className="text-sm">
                    Connect with our experienced healthcare professionals to
                    help you by providing tailored guidance and support for your
                    unique health concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="flex flex-col min-h-screen gap-10 justify-center py-20 items-center w-full bg-[#F2FFFB]">
          <div className="flex flex-col gap-3 w-full justify-start items-center">
            <h3 className="uppercase font-extrabold text-[#226699] text-center">
              CATEGORIES
            </h3>
            <h2 className="text-[#121212] text-[40px] ">
              Explore Different Health Categories
            </h2>
            <p className="max-w-[853px] text-center text-[20px]">
              Navigate our comprehensive health categories to access expert
              insights, tips, and resources tailored to specific areas of
              well-being.
            </p>
          </div>
          {categories ? (
            <>
              <div className="grid grid-cols-3 gap-5 w-full max-w-[1440px] mx-auto place-items-center">
                {categories && Array.isArray(categories) && categories.length > 0 && categories?.slice(0, 6)?.map((cat: any) => (
                  <CategoryCard
                    key={cat.id}
                    imgSrc={"/categ-01.png"}
                    title={cat.name}
                    description={cat.description}
                    link={`${cat.name?.toLowerCase()}`}
                  />
                ))}
              </div>
              <div className="flex justify-center items-center mt-10">
                <Link
                  href="/categories"
                  className="px-16 py-3 font-bold bg-[#29a8e2] hover:bg-[#2d93c3] text-white rounded-xl transition-all duration-200"
                >
                  See All Categories
                </Link>
              </div>
            </>
          ) : (
            <Spinner />
          )}
        </section>

        {/* Testimonials */}
        <section className="flex min-h-screen w-full bg-gray-100">
          <div className="flex flex-col gap-10 justify-center items-center w-[1440px] mx-auto">
            <div className="flex flex-col gap-3 w-full justify-start items-center">
              <h3 className="uppercase font-extrabold text-[#226699] text-center">
                TESTIMONIALS
              </h3>
              <h2 className="text-[#121212] text-[40px] ">
                What our Patients are Saying
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-5 items-center justify-center place-items-center w-full">
              {/* <Carousel
            centerMode
            centerSlidePercentage={100}
            emulateTouch
            // infiniteLoop
            showArrows={true}
            showThumbs={false}
          > */}
              <TestimonialCard
                testimonial={
                  'Amazing service and quality. I had a great time even though I was there for treatment. I checked for treatments before I went there and there hospitality is amazing'
                }
                avatar={'/avatar-01.png'}
                name={'Olurotimi Aderimi'}
                profession={'Civil Servant'}
              />
              <TestimonialCard
                testimonial={
                  'Amazing service and quality. I had a great time even though I was there for treatment. I checked for treatments before I went there and there hospitality is amazing'
                }
                avatar={'/avatar-01.png'}
                name={'Olurotimi Aderimi'}
                profession={'Civil Servant'}
              />
              <TestimonialCard
                testimonial={
                  'Amazing service and quality. I had a great time even though I was there for treatment. I checked for treatments before I went there and there hospitality is amazing'
                }
                avatar={'/avatar-01.png'}
                name={'Olurotimi Aderimi'}
                profession={'Civil Servant'}
              />
            </div>
          </div>
          {/* </Carousel> */}
        </section>

        {/* Newsletter */}
        <section className="flex flex-col gap-5 w-[1440px] h-[400px] rounded-xl my-20 justify-center items-center bg-cover bg-center bg-no-repeat text-white bg-[#226699] relative">
          <div className="flex absolute -top-20 -left-32 w-[400px] h-[320px] object-cover">
            <Image
              width={400}
              height={320}
              src={'/news-01.png'}
              alt="arrow down"
            />
          </div>
          <div className="flex absolute -bottom-10 -right-12 w-[200px] h-[160px] object-cover">
            <Image
              width={400}
              height={320}
              src={'/news-02.png'}
              alt="arrow down"
            />
          </div>
          <div className="flex flex-col gap-10 h-full w-[600px] py-[40px]">
            <h4 className="text-xl text-center font-semibold">NEWSLETTER</h4>
            <h2 className="text-5xl text-center">
              Subscribe to our Newsletter
            </h2>
            <p className="text-xl  text-gray-100 text-balance text-center mx-auto">
              Be the first to know about our updates, new features and enjoy
              complimentary health tips delivered directly to your inbox{' '}
            </p>
            <div className="flex justify-center items-center">
              <form className="flex gap-5 items-center justify-center">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                  className="px-3 w-[392px] h-[54px] border border-gray-200 text-xl bg-transparent text-white rounded-lg focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 w-[155px] h-[52px] bg-[#29a8e2] hover:bg-[#2d93c3] rounded-lg font-bold text-white text-xl transition-all duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
