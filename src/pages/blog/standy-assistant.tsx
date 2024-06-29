import BlogNavbar from "@/components/creator/blogNavbar";
import { Bedtime, Bolt, Hiking, LunchDining } from "@mui/icons-material";
import Head from "next/head";

function Blog() {
    return (<div className="text-standy-white">
        <Head>
            <title>Standy Assistant</title>
        </Head>
        <header >
            <BlogNavbar />
        </header>
        <div className="py-24">
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >
                <div className="w-full mx-auto mb-3 text-center md:w-2/3">
                    <p className="mb-3 text-xl         ">
                        <time>10 April 2024</time>
                    </p>
                    <h1 className="  text-3xl     md:leading-tight  " title="Turist Değil Gezgin ol">
                        Standy Assistant: Şehir Keşfinizin AI Rehberi
                    </h1>
                </div>

                <div className="mx-auto max-w-xl text-md text-center   prose">
                    <p>
                        Yeni mekanlar keşfetmeyi mi seviyorsunuz? Fakat nereye gideceğinize karar vermek mi zaman alıyor? Standy ile tanışın! Standy uygulamasının kalbinde yer alan yapay zeka asistanı Standy Assistant, size yepyeni bir keşif deneyimi sunuyor.
                    </p>

                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/14919124/pexels-photo-14919124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Unutun rastgele harita aramalarını! Standy Assistant, sizin için özel olarak tasarlanmış bir keşif yolculuğu yaratıyor. Standy Assistant, sizin daha önce ziyaret ettiğiniz ve beğendiğiniz yerleri akıllı bir şekilde analiz ederek zevklerinizi öğreniyor. İster şık bir akşam yemeği için romantik bir restoran, ister rahat bir öğle yemeği için şirin bir kafe arayın, Standy Assistant size tam olarak aradığınızı bulacaktır.
                </div>



            </article>

            <div className="my-10 ">
                <img
                    className="object-cover  object-center w-screen  h-[30rem] shadow-lg  "
                    src="/standyuser.png"
                    alt=""
                />
            </div>
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy Assistant'ın gücü, kişiselleştirmede yatıyor. Siz Standy ile şehri keşfettikçe, Standy Assistant de sizi daha iyi tanıyor. Gittiğiniz yerlere ve yaptığınız kaydetmelere göre, Standy Assistant size benzersiz öneriler sunuyor.
                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full   rounded-lg shadow-lg  "
                        src="/blog/standy-assistant/standy-assistant-img-1.png"
                        alt=""
                    />
                </div>
                <h1 className="max-w-screen-md text-3xl leading-loose mx-auto text-left">
                    İşte Standy Assistant'ın size sunduklarından bazıları:
                </h1>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    <ul className="list-disc pl-5 ">
                        <li>
                            <span className="font-bold">
                                Size Özel Öneriler: </span>
                            Standy Assistant, daha önce gittiğiniz ve beğendiğiniz yerlere göre size benzer tarzdaki yeni mekanlar önerebilir.
                        </li>
                        <li>
                            <span className="font-bold">
                                Gizli Mücevherleri Keşfedin: </span>
                            Standy Assistant, popüler mekanların yanı sıra, şehrin az bilinen ama keşfedilmeyi bekleyen harika yerlerini de size önerebilir.                        </li>
                        <li>
                            <span className="font-bold">
                                Zaman Tasarrufu: </span>
                            Standy Assistant ile sonsuz seçenekler arasında kaybolmanıza gerek yok. Standy Assistant, size aradığınız kriterlere uygun mekanları ön plana çıkararak zamandan kazandırır.                        </li>
                        <li>
                            <span className="font-bold">
                                Her Zaman Açık: </span>
                            Standy Assistant 7/24 hizmetinizdedir. İster öğle yemeği molasında hızlı bir arama yapmak isteyin, ister hafta sonu planlarınızı oluşturmak için fikir arayın, Standy Assistant her zaman size yardımcı olmaya hazır.                        </li>
                    </ul>
                </div>
                <div className="px-4 py-10 mx-auto  ">
                    <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <div className="max-w-xl mb-6">

                                <h2 className="max-w-lg mb-6   text-3xl   tracking-tight   sm:leading-none">
                                    Canın ne yapmak istiyor?
                                </h2>
                                <p className="text-base  md:text-lg">
                                    "Canın ne yapmak istiyor?" sorusuyla Standy Assistant, ruh halinize ve isteklerinize uygun bir rota oluşturabilir. Belki de sakin bir parkta yürüyüş yapmak, şehrin en güzel manzarası eşliğinde karnını doyurmak veya canlı bir ortamda müzik dinlemek istiyorsunuzdur. Standy Assistant, size her an için en uygun seçenekleri sunacaktır.
                                </p>
                            </div>

                        </div>
                        <div className="relative">
                            <img
                                src="/blog/standy-assistant/standy-assistant-img-2.png"
                                alt="" />
                        </div>
                    </div>
                </div>

                <div className="px-4 py-10 mx-auto  ">
                    <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                        <div className="flex flex-col justify-center lg:order-last">
                            <div className="  xl:ml-20 mb-6">

                                <h2 className="max-w-lg mb-6   text-3xl   tracking-tight   sm:leading-none">
                                    Nereye Gidiyoruz?
                                </h2>
                                <p className="   md:text-lg">
                                    Kararlar verildiyse nereye gittiğimize belirleme zamanı. “Nereye Gidiyoruz?” sorusuyla Standy Assistant, harita üzerinden nereye gitmek istediğini sorar. Belirlediğin alan içerisinde sana en uygun mekanları listelemeye hazır.                                                 </p>
                            </div>
                        </div>
                        <div className="relative ">
                            <img
                                src="/blog/standy-assistant/standy-assistant-img-3.png"
                                alt="" />
                        </div>
                    </div>
                </div>

                <div className="px-4 py-10 mx-auto  ">
                    <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <div className="max-w-xl mb-6">

                                <h2 className="max-w-lg mb-6   text-3xl   tracking-tight   sm:leading-none">
                                    Özel bir tercihin var mı?
                                </h2>
                                <p className="text-base  md:text-lg">
                                    Şimdi sıra biraz detay tercihinde. "Özel bir tercihin var mı?" sorusuyla Standy Assistant aradığınız lezzetleri kolayca bulmanıza yardımcı olur. Standy Assistant, hamburgerden pizzaya, uzak doğudan fransız mutfaklarına kadar birçok seçeneği gözleriniz önüne serer.                                </p>
                            </div>

                        </div>
                        <div className="relative">
                            <img
                                src="/blog/standy-assistant/standy-assistant-img-4.png"
                                alt="" />
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy Assistant ile şehrin size sunduğu tüm olanakları keşfetmek hiç bu kadar kolay olmamıştı. Standy size sadece yeni mekanlar keşfettirmekle kalmayacak, aynı zamanda sizi konfor alanınızın dışına çıkmaya ve yeni favorilerinizi bulmaya teşvik edecek.                 </div>

                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full   rounded-lg shadow-lg  "
                        src="/blog/standy-assistant/standy-assistant-img-5.png"
                        alt=""
                    />
                </div>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Hadi Standy uygulamasını açın, Standy Assistant'ın size rehberlik etmesine izin verin ve şehrin sizin için sakladığı sürprizleri keşfedin. Belki de şehrin en romantik restoranını veya en lezzetli sokak yemeğini siz keşfedeceksiniz!
                </div>
            </article>

        </div >



    </div >
    )
}
export default Blog;