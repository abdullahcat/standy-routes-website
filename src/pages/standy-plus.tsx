import HowToCarousel from "@/components/main/HowToCarousel";
import Navbar from "@/components/navbar";
import StandyPlusCTA from "@/components/standyplus/cta";
import StandyPlusNavbar from "@/components/standyplus/navbar";
import { ArrowCircleDown, ArrowDropDown, Celebration, CheckCircleOutline, Create, Discount, DiscountOutlined, Done, Explore, Group, Info, InfoOutlined, Light, MonetizationOn, MyLocation, ShareLocation, Storefront } from "@mui/icons-material";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";


function StandyPlus() {

    return (


        <div className="text-standy-black">
            <Head>
                <title>Standy+</title>
            </Head>

            <header >
                <StandyPlusNavbar />
            </header>

            <section className='pt-32 pb-10 items-center justify-center  flex-col flex text-rose-red bg-standy-white text-center space-y-6 px-10 '>


                <h1 className='font-condensed uppercase leading-20  font-black  xl:text-8xl md:text-7xl text-6xl'>
                    STANDY+ İLE<br /> CÜZDANINI KORU!
                </h1>
                <p className='text-standy-black  max-w-2xl text-center   mx-auto  text-xl'>
                    Standy+ aboneliği ile benzersiz indirimlerden yararlanın, özel rotaları keşfedin ve şehir maceralarınızı bir üst seviyeye taşıyın!
                </p>


                <div className='flex items-center justify-center space-x-2'>
                    <Link
                        className="mx-2 inline-flex px-5 py-2 rounded-full transition duration-300 ease-in-out border-rose-red border hover:border-standy-black bg-rose-red text-standy-white hover:bg-standy-black"
                        href="/pricing"
                    >
                        Abone Ol
                    </Link>
                </div>


            </section>


            <section className=" py-10">
                <div className="relative px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
                    <div className="absolute inset-0">
                        <div className="absolute inset-y-0 z-0 w-full h-full bg-standy-white rounded-2xl lg:w-3/4" />

                    </div>

                    <div className="relative">
                        <h1 className="text-3xl pb-5">Sana Neler Sunuyoruz?</h1>

                        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                            <div className="grid gap-12 row-gap-5 md:grid-cols-2">

                                <div className="relative">
                                    <div className="relative">
                                        <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">

                                            <DiscountOutlined></DiscountOutlined>
                                        </div>
                                        <h6 className="mb-2 text-xl leading-5">
                                            İndirimler
                                        </h6>
                                        <p className="text-sm  ">
                                            Standy+ ile anlaşmalı 200'den fazla mekanda geçerli yüzlerce indirimden istediğiniz zaman, istediğiniz kadar yararlanın.

                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                                        <MyLocation></MyLocation>
                                    </div>
                                    <h6 className="mb-2 text-xl leading-5">
                                        Bölge Kodları

                                    </h6>
                                    <p className="text-sm  ">
                                        Standy+ ile şehrin çeşitli bölgelerinde geçerli özel kodları kullanın ve bu bölgelerdeki ayrıcalıklı tekliflerden yararlanın.


                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                                        <Celebration></Celebration>
                                    </div>
                                    <h6 className="mb-2 text-xl leading-5">
                                        Özel Etkinlikler

                                    </h6>
                                    <p className="text-sm  ">
                                        Standy sahipliğinde düzenlenecek birçok etkinliğe ücretsiz katılma şansı yakalayın.

                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                                        <Storefront></Storefront>
                                    </div>
                                    <h6 className="mb-2 text-xl leading-5">
                                        Senin Mekanın

                                    </h6>
                                    <p className="text-sm  ">
                                        Beğendiğiniz veya keşfetmek istediğiniz mekanı bizimle paylaşın, biz sizin için o mekanla görüşüp indirim alalım.

                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="object-cover w-full h-56 rounded-2xl shadow-lg sm:h-96"
                                    src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="py-6">

                <h1 className='xl:m-auto mx-4 pb-6    xl:text-center  max-w-screen-xl text-3xl'>Nasıl Çalışıyor?</h1>
                <HowToCarousel></HowToCarousel>


            </section>
            <section className="bg-standy-white flex justify-center xl:p-0 p-10 items-center w-full h-full">
                <div className="flex flex-col lg:flex-row items-center w-full max-w-screen-xl">
                    <div className="lg:w-1/2 flex flex-col justify-center items-start   lg:text-left lg:p-10 space-y-6">
                        <h1 className="text-4xl lg:text-5xl text-black">Standy+'ı Keşfedin</h1>
                        <p className="text-lg lg:text-xl  text-gray-700">
                            Size özel sunulan indirimler, özel etkinlik davetleri ve kişiselleştirilmiş içerikler ile her anınızı özelleştirin ve şehrin tadını çıkarın.</p>
                        <Link
                            className=" inline-flex px-5 py-2 rounded-full transition duration-300 ease-in-out border-rose-red border hover:border-standy-black bg-rose-red text-standy-white hover:bg-standy-black"
                            href="/pricing"
                        >
                            Abone Ol
                        </Link>
                    </div>
                    <div className="lg:w-1/2 py-10 flex justify-center lg:justify-center order-first items-center">
                        <div className="w-8/12">
                            <img className="object-cover" src="tickets.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>



            <section  >
                <div className="space-y-4 mx-auto w-full max-w-screen-xl p-4 py-6 xl:px-0 lg:py-8">
                    <h2 className="text-4xl mb-6  xl:text-center   ">Sıkça Sorulan Sorular
                    </h2>
                    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl bg-standy-white p-4  "
                        >
                            <h2 className=" ">Standy+ Nedir?</h2>

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
                            Standy+ bir abonelik servisidir, kullanıcılara özel sayısız indirimler, kampanyalar ve daha birçok özellik sunar.


                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl bg-standy-white  p-4  "
                        >
                            <h2 className=" ">Standy+ aboneliği nasıl satın alınır?</h2>

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
                            Standy uygulaması içerisindeki “Profil” bölümünden Standy+ aboneliğinizi kolayca oluşturabilirsiniz.

                        </p>
                    </details>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl bg-standy-white  p-4  "
                        >
                            <h2 className=" ">Standy+ aboneliğimi nasıl iptal edebilirim?</h2>

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
                            Aboneliğinizi, Standy uygulamasındaki hesap ayarlarınızdan iptal edebilirsiniz.


                        </p>
                    </details>
                    <div className="xl:text-center">

                        <Link
                            className="  inline-flex px-5 py-2 rounded-full flex flex-row transition duration-300 ease-in-out border-rose-red border hover:border-standy-black bg-rose-red text-standy-white hover:bg-standy-black     "
                            href="/faq"
                        >
                            Daha Fazla
                        </Link>
                    </div>
                </div>
            </section>

            <StandyPlusCTA></StandyPlusCTA>


        </div >
    )
}
export default StandyPlus;