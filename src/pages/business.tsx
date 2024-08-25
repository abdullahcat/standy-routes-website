import Head from "next/head";
import { People, AdsClick, BarChart, SupportAgent, Verified } from "@mui/icons-material";

import Navbar from "@/components/navbar";
import Link from "next/link";
import BusinessNavbar from "@/components/business/navbar";
import BusinessTestimonials from "@/components/business/testimonials";
function Business() {

    return (
        <div className='text-standy-black  '>
            <Head>
                <title>Standy Business</title>
            </Head>
            <header >
                <BusinessNavbar />
            </header>

            <section className='pt-32 pb-10 items-center justify-center  flex-col flex text-cherry-blossom-pink bg-rose-red text-center space-y-6 px-10 '>


                <h1 className='font-condensed uppercase leading-20  font-black  xl:text-8xl md:text-7xl text-6xl'>
                    YENİ MÜŞTERİLERE<br /> "MERHABA" DE!
                </h1>
                <p className='text-standy-white  max-w-2xl text-center   mx-auto  text-xl'>
                    Birçok yeni müşteriye erişmek, işletmenizin görünürlüğünü artırmak ve çevrimiçi aktif reklam yapmak için işletmenizi Standy’ye taşıyın.


                </p>


                <div className='flex items-center justify-center space-x-2'>
                    <Link
                        className="mx-2 inline-flex px-5 py-2 rounded-full transition duration-300 ease-in-out border-cherry-blossom-pink border hover:border-mimi-pink bg-cherry-blossom-pink text-standy-black hover:bg-mimi-pink"
                        href=""

                    >
                        Başlayalım
                    </Link>
                    <Link
                        className="mx-2 inline-flex px-5 py-2 rounded-full transition duration-300 ease-in-out border-standy-white border hover:border-mimi-pink    text-standy-white hover:text-standy-black hover:bg-mimi-pink"
                        href=""
                    >
                        Destek
                    </Link>
                </div>

                <div className="  max-w-md pt-5  items-center justify-center flex h-11/12  overflow-hidden    ">
                    <img
                        alt="standybusinessiphone"
                        src="standybusinessiphone.png"
                        className="    inset-0 h-full w-full object-contain"
                    />
                </div>
            </section>



            <section className="mx-auto max-w-screen-xl flex items-center justify-center pt-8 px-4">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 text-center">
                    <div className="bg-mimi-pink text-standy-black inline-block px-8 py-4 rounded-full text-lg md:text-xl lg:text-2xl">
                        <span className="underline text-rose-red">$4.8m</span> Market Hacmi
                    </div>
                    <div className="bg-mimi-pink text-standy-black inline-block px-8 py-4 rounded-full text-lg md:text-xl lg:text-2xl">
                        <span className="underline text-rose-red">200+</span> Anlaşmalı İşletme
                    </div>
                    <div className="bg-mimi-pink text-standy-black inline-block px-8 py-4 rounded-full text-lg md:text-xl lg:text-2xl">
                        <span className="underline text-rose-red">5000+</span> Hazır Kullanıcı
                    </div>
                </div>
            </section>

            <section className=" px-4 my-10 ">
                <div className="container mx-auto p-4 space-y-2  text-center">
                    <span className="before:block before:absolute tracking-wide font-condensed font-semibold text-5xl before:-inset-1 before:-skew-y-1 before:bg-standy-pink relative inline-block">
                        <span className="relative text-white   ">STANDY BUSINESS</span>
                    </span>
                    <p className="pt-2 text-xl">İşletmeler için faydaları</p>
                </div>
                <div className="container mx-auto grid py-5 text-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col   items-center p-4">
                        <People className="bg-standy-pink text-standy-white rounded-full p-4 w-16 h-16"></People>
                        <h3 className="my-3 text-3xl text-standy-pink  ">Müşteri Akışı</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Standy ile size yakın potansiyel müşterileri kendi işletmenize çekin. Sağladığınız indirimlerle müşterilerinizi kalıcı hale getirin.</p>

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <AdsClick className="bg-standy-pink text-standy-white rounded-full p-4  w-16 h-16"></AdsClick>
                        <h3 className="my-3 text-3xl text-standy-pink ">Çevrimiçi reklam</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Standy işletme ile hem çevrimiçi olarak işletmenizi tanıtırsınız, hem de kullanıcıların oluşturduğu rotalarla daha geniş kitlelere ulaşım sağlarsınız.</p>

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <BarChart className="bg-standy-pink text-standy-white rounded-full p-4  w-16 h-16"></BarChart>

                        <h3 className="my-3 text-3xl text-standy-pink ">Güncel İstatistik</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Hangi kampanyanın işletmeye daha çok kâr getirdiğini, Standy’nin işletmenin satışlarına olan etkisini barındıran veriler sunar.</p>

                        </div>
                    </div>
                    <div className="flex flex-col   items-center p-4">
                        <SupportAgent className="bg-standy-pink text-standy-white rounded-full p-4  w-16 h-16"></SupportAgent>

                        <h3 className="my-3 text-3xl text-standy-pink ">Canlı Destek</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Her türlü sorunuza anında cevap verecek canlı destek hizmetinizde. Eğer bütün bu hizmetlerden memnun kalmazsanız üyelik iptali tamamen ücretsiz.</p>
                        </div>
                    </div>

                </div>
                <div className="container rounded-2xl bg-standy-white    mx-auto  p-4 space-y-2  text-center">

                    <p className="   leading-snug text-standy-black text-2xl">Üstelik bütün bu imkanlar tamamen <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-standy-pink relative inline-block">
                        <span className="relative text-white"> ücretsiz! </span>
                    </span></p>
                </div>

            </section>









            <section className="bg-rose-red  ">

                <div className="px-4 xl:py-16 mx-auto  py-10 max-w-screen-xl    xl:px-0  ">
                    <div className="max-w-xl py-5 text-mimi-pink md:mx-auto  text-center lg:max-w-2xl md:mb-12">

                        <h2 className="max-w-lg mb-6  text-4xl  leading-none tracking-tight    md:mx-auto">

                            İşletmem Standy ile Nasıl Çalışır?                    </h2>
                        <p className="text-standy-white text-lg">
                            Standy İşletme ile müşteri akışını artırmak çok kolay. Standy İşletmeye üye ol, aşağıdaki adımları takip et, birçok yeni Standy fırsatını yakala!                    </p>
                    </div>
                    <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
                            <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
                        </div>
                        <div className="p-5 duration-300 transform bg-white   rounded-2xl shadow-sm hover:-translate-y-2">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-lg  leading-5">Kayıt Olun ve Onaylanın</p>
                                <p className="flex items-center justify-center w-6 h-6  rounded text-deep-purple-accent-400 bg-indigo-50">
                                    1
                                </p>
                            </div>
                            <p className="text-sm ">
                                İşletmenizle ilgili bilgileri girin ve Standy tarafından onaylanın.
                            </p>
                        </div>
                        <div className="p-5 duration-300 transform bg-white   rounded-2xl shadow-sm hover:-translate-y-2">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-lg  leading-5">QR Kodunuzu Alın</p>
                                <p className="flex items-center justify-center w-6 h-6  rounded text-deep-purple-accent-400 bg-indigo-50">
                                    2
                                </p>
                            </div>
                            <p className="text-sm ">
                                Size özel QR kodunuzu alın ve kasanıza yerleştirin.
                            </p>
                        </div>
                        <div className="p-5 duration-300 transform bg-white rounded-2xl shadow-sm hover:-translate-y-2">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-lg  leading-5">İndirim Uygulayın</p>
                                <p className="flex items-center justify-center w-6 h-6  rounded text-deep-purple-accent-400 bg-indigo-50">
                                    3
                                </p>
                            </div>
                            <p className="text-sm ">
                                Standy konsolu üzerinden QR kodunu okutarak indirimleri uygulayın.
                            </p>
                        </div>
                        <div className="p-5 duration-300 transform bg-white rounded-2xl shadow-sm hover:-translate-y-2">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-lg  leading-5">İstatistiklerinizi Takip Edin</p>
                                <p className="flex items-center justify-center w-6 h-6  rounded text-deep-purple-accent-400 bg-indigo-50">
                                    4
                                </p>
                            </div>
                            <p className="text-sm ">
                                Tıklanma, reklam, indirim ve kazanç gibi tüm istatistiklerinizi Standy konsolundan takip edin.                        </p>
                        </div>
                    </div>

                </div></section>

            <BusinessTestimonials></BusinessTestimonials>



            <section  >
                <div className="space-y-4 mx-auto w-full max-w-screen-xl p-4 py-6 xl:px-0 lg:py-8">
                    <h2 className="text-4xl mb-6  xl:text-center   ">Sıkça Sorulan Sorular
                    </h2>
                    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl bg-standy-white p-4  "
                        >
                            <h2 className=" ">Standy ile ortaklık kurmak için işletmemin hangi şartları sağlaması gerekiyor?</h2>

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
                            Standy ile ortaklık kurabilmek için, işletmenizin bağımsız bir kafe veya restoran olması gerekmektedir. Zincir restoranlar veya ulusal markalar kabul edilmemektedir. Ayrıca, işletmenizin yerel halk ve turistlere açık olması ve belirli bir kalite standardını koruyor olması önemlidir.
                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl bg-standy-white  p-4  "
                        >
                            <h2 className=" ">Standy kullanıcılarına sunduğumuz indirim oranını kendimiz belirleyebilir miyiz?</h2>

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
                            Evet, işletmeler Standy kullanıcılarına sunacakları indirim oranını kendileri seçebilir. Ancak, kullanıcıların ilgisini çekmek ve rekabet avantajı sağlayabilmek için önerdiğimiz belli oranlar var. Genellikle, iş ortaklarımız %10 ila %20 arasında indirim sunarlar.
                        </p>
                    </details>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl bg-standy-white  p-4  "
                        >
                            <h2 className=" ">Standy'deki ortaklık anlaşması süresi ne kadar?</h2>

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
                            Standy ile ortaklık anlaşmaları aylık olarak yenilenir ve bu anlaşma sadece kullanıcılara sunulan indirimleri içerir, herhangi bir ücret talep etmez.                        </p>
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

        </div>
    )
}
export default Business;