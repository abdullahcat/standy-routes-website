import Head from 'next/head';
import '@/app/globals.css';
import * as React from 'react';
import { EmblaOptionsType } from 'embla-carousel'
import Navbar from '@/components/navbar';
import Script from 'next/script';
import Link from 'next/link';
import { Celebration, DiscountOutlined, ExploreOutlined, Light, MyLocation, PartyMode, RouteOutlined, Storefront } from '@mui/icons-material';
import HowToCarousel from '@/components/main/HowToCarousel';
import BlogCarousel from '@/components/main/BlogCarousel';
import MainCTA from '@/components/main/cta';

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
                        KEŞFEDİN<br /> DENEYİMLEYİN<br />TASARRUF EDİN
                    </h1>
                    <p className='text-gray-500 text-xl'>
                        Standy ile şehrini keşfederken sana özel indirimlerinden yararlan.
                    </p>


                    <div className='flex items-center justify-center space-x-2'>
                        <Link
                            className="mx-2 rounded-full inline-flex px-5 py-2   transition duration-300 ease-in-out bg-standy-pink text-white hover:bg-standy-dark-pink"
                            href="/waitlist"

                        >
                            Şimdi Sıraya Gir
                        </Link>

                    </div>
                </section>
                <section className="bg-mimi-pink flex justify-center xl:p-0 p-10 items-center w-full h-full">
                    <div className="flex flex-col lg:flex-row items-center w-full max-w-screen-xl">
                        <div className="lg:w-1/2 flex flex-col justify-center items-start   lg:text-left lg:p-10 space-y-6">
                            <h1 className="text-4xl lg:text-5xl text-black">Uygulamayı Keşfet</h1>
                            <p className="text-lg lg:text-xl  text-gray-700">
                                Standy ile İstanbul’un en popüler kafe ve restoranlarında özel indirimlere hemen erişin. Standy uygulamasını indirerek şehrin en sevilen mekanlarında eşsiz fırsatların tadını çıkarın ve her ziyaretinizde daha fazlasını keşfedin. İndirin, gezin, keşfedin, kazanın!                            </p>
                            <Link
                                className=" inline-flex px-5 py-2 rounded-full  transition duration-300 ease-in-out bg-standy-pink text-white hover:bg-standy-dark-pink"
                                href="/waitlist"
                            >
                                Şimdi Sıraya Gir
                            </Link>
                        </div>
                        <div className="lg:w-1/2 py-10 flex justify-center lg:justify-center items-center">
                            <div className="w-7/12 md:w-5/12 xl:w-5/12 lg:w-5/12 ">
                                <img className="object-cover" src="standy-routes-in-iphone-2.png" alt="" />
                            </div>
                            <div className="w-8/12  md:w-6/12 xl:w-6/12 lg:w-6/12  -ml-16 lg:-ml-32">
                                <img className="object-cover" src="standy-routes-in-iphone.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="px-4 py-12 mx-auto sm:max-w-xl  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
                    <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
                        <div className="relative p-px border overflow-hidden transition duration-300 transform rounded-2xl   group  shadow-xl">
                            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0  group-hover:scale-x-100" />
                            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0  group-hover:scale-y-100" />
                            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0  group-hover:scale-x-100" />
                            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0  group-hover:scale-y-100" />
                            <div className="relative p-5 bg-white rounded-2xl">
                                <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                                    <div className="flex items-center   justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-cherry-blossom-pink lg:mb-0">
                                        <DiscountOutlined></DiscountOutlined>
                                    </div>
                                    <h6 className="leading-5">Avantajlar</h6>
                                </div>
                                <p className="mb-2 text-gray-900">
                                    Standy uygulaması ile birçok anlaşmalı mekandaki qr kodu okutarak Standy indirimlerinden faydalanabilirsin.
                                </p>

                            </div>
                        </div>
                        <div className="relative p-px  border overflow-hidden transition duration-300 transform rounded-2xl   group  shadow-xl">
                            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0  group-hover:scale-x-100" />
                            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0  group-hover:scale-y-100" />
                            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0  group-hover:scale-x-100" />
                            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0  group-hover:scale-y-100" />
                            <div className="relative p-5 bg-white rounded-full ">
                                <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                                    <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-cherry-blossom-pink lg:mb-0">
                                        <RouteOutlined></RouteOutlined>
                                    </div>
                                    <h6 className=" leading-5">Rotalar</h6>
                                </div>
                                <p className="mb-2 text-gray-900">
                                    Standy ile yüzlerce rota arasından istediğinizi seçebilir, birçok yeni mekan keşfedebilirsin!
                                </p>

                            </div>
                        </div>
                        <div className="relative p-px border overflow-hidden transition duration-300 transform rounded-2xl   group  shadow-xl">
                            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0  group-hover:scale-x-100" />
                            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0  group-hover:scale-y-100" />
                            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0  group-hover:scale-x-100" />
                            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0  group-hover:scale-y-100" />
                            <div className="relative p-5 bg-white rounded-full ">
                                <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                                    <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-cherry-blossom-pink lg:mb-0">
                                        <ExploreOutlined></ExploreOutlined>
                                    </div>
                                    <h6 className="  leading-5">Yeni Şehirler</h6>
                                </div>
                                <p className="mb-2    text-gray-900">
                                    Yeni bir şehri tanımak istiyorsan oluşturulmuş şehir rotalarını inceleyebilirsin.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                <section className='bg-standy-pink xl:mx-auto mx-4 pt-16 m-10 p-8 text-center text-cherry-blossom-pink max-w-screen-xl rounded-3xl flex flex-col relative'>
                    <img
                        src="happy_illustation.png"
                        alt="Top Border Image"
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 object-cover"
                    />
                    <div className='flex-grow'></div> {/* This pushes the content to the bottom without extra space */}
                    <div className='flex flex-col items-center justify-center space-y-6'>
                        <h1 className='font-condensed uppercase leading-20 font-black lg:text-8xl xl:text-8xl md:text-7xl text-6xl'>
                            STANDY+ İLE<br /> CÜZDANINI KORU
                        </h1>
                        <p className='text-white text-xl'>
                            Standy+ aboneliği ile benzersiz indirimlerden yararlanın, özel rotaları keşfedin ve şehir maceralarınızı bir üst seviyeye taşıyın!                        </p>
                        <Link
                            className="mx-2 inline-flex px-5 py-2 rounded-full  transition duration-300 ease-in-out bg-cherry-blossom-pink text-standy-black hover:bg-mimi-pink"
                            href="/waitlist"
                        >
                            Şimdi Sıraya Gir
                        </Link>
                    </div>
                </section>


                <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                        <h2 className="max-w-lg mb-6  text-4xl  leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-standy-pink relative inline-block">
                                <span className="relative text-white">Standy +</span>
                            </span> ile sana neler sunuyoruz?
                        </h2>

                    </div>
                    <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col justify-between p-5 border rounded-2xl shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mimi-pink">
                                    <DiscountOutlined></DiscountOutlined>
                                </div>
                                <h6 className="mb-2  leading-5">İndirimler</h6>
                                <p className="mb-3 text-sm text-gray-900">
                                    Standy+ ile anlaşmalı 200'den fazla mekanda geçerli yüzlerce indirimden istediğiniz zaman, istediğiniz kadar yararlanın.
                                </p>
                            </div>

                        </div>
                        <div className="flex flex-col justify-between p-5 border rounded-2xl shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mimi-pink">
                                    <MyLocation></MyLocation>
                                </div>
                                <h6 className="mb-2  leading-5">Bölge Kodları</h6>

                                <p className="mb-3 text-sm text-gray-900">
                                    Standy+ ile şehrin çeşitli bölgelerinde geçerli özel kodları kullanın ve bu bölgelerdeki ayrıcalıklı tekliflerden yararlanın.    </p>                    </div>

                        </div>
                        <div className="flex flex-col justify-between p-5 border rounded-2xl shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mimi-pink">
                                    <Storefront></Storefront>
                                </div>
                                <h6 className="mb-2  leading-5">Senin Mekanın</h6>
                                <p className="mb-3 text-sm text-gray-900">
                                    Beğendiğiniz veya keşfetmek istediğiniz mekanı bizimle paylaşın, biz sizin için o mekanla görüşüp indirim alalım.
                                </p>
                            </div>

                        </div>
                        <div className="flex flex-col justify-between p-5 border rounded-2xl shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mimi-pink">
                                    <Celebration></Celebration>
                                </div>
                                <h6 className="mb-2  leading-5">Özel Etkinlikler </h6>
                                <p className="mb-3 text-sm text-gray-900">
                                    Standy sahipliğinde düzenlenecek birçok etkinliğe ücretsiz katılma şansı yakalayın.
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="container rounded-2xl bg-standy-white    mx-auto mt-4 p-4 space-y-2  text-center">
                        <p className="leading-snug text-standy-black text-2xl">Üstelik bütün bu avantajlar ayda sadece <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-standy-pink relative inline-block">
                            <span className="relative text-white"> 1 kahve fiyatına!
                            </span>
                        </span>
                        </p>
                    </div>
                    <div className='justify-center flex p-4 '>
                        <Link
                            className="mx-2 rounded-full inline-flex px-5 py-2   transition duration-300 ease-in-out bg-standy-pink text-white hover:bg-standy-dark-pink"
                            href="/standy-plus"

                        >
                            Daha fazla
                        </Link>
                    </div>
                </div>

                <MainCTA></MainCTA>



            </div >
        </div>
    );
}
