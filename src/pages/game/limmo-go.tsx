import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import BlogNavbar from '@/components/blog/navbar';

const LimmoGoPage = () => {
  const [storeLink, setStoreLink] = React.useState<string | null>(null);

  React.useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/android/i.test(userAgent)) {
      setStoreLink("https://play.google.com/store/apps/details?id=com.standytech.limmo-go");
    } else {
      setStoreLink("https://apps.apple.com/tr/app/zuber-rush/id1793425121");
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Head>
        <title>Limmo GO! - Standy Games</title>
        <meta name="description" content="Zuber Rush - Heyecan dolu bir maceraya hazır olun!" />
      </Head>
      <BlogNavbar />

      {/* Hero Section */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-400 via-blue-500 to-blue-900 opacity-10 z-0"></div>
        <div className="max-w-6xl mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-20">
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
              
              <img src="/games/limmo-go/limmo-go.png" alt="" className='h-24 mx-auto md:mx-0' />
              <p className="text-xl text-gray-700">
              Yosunlardan kaç, liderlik tablosuna adını yaz! Gerçek limonata ödülü için Limmo GO!


              </p>
              
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full md:w-1/3"
            >
              <img 
                src="/games/limmo-go/phone.png"
                alt="Limmo Go! Gameplay"
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
                title: "Limmo Limonata İş Birliği",
                description: "Limmo Limonata ile yapılan keyifli iş birliği sayesinde bu ferahlatıcı oyun ortaya çıktı.",
                icon: "/games/limmo-go/limmologo.png"
              },
              {
                title: "Limmo ile Tanış",
                description: "Bu oyunun ana karakteri: hızlı, çevik ve tatlı ekşi bir limon!",
                icon: "/games/limmo-go/lemon-man.png"
              },
              {
                title: "Kaptan Limmo Göreve Hazır",
                description: "Logoda gördüğünüz o koşan limon, engellerden kaçarken size rehberlik ediyor!"
                ,icon: "/games/limmo-go/lemongo.png"
              },
              {
                title: "Yüksek Skorlar Ödül Getirir",
                description: "Etkinliklerde en yüksek skora ulaş, sürpriz hediyeler ve gerçek limonataları kazan!",
                icon: "/games/zuber-rush/gift-icon.png"
              },
              {
                title: "Liderlik Tablosu",
                description: "Arkadaşlarınızla rekabet edin ve en yüksek skoru elde edin.",
                icon: "/games/zuber-rush/stats-icon.png"
              },
              {
                title: "Zararlı Yosunlar",
                description: "Zararlı yosunlardan kaçının!",
                icon: "/games/limmo-go/moss.gif"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-50 p-6 rounded-2xl hover:shadow-lg transition-all"
              >
                 <img className='w-10 mb-2' src={feature.icon} alt=""/>
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
                        src="/games/limmo-go!.png"
                        alt="Limmo Go!"
                        className="absolute rounded-2xl top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 object-cover"
                    />
                    <div className='flex-grow'></div> {/* This pushes the content to the bottom without extra space */}
                    <div className='flex flex-col items-center justify-center space-y-6'>
                        <h1 className='font-condensed uppercase leading-20 font-black lg:text-8xl xl:text-8xl md:text-7xl text-6xl'>
                              LİMMO GO!
                              
                        </h1>
                        <p className='text-white text-xl'>
                        Eğlenceli, rekabetçi ve sürükleyici oyunlarla hem keyifli vakit geçir hem de ödüller kazan.                       </p>
                  
                            {storeLink ? (
     <div className="flex justify-center">
     <motion.a 
     target='_blank'
       whileHover={{ scale: 1.05 }} 
       whileTap={{ scale: 0.95 }}
       href="https://standy.com.tr/games/limmo-go/play" 
       className="mx-2 inline-flex px-5 py-2 rounded-full  transition duration-300 ease-in-out bg-cherry-blossom-pink text-standy-black hover:bg-mimi-pink"
       >
       Oyunu Oyna
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

export default LimmoGoPage;