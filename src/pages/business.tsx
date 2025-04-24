import Head from "next/head";
import { People, AdsClick, BarChart, SupportAgent, Verified, School, Campaign, Analytics } from "@mui/icons-material";

import Navbar from "@/components/navbar";
import Link from "next/link";
import BusinessNavbar from "@/components/business/navbar";
import BusinessTestimonials from "@/components/business/testimonials";
import BusinessCTA from "@/components/business/cta";
import { motion } from "framer-motion";

 
const features = [
    { icon: <Campaign />, text: "Tamamen ücretsiz reklam." },
    { icon: <School />, text: "Okul içi etkinliklerle fiziksel tanıtım." },
    { icon: <Analytics />, text: "Uygulama içi konum bazlı öne çıkma." },
    { icon: <BarChart />, text: "Hedefli kampanya analitiği ile satış artırımı." },
    { icon: <AdsClick />, text: "Sıfır maliyetli dijital pazarlama desteği." },
    { icon: <People />, text: "Markanız için özel yarışma ve kampanya tasarımı." },
    { icon: <SupportAgent />, text: "Ürün tanıtımlarınızın öğrenciler arasında konuşulması." }
];

function Business() {
    return (
        <div className='text-standy-black'>
            <Head>
                <title>Standy Business</title>
            </Head>
            <header>
                <BusinessNavbar />
            </header>

            {/* Hero Section */}
            <section className='pt-32 pb-10 items-center justify-center flex-col flex text-cherry-blossom-pink bg-rose-red text-center space-y-6 px-10'>
                <h1 className='font-condensed uppercase leading-20 font-black xl:text-8xl md:text-7xl text-6xl'>
                    YENİ MÜŞTERİLERE<br /> "MERHABA" DE!
                </h1>
                <p className='text-standy-white max-w-2xl text-center mx-auto text-xl'>
                    Standy ile işletmenizi binlerce öğrencinin keşfettiği bir ağın parçası yapın. 
                    Dijital kampanyalar, fiziksel etkinlikler ve okul içi tanıtımlar bir arada.
                </p>

                <div className='flex items-center justify-center space-x-4'>
                    <Link
                        className="inline-flex px-5 py-2 rounded-full transition duration-300 ease-in-out border-cherry-blossom-pink border hover:border-mimi-pink bg-cherry-blossom-pink text-standy-black hover:bg-mimi-pink"
                        href="https://business.standyroutes.com"
                        target="_blank"
                    >
                        Başlayalım
                    </Link>
                    <Link
                        className="inline-flex px-5 py-2 rounded-full transition duration-300 ease-in-out border-standy-white border hover:border-mimi-pink text-standy-white hover:text-standy-black hover:bg-mimi-pink"
                        href="/docs/standy_business_document.pdf"
                        target="_blank"
                    >
                        Dosyayı İndir
                    </Link>
                </div>

                <div className="max-w-md pt-5 items-center justify-center flex h-11/12 overflow-hidden">
                    <img
                        alt="standy_business_iphone"
                        src="standy-phone-business.png"
                        className="inset-0 h-full w-full object-contain"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-standy-white">
                <div className="w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mx-2 mb-4">
                            İşletmeniz için o kadar çok şey yapıyoruz ki ekrana sığmadı!
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Standy, sadece indirim sunmaz. Size müşteri getirir, görünürlük sağlar ve 
                            müşteriler ile sürdürülebilir bir bağ kurmanıza destek olur.
                        </p>
                    </div>

                    <div className="w-full overflow-hidden relative pt-4">
                        <motion.div
                            className="flex space-x-8 px-4"
                            animate={{ 
                                x: [0, -2000]
                            }}
                            transition={{ 
                                 duration: 30,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {[...features, ...features, ...features].map((feature, index) => (
                                <div key={index} className="flex-shrink-0 w-72  ">
                                    <div className="bg-white rounded-2xl   p-6 hover:bg-mimi-pink transition-shadow duration-300 h-full flex flex-col">
                                        <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-full bg-standy-pink text-white flex-shrink-0">
                                            {feature.icon}
                                        </div>
                                        <p className="text-lg text-gray-800 leading-relaxed flex-grow">{feature.text}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

         
 
            {/* Field Presence Section */}
            <section className="py-16    ">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl  ">
                                  Üniversite ve Lise Etkinliklerinde Standınız Hazır
                            </h2>
                            <p className="text-xl">
                                Okulların bahar şenliklerinden kültür festivallerine, yüzlerce öğrencinin 
                                katıldığı etkinliklerde işletmenizi bütün öğrencilere sunuyoruz.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <span className="mr-2">•</span>
                                    20+ etkinlikte Standy standı.
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">•</span>
                                    Farklı lise ve üniversitelerde 20+ temsilci.
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">•</span>
                                    Sosyal medya desteği ve görünürlük.
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">•</span>
                                    Öğrenci gruplarında tanıtımlar.
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-96">
                            <img
                                src="/sponsors/stand-design.png"
                                alt="Standy Event Stand"
                                className="rounded-lg object-contain w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Work with Standy Section */}
            <section className="py-16 bg-standy-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl   mb-6">Standy ile Nasıl Çalışırım?</h2>
                        <p className="text-lg mt-4 max-w-3xl mx-auto">
                            İşletmenizi uygulamada filtrelere göre görünür kılın. İndirimlerinizi belirleyin, 
                            biz geri kalan her şeyi halledelim. İşletmeniz ücretsiz görünür 
                            hale gelsin, istediğiniz kampanyalarla onları mekanınıza davet edin!
                        </p>
                    </div>
                    
                    <div className="max-w-5xl mx-auto relative">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-standy-pink transform -translate-x-1/2"></div>
                        
                        {/* Step 1 - Left */}
                        <div className="flex flex-col md:flex-row items-center mb-12 relative">
                            <div className="flex-1 order-2 md:order-1">
                                <div className="bg-white p-5 rounded-3xl shadow-sm mr-6">
                                    <h3 className="text-lg font-semibold mb-2">Kayıt Olun ve Onaylanın</h3>
                                    <p className="text-gray-600 text-sm">İşletmenizle ilgili bilgileri girin ve Standy tarafından onaylanın.</p>
                                </div>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-standy-pink text-white flex items-center justify-center text-2xl font-bold z-10 order-1 md:order-2 mb-4 md:mb-0">1</div>
                            <div className="flex-1 order-3"></div>
                        </div>
                        
                        {/* Step 2 - Right */}
                        <div className="flex flex-col md:flex-row items-center mb-12 relative">
                            <div className="flex-1 order-1"></div>
                            <div className="w-16 h-16 rounded-full bg-standy-pink text-white flex items-center justify-center text-2xl font-bold z-10 order-1 md:order-2 mb-4 md:mb-0">2</div>
                            <div className="flex-1 order-2 md:order-3">
                                <div className="bg-white p-5 rounded-3xl shadow-sm ml-6">
                                    <h3 className="text-lg font-semibold mb-2">Panel Kurulumu Yapalım</h3>
                                    <p className="text-gray-600 text-sm">Kurulumu yapalım ve nasıl çalıştığını gösterelim.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Step 3 - Left */}
                        <div className="flex flex-col md:flex-row items-center mb-12 relative">
                            <div className="flex-1 order-2 md:order-1">
                                <div className="bg-white p-5 rounded-3xl shadow-sm mr-6">
                                    <h3 className="text-lg font-semibold mb-2">İndirim Uygulayın</h3>
                                    <p className="text-gray-600 text-sm">Standy paneli üzerinden müşterilerin karekodlarını okutarak indirimleri uygulayın.</p>
                                </div>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-standy-pink text-white flex items-center justify-center text-2xl font-bold z-10 order-1 md:order-2 mb-4 md:mb-0">3</div>
                            <div className="flex-1 order-3"></div>
                        </div>
                        
                        {/* Step 4 - Right */}
                        <div className="flex flex-col md:flex-row items-center mb-12 relative">
                            <div className="flex-1 order-1"></div>
                            <div className="w-16 h-16 rounded-full bg-standy-pink text-white flex items-center justify-center text-2xl font-bold z-10 order-1 md:order-2 mb-4 md:mb-0">4</div>
                            <div className="flex-1 order-2 md:order-3">
                                <div className="bg-white p-5 rounded-3xl shadow-sm ml-6">
                                    <h3 className="text-lg font-semibold mb-2">İstatistiklerinizi Takip Edin</h3>
                                    <p className="text-gray-600 text-sm">Tıklanma, reklam, indirim ve kazanç gibi tüm istatistiklerinizi Standy panelinden takip edin.</p>
                                </div>
                            </div>
                        </div>

                        {/* QR Link Section */}
                        <div className="flex z-30 justify-center items-center mt-16">
                            <Link
                                href="https://business.standyroutes.com"
                                target="_blank"
                                className="flex items-center gap-4 bg-standy-pink text-white px-4 py-2 rounded-full hover:bg-standy-dark-pink transition-colors duration-300"
                            >
                                <span className=" ">Hemen Başla</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Showcase Section */}
            <section className="py-16  ">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl   mb-6">
                             İşletmeniz Uygulamada Nasıl Görünür?
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto">
                            İster Yüzdelik İndirim, ister bir kahve ısmarlaması, ister sadakat programı. 
                            Siz isteyin biz yapalım!
                        </p>
 
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white/10 backdrop-blur-sm px-12 py-4 rounded-lg">
                            <img
                                src="/business/main-menu.png"
                                alt="Ana Ekran"
                                className="rounded-lg w-full"
                            />
                            <p className="text-center mt-4">Ana Ekran</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm px-12 py-4 rounded-lg">
                            <img
                                src="/business/select-campaign.png"
                                alt="Kampanyalar"
                                className="rounded-lg w-full"
                            />
                            <p className="text-center mt-4">Kampanyalar</p>
                  </div>
                        <div className="bg-white/10 backdrop-blur-sm px-12 py-4 rounded-lg">
                            <img
                                src="/business/use-history.png"
                                alt="İndirim Geçmişi"
                                className="rounded-lg w-full"
                            />
                            <p className="text-center mt-4">İndirim Geçmişi</p>
                        </div>
                    </div>
                </div>
            </section>
           

            {/* Business Panel Section */}
            <section className="py-16 bg-standy-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl  ">
                                Kampanyalarınızı Kendi Panelinizden Yönetin
                            </h2>
                            <p className="text-xl">
                                İşletme panelimizle kampanyalarınızı istediğiniz zaman başlatın, 
                                düzenleyin ve analiz edin. Üstelik tüm sistem tamamen ücretsiz.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-standy-pink rounded-full"></div>
                                    <span>Menü yükleme.</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-standy-pink rounded-full"></div>
                                    <span>İndirim tipi belirleme.</span>
                                </li>
                               
                                <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-standy-pink rounded-full"></div>
                                    <span>Kullanıcı etkileşim verileri.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <img
                                src="/standy-business-panel.png"
                                alt="Standy Business Panel"
                             />
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
                            Standy ile ortaklık kurmak için, kasanızda karekod okuyabilecek bir teknolojinin bulunması yeterli. Bunlar herhangi bir akıllı telefon veya karekodu okuyucu eklentiler olabilir.                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl bg-standy-white  p-4  "
                        >
                            <h2 className=" ">Standy kullanıcılarına sunduğumuz indirimlerin oranını kendimiz belirleyebilir miyiz?

                            </h2>

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
                            Evet, işletmeler Standy kullanıcılarına sunacakları indirim oranını kendileri seçebilir. Ancak birçok araştırma ve aktif uygulamalarda yapılan istatistikler %15-20 oranında sağlanan indirimlerin maksimum sonuç verdiğini gösteriyor.                         </p>
                    </details>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl bg-standy-white  p-4  "
                        >
                            <h2 className=" ">Standy ile ortaklık süreci nasıl işler?</h2>

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
                            Standy İşletme sayfamızdan panelimize kayıt olabilirsiniz. Ardından canlı destek ekibimiz sizinle iletişime geçerek sunmak istediğiniz indirim ve kampanyaları oluşturmanızı sağlar. 1 hafta içerisinde adresinize gelecek temsilcimiz karekodunuzu kasanıza yerleştirir, panelin kurulumunu yapar ve kullanımını gösterir. Bu andan itibaren Standy kullanıcılarına erişmeye başlayabilirsiniz.              </p>
                    </details>
                    <div className="xl:text-center">

                        <Link
                            className="  inline-flex px-5 py-2 rounded-full flex flex-row transition duration-300 ease-in-out bg-standy-pink  text-white hover:bg-standy-dark-pink       "
                            href="/faq"
                        >
                            Daha Fazla
                        </Link>
                    </div>
                </div>
            </section>
            <BusinessCTA></BusinessCTA>
        </div>
    )
}
export default Business;