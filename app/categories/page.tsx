import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';

export default function Category() {
  return (
    <div className="min-h-screen flex-col flex justify-center items-center">
      <Head>
        <title>Categories</title>
        <meta
          name="description"
          content="Choose from our treatment categories to start"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-1 flex flex-col w-full justify-start items-center">
        <section className="flex w-full h-[450px]">
          <div
            className="flex h-full w-full justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/Category.png)',
            }}
          >
            <h2 className="text-center text-7xl font-bold text-gray-200">
              Categories
            </h2>
          </div>
        </section>
        <div className="grid grid-cols-3 gap-5 w-full max-w-[1440px] place-items-center my-20">
          <CategoryCard
            imgSrc={'/categ-01.png'}
            title={'Gynecology'}
            description="This is the branch of medicine that deals with the reproductive health of girls and women."
            link="/gynecology"
          />
          <CategoryCard
            imgSrc={'/categ-02.png'}
            title={'Pediatrics'}
            description="This is the branch of medicine that deals with children and their diseases."
            link="/pediatrics"
          />
          <CategoryCard
            imgSrc={'/categ-03.png'}
            title={'Neurology'}
            description="This is the branch of medicine that deals with disorders and diseases of the nervous system"
            link="/neurology"
          />
          <CategoryCard
            imgSrc={'/categ-04.png'}
            title={'Opthalmology'}
            description="This is the branch of medicine that deals with the diagnosis and treatments of disorders of the eye."
            link="/opthalmology"
          />
          <CategoryCard
            imgSrc={'/categ-05.png'}
            title="Otolaryngology"
            description="This is the branch of medicine that deals with diseases of the ear, nose and throat."
            link="/otolaryngology"
          />
          <CategoryCard
            imgSrc={'/categ-06.png'}
            title={'Dermatology'}
            description="This is the branch of medicine that deals with the diagnosis and treatment of skin disorders."
            link="/dermatology"
          />
          <CategoryCard
            imgSrc={'/Categ-07.png'}
            title={'Chest Medicine'}
            description="This is the branch of medicine that deals with the lungs and respiratory system and their diseases."
            link="/chest-medicine"
          />
          <CategoryCard
            imgSrc={'/Categ-08.png'}
            title={'Gastroenterology'}
            description="This is the branch of medicine focused on the digestive system and its disorders."
            link="/gastroenterology"
          />
          <CategoryCard
            imgSrc={'/Categ-09.png'}
            title={'Urology'}
            description="This is the branch of medicine that focuses on the urinary tract and the male reproductive organs."
            link="/urology"
          />
          <CategoryCard
            imgSrc={'/Categ-010.png'}
            title={'Orthopaedics'}
            description="This is the branch of medicine concerned with the correction of bone deformities, disorders or injuries."
            link="/orthopaedics"
          />
          <CategoryCard
            imgSrc={'/Categ-011.png'}
            title={'Psychiatry'}
            description="This is the study, diagnosis and prevention of mental health disorders."
            link="/psychiatry"
          />
          <CategoryCard
            imgSrc={'/Categ-012.png'}
            title={'Dentistry'}
            description="This is the treatment of diseases and other conditions that affect the teeth and gums."
            link="/dentistry"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
