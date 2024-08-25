import BlogNavbar from "@/components/blog/navbar";
import Head from "next/head";

function Blog() {
    return (<div className="text-standy-white">
        <Head>
            <title>Turist Değil Gezgin ol</title>
        </Head>
        <header >
            <BlogNavbar />
        </header>
        <div className="py-24">
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >
                <div className="w-full mx-auto mb-3 text-center md:w-2/3">
                    <p className="mb-3 text-xl         ">
                        <time>11 June 2023</time>
                    </p>
                    <h1 className="  text-3xl     md:leading-tight  " title="Turist Değil Gezgin ol">
                        Turist Değil Gezgin ol
                    </h1>

                </div>

                <div className="mx-auto max-w-xl text-md text-center   prose">
                    <p>
                        Tatil denince akla hemen turistik yerler, kalabalık plajlar ve bitmek bilmeyen hediyelik eşya tezgahları geliyor olabilir. Ancak ya size gezmenin farklı bir yolu olduğunu söylesem? Sırt çantanızı hazırlayın, çünkü bu sefer "gezgin" olarak şehrin keşfedilmemiş köşelerine yolculuğa çıkıyoruz!

                    </p>

                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/2242433/pexels-photo-2242433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Turist olmak, belli bir rotayı takip ederek popüler mekanları ziyaret etmektir. Gezgin olmak ise, şehrin ruhunu hissetmek, yerel halkla kaynaşmak ve kendinizi sürprizlere bırakmaktır. Arnavut kaldırımlarında kaybolmak, kimsenin bilmediği bir sokak müzisyeninin şarkısını dinlemek, şehrin en iyi dönerini yerel bir esnafın tavsiyesiyle keşfetmek... İşte gezgin olmanın büyüsü tam da burada yatıyor!
                </div>



            </article>

            <div className="my-10       ">
                <img
                    className="object-cover  object-bottom w-screen h-[30rem] shadow-lg  "
                    src="https://images.pexels.com/photos/2010701/pexels-photo-2010701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                />
            </div>
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >



                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Peki, bilinmeyeni keşfederken kaybolmaktan mı endişeleniyorsunuz? Standy imdadınıza yetişiyor! Standy'nin akıllı rota oluşturucu özelliği ile şehrin turistik olmayan, ama en otantik noktalarını keşfedebilirsiniz. Standy size gizli bahçelerden, bağımsız sanat galerilerine, yerel pazarlardan şehrin en lezzetli sokak yemeklerinin yenebileceği küçük lokantalara kadar birçok rotayı önerebilir.
                </div>


                <div className=" sm:grid-cols-2 lg:grid-cols-3 grid my-10    gap-4">
                    <div className="relative h-[20rem]   overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src="https://assets.vogue.com/photos/5b033dc7ed73095e19fdad08/master/w_1600,c_limit/04-green-escapes-secret-city-gardens.jpg"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="relative  items-end bg-black h-full bg-opacity-40">
                            <div className="p-4 items-end justify-end sm:p-6">
                                <h3 className="  text-2xl text-white">Ford Foundation Atrium Garden</h3>
                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                    320 East 43rd Street New York City
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative  h-[20rem]  overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src="https://d7hftxdivxxvm.cloudfront.net/?height=520&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FyRzKYlNwZSbvoffUcnOrkw%2Flarger.jpg&width=692"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="relative  items-end bg-black h-full bg-opacity-40">
                            <div className="p-4 items-end justify-end sm:p-6">
                                <h3 className="  text-2xl text-white">Nexus, Echoes, and Connections                                </h3>
                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                    373 Broadway #215, New York, NY 10013, United States                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative  h-[20rem]  overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src="https://images.getbento.com/accounts/0a6e841d5b5fa9360938579affe0df28/media/images/411762023-06-13_IMG_0842-Olio-e-piuJPEG_FullRes_Q80.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="relative  items-end bg-black h-full bg-opacity-40">
                            <div className="p-4 items-end justify-end sm:p-6">
                                <h3 className="  text-2xl text-white">OLIO E PIÙ                                </h3>
                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                    3 Greenwich Avenue, New York, NY 10014
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Bu sayede şehrin gerçek yüzünü görme, yerel halkla kaynaşma ve unutulmaz anılar biriktirme fırsatı yakalayabilirsiniz. Standy ile rotanızı kişiselleştirebilir, ilginizi çeken yerlere öncelik verebilir ve dilediğiniz zaman keşfedecek yeni yerler ekleyebilirsiniz.

                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/6062628/pexels-photo-6062628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Haydi geleneksel tatil anlayışını yıkalım! Sırt çantasını kapın, şehrin ruhunu keşfedeceğiniz bir geziye çıkın ve Standy ile unutulmaz bir yaz yaşayın! Kim bilir, belki de şehrin en güzel gün batımını sizin keşfedeceğiniz gizli bir tepeden izleme imkanı yakalarsınız!
                </div>

            </article>

        </div>



    </div>
    )
}
export default Blog;