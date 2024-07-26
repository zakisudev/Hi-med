'use client';

import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSummaryClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="min-h-screen flex-col flex justify-center items-center">
      <Head>
        <title>Gynecology</title>
        <meta
          name="description"
          content="Choose from our treatment categories to start"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex-1 flex flex-col w-full justify-start items-center">
        <section className="flex flex-col gap-24 w-full max-w-[1440px] py-20">
          <div className="flex flex-col gap-10">
            <nav className="flex items-center gap-2 text-gray-500 text-sm">
              <a href="/categories" className="hover:text-gray-600">
                Categories
              </a>
              <span>/</span>
              <span className="text-gray-800 font-semibold">Gynecology</span>
            </nav>
            <div
              className="flex flex-col gap-7 w-full justify-center items-center text-white relative rounded-2xl py-7 px-5 shadow-lg"
              style={{
                backgroundImage: 'url(/Category-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '400px',
              }}
            >
              <h1 className="text-[36px] font-bold text-center">Gynecology</h1>
              <p className="text-[20px] max-w-[570px] text-center">
                This is the branch of medicine that deals with the reproductive
                health of girls and women.
              </p>
              <Link
                href="/categories/gynecology/diagnosis"
                className="flex gap-2 px-10 py-4 absolute right-4 bottom-4 bg-[#00B680] hover:bg-[#00A972] text-white font-bold rounded-xl items-center justify-center"
              >
                <p className="text-lg">Self diagnose</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col max-w-[714px] w-full mx-auto rounded-lg border-2 bg-[#EDF9F6] border-[#00B680] px-12 py-8">
            <details
              className="flex items-center gap-5 text-center"
              onClick={handleSummaryClick}
            >
              <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-3 text-[20px] text-justify">
                  <p>
                    As a public health physician and a general clinician of at
                    least two decades, I can tell you authoritatively that
                    <strong> most diseases have no cure</strong>, yet they
                    convey at least some degree of perpetual discomfort to their
                    hosts.
                  </p>
                  <p>
                    This naturally makes <strong> prevention </strong>of these
                    illnesses the best option to embrace from cradle to grave in
                    our effort at being <strong>hearty and healthy </strong> as
                    much as possible.
                  </p>
                  <p>
                    Prevention does not necessarily mean there will be no
                    illness though there is provision for that possibility under
                    the umbrella tag
                    <strong className="uppercase">
                      {' '}
                      &apos;Prevention&apos;{' '}
                    </strong>
                    , it also involves mitigating (countering) the negative
                    impact of these maladies on their host in the event of their
                    encroachment.
                  </p>
                  <p>
                    For you to successfully prevent illnesses you must be
                    strategic. <br /> <br /> If you understand the general
                    architecture or operations of diseases, caging them become
                    easier.
                  </p>
                  <p>
                    The <strong className="uppercase"> cause </strong>is at the
                    foundation of the disease entity, but it is not alone, it
                    has supporters and facilitators called
                    <strong className="uppercase"> risk </strong>
                    factors that encourage the disease processes or operations.
                  </p>
                  <p>
                    It is instructive to note that in many cases, the cause is
                    invisible, it is not known(idiopathic). <br /> <br />
                    In such cases, at least certain risk factors may be
                    suspected.
                  </p>
                  <p>
                    <strong className="uppercase underline">
                      risk factors and causes
                    </strong>
                    <br />
                    <strong className="uppercase"> risk factors </strong> are
                    factors that increase the likelihood of a disease developing
                    whereas <strong className="uppercase"> Causes </strong> have
                    direct effect, meaning that when it is present the disease
                    is most certain to be present.
                  </p>
                </div>
                <div className="flex flex-col gap-2 self-end items-end">
                  <h3 className="font-bold">Dr. Olurotimi Nosa Aderemi</h3>
                  <p className="text-[#606060]">
                    Public Health an General Physician (Pioneer Partner)
                  </p>
                </div>
              </div>
              <summary className="flex gap-2 text-xl font-bold text-center list-none mb-5">
                <div className="flex items-center gap-10 justify-between w-full">
                  <div className="flex gap-2 items-center">
                    <p>Note</p>
                    <span className="">
                      <Image
                        src={'/Emoji.svg'}
                        width={36}
                        height={25}
                        alt="emoji"
                      />
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-all duration-300 ${
                      isExpanded ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </summary>
            </details>
          </div>

          {/* Headers */}
          <div className="flex flex-col justify-center gap-10">
            <h2 className="text-2xl text-center w-full">
              General Preventive Measures Against Diseases of Women
            </h2>
            <div className="flex gap-10 justify-center items-center">
              <div className="flex items-center justify-center gap-5">
                <span className="w-7 h-7 rounded-full bg-[#D82626]"></span>
                <p>Disease facilitators</p>
              </div>
              <div className="flex items-center justify-center gap-5">
                <span className="w-7 h-7 rounded-full bg-[#2638D8]"></span>
                <p>Disease mitigators</p>
              </div>
            </div>
          </div>

          {/* Stage 1 */}
          <div className="flex flex-col gap-10">
            <h3
              className="text-2xl font-bold text-center px-5 py-2 rounded-full bg-[#00B680] w-fit text-white
            "
            >
              Stage 1: General
            </h3>
            <div className="flex gap-5 items-center w-full h-[327px]">
              <div className="flex flex-col px-10 py-6 bg-[#F9F9F9] border-2 border-[#D0D0D0] w-1/2 rounded-lg h-full">
                <div className="flex gap-5 items-center">
                  <span className="w-7 h-7 rounded-full bg-[#D82626]"></span>
                  <p className="font-bold text-[24px]">Causes</p>
                </div>
                <ul className="flex flex-col gap-2 pl-6 text-[20px] list-disc mt-4">
                  <li className="pl-2">Genetic</li>
                  <li className="pl-2">Infections</li>
                  <li className="pl-2">Physical Disorders</li>
                  <li className="pl-2">Hormonal Disorders</li>
                  <li className="pl-2">Mental Disorders</li>
                  <li className="pl-2">Injuries</li>
                </ul>
              </div>
              <div className="flex flex-col px-10 py-6 bg-[#F9F9F9] border-2 border-[#D0D0D0] w-1/2 rounded-lg h-full">
                <div className="flex gap-5 items-center">
                  <span className="w-7 h-7 rounded-full bg-[#2638D8]"></span>
                  <p className="font-bold text-[24px]">Counter factors</p>
                </div>
                <ul className="flex flex-col gap-2 pl-6 text-[20px] list-disc mt-4">
                  <li className="pl-2">See Children Preventive Path </li>
                  <li className="pl-2">Lead a healthy conscious life</li>
                  <li className="pl-2">
                    Report illness early to authorized medical facilities
                  </li>
                  <li className="pl-2">
                    Comply with recommended immunization programs in authorized
                    medical facilities in your locality
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <div className="flex gap-5 items-center">
                <span className="w-7 h-7 rounded-full bg-[#D82626]"></span>
                <p className="font-bold text-[24px]">Risk factors</p>
              </div>
              <ul className="flex flex-col gap-2 pl-6 text-[20px] list-disc mt-4">
                <li className="pl-2">See Children Preventive Path </li>
                <li className="pl-2">Lack of physical activity/obesity</li>
                <li className="pl-2">
                  Women smoking, taking alcohol, exposure to chemicals through
                  the mouth or by inhalation
                </li>
                <li className="pl-2">Poor diet of girls and women</li>
                <li className="pl-2">Gender based violence</li>
                <li className="pl-2">Low socioeconomic status</li>
                <li className="pl-2">Unsafe pregnancy and delivery</li>
                <li className="pl-2">Emotional and physical stress</li>
                <li className="pl-2">Unsafe Sex</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <div className="flex gap-5 items-center">
                <span className="w-7 h-7 rounded-full bg-[#2638D8]"></span>
                <p className="font-bold text-[24px]">Lifestyle measures</p>
              </div>
              <ul className="flex flex-col gap-2 pl-6 text-[20px] list-disc mt-4">
                <li className="pl-2">
                  Regular (yearly) routine general medical screening
                </li>
                <li className="pl-2">See Children Preventive Path</li>
                <li className="pl-2">
                  At least 30minutes of exercise(like walking) per day
                </li>
                <li className="pl-2">Maintain healthy weight</li>
                <li className="pl-2">
                  Avoid substantial radiation as much as possible
                </li>
                <li className="pl-2">
                  Avoid smoking, smoking environment and alcohol
                </li>
                <li className="pl-2">
                  Avoid chemicals/toxins either by inhalation or through the
                  mouth or skin as much as possible
                </li>
                <li className="pl-2">Prioritize female education</li>
                <li className="pl-2">
                  Deliberate efforts at eating locally available nutritious and
                  healthy foods
                </li>
                <li className="pl-2">
                  Drink water liberally daily (at least 3litres for women and
                  0.05Litre per Kg for children)
                </li>
                <li className="pl-2">
                  Always register for antenatal care at authorized medical
                  facilities when pregnant
                </li>
                <li className="pl-2">
                  Ensure adequate(at least six hours) refreshing sleep daily
                </li>
                <li className="pl-2">Avoid physical and emotional stress</li>
                <li className="pl-2">Practicing safe sex all the time</li>
                <li className="pl-2">Encourage and support breastfeeding</li>
              </ul>
            </div>

            <h3
              className="text-2xl font-bold text-center mt-5 px-5 py-2 rounded-full bg-[#00B680] w-fit text-white
            "
            >
              Stage 2: Human Disease Processes
            </h3>

            <div className="flex flex-col px-10 py-6 bg-[#F9F9F9] border-2 w-fit border-[#D0D0D0] rounded-lg">
              <div className="flex gap-5 items-center">
                <span className="w-7 h-7 rounded-full bg-[#2638D8]"></span>
                <p className="font-bold text-[24px]">Counter factors</p>
              </div>
              <ul className="flex flex-col gap-2 pl-6 text-[20px] list-disc mt-4">
                <li className="pl-2">Early hospital visit when ill</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <div className="flex gap-5 items-center">
                <span className="w-7 h-7 rounded-full bg-[#D82626]"></span>
                <p className="font-bold text-[24px]">Risk factors</p>
              </div>
              <ul className="flex flex-col gap-2 pl-6 text-[20px] list-disc mt-4">
                <li className="pl-2">Poor environmental living condition</li>
                <li className="pl-2">Poor nutrition in women</li>
                <li className="pl-2">Poverty</li>
                <li className="pl-2">Poor women education</li>
                <li className="pl-2">Physical and emotional stress</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <div className="flex gap-5 items-center">
                <span className="w-7 h-7 rounded-full bg-[#2638D8]"></span>
                <p className="font-bold text-[24px]">Lifestyle measures</p>
              </div>
              <ul className="flex flex-col gap-2 pl-6 text-[20px] list-disc mt-4">
                <li className="pl-2">Prioritize girl child education</li>
                <li className="pl-2">
                  Early hospital visit when stressed, in the interim can visit ({' '}
                  <Link href="hi-med.com" className="text-blue-600">
                    hi-med.com
                  </Link>
                  )
                </li>
              </ul>
            </div>

            <h3
              className="text-2xl font-bold text-center mt-5 px-5 py-2 rounded-full bg-[#00B680] w-fit text-white
            "
            >
              Stage 3: Disability
            </h3>

            <div className="flex flex-col px-10 py-6 bg-[#F9F9F9] border-2 w-fit border-[#D0D0D0] rounded-lg">
              <div className="flex gap-5 items-center">
                <span className="w-7 h-7 rounded-full bg-[#2638D8]"></span>
                <p className="font-bold text-[24px]">Counter factors</p>
              </div>
              <ul className="flex flex-col gap-2 pl-6 text-[20px] list-disc mt-4">
                <li className="pl-2">Commence rehabilitation program early</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <div className="flex gap-5 items-center">
                <span className="w-7 h-7 rounded-full bg-[#D82626]"></span>
                <p className="font-bold text-[24px]">Risk factors</p>
              </div>
              <ul className="flex flex-col gap-2 pl-6 text-[20px] list-disc mt-4">
                <li className="pl-2">Late hospital visit when ill</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <div className="flex gap-5 items-center">
                <span className="w-7 h-7 rounded-full bg-[#2638D8]"></span>
                <p className="font-bold text-[24px]">Lifestyle measures</p>
              </div>
              <ul className="flex flex-col gap-2 pl-6 text-[20px] list-disc mt-4">
                <li className="pl-2">
                  Reporting early to authorized medical facility when ill
                </li>
              </ul>
            </div>

            <h3
              className="text-2xl font-bold text-center mt-5 px-5 py-2 rounded-full bg-[#00B680] w-fit text-white
            "
            >
              Stage 4: Death
            </h3>

            <div className="flex flex-col gap-2 mt-5">
              <div className="flex gap-5 items-center">
                <span className="w-7 h-7 rounded-full bg-[#D82626]"></span>
                <p className="font-bold text-[24px]">Risk factors</p>
              </div>
              <ul className="flex flex-col gap-2 pl-6 text-[20px] list-disc mt-4">
                <li className="pl-2">Poorly nourished woman</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <div className="flex gap-5 items-center">
                <span className="w-7 h-7 rounded-full bg-[#2638D8]"></span>
                <p className="font-bold text-[24px]">Lifestyle measures</p>
              </div>
              <ul className="flex flex-col gap-2 pl-6 text-[20px] list-disc mt-4">
                <li className="pl-2">Well nourished woman</li>
              </ul>
            </div>
          </div>
        </section>
        <Link
          href="/categories/gynecology/diagnosis"
          className="flex gap-2 px-10 py-4 mb-20 bg-[#00B680] hover:bg-[#00A972] text-white font-bold rounded-xl items-center justify-center"
        >
          <p className="text-lg">Self diagnose</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default page;
