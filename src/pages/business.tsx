import Navbar from "@/components/navbar";
import Head from "next/head";
import { useRef } from "react";

function Business() {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div>
            <Head>
                <title>Standy Business</title>
            </Head>

            <div className="w-full  h-screen " style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <video ref={videoRef} src="/pexels-marygrace-caneba-5452068 (1080p).mp4" className="w-full  h-screen object-cover z-0" autoPlay muted loop playsInline />

                <div style={{ position: 'absolute', zIndex: 1 }}>
                    {/* Your content goes here */}
                    <h1 className="text-7xl  text-center font-din-condensed uppercase">İŞLETMELER İÇİN STANDY</h1>
                    <div className="mt-4 items-center  flex-shrink-0 flex flex-wrap justify-center gap-4">
                        <a
                            className=" inline-block px-4 py-2 rounded-lg text-black   transition duration-300 ease-in-out bg-white hover:bg-standy-pink hover:text-white"
                            href="http://business.standyroutes.com"
                        >
                            Şimdi Başla
                        </a>
                    </div>
                </div>

            </div>


            <div className="bg-standy-light-pink">
                <blockquote className="  mx-auto w-full max-w-screen-xl px-4   py-10      lg:py-24 text-3xl italic font-semibold  ">
                    <svg className="w-8 h-8 text-standy-black   mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                    <p className="text-standy-black">"Yeniliği destekleyin, çünkü değişim hayatın özüdür, bizi ileriye taşır. Durağanlık ise varoluşun sonunu getirir, yenilenme olmadan tıkanırız."</p>
                </blockquote>

            </div>

            <section  >
                <div className="mx-auto    flex items-center bg-standy-black max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative rounded-[24px] h-96 overflow-hidden rounded-lg sm:h-96 lg:order-last lg:h-full">
                            <img
                                alt="pexels-bilakis-17400608"
                                src="pexels-bilakis-17400608.jpg"
                                className="absolute rounded-[24px] inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-4xl font-bold  ">Türkiye'nin Dört Bir Yanına Ulaş: İşletmeni Standy Business ile Büyüt!
                            </h2>

                            <p className="mt-4  ">
                                Standy Business'ın dinamik platformu, işletmenizin her köşesine tanıtım imkânı sunar, böylece markanızı en geniş kitlelere duyurmanızı sağlar. Hemen kaydolun, Türkiye'nin dört bir yanındaki potansiyel müşterilerle bağlantı kurma fırsatını kaçırmayın!


                            </p>

                            <div className="mt-8 sm:mt-8">
                                <a
                                    className=" inline-block px-4 py-2 rounded-lg text-black   transition duration-300 ease-in-out bg-white hover:bg-standy-pink hover:text-white"
                                    href="http://business.standyroutes.com"
                                >
                                    Şimdi Başla
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-standy-white">
                <div className="mx-auto text-standy-black max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-4xl font-bold ">Geniş ve Çeşitli Kullanıcı Tabanıyla Güçlü Bir Platform</h2>


                        <p className="mt-4    ">
                            Platformumuz, çeşitli demografik profillere sahip geniş bir kullanıcı tabanını bir araya getirerek, kapsamlı bir ağ oluşturuyor. Bu çeşitlilik, sunduğumuz ürün ve hizmetlerin geniş kitlelere hitap etme yeteneğini güçlendiriyor.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="flex flex-col rounded-lg bg-pink-200 px-4 py-8 text-center">
                                <dt className="order-last text-lg text-gray-500 font-medium ">Market Hacmi</dt>

                                <dd className="text-4xl font-extrabold text-standy-pink md:text-5xl">$4.8m</dd>
                            </div>

                            <div className="flex flex-col rounded-lg bg-pink-200 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">Anlaşmalı İşletme</dt>

                                <dd className="text-4xl font-extrabold text-standy-pink md:text-5xl">28</dd>
                            </div>

                            <div className="flex flex-col rounded-lg bg-pink-200 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">Aktif Kullanıcı</dt>

                                <dd className="text-4xl font-extrabold text-standy-pink md:text-5xl">10.000+</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>

            <section className="bg-standy-dark-pink" >
                <div className="mx-auto flex items-center   max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative   h-full w-full  overflow-hidden     lg:order-last  ">
                            <img
                                alt="standybusinessiphone"
                                src="standybusinessiphone.png"
                                className="    inset-0 h-full w-full object-contain"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-4xl font-bold  ">Öne Çık, Fark Yarat: Standy Business ile Benzersiz Ol!

                            </h2>

                            <p className="mt-4  ">
                                Standy Business ile işletmenizin farkını ortaya koyun. Sıradan reklam yöntemlerinden sıyrılarak, potansiyel müşterilere doğrudan ve etkili bir şekilde ulaşın. Özelleştirilmiş profilinizi oluşturarak, hizmetlerinizi ve ürünlerinizi benzersiz bir şekilde sergileyin. Standy Business, markanızı öne çıkarmanın ve yeni müşteri kitlelerine ulaşmanın yenilikçi yolu.


                            </p>

                            <div className="mt-8 sm:mt-8">
                                <a
                                    className=" inline-block px-4 py-2 rounded-lg text-black   transition duration-300 ease-in-out bg-white hover:bg-standy-pink hover:text-white"
                                    href="http://business.standyroutes.com"
                                >
                                    Şimdi Başla
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section  >
                <div className="mx-auto flex items-center   max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative   h-full w-full  overflow-hidden     lg:order-last  ">
                            <img
                                alt="standyadvertised"
                                src="standyadvertised.png"
                                className="    inset-0 h-full w-full object-contain"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-4xl font-bold  ">Düşük Maliyetle Yüksek Kalite: Standy Business ile Fark Yaratın!


                            </h2>

                            <p className="mt-4  ">
                                Standy Business, işletmenizin bütçesini zorlamadan yüksek kaliteli reklam imkanları sunar. Uygun ve rakipsiz bir fiyatla, işletmenizin markasını çok daha geniş bir kitleye tanıtmanıza olanak sağlıyoruz. Özel tasarlanmış reklam stratejilerimiz ile kaliteyi ve etkiyi asla ödün vermeden, işletmenizin görünürlüğünü artırıyoruz. Standy Business, uygun maliyetle büyük başarılar elde etmek isteyen işletmelerin tercihi!



                            </p>

                            <div className="mt-8 sm:mt-8">
                                <a
                                    className=" inline-block px-4 py-2 rounded-lg text-black   transition duration-300 ease-in-out bg-white hover:bg-standy-pink hover:text-white"
                                    href="http://business.standyroutes.com"
                                >
                                    Şimdi Başla
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" text-standy-black      bg-standy-light-pink">
                <div className="space-y-4 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <h2 className="text-4xl mb-6  font-bold  ">Sıkça Sorulan Sorular
                    </h2>
                    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-standy-white p-4  "
                        >
                            <h2 className="font-medium">Neden Standy Business'i tercih etmeliyim?</h2>

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
                            Standy Business'ı tercih etmek, işletmenizin tanıtım ve büyüme stratejilerinde benzersiz bir avantaj sağlar. Teknoloji ve veri analizi ile desteklenen hizmetlerimiz, doğru müşterilere ulaşmanızı kolaylaştırır, böylece zaman ve kaynaklarınızı en etkin şekilde kullanabilirsiniz.


                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-standy-white  p-4  "
                        >
                            <h2 className="font-medium">Standy Business'in tanıtım süreci nasıl işler?</h2>

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
                            Standy Business'ın tanıtım süreci, işletmelerin hedef kitlesine özel bir yaklaşımla tasarlanmıştır. Özellikle üniversitelerde ve sosyal medyada aktif olan kullanıcılarımızı, beğenebilecekleri mekanlarla eşleştiriyor, bu sayede işletmenize doğru kitleye doğrudan ulaşma imkânı sunuyoruz. Kullanıcıların ilgi alanları ve tercihleri doğrultusunda, onlara uygun mekanlar önererek hem işletmelerin tanıtımını yapıyor, hem de kullanıcılara kişiye özel bir deneyim sunuyoruz. Standy Business, hedef kitlenize en uygun şekilde ulaşmanızı sağlayarak, markanızın etkin ve anlamlı bir şekilde tanıtılmasına yardımcı olur.


                        </p>
                    </details>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-standy-white  p-4  "
                        >
                            <h2 className="font-medium">Yardım ya da destek ihtiyacım olduğunda ne yapmalıyım?</h2>

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
                            Standy Business, işletmenizin sorularına hızla yanıt vermek için özel bir e-posta destek sistemine sahiptir. Yardım veya destek ihtiyacınız olduğunda bize e-posta yoluyla 7 gün 24 saat ulaşabilir, geri dönütünüzü en geç 1 gün içinde alabilirsiniz. Deneyimli destek ekibimiz, her sorunuz için özelleştirilmiş yanıtlar sunmaya hazırdır. Standy Business, işletmenizin her zaman yanında.



                        </p>
                    </details>
                </div>
            </section>


        </div>
    )
}
export default Business;