/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { diagnosisData } from './diagnosisTypes';
import Head from 'next/head';
import Link from 'next/link';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Results from './Results';
import { CategoryPageProps } from '@/types/categoryType';

const Page: React.FC<CategoryPageProps> = ({ params }) => {
  const [patData, setPatData] = useState<diagnosisData>({
    age: '',
    pregnancy: '',
    breasts: '',
    abdomen: '',
    genitals: '',
    general: '',
  });
  const [step, setStep] = useState(0);

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const steps = [
    {
      title: 'Fill Biodata form',
      component: (
        <Step1
          handleNext={handleNext}
          patData={patData}
          setPatData={setPatData}
        />
      ),
    },
    {
      title: 'Main symptoms',
      component: (
        <Step2
          patData={patData}
          setPatData={setPatData}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      ),
    },
    {
      title: 'Additional Symptoms',
      component: (
        <Step3
          patData={patData}
          setPatData={setPatData}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      ),
    },
    {
      title: 'Results',
      final: true,
      component: <Results patData={patData} setStep={setStep} />,
    },
  ];

  return (
    <div className="min-h-screen flex-col flex justify-center items-center">
      <Head>
        <title>{params.slug} diagnosis</title>
        <meta name="description" content="Start your diagnosis here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex-1 flex flex-col w-full justify-start items-center">
        <section className="flex flex-col gap-24 w-full max-w-[1440px] py-20">
          <div className="flex flex-col gap-10">
            <nav className="flex items-center gap-2 text-gray-500 text-sm">
              <Link href="/categories" className="hover:text-gray-600">
                Categories
              </Link>
              <span>/</span>
              <Link
                href={`/categories/${params.slug.toLowerCase()}`}
                className="hover:text-gray-600"
              >
                {params.slug}
              </Link>
              <span>/</span>
              <span className="text-gray-800 font-semibold">Diagnosis</span>
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
              <h1 className="text-[36px] font-bold text-center">{params.slug} Diagnosis</h1>
              {/* <p className="text-[20px] max-w-[570px] text-center">
                This is the branch of medicine that deals with the reproductive
                health of girls and women.
              </p> */}
            </div>
          </div>

          {steps[step].component}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
