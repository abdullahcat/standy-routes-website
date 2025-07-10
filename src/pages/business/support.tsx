import BlogNavbar from '@/components/blog/navbar';
import BusinessNavbar from '@/components/business/navbar';
import Navbar from '@/components/navbar';
import Head from 'next/head';
import React, { useState } from 'react';

const SupportPage = () => {
  const [showAntalya, setShowAntalya] = useState(false);
  const [showIstanbul, setShowIstanbul] = useState(false);

  return (
    <>
      <Head>
        <title>Standy İşletme - Destek</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <header>
        <BusinessNavbar />
      </header>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-standy-light-pink">
        <div className="max-w-xl w-full space-y-8 bg-standy-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-standy-black text-center">Destek</h1>
          <p className="text-gray-600 text-center mb-6">
            Yardıma mı ihtiyacınız var? Aşağıdaki iletişim bilgilerinden bize ulaşabilirsiniz.
          </p>
          <div className="space-y-4">
            <div className="bg-pink-50 border border-pink-200 rounded p-4 text-pink-800">
              <div className="font-semibold mb-1">Antalya Telefon:</div>
              {showAntalya ? (
                <a href="tel:+905051472990" className="underline">+90 505 147 29 90</a>
              ) : (
                <button
                  onClick={() => setShowAntalya(true)}
                  className="px-4 py-2 bg-standy-pink text-white rounded shadow hover:bg-standy-dark-pink transition"
                >
                  Ben robot değilim
                </button>
              )}
            </div>
            <div className="bg-pink-50 border border-pink-200 rounded p-4 text-pink-800">
              <div className="font-semibold mb-1">İstanbul Telefon:</div>
              {showIstanbul ? (
                <a href="tel:+905455644849" className="underline">+90 545 564 48 49</a>
              ) : (
                <button
                  onClick={() => setShowIstanbul(true)}
                  className="px-4 py-2 bg-standy-pink text-white rounded shadow hover:bg-standy-dark-pink transition"
                >
                  Ben robot değilim
                </button>
              )}
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded p-4 text-gray-800">
              <div className="font-semibold mb-1">Destek E-posta:</div>
              <a href="mailto:info@standyroutes.com" className="text-standy-pink underline">info@standyroutes.com</a>
            </div>
            <a
              href="https://tally.so/r/wgg54O"
              target='_blank'
              className="block w-full text-center py-3 px-6 rounded-md bg-standy-pink text-white font-semibold shadow hover:bg-standy-dark-pink transition"
            >
              Destek Formu
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
