import BlogNavbar from "@/components/blog/navbar";
import { Bedtime, Bolt, Hiking, LunchDining } from "@mui/icons-material";
import Head from "next/head";

function Blog() {
    return (<div className="text-standy-white">
        <Head>
            <title>Festivale mi Konsere mi?</title>
        </Head>
        <header >
            <BlogNavbar />
        </header>
        <div className="py-24">
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >
                <div className="w-full mx-auto mb-3 text-center md:w-2/3">
                    <p className="mb-3 text-xl         ">
                        <time>1 Feb 2024</time>
                    </p>
                    <h1 className="  text-3xl     md:leading-tight  " title="Turist Değil Gezgin ol">
                        Festivale mi Konsere mi?
                    </h1>
                </div>

                <div className="mx-auto max-w-xl text-md text-center   prose">
                    <p>
                        Hayat, rutinden ibaret olmamalı! Eğer siz de şehrin size sunduğu heyecanı ve enerjiyi yaşamak istiyorsanız, o zaman doğru yerdesiniz! Standy ile birlikte şehrin en coşkulu etkinliklerine, festivallerine ve konserlerine doğru bir yolculuğa var mısınız?
                    </p>

                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/1259614/pexels-photo-1259614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Unutun sıradan gezileri! Standy size şehrin ruhunu hissettirecek, yerel halkın coşkusuna ortak olacağınız ve unutulmaz anılar biriktireceğiniz etkinlikleri keşfetme imkanı sunuyor. Hazır olun, çünkü festival coşkusu sizi bekliyor!                </div>


            </article>

            <div className="my-10 ">
                <img
                    className="object-cover  object-center w-screen  h-[30rem] shadow-lg  "
                    src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                />
            </div>
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >



                <h1 className="max-w-screen-md text-3xl leading-loose mx-auto text-left">
                    Festivallerin Renkli Dünyası
                </h1>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy ile şehrin en popüler festivallerini keşfedin. Müzik festivallerinden gastronomi festivallerine, film festivallerinden geleneksel halk festivallerine kadar geniş bir yelpazede size hitap eden etkinlikleri Standy ile bulabilir ve rengarenk bir atmosferin tadını çıkarabilirsiniz.
                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover object-bottom w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
                    />
                </div>
                <h1 className="max-w-screen-md text-3xl leading-loose mx-auto text-left">
                    Konser Heyecanı
                </h1>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy size hem uluslararası yıldızların konserlerini hem de yerel sanatçıların performanslarını takip etme imkanı sunuyor. Adrenalin yükselen anlar, coşkulu kalabalıklar ve unutulmaz müzik deneyimleri sizi bekliyor!                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/1434625/pexels-photo-1434625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
                <h1 className="max-w-screen-md text-3xl leading-loose mx-auto text-left">
                    Kültürün Kalbinde
                </h1>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy ile şehrin sanat gösterileri, sergileri, tiyatro oyunları ve kültürel etkinlikleri keşfedin. Farklı kültürleri yakından tanıma ve şehrin sanat damarını hissetme fırsatı yakalayın.                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy size sadece etkinliklerin tarih ve yer bilgilerini vermekle kalmayacak, aynı zamanda etkinliklere ulaşım seçenekleri, bilet satın alma platformları ve hatta etkinlik sırasında ihtiyacınız olabilecek şeyleri de önerebilir. Böylece siz sadece coşkuyu ve eğlenceyi doyasıyla yaşarsınız.                </div>

                <div className=" sm:grid-cols-2 lg:grid-cols-3 grid my-10    gap-4">
                    <div className="relative h-[20rem]   overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src="https://images.pexels.com/photos/7245323/pexels-photo-7245323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="relative  items-end bg-black h-full bg-opacity-40">
                            <div className="p-4 items-end justify-end sm:p-6">
                                <h3 className="  text-2xl text-white">Ulaşım Seçenekleri</h3>

                            </div>
                        </div>
                    </div>
                    <div className="relative  h-[20rem]  overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src="https://images.pexels.com/photos/6353676/pexels-photo-6353676.jpeg?auto=compress&cs=tinysrgb&w=800"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="relative  items-end bg-black h-full bg-opacity-40">
                            <div className="p-4 items-end justify-end sm:p-6">
                                <h3 className="  text-2xl text-white">Bilet Satın Alma Platformları</h3>

                            </div>
                        </div>
                    </div>
                    <div className="relative  h-[20rem]  overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src="https://images.pexels.com/photos/2479833/pexels-photo-2479833.jpeg?auto=compress&cs=tinysrgb&w=800"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="relative  items-end bg-black h-full bg-opacity-40">
                            <div className="p-4 items-end justify-end sm:p-6">
                                <h3 className="  text-2xl text-white">Diğer</h3>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Festival coşkusunu size özel bir deneyime dönüştürmek de Standy ile mümkün! Standy ile ilginizi çeken etkinlikleri seçerek kendinize özel bir festival rotası oluşturabilirsiniz. Hatta arkadaşlarınızı da rotanıza ekleyerek birlikte unutulmaz bir festival macerası yaşayabilirsiniz.                </div>

                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full   rounded-lg shadow-lg  "
                        src="/blog/standy-assistant/standy-assistant-img-1.png"
                        alt=""
                    />
                </div>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Bavulunuzu festival kıyafetlerinizle doldurun, Standy'yi açın ve şehrin size sunduğu coşkuya hazırlanın! Festival coşkusunda kaybolun, yeni kültürler keşfedin, müziğin ritmine kendinizi bırakın ve Standy ile unutulmaz anılar biriktirin! Kim bilir, belki de şehrin en coşkulu etkinliğini siz keşfedeceksiniz!                </div>
            </article>

        </div>



    </div>
    )
}
export default Blog;