import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";

function Blog() {
    return (<div className="text-standy-white">
        <Head>
            <title>Standy Blog</title>
        </Head>
        <header >
            <Navbar />
        </header>

        <section className="pt-16">
            <div className="mx-auto max-w-screen-xl px-4 py-8   sm:py-12 xl:px-0">
                <header>
                    <h2 className="  xl:text-center text-gray-900  text-5xl">Standy Blog</h2>

                    <p className="mt-4  xl:text-center xl:mx-auto max-w-md text-gray-500">
                        Standy ile şehrini yeniden keşfetmeye ve kazanmaya hazır mısın? Standy Blog'da sana ilham verecek içerikler, şehrin gizli köşeleri, en iyi rotalar, faydalı öneriler ve çok daha fazlası seni bekliyor!                    </p>
                </header>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <li>
                        <Link
                            href="/blog/turist-degil-gezgin-ol"
                            className={`hover:scale-105 carousel-card group block overflow-hidden rounded-2xl transition-transform ease-in-out     flex-col h-[24rem] items-center justify-center text-center bg-cover bg-center relative `}
                            style={{ backgroundImage: `url(https://images.pexels.com/photos/5270675/pexels-photo-5270675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}
                        >
                            <div className={`absolute bg-black bg-opacity-40 inset-0 flex flex-col justify-between items-start p-4 transition-opacity duration-300  `}>
                                <h3 className=" text-left  ">11 June 2023 | Turizm</h3>
                                <h3 className="text-3xl text-left  ">Turist Değil Gezgin ol</h3>

                            </div>

                        </Link>
                    </li>
                    <li>
                        <a
                            href="/blog/standy-assistant"
                            className={`hover:scale-105 carousel-card group block overflow-hidden rounded-2xl transition-transform ease-in-out      flex flex-col h-[24rem] items-center justify-center text-center bg-cover bg-center relative `}
                            style={{ backgroundImage: `url(https://images.pexels.com/photos/14919124/pexels-photo-14919124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}
                        >
                            <div className={`absolute bg-black bg-opacity-40 inset-0 flex flex-col justify-between items-start p-4 transition-opacity duration-300  `}>
                                <h3 className="  text-left  ">10 April 2024 | Teknoloji</h3>
                                <h3 className="text-3xl text-left  ">Standy Assistant</h3>

                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/blog/tatli-krizlerinde-ilac-niyetinde-olacak-mekan-onerileri"
                            className={`hover:scale-105 carousel-card group block overflow-hidden rounded-2xl transition-transform ease-in-out      flex flex-col h-[24rem] items-center justify-center text-center bg-cover bg-center relative `}
                            style={{ backgroundImage: `url(https://images.pexels.com/photos/730129/pexels-photo-730129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}
                        >
                            <div className={`absolute bg-black bg-opacity-40 inset-0 flex flex-col justify-between items-start p-4 transition-opacity duration-300  `}>
                                <h3 className="  text-left  ">14 Ocak 2025 | Mutfak</h3>
                                <h3 className="text-3xl text-left  ">Tatlı Krizlerinde İlaç Niyetinde Olacak Mekân Önerileri</h3>

                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/blog/routes"
                            className={`hover:scale-105 carousel-card group block overflow-hidden rounded-2xl transition-transform ease-in-out   flex flex-col h-[24rem] items-center justify-center text-center bg-cover bg-center relative `}
                            style={{ backgroundImage: `url(https://images.pexels.com/photos/5745818/pexels-photo-5745818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}
                        >
                            <div className={`absolute bg-black bg-opacity-40 inset-0 flex flex-col justify-between items-start p-4 transition-opacity duration-300  `}>

                                <h3 className="  text-left  ">9 Jul 2023 | Araştırma</h3>
                                <h3 className="text-3xl text-left  ">Standy ile Rota Rehberin: Keşfetmenin Yeni Yolu!</h3>

                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/blog/summer-2024"
                            className={`hover:scale-105 carousel-card group block overflow-hidden rounded-2xl transition-transform ease-in-out   flex flex-col h-[24rem] items-center justify-center text-center bg-cover bg-center relative `}
                            style={{ backgroundImage: `url(https://images.pexels.com/photos/18961673/pexels-photo-18961673/free-photo-of-deniz-plaj-tatil-insanlar.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load)` }}
                        >

                            <div className={`absolute bg-black bg-opacity-40 inset-0 flex flex-col justify-between items-start p-4 transition-opacity duration-300  `}>
                                <h3 className="  text-left  ">27 June 2024 | Duyuru</h3>
                                <h3 className="text-3xl text-left  ">Summer 2024</h3>

                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/blog/standy-region-codes"
                            className={`hover:scale-105 carousel-card group block overflow-hidden rounded-2xl transition-transform ease-in-out   flex flex-col h-[24rem] items-center justify-center text-center bg-cover bg-center relative `}
                            style={{ backgroundImage: `url(blog/region-codes/region-codes-img-1.png)` }}>
                            <div className={`absolute bg-black bg-opacity-40 inset-0 flex flex-col justify-between items-start p-4 transition-opacity duration-300  `}>
                                <h3 className="   text-left  ">4 Jan 2024 | Araştırma</h3>
                                <h3 className="text-3xl text-left  ">Standy Bölge Kodları ile İndirimleri Artırmaya Başla!</h3>

                            </div>

                        </a>
                    </li>
                    <li>
                        <a
                            href="/blog/gece-hayati-olmazsa-olmaz"
                            className={`hover:scale-105 carousel-card group block overflow-hidden rounded-2xl transition-transform ease-in-out   flex flex-col h-[24rem] items-center justify-center text-center bg-cover bg-center relative `}
                            style={{ backgroundImage: `url(https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}>
                            <div className={`absolute bg-black bg-opacity-40 inset-0 flex flex-col justify-between items-start p-4 transition-opacity duration-300  `}>
                                <h3 className="   text-left  ">12 Jan 2024 | Turizm</h3>
                                <h3 className="text-3xl text-left  ">Gece Hayatı Olmazsa Olmaz</h3>

                            </div>

                        </a>
                    </li>
                    <li>
                        <a
                            href="/blog/bisikletinizi-kapin"
                            className={`hover:scale-105 carousel-card group block overflow-hidden rounded-2xl transition-transform ease-in-out   flex flex-col h-[24rem] items-center justify-center text-center bg-cover bg-center relative `}
                            style={{ backgroundImage: `url(https://images.pexels.com/photos/3082227/pexels-photo-3082227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}>
                            <div className={`absolute bg-black bg-opacity-40 inset-0 flex flex-col justify-between items-start p-4 transition-opacity duration-300  `}>
                                <h3 className="   text-left  ">5 Jan 2024 | Turizm</h3>
                                <h3 className="text-3xl text-left  ">Bisikletinizi Kapın!</h3>

                            </div>

                        </a>
                    </li>
                    <li>
                        <a
                            href="/blog/adrenalin-mi-lazim"
                            className={`hover:scale-105 carousel-card group block overflow-hidden rounded-2xl transition-transform ease-in-out   flex flex-col h-[24rem] items-center justify-center text-center bg-cover bg-center relative `}
                            style={{ backgroundImage: `url(https://images.pexels.com/photos/7925746/pexels-photo-7925746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}>
                            <div className={`absolute bg-black bg-opacity-40 inset-0 flex flex-col justify-between items-start p-4 transition-opacity duration-300  `}>
                                <h3 className="   text-left  ">10 Jan 2024 | Turizm</h3>
                                <h3 className="text-3xl text-left  ">Adrenalin mi Lazım?</h3>

                            </div>

                        </a>
                    </li>

                    <li>
                        <a
                            href="/blog/cocuklar-olmadan-olmaz"
                            className={`hover:scale-105 carousel-card group block overflow-hidden rounded-2xl transition-transform ease-in-out   flex flex-col h-[24rem] items-center justify-center text-center bg-cover bg-center relative `}
                            style={{ backgroundImage: `url(https://images.pexels.com/photos/15171578/pexels-photo-15171578/free-photo-of-a-girl-sitting-on-his-fathers-shoulders-near-a-field-with-giraffes-in-a-zoo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}>
                            <div className={`absolute bg-black bg-opacity-40 inset-0 flex flex-col justify-between items-start p-4 transition-opacity duration-300  `}>
                                <h3 className="   text-left  ">20 Jan 2024 | Turizm</h3>
                                <h3 className="text-3xl text-left  ">Çocuklar Olmadan Olmaz</h3>

                            </div>

                        </a>
                    </li>
                    <li>
                        <a
                            href="/blog/festivale-mi-konsere-mi"
                            className={`hover:scale-105 carousel-card group block overflow-hidden rounded-2xl transition-transform ease-in-out   flex flex-col h-[24rem] items-center justify-center text-center bg-cover bg-center relative `}
                            style={{ backgroundImage: `url(https://images.pexels.com/photos/1259614/pexels-photo-1259614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}>
                            <div className={`absolute bg-black bg-opacity-40 inset-0 flex flex-col justify-between items-start p-4 transition-opacity duration-300  `}>
                                <h3 className="   text-left  ">1 Feb 2024 | Turizm</h3>
                                <h3 className="text-3xl text-left  ">Festivale mi Konsere mi?</h3>

                            </div>

                        </a>
                    </li>
                </ul>
            </div>
        </section>



    </div>
    )
}
export default Blog;