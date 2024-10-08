import React, { useEffect } from 'react';
import Image from 'next/image';
import CategoryCard from '@/components/CategoryCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import Spinner from '@/components/ui/Spinner';
import { fetchCategories } from '../services/api';
import ReviewCarousel from '@/components/ReviewCarousel';

export default async function Home() {
  const categories = await fetchCategories();

  return (
    <div className="h-full w-full">
      <main className="flex flex-col justify-center items-center w-full h-full overflow-hidden">
        {/* Hero */}
        <section className="flex flex-col-reverse lg:flex-row lg:gap-5 h-screen justify-center w-full lg:max-w-[1460px] px-5 2xl:px-0 bg-[#F2FFFB] relative">
          <div className="flex items-center w-full h-1/2 lg:w-1/2 lg:h-full flex-1 flex-end z-30 flex-grow">
            <div className="flex flex-col gap-5">
              <h1 className="text-responsiveHeader leading-snug font-bold">
                Expert Guidance for{' '}
                <span className="text-[#29a8e2]">Healthy Living</span>
              </h1>
              <p className="text-responsiveText">
                Rely on Our Expert Guidance to Make Well-Informed Choices and
                Achieve Your Health Goals with Confidence.
              </p>
              <div className="flex gap-10 mt-5">
                <Link
                  href="/book"
                  className="text-xs sm:text-sm md:text-lg px-5 py-2 xl:px-10 xl:py-3 bg-[#29a8e2] hover:bg-[#2d93c3] text-white rounded-xl font-bold transition-all duration-200"
                >
                  Get An Appointment
                </Link>
                <Link
                  href="/categories"
                  className="flex justify-center items-center text-xs sm:text-sm md:text-lg px-5 py-2 xl:px-10 xl:py-3 rounded-xl border-2 border-[#29a8e2] hover:shadow-inner font-semibold transition-all duration-200"
                >
                  See Categories
                </Link>
              </div>
            </div>
          </div>

          <div
            className="flex w-full justify-center lg:w-1/2 h-1/2 lg:h-full relative gap-10 pt-10 sm:py-10 flex-1 flex-grow"
            style={{ backgroundImage: 'url(/hero.png)', backgroundSize: 'contain', backgroundPosition: 'left', width: '100%', height:'100%' }}
          >
            <div className="relative lg:absolute top-20 left-0 w-[300px] h-[400px] lg:w-[300px] lg:h-[400px] xl:w-[350px] xl:h-[450px] z-20">
              <Image
                width={350}
                height={450}
                quality={100}
                src="/hero-doctor.png"
                alt="doctor"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative lg:absolute bottom-20 right-0 w-[300px] h-[400px] lg:w-[300px] lg:h-[400px] xl:w-[350px] xl:h-[450px] z-20">
              <Image
                width={350}
                height={450}
                quality={100}
                src="/hero-family.png"
                alt="hero"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Out features */}
        <section className="flex flex-col min-h-screen py-7 items-center w-full bg-gray-100">
          <div className="flex flex-col justify-center max-w-[1460px] w-full mx-auto px-5 2xl:px-0">
            {/* Header */}
            <div className="flex flex-col w-full gap-3 justify-start items-center">
              <h3 className="uppercase font-extrabold text-[#226699] text-center">
                OUR FEATURES
              </h3>
              <h2 className="text-[#121212] text-responsiveTag ">
                What We Have To Offer
              </h2>
              <p className="max-w-[853px] text-center text-responsiveText">
                Explore our comprehensive range of offerings, including expert
                articles, interactive tools, preventive and curative health
                tips, symptom checkers, and more.{' '}
              </p>
            </div>

            {/* Content Cards */}
            <div className="flex flex-col-reverse lg:flex-row gap-5 justify-between w-full mt-10">
              <div className="flex flex-col w-full lg:w-1/2 justify-center lg:justify-normal">
                <div className="flex-1 w-full mx-auto lg:ml-auto lg:mx-0 sm:w-1/2 lg:w-[525px] sm:h-[269px] flex-end">
                  <Image
                    width={525}
                    height={269}
                    quality={100}
                    src={'/home-children.png'}
                    alt="children"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 w-full mx-auto lg:mr-auto lg:mx-0 sm:w-1/2 lg:w-[525px] sm:h-[258px] flex-start">
                  <Image
                    width={525}
                    height={258}
                    quality={100}
                    src={'/home-doctor.png'}
                    alt="doctor-treatment"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full lg:w-1/2 gap-10">
                <div className="flex flex-col gap-5 bg-[#FBFCCF] p-5 rounded-xl self-start lg:self-end max-w-[480px]">
                  <h3 className="text-xl font-semibold text-left">
                    Lifestyle tips
                  </h3>
                  <p className="text-sm">
                    We&apos;re dedicated to providing you with a wealth of
                    resources, information, and expert guidance to help you lead
                    a healthier, happier life.
                  </p>
                </div>
                <div className="flex flex-col gap-5 bg-[#ffd0fa7e] p-5 rounded-xl self-center lg:self-end max-w-[480px]">
                  <h3 className="text-xl font-semibold text-left">
                    Self Diagnosis Tool
                  </h3>
                  <p className="text-sm">
                    Our self diagnosis tool helps you to explore and understand
                    your symptoms further. Input your symptoms and get a list of
                    possible illnesses.
                  </p>
                </div>
                <div className="flex flex-col gap-5 bg-[#DDEEFF] p-5 rounded-xl self-end max-w-[480px]">
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
        <section className="flex flex-col min-h-screen gap-10 justify-center py-20 px-5 2xl:px-0 items-center w-full bg-[#F2FFFB] overflow-hidden">
          <div className="flex flex-col gap-3 w-full justify-start items-center">
            <h3 className="uppercase font-extrabold text-[#226699] text-center">
              CATEGORIES
            </h3>
            <h2 className="text-[#121212] text-responsiveTag text-center lg:text-left">
              Explore Different Health Categories
            </h2>
            <p className="max-w-[853px] text-center text-responsiveText">
              Navigate our comprehensive health categories to access expert
              insights, tips, and resources tailored to specific areas of
              well-being.
            </p>
          </div>
          {categories ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1460px] mx-auto place-items-center">
                {categories && Array.isArray(categories) && categories.length > 0 && categories.slice(0, 6).map((cat: any) => (
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
                  className="px-8 py-2 sm:px-12 sm:py-3 md:px-16 md:py-3 font-bold bg-[#29a8e2] hover:bg-[#2d93c3] text-white rounded-xl transition-all duration-200"
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
        <section className="flex min-h-screen w-full bg-gray-100 px-5 2xl:px-0">
          <div className="flex flex-col gap-10 justify-center items-center max-w-[1460px] w-full mx-auto">
            <div className="flex flex-col gap-3 w-full justify-start items-center">
              <h3 className="uppercase font-extrabold text-[#226699] text-center">
                TESTIMONIALS
              </h3>
              <h2 className="text-[#121212] text-responsiveTag ">
                What our Patients are Saying
              </h2>
            </div>

            {/* </Carousel> */}
            <div className="flex w-full justify-center items-center">
              <ReviewCarousel />
              {/* <TestimonialCard
                testimonial={
                  'Amazing service and quality. I had a great time even though I was there for treatment. I checked for treatments before I went there and there hospitality is amazing'
                }
                avatar={'/avatar-01.png'}
                name={'Olurotimi Aderimi'}
                profession={'Civil Servant'}
              /> */}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="w-full my-20 px-5 2xl:px-0">
          <div className="flex gap-2 lg:gap-5 max-w-[1460px] w-full mx-auto rounded-xl lg:h-[400px] px-5 2xl:px-0 justify-center items-center bg-[#226699] relative text-white">
            <div className="flex absolute -top-20 -left-32 w-[400px] h-[320px] object-cover">
              <Image
                width={400}
                height={320}
                src={'/news-01.png'}
                alt="arrow down"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex absolute -bottom-10 -right-12 w-[200px] h-[160px] object-cover">
              <Image
                width={400}
                height={320}
                src={'/news-02.png'}
                alt="arrow down"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-5 sm:gap-8 h-full w-full sm:w-[600px] py-5 sm:py-[40px]">
              <h4 className="text-xl text-center font-semibold">NEWSLETTER</h4>
              <h2 className="text-responsiveTag font-bold whitespace-nowrap text-center">
                Subscribe to our Newsletter
              </h2>
              <p className="text-responsiveNews text-gray-100 sm:text-balance text-center mx-auto">
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
                    className="px-3 max-w-54 sm:max-w-full w-full sm:w-[392px] py-2 sm:py-0 sm:h-[54px] border border-gray-200 text-sm sm:text-xl bg-transparent text-white rounded-lg focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-5 w-[155px] py-2 sm:py-0 sm:h-[52px] bg-[#29a8e2] hover:bg-[#2d93c3] rounded-lg font-bold text-white text-sm sm:text-xl transition-all duration-200"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
