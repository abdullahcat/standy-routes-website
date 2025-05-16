import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { div } from "framer-motion/client";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { useRouter } from "next/router";

const AppRedirect = () => {
  const [storeLink, setStoreLink] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      const androidLink = "https://play.google.com/store/apps/details?id=com.standyroutes.standy";
      setStoreLink(androidLink);
      window.location.href = androidLink;
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      const iosLink = "https://apps.apple.com/tr/app/standy-%C3%B6%C4%9Frenci-i-ndirimleri/id6741170791";
      setStoreLink(iosLink);
      window.location.href = iosLink;
    } else {
      setStoreLink(null);
    }
  }, []);

  return (
<div>
<Head>
                <title>Standy İndir!</title>
            </Head>
            <header>
                <Navbar />
            </header>
<div className="flex flex-col items-center justify-center min-h-screen bg-[#E91E63] text-white" style={{ backgroundImage: "url('/standy-doodle.svg')", backgroundSize: "cover", backgroundPosition: "center" }}>
   <div className="bg-white mx-4 p-8 rounded-3xl shadow-lg">
   
      <div className="flex items-center justify-center flex-row space-x-1">
                        <Link href={'/'}>
                            <img src="standylogo.png" alt="Standy Logo" height={28} width={28} className="   rounded-full" />
                        </Link>
                        <Link href={'/'} className="font-condensed uppercase mb-1  font-semibold text-standy-pink text-4xl">
                            Standy
                        </Link>
                    </div>
      <p className="text-lg mt-2 text-black text-center">
        Standy uygulamasını indirerek şehrini keşfederken sana özel indirimlerinden yararlan.


      </p>
      {storeLink ? (
     <div className="flex justify-center">
     <motion.a 
       whileHover={{ scale: 1.05 }} 
       whileTap={{ scale: 0.95 }}
       href={storeLink} 
       className="mt-4 px-5 py-2 bg-standy-pink text-standy-white mx-auto inline-block rounded-full shadow-lg transition"
     >
       Şimdi İndir
     </motion.a>
   </div>
   
      ) : (
        <p className="text-gray-300 mx-auto text-center mt-4">Uygulama bu cihaz için mevcut değil.</p>
      )}
   </div>
    </div>
</div>
  );
};

export default AppRedirect;