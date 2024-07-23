import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

export default function About() {
  return (
    <div className="min-h-screen flex-col flex justify-center items-center">
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn more about our medical consultation app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="py-[5rem] flex-1 flex flex-col justify-center items-center">
        <h1>About Us</h1>
        <p>Our app provides medical consultations with experienced doctors.</p>
      </main>
    </div>
  );
}
