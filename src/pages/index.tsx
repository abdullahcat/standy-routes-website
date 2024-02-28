import CTA from '@/components/cta';
import Hero from '@/components/hero';
import Head from 'next/head';
import { useRef, useState, useEffect } from 'react';


export default function Home() {
    const titles = ["Yapay Zeka İle Tanışın", "Ne? Nerede? Nasıl?", "Özel İçerikler ve Yakınınızdaki Mekanlar"];
    const descriptions = ["Standy, yapay zeka destekli, kişisel bir keşif deneyimi sunar. Hesabınızı oluşturduktan hemen sonra, yapay zekamız hizmetinizde olacak ve sizinle tanışmak için sabırsızlanacak! ", "Standy, sizi henüz keşfetmediğiniz muhteşem rotalara sadece 3 hızlı soru ile yönlendirir. İstediğiniz rotayı seçebilir, değiştirebilir veya kaydedebilirsiniz. Yapay zekamız, deneyimlerinizi analiz ederek gelecekte size daha uygun öneriler sunmak için hizmete hazır!    ", "Bütün bunlara ek olarak içerik yaratıcılarının oluşturduğu hazır rotaları inceleyebilir veya konumunuza yakın mekanları keşfedebilirsiniz. Size en uygun olanı bulmak artık çok daha kolay!",];
    const images = ["standy-ai.mp4", "stepsofstandyai.png", "pexels-vincent-rivaud-2363807.jpg"];

    const [currentIndex, setCurrentIndex] = useState(0);
    const videoElement = useRef<HTMLVideoElement>(null);
    const titleElement = useRef<HTMLHeadingElement>(null);

    const updateContent = () => {
        if (titleElement.current) {
            titleElement.current.textContent = titles[currentIndex];
        }
        if (videoElement.current) {
            videoElement.current.src = images[currentIndex];
        }
    }
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        setLoaded(true); // Ensures that the widget is visible immediately
    }, []); // Runs only once on initial render

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + titles.length) % titles.length);
        updateContent();
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        updateContent();
    }

    const [descriptionVisible, setDescriptionVisible] = useState(false);
    return (
        <div className='text-standy-white' >
            <Head>
                <title>Standy</title>
            </Head>
            <Hero></Hero>

            <section id="titleImageSection" className='h-full' >
                <div className="px-4 py-8  overflow-hidden sm:px-6 lg:px-8">

                    <div className="lg:grid lg:grid-cols-2 items-center">

                        <div className={`p-4 sm:p-8 lg:p-16 relative ${loaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'}`}>
                            {
                                currentIndex != 0 ? <img alt={images[currentIndex]} src={images[currentIndex]} className={`rounded-[24px]   w-full ${currentIndex == 1 ? 'object-contain' : 'object-cover'}`} /> : <video src={images[currentIndex]} loop autoPlay className="rounded-[24px]   h-96 w-full object-contain" />

                            }
                        </div>

                        <div className={`p-4 sm:p-8 lg:p-16 ${loaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'}`}>
                            <h2 ref={titleElement} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                                {titles[currentIndex]}
                            </h2>
                            <p className="mt-6 text-lg sm:text-xl">
                                {descriptions[currentIndex]}
                            </p>

                            <div className='flex flex-row items-center space-x-2 mt-6'>
                                <div id="prevBtn" onClick={prevSlide} className="rotate-90 hover:bg-white cursor-pointer border-2 border-white p-4 rounded-full text-white text-center hover:text-black transition duration-300 ease-in-out">
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div id="nextBtn" onClick={nextSlide} className="rotate-90 hover:bg-white cursor-pointer border-2 border-white p-4 rounded-full text-white text-center hover:text-black transition duration-300 ease-in-out">
                                    <svg width="30" height="30" className='rotate-180' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>



            <section className='bg-standy-light-pink py-10 px-5 lg:p-20'>
                <div className='bg-standy-black rounded-[24px]'>
                    <div className="px-4 lg:py-0 py-5 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img
                                alt="standy_iphones_official"
                                src="standy_iphones_official.png"
                                className="w-full lg:py-10 md:py-5 sm:mt-6 object-cover rounded-t-[24px]"
                            />

                            <div className="lg:flex items-center">
                                <div className="p-4 sm:p-8 lg:p-16">
                                    <h2 className="text-5xl font-bold">
                                        Yapay Zeka ile üretilmiş rotaları keşfet!
                                    </h2>

                                    <p className="mt-6 text-xl">
                                        Gelecekte kolaylık ve heyecanla yol alın - özel AI rota oluşturma beta programımıza katılın!
                                    </p>

                                    <div className="mt-6 items-start lg:hidden flex-shrink-0 flex flex-wrap lg:justify-start gap-4">
                                        <a
                                            className="flex inline-block px-4 py-2 rounded-lg text-black flex flex-row transition duration-300 ease-in-out bg-white hover:bg-standy-pink hover:text-white"
                                            href="/get-started"
                                        >
                                            Şimdi Keşfet
                                        </a>
                                    </div>

                                    <div className="mt-6 rounded-lg bg-white text-black items-center hidden lg:flex flex-shrink-0 flex flex-wrap lg:justify-start">
                                        <div className='m-2 flex flex-row justify-start'>
                                            <div className='flex flex-col justify-center'>
                                                <img src="betastandyqr.png" alt="Beta QR Code" />
                                            </div>

                                            <div className='ml-4 flex flex-col justify-center'>
                                                <h2 className="text-2xl font-bold sm:text-3xl">
                                                    Beta'ya Katıl!
                                                </h2>
                                                <p className="mt-2 text-gray-600">
                                                    iOS ve Android cihazlarda kullanılabilir.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <div className="flex lg:flex-row   flex-col justify-between py-10 px-5 gap-4 lg:p-20">
                <div className="  h-full rounded-[24px]  group relative block ">
                    <img
                        alt="pexels-matt-hardy-2309268"
                        src="pexels-matt-hardy-2309268.jpg"
                        className="absolute rounded-[24px] inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">


                        <p className="py-5 pr-20 uppercase tracking-wide font-din-condensed text-5xl font-bold text-white  ">
                            GİZLİ GÜZELLİKLERİ Keşfet
                        </p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">

                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-xl text-white">
                                    Standy, özenle seçilmiş mekanları listeleyerek, gözden kaçmış güzellikleri keşfetmenize olanak sağlar. Seyahat planlarınızı oluştururken size ilham verir ve hayallerinizdeki destinasyonlara bir adım daha yaklaşmanızı sağlar.                        </p>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="group relative block h-full rounded-[24px]">
                    <img
                        alt="pexels-anna-shvets-3943882"
                        src="/pexels-anna-shvets-3943882.jpg"
                        className="absolute rounded-[24px] inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">


                        <p className="py-5   uppercase tracking-wide font-din-condensed text-5xl font-bold text-white  ">
                            ZAMANINI VERİMLİ KULLAN
                        </p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-xl text-white">
                                    Günlerinizin planlaması uzun sürmesin. Biz, size en uygun planı bir dakikadan daha kısa sürede sunuyoruz. Sadece gününüzü belirtin ve size en verimli programı hazırlayalım. Zamandan tasarruf edin ve günlerinizi daha verimli geçirin.                                        </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group rounded-[24px] relative block h-full ">
                    <img
                        alt="pexels-m-venter-1659437"
                        src="pexels-m-venter-1659437.jpg"
                        className="absolute rounded-[24px] inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="py-5 uppercase tracking-wide font-din-condensed text-5xl font-bold text-white  ">
                            SANA GÖRE ROTALAR, SENİN İÇİN FIRSATLAR
                        </p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-xl text-white">
                                    Standy, yapay zekâ sayesinde kişiselleştirilmiş seyahat rotaları oluşturur. Sizin tercihlerinize göre şekillenen rotalarla, seyahat deneyiminizi en iyi şekilde optimize eder. Her bir detayı özenle düşünülmüş rotalarla, keşfetmek istediğiniz yerlerdeki gizli güzelliklere kolayca ulaşmanızı sağlar.                                        </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <CTA></CTA>
        </div>

    )
}
