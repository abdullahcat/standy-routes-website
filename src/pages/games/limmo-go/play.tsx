import { useEffect } from 'react';

const PLAY_STORE_URL = "https://limmogo.standy.com.tr";
const APP_STORE_URL = "https://limmogo.standy.com.tr";
const WEB_GAME_URL = "https://limmogo.standy.com.tr/";

const LimmoGoPlayRedirect = () => {
 useEffect(() => {
   const userAgent = typeof window !== 'undefined' ? navigator.userAgent || navigator.vendor : '';
   if (/android/i.test(userAgent)) {
     window.location.replace(PLAY_STORE_URL);
   } else if (/iPad|iPhone|iPod/.test(userAgent)) {
     window.location.replace(APP_STORE_URL);
   } else {
     window.location.replace(WEB_GAME_URL);
   }
 }, []);

return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-400 to-yellow-300">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center">
        <img src="/games/limmo-go!.png" alt="Limmo Go!" className="w-32 h-32 mb-8 rounded-xl shadow" />
        <h1 className="text-3xl font-extrabold text-black mb-2">Yönlendiriliyorsunuz...</h1>
        <p className="mb-6 text-gray-600 text-center">
          Eğer otomatik olarak yönlendirilmezseniz, aşağıdaki bağlantılardan birine tıklayın.
        </p>
        <div className="flex flex-col gap-3 w-full">
         
         
          <a
            href={WEB_GAME_URL}
            className="w-full text-center bg-white border-2 border-black  hover:text-white hover:bg-black text-black font-semibold py-2 rounded-lg transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web'de Oyna
          </a>
        </div>
      </div>
    </div>
  );
};
export default LimmoGoPlayRedirect;
