import Head from "next/head";
import { People, AdsClick, BarChart, SupportAgent, Verified } from "@mui/icons-material";
import BusinessCarousel from "@/components/business/businessCarousel";

import Navbar from "@/components/navbar";
import BusinessNavbar from "@/components/business/businessNavbar";
import BusinessCTA from "@/components/business/businessCTA";
import BusinessTestimonials from "@/components/business/businessTestimonials";

function Business() {

    return (
        <div className='text-standy-black  '>
            <Head>
                <title>Standy Business</title>
            </Head>
            <header >
                <BusinessNavbar />
            </header>
            <section
                className="relative py-10 bg-[url(https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg)] bg-cover bg-center bg-no-repeat"
            >   <div
                className="relative text-left px-4 xl:px-0 mx-auto max-w-screen-xl   py-32   lg:flex lg:h-screen lg:items-center "
            >
                    <div className=" lg:px-8 px-4 rounded-lg py-20 bg-standy-white  sm:px-6 ltr:sm:text-left ">
                        <h1 className="text-5xl  text-standy-black  ">
                            İşletmenizi  <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-standy-pink relative inline-block">
                                <span className="relative text-white"> Standy </span>
                            </span> ile büyütün
                        </h1>

                        <p className="mt-4 max-w-lg text-standy-black   text-xl">
                            Birçok yeni müşteriye erişmek, işletmenizin görünürlüğünü artırmak ve çevrimiçi aktif reklam yapmak için işletmenizi Standy’ye taşıyın.
                        </p>

                        <div className="mt-4 items-center flex flex-wrap gap-4 text-center">


                            <a
                                className="   px-5 py-2 rounded-lg flex flex-row transition duration-300 ease-in-out bg-standy-pink  text-white hover:bg-standy-dark-pink       "
                                href="http://business.standyroutes.com"

                            >
                                Başlayalım
                            </a>
                            <a
                                className="hover:underline transition duration-300 ease-in-out     "
                                href="http://business.standyroutes.com"
                            >
                                Business Console
                            </a>


                        </div>
                    </div>
                </div>
            </section>
            <section className="         bg-standy-white">
                <div className="mx-auto text-standy-black max-w-screen-xl px-4 py-12 xl:px-0  md:py-16  ">
                    <div className="mx-auto max-w-3xl xl:text-center">
                        <h2 className="text-4xl   ">Geniş ve Çeşitli Kullanıcı Tabanıyla Güçlü Bir Platform</h2>


                        <p className="mt-4">
                            Platformumuz, çeşitli demografik profillere sahip geniş bir kullanıcı tabanını bir araya getirerek, kapsamlı bir ağ oluşturuyor. Bu çeşitlilik, sunduğumuz ürün ve hizmetlerin geniş kitlelere hitap etme yeteneğini güçlendiriyor.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="flex flex-col rounded-lg bg-pink-200 px-4 py-8 text-center">
                                <dt className="order-last text-lg text-gray-500   ">Market Hacmi</dt>

                                <dd className="text-4xl  text-standy-pink md:text-5xl">$4.8m</dd>
                            </div>

                            <div className="flex flex-col rounded-lg bg-pink-200 px-4 py-8 text-center">
                                <dt className="order-last text-lg   text-gray-500">Anlaşmalı İşletme</dt>

                                <dd className="text-4xl  text-standy-pink md:text-5xl">54</dd>
                            </div>

                            <div className="flex flex-col rounded-lg bg-pink-200 px-4 py-8 text-center">
                                <dt className="order-last text-lg   text-gray-500">Hazır Kullanıcı</dt>

                                <dd className="text-4xl  text-standy-pink md:text-5xl">5.000+</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>


            <section className=" px-4 my-10 ">
                <div className="container mx-auto p-4 space-y-2  text-center">
                    <span className="before:block before:absolute tracking-wide font-din-condensed text-5xl before:-inset-2 before:-skew-y-1 before:bg-standy-pink relative inline-block">
                        <span className="relative text-white   ">STANDY BUSINESS</span>
                    </span>
                    <p className="pt-2 text-xl">İşletmeler için faydaları</p>
                </div>
                <div className="container mx-auto grid py-5 text-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col   items-center p-4">
                        <People className="bg-standy-pink text-standy-white rounded-full p-4 w-16 h-16"></People>
                        <h3 className="my-3 text-3xl text-standy-pink  ">Müşteri Akışı</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Standy ile size yakın potansiyel müşterileri kendi işletmenize çekin. Sağladığınız indirimlerle müşterilerinizi kalıcı hale getirin.</p>

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <AdsClick className="bg-standy-pink text-standy-white rounded-full p-4  w-16 h-16"></AdsClick>
                        <h3 className="my-3 text-3xl text-standy-pink ">Çevrimiçi reklam</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Standy işletme ile hem çevrimiçi olarak işletmenizi tanıtırsınız, hem de kullanıcıların oluşturduğu rotalarla daha geniş kitlelere ulaşım sağlarsınız.</p>

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <BarChart className="bg-standy-pink text-standy-white rounded-full p-4  w-16 h-16"></BarChart>

                        <h3 className="my-3 text-3xl text-standy-pink ">Güncel İstatistik</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Sizlere sağladığımız “Standy Konsol” ile istediğiniz her an işletmeniz hakkında sayısal verilere ulaşabilirsiniz. </p>

                        </div>
                    </div>
                    <div className="flex flex-col   items-center p-4">
                        <SupportAgent className="bg-standy-pink text-standy-white rounded-full p-4  w-16 h-16"></SupportAgent>

                        <h3 className="my-3 text-3xl text-standy-pink ">Canlı Destek</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Her türlü sorunuza anında cevap verecek canlı destek hizmetinizde. Eğer bütün bu hizmetlerden memnun kalmazsanız üyelik iptali tamamen ücretsiz.</p>
                        </div>
                    </div>

                </div>
                <div className="container rounded-lg bg-standy-white    mx-auto  p-4 space-y-2  text-center">

                    <p className="   leading-snug text-standy-black text-2xl">Üstelik bütün bu imkanlar siz para kazanana kadar  <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-standy-pink relative inline-block">
                        <span className="relative text-white"> ücretsiz! </span>
                    </span></p>
                </div>

            </section>





            <section className="bg-standy-black " >
                <div className="mx-auto flex items-center  text-standy-white max-w-screen-xl px-4   sm:px-6   lg:px-8  py-8">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16">
                        <div className="relative   h-full w-full  overflow-hidden lg:order-last  ">
                            <img
                                alt="standybusinessiphone"
                                src="standybusinessiphone.png"
                                className="    inset-0 h-full w-full object-contain"
                            />
                        </div>

                        <div className=" justify-center flex flex-col ">
                            <h2 className="text-3xl    ">Standy Business ile Zirveye Ulaşın!

                            </h2>

                            <p className="mt-4  text-xl ">
                                Sıradan reklamcılıktan sıkıldınız mı? Standy Business ile işletmenizi zirveye taşımanın zamanı geldi! Hedef kitlenize doğrudan ulaşın, özelleştirilmiş profilinizle fark yaratın ve Standy'nin sunduğu yenilikçi çözümlerle başarıya giden en kısa yola adım atın!

                            </p>

                            <div className="mt-8 sm:mt-8">
                                <a
                                    className="  inline-block px-5 py-2 rounded-lg   flex-row transition duration-300 ease-in-out hover:bg-standy-pink  text-standy-black hover:text-standy-white  bg-standy-white       "
                                    href="/business"

                                >
                                    Daha fazla
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <h1 className='xl:m-auto mx-4 py-10 xl:text-center  max-w-screen-xl text-3xl'>Kullanıcı kampanyaları nasıl kullanılır?</h1>
            <BusinessCarousel></BusinessCarousel>




            <div className="px-4 xl:py-16 mx-auto  py-10 max-w-screen-xl   xl:px-0  ">
                <div className="max-w-xl py-5  md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6  text-3xl  leading-none tracking-tight    md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="d0d83814-78b6-480f-9a5f-7f637616b267"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">İşletmem</span>
                        </span>{' '}
                        Standy ile Nasıl Çalışır                    </h2>
                    <p className="  text-gray-700  text-lg">
                        Standy İşletme ile müşteri akışını artırmak çok kolay. Standy İşletmeye üye ol, aşağıdaki adımları takip et, birçok yeni Standy fırsatını yakala!                    </p>
                </div>
                <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                    <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
                        <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
                    </div>
                    <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-lg  leading-5">Kayıt Olun ve Onaylanın</p>
                            <p className="flex items-center justify-center w-6 h-6  rounded text-deep-purple-accent-400 bg-indigo-50">
                                1
                            </p>
                        </div>
                        <p className="text-sm ">
                            İşletmenizle ilgili bilgileri girin ve Standy tarafından onaylanın.
                        </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-lg  leading-5">QR Kodunuzu Alın</p>
                            <p className="flex items-center justify-center w-6 h-6  rounded text-deep-purple-accent-400 bg-indigo-50">
                                2
                            </p>
                        </div>
                        <p className="text-sm ">
                            Size özel QR kodunuzu alın ve kasanıza yerleştirin.
                        </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-lg  leading-5">İndirim Uygulayın</p>
                            <p className="flex items-center justify-center w-6 h-6  rounded text-deep-purple-accent-400 bg-indigo-50">
                                3
                            </p>
                        </div>
                        <p className="text-sm ">
                            Standy konsolu üzerinden QR kodunu okutarak indirimleri uygulayın.
                        </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-lg  leading-5">İstatistiklerinizi Takip Edin</p>
                            <p className="flex items-center justify-center w-6 h-6  rounded text-deep-purple-accent-400 bg-indigo-50">
                                4
                            </p>
                        </div>
                        <p className="text-sm ">
                            Tıklanma, reklam, indirim ve kazanç gibi tüm istatistiklerinizi Standy konsolundan takip edin.                        </p>
                    </div>
                </div>

            </div>
            <BusinessTestimonials></BusinessTestimonials>

            <section className="bg-standy-black " >
                <div className="mx-auto flex items-center  text-standy-white max-w-screen-xl px-4   sm:px-6   lg:px-8  py-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative   h-full w-full  overflow-hidden        ">
                            <img
                                alt="standyadvertised"
                                src="standyadvertised.png"
                                className="    inset-0 h-full w-full object-contain"
                            />
                        </div>

                        <div className="justify-center flex flex-col ">
                            <h2 className="text-3xl ">Müşteri İlişkilerini Güçlendirin, Standy Business ile Kazanın!


                            </h2>

                            <p className="mt-4 text-xl ">
                                Standy Business, müşteri ilişkilerini güçlendirmenin de en kolay yolu. Platform üzerinden müşterilerinize özel indirimler sunun, marka sadakatini artırın ve kazancınızı katlayın. Standy Business ile işletmenizi büyütün, müşteri memnuniyetini zirveye taşıyın!


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


            <BusinessCTA></BusinessCTA>

        </div>
    )
}
export default Business;