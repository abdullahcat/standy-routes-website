import Navbar from "@/components/navbar";
import UniCTA from "@/components/university/cta";
import { Campaign, CardGiftcard, Discount, Groups, People, QrCode, ShowChart } from "@mui/icons-material";
import Head from "next/head";
import Link from "next/link";

function Universities() {
    return (

        <div className="text-standy-black">
            <Head>
                <title>Üniversiteler</title>
            </Head>

            <header >
                <Navbar />
            </header>


            <section
                className="relative py-10 bg-[url(https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 "
                ></div>

                <div
                    className="relative text-left px-4 xl:px-0 mx-auto max-w-screen-xl   py-32   lg:flex lg:h-screen lg:items-center "
                >
                    <div className=" lg:px-8 px-4 lg:max-w-xl rounded-2xl py-20 bg-standy-white  sm:px-6 ltr:sm:text-left ">
                        <h1 className="text-5xl  text-standy-black  ">
                            Üniversite <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-standy-pink relative inline-block">
                                <span className="relative text-white"> temsilcimiz </span>
                            </span> olmak ister misin?
                        </h1>

                        <p className="mt-4 max-w-lg text-standy-black   text-xl">
                            Üniversitenin Standy temsilcisi olmak artık çok kolay! Sen de başvur, birçok ödül ve indirimden ücretsiz faydalanma fırsatını yakala!                        </p>

                        <div className="mt-4 items-center flex flex-wrap gap-4 text-center">

                            <Link
                                className=" px-5 py-2 rounded-full flex flex-row transition duration-300 ease-in-out bg-standy-pink  text-white hover:bg-standy-dark-pink       "
                                href="https://applyuniversity.standyroutes.com"
                                target="_blank"

                            >
                                Başvur
                            </Link>


                        </div>
                    </div>
                </div>
            </section>
            <section className="xl:py-10">
                <div className="relative px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                    <div className="absolute inset-0">
                        <div className="absolute inset-y-0 z-0 w-full h-full bg-standy-white rounded-2xl lg:w-3/4" />

                    </div>

                    <div className="relative">
                        <h1 className="text-3xl pb-5">Neden Temsilci Olmalıyım?</h1>

                        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                            <div className="grid gap-12 row-gap-5 md:grid-cols-2">

                                <div className="relative">
                                    <div className="relative">
                                        <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">

                                            <CardGiftcard></CardGiftcard>
                                        </div>
                                        <h6 className="mb-2  leading-5">
                                            Temsilci İndirimi
                                        </h6>
                                        <p className="text-sm  ">
                                            Üniversite temsilcilerine özel ekstra indirimlerle tasarruf edebilirsin.                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                                        <ShowChart></ShowChart>
                                    </div>
                                    <h6 className="mb-2  leading-5">
                                        Para Kazan
                                    </h6>
                                    <p className="text-sm  ">
                                        Üniversiteni Standy+ üyeliğine teşvik et, üyelik alan her insan başına para kazan!
                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                                        <Discount></Discount>
                                    </div>
                                    <h6 className="mb-2  leading-5">
                                        Yeni Mekanlar
                                    </h6>
                                    <p className="text-sm  ">
                                        Beğenip bizimle paylaştığınız mekanlar ile anlaşarak size istediğiniz yerlerden yeni indirimler kazandırabiliriz.                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                                        <People> </People>
                                    </div>
                                    <h6 className="mb-2  leading-5">
                                        Daha Fazlası
                                    </h6>
                                    <p className="text-sm  ">
                                        Üniversitenizdeki Standy kullanıcısı sayısını artırarak birçok ödül kazanabilirsiniz.                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="object-cover w-full h-56 rounded-2xl shadow-lg sm:h-96"
                                    src="https://images.pexels.com/photos/9490231/pexels-photo-9490231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="bg-standy-pink text-standy-white">

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                        <div>
                            <img
                                className="object-cover w-full h-56 rounded-2xl shadow-lg sm:h-96"
                                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl  tracking-tight   sm:text-4xl sm:leading-none">
                                    Temsilci olarak ne yapmam gerekir?

                                </h2>
                            </div>
                            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
                                <div>
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-black">
                                        <Groups> </Groups>
                                    </div>
                                    <h6 className="mb-2  leading-5">
                                        Üniversitene öğrencilerine Standy’nin sunduğu fırsatları anlatarak kullanıma teşvik etmek.                                    </h6>

                                </div>
                                <div>
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-black">
                                        <Campaign></Campaign>
                                    </div>
                                    <h6 className="mb-2  leading-5">
                                        Kulüpler ve etkinlikler üzerinden Standy’yi duyurmak.
                                    </h6>

                                </div>
                            </div>
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
                            <h2 className=" ">Üniversite Temsilcisi Olmak İçin Hangi Şartlar Aranıyor?</h2>

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
                            Aktif bir üniversite öğrencisi olmanız ve Standy’i arkadaşlarınıza ve üniversite içinde tanıtma konusunda hevesli olmanız yeterli.

                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl bg-standy-white  p-4  "
                        >
                            <h2 className=" ">Standy Üniversite Temsilcisi Olarak Hangi Avantajları Elde Ederim? </h2>

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
                            Temsilci olarak, özel indirimler, arkadaşlarınıza sağlayacağınız indirim kodları ve sevdiğiniz mekanlarda ekstra fırsatlar gibi birçok avantajdan faydalanabilirsiniz.


                        </p>
                    </details>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl bg-standy-white  p-4  "
                        >
                            <h2 className=" ">Temsilci Olarak Görevlerim Neler Olacak?</h2>

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
                            Standy’i üniversitenizde tanıtarak öğrencileri uygulamayı kullanmaya teşvik etmek, üniversite kulüpleri ve etkinlikleri üzerinden duyurular yapmak temel görevleriniz arasında yer alır.



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

            <UniCTA></UniCTA>
        </div >
    )
}
export default Universities;