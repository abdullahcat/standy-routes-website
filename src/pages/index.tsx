import Head from 'next/head';
import '@/app/globals.css';
import * as React from 'react';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import { Celebration, DiscountOutlined, ExploreOutlined,  MyLocation, RouteOutlined, Storefront, DownloadOutlined, QrCode2Outlined, PlusOne, Campaign, School, TrendingUp, Diamond, DiamondOutlined, SchoolOutlined, CampaignOutlined } from '@mui/icons-material';
import MainCTA from '@/components/main/cta';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';

export default function Home() {


    return (
        <div>
            <Head>
                <title>Standy</title>
            </Head>



            <header >
                <Navbar />
            </header>
            <div className='text-standy-black'>
                <section className='pt-32 pb-10 text-center space-y-6 px-10 '>

                    <div className='bg-gray-100 inline-block px-4 py-2 rounded-full'>
                        5000'den fazla gezginin arasına katıl!
                    </div>

                    <h1 className='font-condensed uppercase leading-20  font-black lg:text-8xl xl:text-8xl md:text-7xl text-6xl'>
                    YÜZLERCE İNDİRİM <br />TEK UYGULAMA!
                    </h1>
                    <p className='text-gray-500 max-w-screen-md mx-auto text-xl'>
                    Kafeler, restoranlar ve kampüs çevrelerinde anında kullanabileceğin yüzlerce indirim ve kampanya Standy'de!
                    </p>


                    <div className='flex items-center justify-center'>
                        <div className="flex flex-row space-x-2">
                            <Link href="https://apps.apple.com/tr/app/standy-%C3%B6%C4%9Frenci-i-ndirimleri/id6741170791" target="_blank">
                                <img 
                                    src="/app-store-badge.svg" 
                                    alt="Download on the App Store" 
                                    className="h-[60px] w-auto object-contain min-w-[180px] transition-transform duration-300 hover:scale-105"
                                />
                            </Link>
                            <Link href="https://play.google.com/store/apps/details?id=com.standyroutes.standy" target="_blank">
                                <img 
                                    src="/google-play-badge.png" 
                                    alt="Get it on Google Play" 
                                    className="h-[60px] w-auto object-contain min-w-[180px] transition-transform duration-300 hover:scale-105"
                                />
                            </Link>
                        </div>
                    </div>
                </section>
                {/* Standy Nasıl Çalışır? (3 Adımda Açıklama) - Carousel Style */}
                <section className="py-10  ">
                    <div className="max-w-screen-lg  mx-auto px-4">
                    <div className="text-center mb-4">
                            <span className="inline-block bg-standy-pink/10 text-standy-pink px-4 py-1 rounded-full text-sm font-semibold">Kolayca 1-2-3</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl   text-center mb-8">Standy Nasıl Çalışır?</h2>
                         
                        <HowItWorksCarousel />
                    </div>
                </section>

                <section className=" py-10">
                <div className="relative px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
                    <div className="absolute inset-0">
                        <div className="absolute inset-y-0 z-0 w-full h-full bg-standy-white rounded-2xl lg:w-3/4" />

                    </div>

                    <div className="relative">
                        <h1 className="text-3xl pb-2 ">Öğrenci Misin?</h1>
                        <p className='pb-5'>Öğrenciler Standy'de Çok Daha Fazla Kazanıyor!</p>

                        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                            <div className="grid gap-12 row-gap-5 md:grid-cols-2">

                                <div className="relative">
                                    <div className="relative">
                                        <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">

                                            <DiscountOutlined></DiscountOutlined>
                                        </div>
                                        <h6 className="mb-2 text-xl leading-5">
                                        Ekstra indirimler ve kampanyalar!
                                        </h6>
                                        <p className="text-sm  ">
                                        Sadece öğrenciler için ekstra indirimler ve özel kampanyalar! Standy ile cebini yormadan favori mekanlarında keyfini çıkar.

                                      </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                                        <CampaignOutlined></CampaignOutlined>
                                    </div>
                                    <h6 className="mb-2 text-xl leading-5">
                                    Özel etkinlikler ve sürpriz ödüller

                                    </h6>
                                    <p className="text-sm  ">
                                    Öğrencilere özel düzenlenen etkinliklere katıl, eğlenirken sürpriz ödüller kap! Standy ile her an yeni bir macera seni bekliyor.




                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                                        <DiamondOutlined></DiamondOutlined>
                                    </div>
                                    <h6 className="mb-2 text-xl leading-5">
                                    Üniversite çevresinde gizli fırsatlar

                                    </h6>
                                    <p className="text-sm  ">
                                    Üniversitenin etrafında gizlenmiş fırsatları Standy ile keşfet! Sadece öğrencilere özel gizli indirimler ve avantajlar parmaklarının ucunda.


                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                                        <SchoolOutlined></SchoolOutlined>
                                    </div>
                                    <h6 className="mb-2 text-xl leading-5">
                                    Okul etkinliklerinde sürpriz hediyeler
                                    </h6>
                                    <p className="text-sm  ">
                                    Katıldığın okul etkinliklerinde Standy’den sürpriz hediyeler seni bekliyor! Çekilişler, küçük sürprizler ve eğlenceli anlar seni bulacak.



                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="object-cover w-full h-56 rounded-2xl shadow-lg sm:h-96"
                                    src="https://images.pexels.com/photos/15950150/pexels-photo-15950150/free-photo-of-arkadaslar-erkekler-kadin-oturmak.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
 
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto  px-4">
<div className='mb-16 mx-auto text-center'>          <h2 className="text-4xl text-black mb-2  text-center ">Mutlu Kullanıcılar Standy Hakkında Ne Diyor?</h2>
          <p className='text-lg lg:text-xl  text-gray-700 mx-auto'>Gerçek kullanıcı yorumlarıyla Standy deneyimini keşfet.</p>
</div>          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Merve T.",
                description: "La Vie Praline ile anlaşmaları çok iyi olmuş. Akaretlerin, Beşiktaşın ve Çengelin en güzel tatlıcısı.",
                icon: "/main/testimonials/1.png"
              },
              {
                title: "Gözde A.",
                description: "Çok hızlı büyüyolar ilk kullanıcılarından biriyim. şimdiden bissürü mekanı almışlar.",
                icon: "/main/testimonials/2.png"
              },
              {
                title: "Sıla A.",
                description: "Okulumuzdaki etkinliğe sponsor olarak gelmişlerdi. Okulun çevresindeki 15 mekanla anlaşıp bizim için indirim almışlar. Çok Teşekkürler.",
                icon: "/main/testimonials/3.png"
              },
              {
                title: "Medine S.",
                description: "Sürekli gittiğim yerden sürekli indirim alıyorum. Günde 50 TL indirim alsam ayda 1500 TL oluyo.",
                icon: "/main/testimonials/4.png"
              },
              {
                title: "Deniz K.",
                description: "Date Mekanları Rotaları Gelmiiiiişşşşş",
                icon: "/main/testimonials/5.png"
              },
              {
                title: "Osman B.",
                description: "Semtte ne yapacağımı bilmiyosam rotalar çok yardımcı oluyor!",
                icon: "/main/testimonials/6.png"
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-50 p-6 rounded-2xl hover:shadow-lg transition-all"
              >
                 <img className='h-14 mb-2' src={feature.icon} alt=""/>
                <h3 className="text-xl text-black   mb-1">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 

                <section className='bg-standy-pink xl:mx-auto mx-4 pt-16 m-10 p-8 text-center text-cherry-blossom-pink max-w-screen-xl rounded-3xl flex flex-col relative'>
                    <img
                        src="happy_illustation.png"
                        alt="Top Border Image"
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 object-cover"
                    />
                    <div className='flex-grow'></div> {/* This pushes the content to the bottom without extra space */}
                    <div className='flex flex-col items-center justify-center space-y-6'>
                        <h1 className='font-condensed uppercase leading-20 font-black lg:text-8xl xl:text-8xl md:text-7xl text-6xl'>
DAHA NEYİ<br /> BEKLİYORSUN?
                        </h1>
                        <p className='text-white text-xl'>
                        Sen de Standy indir, indirimler ve kampanyalardan yararlanmaya hemen başla!                       </p>
                      

                    <div className='flex items-center justify-center'>
                        <div className="flex flex-row space-x-2">
                            <Link href="https://apps.apple.com/tr/app/standy-%C3%B6%C4%9Frenci-i-ndirimleri/id6741170791" target="_blank">
                                <img 
                                    src="/app-store-badge.svg" 
                                    alt="Download on the App Store" 
                                    className="h-[60px] w-auto object-contain min-w-[180px] transition-transform duration-300 hover:scale-105"
                                />
                            </Link>
                            <Link href="https://play.google.com/store/apps/details?id=com.standyroutes.standy" target="_blank">
                                <img 
                                    src="/google-play-badge.png" 
                                    alt="Get it on Google Play" 
                                    className="h-[60px] w-auto object-contain min-w-[180px] transition-transform duration-300 hover:scale-105"
                                />
                            </Link>
                        </div>
                    </div>
                    </div>
                </section>
 

                <MainCTA></MainCTA>



            </div >
        </div>
    );
}

function HowItWorksCarousel() {
    const steps = [
        {
            img: '/business/main-menu.png',
            icon: <DownloadOutlined className="text-standy-pink" style={{ fontSize: 28 }} />, // fallback icon
            title: 'Keşfet',
            heading: 'Çevrendeki mekanları ve kampanyaları gör.',
            number: 1,
        },
        {
            img: '/business/select-campaign.png',
            icon: <ExploreOutlined className="text-standy-pink" style={{ fontSize: 28 }} />, // fallback icon
            title: 'Seç',
            heading: 'Dilediğin kampanyayı seç.',
            number: 2,
        },
        {
            img: '/business/show-qr-code.png',
            icon: <QrCode2Outlined className="text-standy-pink" style={{ fontSize: 28 }} />, // fallback icon
            title: 'Kullan',
            heading: 'Mekanda karekodu kasiyere göster, indirimi anında uygula!',
            number: 3,
        },
    ];
    const [active, setActive] = useState(0);
    const [loaded, setLoaded] = useState([false, false, false]);

    // Scroll handler for mobile
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const scrollLeft = target.scrollLeft;
        const width = target.offsetWidth;
        const idx = Math.round(scrollLeft / width);
        setActive(idx);
    };

    const handleImageLoad = (idx: number) => {
        setLoaded(prev => {
            const copy = [...prev];
            copy[idx] = true;
            return copy;
        });
    };

    const handleImageError = (idx: number) => {
        setLoaded(prev => {
            const copy = [...prev];
            copy[idx] = false;
            return copy;
        });
    };

    return (
        <div>
            {/* Carousel */}
            <div
                className="flex md:justify-center gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-6 scrollbar-hide"
                style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
                onScroll={handleScroll}
            >
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center min-w-[280px] max-w-[340px] w-full md:w-1/3 snap-center bg-white rounded-3xl   "
                        style={{ flex: '0 0 80%', maxWidth: 360 }}
                    >
                        <div className="w-[260px] h-[520px] flex items-center justify-center mb-4 relative">
                            {!loaded[idx] && (
                                <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/60 rounded-2xl">
                                    <CircularProgress color="secondary" />
                                </div>
                            )}
                            <img
                                src={step.img}
                                alt={step.title}
                                className={`w-full h-full object-contain rounded-2xl transition-opacity duration-300 ${loaded[idx] ? 'opacity-100' : 'opacity-0'}`}
                                onLoad={() => handleImageLoad(idx)}
                                onError={() => handleImageError(idx)}
                                draggable={false}
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-7 h-7 rounded-full bg-standy-pink text-white flex items-center justify-center font-bold text-base">{step.number}</span>
                            <span className="font-semibold text-gray-900 text-base">{step.title}</span>
                        </div>
                        <div className="text-gray-500 text-sm text-center max-w-xs">{step.heading}</div>
                    </div>
                ))}
            </div>
            {/* Step Dots */}
            <div className="flex justify-center sm:hidden gap-2 mt-2">
                {steps.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${active === idx ? 'bg-standy-pink' : 'bg-gray-300'}`}
                        onClick={() => {
                            document.querySelectorAll('.snap-center')[idx]?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
                            setActive(idx);
                        }}
                        aria-label={`Step ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
