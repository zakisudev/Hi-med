import Head from 'next/head';
import Home from './home/page';
import Header from './components/Header';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Medical Consultation App</title>
        <meta
          name="description"
          content="Medical consultation app for patients"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Home />
    </div>
  );
}
