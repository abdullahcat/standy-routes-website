import BlogNavbar from "@/components/creator/blogNavbar";
import { Accessibility, AccessibilityNew, Discount, DiscountOutlined, Explore, ExploreOffOutlined, ExploreOutlined, LocationCity, LocationOn, MobileFriendly, Phone, QuestionAnswer, QuestionMark, TimeToLeave, Timer, TimerOutlined } from "@mui/icons-material";
import Head from "next/head";

function Blog() {
    return (<div className="text-standy-white">
        <Head>
            <title>Standy ile Rota Rehberin: Keşfetmenin Yeni Yolu!</title>
        </Head>
        <header >
            <BlogNavbar />
        </header>
        <div className="py-24">
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >
                <div className="w-full mx-auto mb-3 text-center md:w-2/3">
                    <p className="mb-3 text-xl         ">
                        <time>9 Jul 2024</time>
                    </p>
                    <h1 className="  text-3xl     md:leading-tight  " title="Turist Değil Gezgin ol">
                        Standy ile Rota Rehberin: Keşfetmenin Yeni Yolu!
                    </h1>

                </div>

                <div className="mx-auto max-w-xl text-md text-center   prose">
                    <p>
                        Zaman mı dar? Fikir mi yok? Standy rotaları tam sana göre!
                    </p>

                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/5745818/pexels-photo-5745818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Turistik klişeler artık tarih oldu. Devir yeni yerler keşfetme devri. Sadece 3 Soru ile Standy Asistanın sana özel sınırsız rota oluştursun. İstediğin rotayı seç, değiştir, kaydet veya paylaş!
                </div>


                <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  ">

                    <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-standy-light-pink">
                                    <QuestionMark></QuestionMark>
                                </div>
                                <h6 className="mb-2   leading-5">Ne yapmak istiyorsun? </h6>
                                <p className="mb-3 text-sm ">
                                    Canın kebap mı çekiyor? Yoksa keyifli bir kahve molası mı? Standy sana yemek, eğlence, kültür-sanat gibi farklı kategorilerde seçenekler sunuyor.
                                </p>
                            </div>

                        </div>

                        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-standy-light-pink">
                                    <LocationOn></LocationOn>
                                </div>
                                <h6 className="mb-2   leading-5">Nerede olmak istiyorsun? </h6>
                                <p className="mb-3 text-sm ">
                                    Konumunu seç, Standy sana yakın rotalar önersin. Hem vakitten kazandırır hem de yeni yerler keşfetmene yardımcı olur.                                </p>
                            </div>

                        </div>
                        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-standy-light-pink">
                                    <AccessibilityNew></AccessibilityNew>
                                </div>
                                <h6 className="mb-2   leading-5">Kişiselleştir! </h6>
                                <p className="mb-3 text-sm ">
                                    Standy sadece seçenek sunmakla kalmaz, senin tercihlerine göre de rotalar oluşturur. İtalyan mutfağı mı arıyorsun? Yoksa şöyle sulu bir hamburger mi? Sorun değil! Standy senin isteklerini karşılayan rotalar hazırlar.                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </article>

            <div className="my-10 ">
                <img
                    className="object-cover  object-center w-screen h-[30rem] shadow-lg  "
                    src="/blog/summer-2024/summer-2024-img-1.png"
                    alt=""
                />
            </div>
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >
                <div className="px-4 py-10 mx-auto   lg:max-w-screen-xl   ">
                    <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
                        <div className="lg:w-1/2">
                            <h2 className="max-w-md mb-6  text-3xl  tracking-tight    sm:leading-none xl:max-w-lg">
                                Neden Standy Rotalar?
                            </h2>
                        </div>

                    </div>
                    <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-standy-light-pink">
                                <TimerOutlined></TimerOutlined>
                            </div>
                            <h6 className="mb-2   leading-5">Zamandan Tasarruf Et</h6>
                            <p className="mb-3 text-sm ">
                                Artık plan yapmak için saatler harcamaya gerek yok. Standy senin yerine düşünüyor ve sana harika öneriler sunuyor.
                            </p>

                        </div>
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-standy-light-pink">
                                <ExploreOutlined></ExploreOutlined>
                            </div>
                            <h6 className="mb-2   leading-5">Yeni Yerler Keşfet</h6>
                            <p className="mb-3 text-sm ">
                                Alışılmışın dışına çık! Standy seni şehrin keşfedilmemiş köşelerine götürüyor.
                            </p>

                        </div>
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-standy-light-pink">
                                <DiscountOutlined></DiscountOutlined>
                            </div>
                            <h6 className="mb-2   leading-5">İndirim Kazan</h6>
                            <p className="mb-3 text-sm ">
                                Standy ile anlaşmalı kafe ve restoranlarda özel indirimlerden faydalan. Lezzetli yemekler ve eğlenceli aktiviteler artık daha hesaplı!
                            </p>

                        </div>
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-standy-light-pink">
                                <MobileFriendly></MobileFriendly>
                            </div>
                            <h6 className="mb-2   leading-5">Her Zaman Rehberin Cebinde</h6>
                            <p className="mb-3 text-sm ">
                                Standy her daim senin yanında. Beğendiğin ve kaydettiğin rotalara her zaman kütüphanenden ulaşabilirsin.                            </p>

                        </div>
                    </div>
                </div>


                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/8633909/pexels-photo-8633909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>

                <h2 className="    text-center  text-3xl        ">
                    Daha Fazlası mı Var? Standy rotasının yanı sıra, seni bekleyen başka sürprizler de var!
                </h2>

                <div className="px-4 py-10 mx-auto  ">
                    <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <div className="max-w-xl mb-6">

                                <h2 className="max-w-lg mb-6   text-3xl   tracking-tight   sm:leading-none">
                                    Şehir Rehberleri
                                </h2>
                                <p className="text-base  md:text-lg">
                                    Hangi şehirdeysen Standy sana harika öneriler sunuyor. Gezilecek yerler, en iyi restoranlar ve daha fazlası Standy ile senin parmaklarının ucunda!
                                </p>
                            </div>

                        </div>
                        <div className="relative">
                            <img
                                src="/blog/routes/routes-img-1.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="px-4 py-10 mx-auto  ">
                    <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                        <div className="flex flex-col justify-center lg:order-last">
                            <div className="  xl:ml-20 mb-6">

                                <h2 className="max-w-lg mb-6   text-3xl   tracking-tight   sm:leading-none">
                                    Standy Onaylı Rotaları
                                </h2>
                                <p className="   md:text-lg">
                                    Daha önce keşfedilmiş harika rotalar mı arıyorsun? Standy onaylı rotalar sana ilham verecek!                                 </p>
                            </div>

                        </div>
                        <div className="relative ">
                            <img className="object-cover w-[40rem] h-full rounded-lg shadow-lg  "

                                src="/blog/routes/routes-img-2.png" alt="" />
                        </div>
                    </div>
                </div>

            </article>

        </div >



    </div >
    )
}
export default Blog;