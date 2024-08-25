import BlogNavbar from "@/components/blog/navbar";
import { EnergySavingsLeaf, Money, School } from "@mui/icons-material";
import Head from "next/head";

function Blog() {
    return (<div className="text-standy-white">
        <Head>
            <title>Standy Bölge Kodları ile İndirimleri Artırmaya Başla!</title>
        </Head>
        <header >
            <BlogNavbar />
        </header>
        <div className="py-24">
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >
                <div className="w-full mx-auto mb-3 text-center md:w-2/3">
                    <p className="mb-3 text-xl         ">
                        <time>4 Jan 2024</time>
                    </p>
                    <h1 className="  text-3xl     md:leading-tight  " title="Turist Değil Gezgin ol">
                        Standy Bölge Kodları ile İndirimleri Artırmaya Başla!
                    </h1>

                </div>

                <div className="mx-auto max-w-xl text-md text-center   prose">
                    <p>
                        Daha Fazla İndirim mi? Standy ile anlaşmalı mekanlarda ekstra indirimler seni bekliyor! Nasıl mı? Bölge kodları ile tanış!                    </p>

                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover object-center w-full h-[40rem] rounded-lg shadow-lg  "
                        src="/blog/region-codes/region-codes-img-1.png"
                        alt=""
                    />
                </div>
                <h1 className="max-w-screen-md text-3xl leading-loose mx-auto text-left">
                    Bölge Kodu Nedir?
                </h1>
                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">

                    Standy uygulamasına gireceğin özel bir kod sayesinde üniversiten, iş yerin veya yaşadığın bölgedeki anlaşmalı kafe ve restoranlarda daha fazla indirim kazanabilirsin.                </div>



            </article>

            <div className="my-10 ">
                <img
                    className="object-cover  object-center w-screen h-[30rem] shadow-lg  "
                    src="/blog/region-codes/region-codes-img-2.png"
                    alt=""
                />
            </div>
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >


                <h1 className="max-w-screen-md text-3xl leading-loose mx-auto text-left">
                    Nasıl Kullanırım?
                </h1>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">

                    Çok basit! Standy uygulamasında "Bölge Kodu" bölümüne git ve kodunu gir. İşte bu kadar! Artık sana özel indirimler aktif.
                </div>

                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover object-center w-full h-[40rem] rounded-lg shadow-lg  "
                        src="/blog/region-codes/region-codes-img-3.png"
                        alt=""
                    />
                </div>


                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="  mb-10 sm:mx-auto">
                        <h2 className="     text-3xl     text-left    ">
                            Neden Kullanmalısın?
                        </h2>
                    </div>
                    <div className="grid gap-12 row-gap-8 lg:grid-cols-3">
                        <div className="flex">
                            <div className="mr-4">
                                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-standy-light-pink">
                                    <EnergySavingsLeaf></EnergySavingsLeaf>
                                </div>
                            </div>
                            <div>
                                <h6 className="mb-2 font-semibold leading-5">Daha Çok Tasarruf</h6>
                                <p className="text-sm ">
                                    Standy'nin standart indirimlerine ek olarak bölge kodu ile ekstra kazanç sağla. Arkadaşlarınla takılmak, öğle yemeği yemek artık çok daha uygun!                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-4">
                                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-standy-light-pink">
                                    <School></School>
                                </div>
                            </div>
                            <div>
                                <h6 className="mb-2 font-semibold leading-5">Üniversiteliler İçin İdeal</h6>
                                <p className="text-sm ">
                                    Kampüs hayatının tadını çıkar! Standy ile üniversite yakınındaki anlaşmalı mekanlarda ekstra indirimler seni bekliyor.                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-4">
                                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-standy-light-pink">
                                    <Money></Money>
                                </div>
                            </div>
                            <div>
                                <h6 className="mb-2 font-semibold leading-5">Kazan-Kazan</h6>
                                <p className="text-sm ">
                                    Standy bölge kodlarını kullanarak birçok yeni yerden indirim kazanabilir, bunu yaparken yerli esnafa da yardım etmiş olursun. Kazan-Kazan!                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover object-center w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/12935051/pexels-photo-12935051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Hadi bekleme! Standy uygulamasını indir, bölge kodunu öğren ve şehrini daha avantajlı keşfetmeye başla!
                </div>

            </article>

        </div>



    </div>
    )
}
export default Blog;