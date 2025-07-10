import Head from 'next/head';
import { useEffect } from 'react';

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.standyroutes.business";
const APP_STORE_URL = "https://apps.apple.com/tr/app/standy-i-%C5%9Fletme/id6742144583";
const WEB_URL = "https://business.standyroutes.com/";

const StandyBusinessPlayRedirect = () => {
  
  useEffect(() => {
    const userAgent = typeof window !== 'undefined' ? navigator.userAgent || navigator.vendor : '';
    if (/android/i.test(userAgent)) {
      window.location.replace(PLAY_STORE_URL);
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.replace(APP_STORE_URL);
    } else {
      window.location.replace(WEB_URL);
    }
  }, []);

  return (
    <>
    <Head>
                <title>Standy İşletme Paneline Yönlendiriliyorsunuz...</title>
            </Head>
         
    <div className="min-h-screen px-4 flex items-center justify-center bg-gradient-to-br from-pink-500 via-pink-400 to-white">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center">
        <img src="/standylogo.png" alt="Standy İşletme" className="w-32 h-32 mb-8 rounded-xl shadow" />
        <h1 className="text-3xl font-extrabold text-black mb-2">Yönlendiriliyorsunuz...</h1>
        <p className="mb-6 text-gray-600 text-center">
          Eğer otomatik olarak yönlendirilmezseniz, aşağıdaki bağlantılardan birine tıklayın.
        </p>
        <div className="flex flex-col gap-3 w-full">
          <a
            href={PLAY_STORE_URL}
            className="w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-3xl transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Android için İndir
          </a>
          <a
            href={APP_STORE_URL}
            className="w-full text-center bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-3xl transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            iOS için İndir
          </a>
          <a
            href={WEB_URL}
            className="w-full text-center bg-blue-500 hover:bg-blue-600   text-white font-semibold py-3 rounded-3xl transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Paneline Git
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default StandyBusinessPlayRedirect;
