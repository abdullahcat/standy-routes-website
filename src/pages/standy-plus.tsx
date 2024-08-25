import Navbar from "@/components/navbar";
import StandyPlusCTA from "@/components/standyplus/cta";
import StandyPlusNavbar from "@/components/standyplus/navbar";
import { ArrowCircleDown, ArrowDropDown, CheckCircleOutline, Create, Done, Explore, Group, Info, InfoOutlined, Light, MonetizationOn, ShareLocation } from "@mui/icons-material";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";


function StandyPlus() {
    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);

    const toggleExpand1 = () => setIsExpanded1(!isExpanded1);
    const toggleExpand2 = () => setIsExpanded2(!isExpanded2);
    const toggleExpand3 = () => setIsExpanded3(!isExpanded3);

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
                        href=""
                    >
                        Abone Ol
                    </Link>
                </div>


            </section>


            <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6  text-4xl  leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Sana neler sunuyoruz?
                    </h2>

                </div>
                <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col justify-between p-5 border rounded-2xl shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mimi-pink">
                                <Create></Create>
                            </div>
                            <h6 className="mb-2  leading-5">İndirimler</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Standy+ ile anlaşmalı 300’ten fazla mekanda geçerli yüzlerce indirimden istediğiniz zaman, istediğiniz kadar yararlanın.
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded-2xl shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mimi-pink">
                                <MonetizationOn></MonetizationOn>
                            </div>
                            <h6 className="mb-2  leading-5">Bölge Kodları</h6>

                            <p className="mb-3 text-sm text-gray-900">
                                Standy+ ile şehrin çeşitli bölgelerinde geçerli özel kodları kullanın ve bu bölgelerdeki ayrıcalıklı tekliflerden yararlanın.    </p>                    </div>

                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded-2xl shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mimi-pink">
                                <Group></Group>
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
                                <Light></Light>
                            </div>
                            <h6 className="mb-2  leading-5">Özel Etkinlikler </h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Standy sahipliğinde düzenlenecek birçok etkinliğe ücretsiz katılma şansı yakalayın.
                            </p>
                        </div>

                    </div>

                </div>
                <div className="container rounded-2xl bg-standy-white    mx-auto mt-4 p-4 space-y-2  text-center">

                    <p className="   leading-snug text-standy-black text-2xl">Üstelik bütün bu avantajlar ayda sadece  <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-standy-pink relative inline-block">
                        <span className="relative text-white">1 kahve fiyatına! </span>
                    </span></p>
                </div>

            </div>

            <section className="bg-standy-white flex justify-center xl:p-0 p-10 items-center w-full h-full">
                <div className="flex flex-col lg:flex-row items-center w-full max-w-screen-xl">
                    <div className="lg:w-1/2 flex flex-col justify-center items-start   lg:text-left lg:p-10 space-y-6">
                        <h1 className="text-4xl lg:text-5xl text-black">Standy+'ı Keşfedin</h1>
                        <p className="text-lg lg:text-xl  text-gray-700">
                            Size özel sunulan indirimler, özel etkinlik davetleri ve kişiselleştirilmiş içerikler ile her anınızı özelleştirin ve şehrin tadını çıkarın.</p>
                        <Link
                            className=" inline-flex px-5 py-2 rounded-full transition duration-300 ease-in-out border-rose-red border hover:border-standy-black bg-rose-red text-standy-white hover:bg-standy-black"
                            href=""
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
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6 text-4xl  leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        İnan buna değer!
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Yeni bir şey denemek ister misiniz? Hemen Standy+ üyesi olun ve yeni keşiflerle dolu bir yolculuğa çıkın. Herkese göre bir şeyler var!                    </p>
                </div>
                <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-xl lg:grid-cols-3 sm:mx-auto">
                    <div className="flex flex-col justify-between p-5 bg-white border rounded-2xl shadow-sm">
                        <div className="mb-6">
                            <div className="flex items-center justify-between pb-6 mb-6 border-b">
                                <div>
                                    <p className="text-sm font-bold tracking-wider uppercase">
                                        Aylık
                                    </p>
                                    <p className="text-5xl font-extrabold">89.99 TRY</p>
                                    <p className="text-md  ">/Aylık</p>

                                </div>
                            </div>
                            <div>
                                <p className="mb-2 font-bold tracking-wide">Features</p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <div className="mr-2 text-rose-red">
                                            <CheckCircleOutline></CheckCircleOutline>
                                        </div>
                                        <p className="font-medium text-gray-800">
                                            Bütün Standy+ özelliklerine erişin
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2 text-rose-red">
                                            <CheckCircleOutline></CheckCircleOutline>
                                        </div>
                                        <p className="font-medium text-gray-800">İstediğiniz zaman iptal edin</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2 text-rose-red">
                                            <CheckCircleOutline></CheckCircleOutline>
                                        </div>
                                        <p className="font-medium text-gray-800">Ayda 2 kullanımda parasını çıkartır</p>
                                    </li>
                                    <li className="items-center flex-col">
                                        <div className="flex items-start flex-row">
                                            <div className={`mr-2 text-rose-red transform transition-transform duration-200 ${isExpanded1 ? 'rotate-180' : ''}`}>
                                                <ArrowCircleDown className="cursor-pointer" onClick={toggleExpand1} />
                                            </div>
                                            <p className="font-medium text-gray-800 underline cursor-pointer" onClick={toggleExpand1}>
                                                89.99 TL ile başka ne yapılabilir?
                                            </p>
                                        </div>
                                        {isExpanded1 && (
                                            <ul className="mt-2 text-sm text-gray-600 list-disc pl-5">
                                                <li>1 kahve</li>
                                                <li>4.5 toplu taşıma yolculuğu</li>
                                                <li>1/3 sinema bileti</li>
                                                <li>4 simit</li>
                                                <li>2 dondurma</li>
                                                <li>1 pizzadan 2 dilim</li>
                                                <li>4 çikolatalı gofret</li>
                                                <li>1/20 aylık spor salonu ücreti</li>
                                                <li>Taksi indi-bindi ücretinin yarısı</li>
                                                <li>1 shuttle ücreti</li>
                                                <li>1 elektronik scooterla 10 dk yolculuk</li>
                                                <li>1 adet çiçek</li>
                                                <li>1 anahtarlık</li>
                                                <li>1/6 konser bileti</li>
                                                <li>1/4 ayakkabı tabanı</li>
                                            </ul>
                                        )}
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-5 bg-white border rounded-2xl shadow-sm">
                        <div className="mb-6">
                            <div className="flex items-center justify-between pb-6 mb-6 border-b">
                                <div>
                                    <p className="text-sm font-bold tracking-wider uppercase">
                                        Aylık
                                    </p>
                                    <p className="text-5xl font-extrabold">89.99 TRY</p>
                                    <p className="text-md  ">/Aylık</p>

                                </div>
                            </div>
                            <div>
                                <p className="mb-2 font-bold tracking-wide">Features</p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <div className="mr-2 text-rose-red">
                                            <CheckCircleOutline></CheckCircleOutline>
                                        </div>
                                        <p className="font-medium text-gray-800">
                                            Bütün Standy+ özelliklerine erişin
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2 text-rose-red">
                                            <CheckCircleOutline></CheckCircleOutline>
                                        </div>
                                        <p className="font-medium text-gray-800">İstediğiniz zaman iptal edin</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2 text-rose-red">
                                            <CheckCircleOutline></CheckCircleOutline>
                                        </div>
                                        <p className="font-medium text-gray-800">Ayda 2 kullanımda parasını çıkartır</p>
                                    </li>
                                    <li className="items-center flex-col">
                                        <div className="flex items-start flex-row">
                                            <div className={`mr-2 text-rose-red transform transition-transform duration-200 ${isExpanded2 ? 'rotate-180' : ''}`}>
                                                <ArrowCircleDown className="cursor-pointer" onClick={toggleExpand2} />
                                            </div>
                                            <p className="font-medium text-gray-800 underline cursor-pointer" onClick={toggleExpand2}>
                                                89.99 TL ile başka ne yapılabilir?
                                            </p>
                                        </div>
                                        {isExpanded2 && (
                                            <ul className="mt-2 text-sm text-gray-600 list-disc pl-5">
                                                <li>1 kahve</li>
                                                <li>4.5 toplu taşıma yolculuğu</li>
                                                <li>1/3 sinema bileti</li>
                                                <li>4 simit</li>
                                                <li>2 dondurma</li>
                                                <li>1 pizzadan 2 dilim</li>
                                                <li>4 çikolatalı gofret</li>
                                                <li>1/20 aylık spor salonu ücreti</li>
                                                <li>Taksi indi-bindi ücretinin yarısı</li>
                                                <li>1 shuttle ücreti</li>
                                                <li>1 elektronik scooterla 10 dk yolculuk</li>
                                                <li>1 adet çiçek</li>
                                                <li>1 anahtarlık</li>
                                                <li>1/6 konser bileti</li>
                                                <li>1/4 ayakkabı tabanı</li>
                                            </ul>
                                        )}
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col justify-between p-5 bg-white border rounded-2xl shadow-sm">
                        <div className="mb-6">
                            <div className="flex items-center justify-between pb-6 mb-6 border-b">
                                <div>
                                    <p className="text-sm font-bold tracking-wider uppercase">
                                        Aylık
                                    </p>
                                    <p className="text-5xl font-extrabold">89.99 TRY</p>
                                    <p className="text-md  ">/Aylık</p>

                                </div>
                            </div>
                            <div>
                                <p className="mb-2 font-bold tracking-wide">Features</p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <div className="mr-2 text-rose-red">
                                            <CheckCircleOutline></CheckCircleOutline>
                                        </div>
                                        <p className="font-medium text-gray-800">
                                            Bütün Standy+ özelliklerine erişin
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2 text-rose-red">
                                            <CheckCircleOutline></CheckCircleOutline>
                                        </div>
                                        <p className="font-medium text-gray-800">İstediğiniz zaman iptal edin</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2 text-rose-red">
                                            <CheckCircleOutline></CheckCircleOutline>
                                        </div>
                                        <p className="font-medium text-gray-800">Ayda 2 kullanımda parasını çıkartır</p>
                                    </li>
                                    <li className="items-center flex-col">
                                        <div className="flex items-start flex-row">
                                            <div className={`mr-2 text-rose-red transform transition-transform duration-200 ${isExpanded2 ? 'rotate-180' : ''}`}>
                                                <ArrowCircleDown className="cursor-pointer" onClick={toggleExpand2} />
                                            </div>
                                            <p className="font-medium text-gray-800 underline cursor-pointer" onClick={toggleExpand2}>
                                                89.99 TL ile başka ne yapılabilir?
                                            </p>
                                        </div>
                                        {isExpanded2 && (
                                            <ul className="mt-2 text-sm text-gray-600 list-disc pl-5">
                                                <li>1 kahve</li>
                                                <li>4.5 toplu taşıma yolculuğu</li>
                                                <li>1/3 sinema bileti</li>
                                                <li>4 simit</li>
                                                <li>2 dondurma</li>
                                                <li>1 pizzadan 2 dilim</li>
                                                <li>4 çikolatalı gofret</li>
                                                <li>1/20 aylık spor salonu ücreti</li>
                                                <li>Taksi indi-bindi ücretinin yarısı</li>
                                                <li>1 shuttle ücreti</li>
                                                <li>1 elektronik scooterla 10 dk yolculuk</li>
                                                <li>1 adet çiçek</li>
                                                <li>1 anahtarlık</li>
                                                <li>1/6 konser bileti</li>
                                                <li>1/4 ayakkabı tabanı</li>
                                            </ul>
                                        )}
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 text-4xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        İnan buna değer!
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Yeni bir şey denemek ister misiniz? Hemen Standy+ üyesi olun ve yeni keşiflerle dolu bir yolculuğa çıkın. Herkese göre bir şeyler var!
                    </p>
                </div>
                <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-xl lg:grid-cols-3 sm:mx-auto">
                    <div className="flex flex-col justify-between p-5 bg-white border rounded-2xl shadow-sm">
                        <div className="mb-6">
                            <div className="flex items-center justify-between pb-6 mb-6 border-b">
                                <div>
                                    <p className="text-sm font-bold tracking-wider uppercase">
                                        6 Aylık
                                    </p>
                                    <p className="text-5xl font-extrabold">399.99 TRY</p>
                                    <p className="text-md">(%26 daha ucuz)
                                        (ayda 66.67 TL)</p>
                                </div>
                            </div>
                            <div>
                                <p className="mb-2 font-bold tracking-wide">Features</p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <div className="mr-2 text-rose-red">
                                            <CheckCircleOutline></CheckCircleOutline>
                                        </div>
                                        <p className="font-medium text-gray-800">
                                            Bütün Standy+ özelliklerine erişin
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2 text-rose-red">
                                            <CheckCircleOutline></CheckCircleOutline>
                                        </div>
                                        <p className="font-medium text-gray-800">İstediğiniz zaman iptal edin</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2 text-rose-red">
                                            <CheckCircleOutline></CheckCircleOutline>
                                        </div>
                                        <p className="font-medium text-gray-800">Ayda 1 kullanımda parasını çıkartır</p>
                                    </li>
                                    <li className="items-center flex-col">
                                        <div className="flex items-start flex-row">
                                            <div className={`mr-2 text-rose-red transform transition-transform duration-200 ${isExpanded1 ? 'rotate-180' : ''}`}>
                                                <ArrowCircleDown className="cursor-pointer" onClick={toggleExpand1} />
                                            </div>
                                            <p className="font-medium text-gray-800 underline cursor-pointer" onClick={toggleExpand1}>
                                                399.99 TL ile başka ne yapılabilir?
                                            </p>
                                        </div>
                                        {isExpanded1 && (
                                            <ul className="mt-2 text-sm text-gray-600 list-disc pl-5">
                                                <li>4.5 kahve</li>
                                                <li>22.5 toplu taşıma yolculuğu</li>
                                                <li>1.5 sinema bileti</li>
                                                <li>20 simit</li>
                                                <li>10 dondurma</li>
                                                <li>1 pizzadan 10 dilim</li>
                                                <li>20 çikolatalı gofret</li>
                                                <li>1/4 aylık spor salonu ücreti</li>
                                                <li>Taksi indi-bindi ücretinin 2 katı</li>
                                                <li>5 shuttle ücreti</li>
                                                <li>5 elektronik scooterla 10 dk yolculuk</li>
                                                <li>4 adet çiçek</li>
                                                <li>4 anahtarlık</li>
                                                <li>1 konser bileti</li>
                                                <li>1 ayakkabı tabanı</li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section  >
                <div className="space-y-4 mx-auto w-full max-w-screen-xl p-4 py-6 xl:px-0 lg:py-8">
                    <h2 className="text-4xl mb-6  xl:text-center   ">Sıkça Sorulan Sorular
                    </h2>
                    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl bg-standy-white p-4  "
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
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl bg-standy-white  p-4  "
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
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl bg-standy-white  p-4  "
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
                            className="  inline-flex px-5 py-2 rounded-full flex flex-row transition duration-300 ease-in-out bg-standy-pink  text-white hover:bg-standy-dark-pink       "
                            href="/faq"
                        >
                            Daha fazla
                        </Link>
                    </div>
                </div>
            </section>

            <StandyPlusCTA></StandyPlusCTA>


        </div >
    )
}
export default StandyPlus;