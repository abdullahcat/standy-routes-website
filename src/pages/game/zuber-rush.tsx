import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import BlogNavbar from '@/components/blog/navbar';

const ZuberRushPage = () => {
  const [storeLink, setStoreLink] = React.useState<string | null>(null);

  React.useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/android/i.test(userAgent)) {
      setStoreLink("https://play.google.com/store/apps/details?id=com.standytech.zuberrush");
    } else {
      setStoreLink("https://apps.apple.com/tr/app/zuber-rush/id1793425121");
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Head>
        <title>Zuber Rush - Standy Games</title>
        <meta name="description" content="Zuber Rush - Heyecan dolu bir maceraya hazır olun!" />
      </Head>
      <BlogNavbar />

      {/* Hero Section */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-red-400 via-red-500 to-red-900 opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-20">
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
              <h1 className="text-6xl md:text-7xl text-standy-pink font-bold font-condensed">
                ZÜBER RUSH
              </h1>
              <p className="text-xl text-gray-700">
                Bulutların arasında heyecan dolu bir maceraya hazır mısın? 
                Sağlıklı Züber atıştırmalıklarını ye, en yüksek skoru elde et!

              </p>
              
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full md:w-1/3"
            >
              <img 
                src="/games/zuber-rush/phone.png"
                alt="Zuber Rush Gameplay"
                className="rounded-2xl w-full max-w-[300px] mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl text-black font-bold text-center mb-16">Özellikler</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sürükleyici Oynanış",
                description: "Akıcı kontroller ve dinamik oyun mekanikleri ile kesintisiz bir deneyim",
                icon: "/games/zuber-rush/player.png"
              },
              {
                title: "Züber Lokmalar",
                description: "Züber atıştırmalıklarını topla ve yüksek skoru elde et!",
                icon: "/games/zuber-rush/regular.png"
              },
              {
                title: "Güçlendiriciler",
                description: "Daha yüksek puanlar için çeşitli lokmalar!",
                icon: "/games/zuber-rush/legendary.png"
              },
              {
                title: "Başarımlar",
                description: "Özel görevleri tamamlayarak rozetler ve ödüller kazanın.",
                icon: "/games/zuber-rush/gift-icon.png"
              },
              {
                title: "Liderlik Tablosu",
                description: "Arkadaşlarınızla rekabet edin ve en yüksek skoru elde edin.",
                icon: "/games/zuber-rush/stats-icon.png"
              },
              {
                title: "Sağlıksız Atıştırmalıklar",
                description: "Sağlıksız atıştırmalıklar yersen oyun biter!",
                icon: "/games/zuber-rush/unhealthy.png"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-50 p-6 rounded-2xl hover:shadow-lg transition-all"
              >
                 <img className='h-10 mb-2' src={feature.icon} alt=""/>
                <h3 className="text-xl text-black font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className='py-12 bg-white'>
<section className='bg-standy-pink xl:mx-auto mx-4 pt-20     p-8 text-center text-cherry-blossom-pink max-w-screen-xl rounded-3xl flex flex-col relative'>
                    <img
                        src="/games/zuber-rush.png"
                        alt="Zuber Rush"
                        className="absolute rounded-2xl top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 object-cover"
                    />
                    <div className='flex-grow'></div> {/* This pushes the content to the bottom without extra space */}
                    <div className='flex flex-col items-center justify-center space-y-6'>
                        <h1 className='font-condensed uppercase leading-20 font-black lg:text-8xl xl:text-8xl md:text-7xl text-6xl'>
                              ZÜBER RUSH
                        </h1>
                        <p className='text-white text-xl'>
                        Eğlenceli, rekabetçi ve sürükleyici oyunlarla hem keyifli vakit geçir hem de ödüller kazan.                       </p>
                  
                            {storeLink ? (
     <div className="flex justify-center">
     <motion.a 
     target='_blank'
       whileHover={{ scale: 1.05 }} 
       whileTap={{ scale: 0.95 }}
       href={storeLink} 
       className="mx-2 inline-flex px-5 py-2 rounded-full  transition duration-300 ease-in-out bg-cherry-blossom-pink text-standy-black hover:bg-mimi-pink"
       >
       Uygulama Mağazanda Görüntüle
     </motion.a>
   </div>
   
      ) : (
        <p className="text-white mx-auto text-center mt-4">Uygulama bu cihaz için mevcut değil.</p>
      )}
                        
                    </div>
                </section>

</div> 

     
    </div>
  );
};

export default ZuberRushPage;