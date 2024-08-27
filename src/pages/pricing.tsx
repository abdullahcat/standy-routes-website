import Navbar from "@/components/navbar";
import StandyPlusNavbar from "@/components/standyplus/navbar";
import { ArrowCircleDown, CheckCircleOutline } from "@mui/icons-material";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Pricing() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div className="text-standy-black">
            <Head>
                <title>Standy+ Fiyatlandırma</title>
            </Head>

            <header >
                <Navbar />
            </header>

            <header>

            </header>
            <section className="pt-20">
                <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
                    <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">

                        <h2 className="max-w-lg mb-6 text-4xl  leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            Buna fazlasıyla değer
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Yeni deneyimlere açık mısınız? Standy+ üyesi olun ve şehrinizdeki en popüler mekanlarını size özel sınırsız indirimlerle keşfedin!
                        </p>
                    </div>
                    <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-xl lg:grid-cols-3 mx-auto">
                        <div className="flex flex-col justify-between p-5 bg-white border rounded-2xl shadow-sm">
                            <div className="mb-6">
                                <div className="flex items-center justify-between pb-6 mb-6 border-b">
                                    <div>
                                        <p className="text-sm font-bold tracking-wider uppercase">
                                            Aylık
                                        </p>
                                        <div className="bg-cherry-blossom-pink inline-block px-2 py-1 my-2 rounded-full">7 gün ücretsiz</div>

                                        <p className="text-5xl font-extrabold">89.99 TRY</p>
                                        <p className="text-md  ">/Aylık</p>

                                    </div>
                                </div>
                                <div>
                                    <p className="mb-2 font-bold tracking-wide">Özellikler</p>
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
                                                <div className={`mr-2 text-rose-red transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                                                    <ArrowCircleDown className="cursor-pointer" onClick={toggleExpand} />
                                                </div>
                                                <p className="font-medium text-gray-800 underline cursor-pointer" onClick={toggleExpand}>
                                                    89.99 TL ile başka ne yapılabilir?
                                                </p>
                                            </div>
                                            {isExpanded && (
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
                                            6 Aylık
                                        </p>
                                        <div className="bg-cherry-blossom-pink inline-block px-2 py-1 my-2 rounded-full">%26 daha ucuz</div>

                                        <p className="text-5xl font-extrabold">399.99 TRY</p>
                                        <p className="text-md  ">66.67 TRY/Aylık</p>

                                    </div>
                                </div>
                                <div>
                                    <p className="mb-2 font-bold tracking-wide">Özellikler</p>
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
                                            <p className="font-medium text-gray-800">Ayda 1-2 kullanımda parasını çıkartır</p>
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
                                            Yıllık
                                        </p>
                                        <div className="bg-cherry-blossom-pink inline-block px-2 py-1 my-2 rounded-full">%36 daha ucuz</div>

                                        <p className="text-5xl font-extrabold">699.99 TRY</p>
                                        <p className="text-md  ">58.33 TRY/Aylık</p>

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

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <div className="py-10">
                <section className='bg-standy-pink xl:mx-auto mx-4 py-16   p-8 text-center text-cherry-blossom-pink max-w-screen-xl rounded-3xl flex flex-col relative'>
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
                            href="https://waitlist.standyroutes.com"
                        >
                            Şimdi Sıraya Gir
                        </Link>
                    </div>
                </section>
            </div>

        </div>
    )
}