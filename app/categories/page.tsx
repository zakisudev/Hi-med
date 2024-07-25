import Head from 'next/head';
import Header from '../components/Header';

export default function Categories() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Categories</title>
        <meta
          name="description"
          content="Choose a category of treatments we provide"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-1 py-[5rem] flex-col justify-center items-center">
        <h1>Categories</h1>
        <p>
          Choose from our large number of treatment categories to get started.
        </p>
      </main>
    </div>
  );
}
