import CreatorsCTA from "@/components/creator/creatorsCTA";
import CreatorsNavbar from "@/components/creator/creatorsNavbar";
import Navbar from "@/components/navbar";
import { Create, Explore, Group, Info, InfoOutlined, Light, MonetizationOn, ShareLocation } from "@mui/icons-material";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";


function Creators() {
    return (


        <div className="text-standy-black">
            <Head>
                <title>Creators</title>
            </Head>

            <header >
                <CreatorsNavbar />
            </header>

            <section
                className="relative py-10 bg-[url(https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center bg-no-repeat"
            >   <div
                className="relative text-left px-4 xl:px-0 mx-auto max-w-screen-xl justify-end   py-32 justify-start  lg:flex lg:h-screen lg:items-center "
            >
                    <div className=" lg:px-8 px-4 rounded-lg py-20 bg-standy-white  sm:px-6 ltr:sm:text-left ">
                        <h1 className="text-5xl  text-standy-black  ">

                            <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-standy-pink relative inline-block">
                                <span className="relative text-white"> Standy </span>
                            </span>                            ile Yaratıcı Ol! <br /> Kazan ve Keşfettir!
                        </h1>

                        <p className="mt-4 max-w-lg text-standy-black   text-xl">
                            Sen de bir "Rota Rehberi" olmak ister misin? Standy ile kendi rotalarını oluştur, gizli mekanları keşfettir ve kazancınla keyfini çıkar!                        </p>

                        <div className="mt-4 items-center flex flex-wrap gap-4 text-center">


                            <Link
                                className="   px-5 py-2 rounded-lg flex flex-row transition duration-300 ease-in-out bg-standy-pink  text-white hover:bg-standy-dark-pink       "
                                href="/apply-creator"

                            >
                                Sıraya Gir
                            </Link>
                            <p
                                className="  transition duration-300 ease-in-out     "
                            >
                                Çok Yakında Yayında
                            </p>


                        </div>
                    </div>
                </div>
            </section>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6  text-3xl  leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Sana neler sunuyoruz?
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
                <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <Create></Create>
                            </div>
                            <h6 className="mb-2  leading-5">Üret</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Standy ile takipçilerin için yeni rotalar üret, yeni mekanlar keşfet ve hepsini standy uygulamasında paylaş!                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <MonetizationOn></MonetizationOn>
                            </div>
                            <h6 className="mb-2  leading-5">Kazan</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Standy Creator olarak popülerliğin arttıkça kazanç elde edersin. Takipçilerini mutlu et, kazancını yükselt!                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <Group></Group>
                            </div>
                            <h6 className="mb-2  leading-5">Tanın</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Yaratıcılığın ve keşif yeteneğin ile tanın! Standy topluluğunda öne çık ve adını duyur.                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <Light></Light>
                            </div>
                            <h6 className="mb-2  leading-5">İlham Ver</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Bilgini ve deneyimlerini paylaşarak hem kendin geliş hem de başkalarına ilham ver!                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <section className="bg-standy-pink text-standy-white">

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                        <div>
                            <img
                                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                                src="https://images.pexels.com/photos/3781824/pexels-photo-3781824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl  tracking-tight   sm:text-4xl sm:leading-none">
                                    Standy Creator olmak sana göre mi?

                                </h2>
                                <p className="text-base   md:text-lg">
                                    Eğlence dolu anlar, yeni deneyimler ve kazanç fırsatları! Bu heyecan verici yolculuğa katıl ve keyfini çıkar.                                             </p>
                            </div>
                            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
                                <div>
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-black">
                                        <Explore></Explore>
                                    </div>

                                    <h6 className="mb-2  leading-5">
                                        Yeni yerler keşfetmeyi seviyorsan, </h6>
                                </div>
                                <div>
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-black">
                                        <ShareLocation> </ShareLocation>

                                    </div>
                                    <h6 className="mb-2  leading-5">
                                        Takipçilerinle etkileşim kurmak istiyorsan,
                                    </h6>

                                </div>
                                <div>
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-black">
                                        <InfoOutlined></InfoOutlined>

                                    </div>
                                    <h6 className="mb-2  leading-5">
                                        Yaratıcılığını ve bilgini paylaşmak istiyorsan,
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
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-standy-white p-4  "
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
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-standy-white  p-4  "
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
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-standy-white  p-4  "
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
                            className="  inline-flex px-5 py-2 rounded-lg flex flex-row transition duration-300 ease-in-out bg-standy-pink  text-white hover:bg-standy-dark-pink       "
                            href="/faq"
                        >
                            Daha fazla
                        </Link>
                    </div>
                </div>
            </section>

            <CreatorsCTA></CreatorsCTA>


        </div >
    )
}
export default Creators;