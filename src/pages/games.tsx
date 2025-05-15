import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import { SportsEsports, Psychology, EmojiEvents, Groups } from '@mui/icons-material';
import '@/app/globals.css'
const games = [
  { 
    name: 'Zuber Rush', 
    category: 'Aksiyon', 
    logo: '/games/zuber-rush.png',
    link: '/game/zuber-rush'
  },
  { 
    name: 'Limmo Go!', 
    category: 'Platform', 
    logo: '/games/limmo-go!.png',
    link: '/game/limmo-go'
  },

  { 
    name: 'Snack Racers', 
    category: 'Yarış', 
    logo: '/games/snack-racers.png',
    link: null // No link available yet
  },
  { name: 'Snack Fighters', category: 'Dövüş', logo: '/games/snack-fighters.png' },
  { name: 'Monkey Money', category: 'Strateji', logo: '/games/unnamed.png' },
  { name: 'Banana Hunters', category: 'Aksiyon', logo: '/games/banana-hunters.png' },
  { name: 'Snack Miners', category: 'Platform', logo: '/games/snack-miners.png' },
  { name: 'Rodrigo', category: 'Aksiyon', logo: '/games/rodrigo.png' }, 
];

const benefits = [
  {
    title: 'Rekabetçi Turnuvalar',
    description: 'Profesyonel düzeyde organize edilmiş turnuvalarla yeteneklerinizi gösterin.'
  },
  {
    title: 'Sosyal Etkileşim',
    description: 'Diğer oyuncularla tanışın, takımlar kurun ve gaming topluluğunun parçası olun.'
  },
  {
    title: 'Ödüller ve Başarılar',
    description: 'Turnuvalarda başarı gösterin, ödüller kazanın ve sıralamalarda yükselin.'
  },
  {
    title: 'Etkinlik Çeşitliliği',
    description: 'Farklı oyun türlerinde düzenlenen etkinliklerle eğlencenin tadını çıkarın.'
  }
];

const GameCard = ({ game, index }: { game: any, index: number }) => {
  const content = (
    <div className="bg-white p-4 rounded-2xl transition-all hover:-translate-y-1 cursor-pointer">
      <div className="w-[180px] h-[180px] mb-4">
        <img
          src={game.logo}
          alt={game.name}
          className="w-full h-full rounded-2xl object-cover"
        />
      </div>
      <p className="text-xs text-gray-500 mb-1">{game.category}</p>
      <h3 className="font-medium text-sm">{game.name}</h3>
    </div>
  );

  return game.link ? (
    <Link href={game.link}  className="flex-shrink-0">
      {content}
    </Link>
  ) : (
    <div className="flex-shrink-0">
      {content}
    </div>
  );
};

const GamesPage: React.FC = () => {

  const [storeLink, setStoreLink] = useState<string | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      setStoreLink("https://play.google.com/store/apps/developer?id=Standy+Tech.");
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      setStoreLink("https://apps.apple.com/tr/developer/suleyman-baha-dikici/id1793425121");
    } else {
      setStoreLink("https://apps.apple.com/tr/developer/suleyman-baha-dikici/id1793425121");
      
    }
  }, []);

  return (
    <div className="min-h-screen text-black">
      <Head>
        <title>Gaming</title>
      </Head>
      <header>
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className='pt-32 pb-10 text-center space-y-6 px-10 relative overflow-hidden'>
        <div className="absolute inset-0 bg-gradient-radial from-red-400 via-red-500 to-red-900"></div>
        
        {/* Add a subtle overlay pattern for more depth */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        {/* Content needs to be relative to appear above the background */}
        <div className="relative">
          <div className="flex justify-center gap-4   mb-8">
            <motion.img
              src="/games/controller-icon.png"
              alt="Gaming Controller"
              className="w-16 h-16"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.img
              src="/games/trophy-icon.png"
              alt="Trophy"
              className="w-16 h-16"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <h1 className='font-condensed   text-white uppercase leading-20 font-black lg:text-8xl xl:text-8xl md:text-7xl text-6xl'>
            OYUNUN<br />YENİ<br />SEVİYESİ!
          </h1>
          <p className='text-white  mt-8 max-w-xl mx-auto text-xl'>
            Standy Gaming ile rekabetçi turnuvalara katılın, ödüller kazanın ve
            gaming topluluğunun aktif bir parçası olun!
          </p>

          <div className='flex mt-8 items-center justify-center space-x-2'>

          {storeLink ? (
     <div className="flex justify-center">
     <motion.a 
     target='_blank'
       whileHover={{ scale: 1.05 }} 
       whileTap={{ scale: 0.95 }}
       href={storeLink} 
       className="mx-2 rounded-full inline-flex px-5 py-2 transition duration-300 ease-in-out bg-white text-standy-pink hover:bg-gray-200"
       >
       Uygulama Mağazanda Görüntüle
     </motion.a>
   </div>
   
      ) : (
        <p className="text-white mx-auto text-center mt-4">Uygulama bu cihaz için mevcut değil.</p>
      )}
            
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-16 bg-neutral-100">
        <h2 className="text-3xl text-center mb-10">Oyunlar</h2>
        
        {/* Row 1 - Left to Right */}
        <div className="overflow-hidden mb-12">
          <motion.div
            className="flex gap-6 px-4"
            initial={{ x: "-25%" }}
            animate={{ x: "-100%" }}
            transition={{ 
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {[
              ...games.slice(0, 4),
              ...games.slice(0, 4),
              ...games.slice(0, 4)
            ].map((game, index) => (
              <GameCard key={`row1-${index}`} game={game} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 px-4"
            initial={{ x: "-75%" }}
            animate={{ x: "0%" }}
            transition={{ 
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {[
              ...games.slice(3, 7),
              ...games.slice(3, 7),
              ...games.slice(3, 7)
            ].map((game, index) => (
              <GameCard key={`row2-${index}`} game={game} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-10">
        <div className="relative px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 z-0 w-full h-full bg-standy-white rounded-2xl lg:w-3/4" />
          </div>

          <div className="relative">
            <h1 className="text-3xl pb-5">Standy Gaming?</h1>

            <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
              <div className="grid gap-12 row-gap-5 md:grid-cols-2">
                <div className="relative">
                  <div className="relative">
                    <div className="flex items-center justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                      <SportsEsports />
                    </div>
                    <h6 className="mb-2 text-xl leading-5">
                      Rekabetçi Turnuvalar
                    </h6>
                    <p className="text-sm">
                      Profesyonel düzeyde organize edilmiş turnuvalarla yeteneklerinizi gösterin.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                    <Groups />
                  </div>
                  <h6 className="mb-2 text-xl leading-5">
                    Sosyal Etkileşim
                  </h6>
                  <p className="text-sm">
                    Diğer oyuncularla tanışın, takımlar kurun ve gaming topluluğunun parçası olun.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                    <EmojiEvents />
                  </div>
                  <h6 className="mb-2 text-xl leading-5">
                    Ödüller ve Başarılar
                  </h6>
                  <p className="text-sm">
                    Turnuvalarda başarı gösterin, ödüller kazanın ve sıralamalarda yükselin.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                    <Psychology />
                  </div>
                  <h6 className="mb-2 text-xl leading-5">
                    Etkinlik Çeşitliliği
                  </h6>
                  <p className="text-sm">
                    Farklı oyun türlerinde düzenlenen etkinliklerle eğlencenin tadını çıkarın.
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="object-cover w-full h-56 rounded-2xl shadow-lg sm:h-96"
                  src="https://images.pexels.com/photos/9071723/pexels-photo-9071723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Gaming Setup"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


<div className='py-12 '>
<section className='bg-standy-pink xl:mx-auto mx-4 pt-20     p-8 text-center text-cherry-blossom-pink max-w-screen-xl rounded-3xl flex flex-col relative'>
                    <img
                        src="/games/rocket-icon.png"
                        alt="Top Border Image"
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 object-cover"
                    />
                    <div className='flex-grow'></div> {/* This pushes the content to the bottom without extra space */}
                    <div className='flex flex-col items-center justify-center space-y-6'>
                        <h1 className='font-condensed uppercase leading-20 font-black lg:text-8xl xl:text-8xl md:text-7xl text-6xl'>
                              Standy Games
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

export default GamesPage;
