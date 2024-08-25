import Head from 'next/head';
import '@/app/globals.css';
import * as React from 'react';
import { EmblaOptionsType } from 'embla-carousel'
import Navbar from '@/components/navbar';
import Script from 'next/script';
import Link from 'next/link';
import { DiscountOutlined, ExploreOutlined, RouteOutlined } from '@mui/icons-material';
import HowToCarousel from '@/components/main/HowToCarousel';
import BlogCarousel from '@/components/main/BlogCarousel';

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
                        Paranızı uluslararası düzeyde taşıyın. Gizli ücretlerden tasarruf sağlayın.

                    </p>


                    <div className='flex items-center justify-center space-x-2'>
                        <Link
                            className="mx-2 rounded-full inline-flex px-5 py-2   transition duration-300 ease-in-out bg-standy-pink text-white hover:bg-standy-dark-pink"
                            href=""

                        >
                            Şimdi Sıraya Gir
                        </Link>

                    </div>
                </section>
                <section className="bg-mimi-pink flex justify-center xl:p-0 p-10 items-center w-full h-full">
                    <div className="flex flex-col lg:flex-row items-center w-full max-w-screen-xl">
                        <div className="lg:w-1/2 flex flex-col justify-center items-start   lg:text-left lg:p-10 space-y-6">
                            <h1 className="text-4xl lg:text-5xl text-black">Uygulamayı keşfet</h1>
                            <p className="text-lg lg:text-xl  text-gray-700">
                                Explore the best routes with Standy. Discover nearby discounts and enjoy your journey.
                                Explore the best routes with Standy. Discover nearby discounts and enjoy your journey.
                                Explore the best routes with Standy. Discover nearby discounts and enjoy your journey.
                            </p>
                            <Link
                                className=" inline-flex px-5 py-2 rounded-full  transition duration-300 ease-in-out bg-standy-pink text-white hover:bg-standy-dark-pink"
                                href=""
                            >
                                Sıraya Gir
                            </Link>
                        </div>
                        <div className="lg:w-1/2 py-10 flex justify-center lg:justify-center items-center">
                            <div className="w-5/12">
                                <img className="object-cover" src="standy-routes-in-iphone-2.png" alt="" />
                            </div>
                            <div className="w-6/12 -ml-16 lg:-ml-32">
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
                            KEŞFEDİN<br /> DENEYİMLEYİN<br />TASARRUF EDİN
                        </h1>
                        <p className='text-white text-xl'>
                            Paranızı uluslararası düzeyde taşıyın. Gizli ücretlerden tasarruf sağlayın.
                        </p>
                        <Link
                            className="mx-2 inline-flex px-5 py-2 rounded-full  transition duration-300 ease-in-out bg-cherry-blossom-pink text-standy-black hover:bg-mimi-pink"
                            href=""
                        >
                            Sıraya Gir
                        </Link>
                    </div>
                </section>

                <h1 className='xl:m-auto mx-4 pt-8 pb-6 xl:text-center  max-w-screen-xl text-3xl'>Nasıl çalışıyor?</h1>
                <HowToCarousel></HowToCarousel>



                <h1 className='xl:m-auto mx-4 pt-8 pb-6 xl:text-center  max-w-screen-xl text-3xl'>Daha fazla fikir</h1>
                <BlogCarousel></BlogCarousel>


                <section className='py-8' >
                    <div className="space-y-4 mx-auto w-full max-w-screen-xl px-4   xl:px-0 lg:py-8">
                        <h2 className="text-4xl mb-6    xl:text-center   ">Sıkça Sorulan Sorular
                        </h2>
                        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl  bg-standy-white p-4  "
                            >
                                <h2 className=" ">Standy Creator Olarak Ne Tür İçerikler Hazırlamam Beklenir?</h2>

                                <svg
                                    className=" h-5 size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed  ">
                                Standy için şehir keşifleri, özel rota önerileri, yerel mekan incelemeleri ve kullanıcıların ilgisini çekecek etkinliklerle ilgili içerikler hazırlamanız beklenir.

                            </p>
                        </details>

                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl  bg-standy-white  p-4  "
                            >
                                <h2 className=" ">Standy Creator Olarak Hangi Avantajlardan Yararlanabilirim?</h2>

                                <svg
                                    className="size-5 h-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed  ">
                                Creatorlarımıza özel etkinliklere davetler, Standy platformunda öne çıkma fırsatı, ve çeşitli indirimler sunuyoruz.

                            </p>
                        </details>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl  bg-standy-white  p-4  "
                            >
                                <h2 className=" ">Standy'de Nasıl Yayınlanır?</h2>

                                <svg
                                    className="size-5 h-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed  ">
                                Gönderdiğiniz içerikler, Standy editör ekibi tarafından incelendikten sonra uygulamamızda ve web sitemizde yayınlanır.


                            </p>
                        </details>
                        <div className="xl:text-center">

                            <Link
                                className="  inline-flex px-5 py-2 rounded-full  flex flex-row transition duration-300 ease-in-out bg-standy-pink  text-white hover:bg-standy-dark-pink       "
                                href="/faq"
                            >
                                Daha fazla
                            </Link>
                        </div>
                    </div>
                </section>

            </div >
        </div>
    );
}
