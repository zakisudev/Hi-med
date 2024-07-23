// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen px-[0.5rem] w-full flex flex-col justify-center items-center">
      <Head>
        <title>Medical Consultation App</title>
        <meta
          name="description"
          content="Medical consultation app for patients"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-[5rem] flex-1 flex flex-col justify-center items-center">
        <h1 className="text-[4rem]">Welcome to the Medical Consultation App</h1>
        <p className="text-center my-[4rem]">
          Get medical consultations from the comfort of your home.
        </p>
      </main>
    </div>
  );
}
