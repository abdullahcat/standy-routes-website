import BlogNavbar from "@/components/blog/navbar";
import { Bedtime, Bolt, Hiking, LunchDining } from "@mui/icons-material";
import Head from "next/head";

function Blog() {
    return (<div className="text-standy-white">
        <Head>
            <title>Adrenalin mi Lazım?</title>
        </Head>
        <header >
            <BlogNavbar />
        </header>
        <div className="py-24">
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >
                <div className="w-full mx-auto mb-3 text-center md:w-2/3">
                    <p className="mb-3 text-xl         ">
                        <time>10 Jan 2024</time>
                    </p>
                    <h1 className="  text-3xl     md:leading-tight  " title="Turist Değil Gezgin ol">
                        Adrenalin mi Lazım?
                    </h1>

                </div>

                <div className="mx-auto max-w-xl text-md text-center   prose">
                    <p>
                        Kanınız mı kaynıyor, heyecan mı arıyorsunuz? O zaman sırt çantanızı hazırlayın, çünkü bu sefer Standy ile şehrin adrenalin seviyenizi yükseltecek aktivitelerine doğru bir yolculuğa çıkıyoruz!                    </p>

                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/7925746/pexels-photo-7925746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Unutun turist rehberlerini, biz gezgin değil adrenalin avcısıyız! Standy size şehrin gökdelenlerinde bulunan tırmanma duvarlarından, nefes kesen kaya tırmanışlarına kadar heyecan dolu aktiviteler sunuyor. Kim bilir, belki de şehrin hiç bilmediğiniz bir yerinde dağ bisikleti ile zorlu parkurları aşmak veya terk edilmiş bir binayı keşfetmek için fırsat yakalayabilirsiniz!                </div>



            </article>

            <div className="my-10 ">
                <img
                    className="object-cover  object-center w-screen  h-[30rem] shadow-lg  "
                    src="https://images.pexels.com/photos/90454/pexels-photo-90454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                />
            </div>
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy ile macera dolu rotanızı oluştururken dilediğiniz kadar esnek olabilirsiniz. Sabahın erken saatlerinde adrenalininizi pompalayacak bir aktivite ile güne başladıktan sonra, öğleden sonra şehrin sakin bir parkında piknik yapmak veya tarihi eserler arasında kaybolmak gibi aktivitelerle günü dengeleyebilirsiniz. Standy size hem nefesinizi kesecek heyecanı hem de sakinleşip nefes almanızı sağlayacak dinginliği sunuyor.
                </div>

                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover object-left w-full lg:h-[40rem] rounded-lg shadow-lg  "
                        src="/blog/adrenalin-mi-lazim/adrenalin-mi-lazim-img-1.png"
                        alt=""
                    />
                </div>

                <h1 className="max-w-screen-md text-3xl leading-loose mx-auto text-left">
                    İşte Standy ile adrenalin dolu bir rock tırmanışı günü örneği:                </h1>

                <div className=" py-10 mx-auto    ">
                    <div className="grid max-w-2xl mx-auto">
                        <div className="flex">
                            <div className="flex flex-col items-center mr-6">
                                <div className="w-px h-10 opacity-0 sm:h-full" />
                                <div>
                                    <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                        1
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                                <div className="sm:mr-5">
                                    <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-standy-pink sm:w-24 sm:h-24">
                                        <Hiking className="text-standy-white w-12 h-12"></Hiking>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xl  sm:text-base">
                                        Sabah
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        Standy ile şehrin en yetenekli kaya tırmanıcısı rehberlerinden biriyle buluşun. Rehberiniz size güvenlik ekipmanlarını tanıtacak ve temel tırmanış tekniklerini öğretecek.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-6">
                                <div className="w-px h-10 bg-gray-300 sm:h-full" />
                                <div>
                                    <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                        2
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                                <div className="sm:mr-5">
                                    <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-standy-pink sm:w-24 sm:h-24">
                                        <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-standy-pink sm:w-24 sm:h-24">
                                            <LunchDining className="text-standy-white w-12 h-12"></LunchDining>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xl  sm:text-base">Öğle </p>
                                    <p className="text-sm text-gray-700">
                                        Kısa bir öğle yemeği molası verin ve Standy ile size en yakın sağlıklı yiyecek seçeneklerini keşfedin.                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-6">
                                <div className="w-px h-10 bg-gray-300 sm:h-full" />
                                <div>
                                    <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                        3
                                    </div>
                                </div>
                                <div className="w-px h-full opacity-0" />
                            </div>
                            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                                <div className="sm:mr-5">
                                    <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-standy-pink sm:w-24 sm:h-24">
                                        <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-standy-pink sm:w-24 sm:h-24">
                                            <Bolt className="text-standy-white w-12 h-12"></Bolt>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xl  sm:text-base">İkindi</p>
                                    <p className="text-sm text-gray-700">
                                        Heyecanlı anlar başlıyor! Rehberinizin gözetiminde kaya duvarına tırmanın ve zirveye ulaşmanın verdiği muazzam başarı hissini yaşayın.                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-6">
                                <div className="w-px h-10 bg-gray-300 sm:h-full" />
                                <div>
                                    <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                        4
                                    </div>
                                </div>
                                <div className="w-px h-full opacity-0" />
                            </div>
                            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                                <div className="sm:mr-5">
                                    <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-standy-pink sm:w-24 sm:h-24">
                                        <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-standy-pink sm:w-24 sm:h-24">
                                            <Bedtime className="text-standy-white w-12 h-12"></Bedtime>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xl  sm:text-base">Akşam</p>
                                    <p className="text-sm text-gray-700">
                                        Günü ateş etrafında sakinleştirici bir müzik eşliğinde dinlenerek bitirin ve yorgunluğunuzu atın.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Bu sadece bir örnek! Standy ile şehrin size sunduğu tüm adrenalin dolu aktiviteleri keşfedebilir ve bunları dilediğiniz gibi kendi rotanıza ekleyebilirsiniz.                </div>

                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/1543756/pexels-photo-1543756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Hadi geleneksel tatil anlayışını yıkalım! Standy ile heyecan verici bir maceraya atılın ve unutulmaz anılar biriktirin! Kim bilir, belki de şehrin en zorlu kaya tırmanış rotası sizin keşfiniz olur!

                </div>

            </article>

        </div>



    </div>
    )
}
export default Blog;