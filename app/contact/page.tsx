// pages/contact.js
import Head from 'next/head';
import Header from '../components/Header';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us for more information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-1 py-[5rem] flex-col justify-center items-center">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us for any inquiries.</p>
      </main>
    </div>
  );
}
