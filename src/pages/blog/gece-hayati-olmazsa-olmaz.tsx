import BlogNavbar from "@/components/creator/blogNavbar";
import { Bedtime, Bolt, Hiking, LunchDining } from "@mui/icons-material";
import Head from "next/head";

function Blog() {
    return (<div className="text-standy-white">
        <Head>
            <title>Gece Hayatı Olmazsa Olmaz</title>
        </Head>
        <header >
            <BlogNavbar />
        </header>
        <div className="py-24">
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >
                <div className="w-full mx-auto mb-3 text-center md:w-2/3">
                    <p className="mb-3 text-xl         ">
                        <time>12 Jan 2024</time>
                    </p>
                    <h1 className="  text-3xl     md:leading-tight  " title="Turist Değil Gezgin ol">
                        Gece Hayatı Olmazsa Olmaz
                    </h1>

                </div>

                <div className="mx-auto max-w-xl text-md text-center   prose">
                    <p>
                        Unutun erken yatmayı, çünkü bu gece Standy size şehrin uykuya dalmayan tarafını keşfetme imkanı sunuyor. Gündüzün bambaşka bir kimliğe bürünen sokaklar, size gizemli ve heyecan verici bir gece deneyimi yaşatacak.

                    </p>

                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Unutun turist rehberlerini, biz gezgin değil adrenalin avcısıyız! Standy size şehrin gökdelenlerinde bulunan tırmanma duvarlarından, nefes kesen kaya tırmanışlarına kadar heyecan dolu aktiviteler sunuyor. Kim bilir, belki de şehrin hiç bilmediğiniz bir yerinde dağ bisikleti ile zorlu parkurları aşmak veya terk edilmiş bir binayı keşfetmek için fırsat yakalayabilirsiniz!                </div>



            </article>

            <div className="my-10 ">
                <img
                    className="object-cover  object-center w-screen  h-[30rem] shadow-lg  "
                    src="https://images.pexels.com/photos/444964/pexels-photo-444964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                />
            </div>
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >



                <h1 className="max-w-screen-md text-3xl leading-loose mx-auto text-left">
                    Yıldızların Altında Eğlence
                </h1>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy ile şehrin en göz alıcı rooftop barlarını keşfedin. Yüksek binaların teraslarında yıldızların altında kurulan partilere katılın, şehrin gece manzarasına karşı nefis kokteyller yudumlayın ve keyifli sohbetlerle eğlenceli bir gece geçirin.

                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover object-bottom w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/21633343/pexels-photo-21633343/free-photo-of-night-sky-over-the-trona-pinnacles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
                    />
                </div>
                <h1 className="max-w-screen-md text-3xl leading-loose mx-auto text-left">
                    Speakeasy'lerin Gizemi
                </h1>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy sizi şehrin gizli mücevherleri olan speakeasy'lere götürebilir. Arkasında sürprizlerin saklı olabileceği bu özel mekanlarda caz müziğin ritmine kapılabilir, kaliteli içkilerin tadını çıkarabilir ve şehrin gece hayatının gizemli atmosferini yaşayabilirsiniz.
                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
                <h1 className="max-w-screen-md text-3xl leading-loose mx-auto text-left">
                    Müzik Dolu Geceler
                </h1>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy ile canlı müzik mekanlarını keşfe çıkın! Caz kulüplerinden blues barlara, rock kafelerden elektronik müzik festivallerine kadar geniş bir yelpazede size hitap eden mekanları Standy ile bulabilir ve unutulmaz bir gece yaşayabilirsiniz.
                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/6174126/pexels-photo-6174126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
                <h1 className="max-w-screen-md text-3xl leading-loose mx-auto text-left">
                    Gece Pazarlarının Çılgınlığı
                </h1>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy ile gece pazarlarının renkli dünyasına adım atın. Sokak lezzetlerinden el yapımı hediyelik eşyalara kadar birçok seçeneği bulabileceğiniz gece pazarları, şehrin gece hayatının vazgeçilmez bir parçası. Standy size en popüler ve güvenli gece pazarlarını keşfetme imkanı sunuyor.
                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/2240361/pexels-photo-2240361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Gece kuşları için Standy, rotanızı kişiselleştirmeyi de unutmadı. Standy ile komedi gösterilerine gidebilir, gece sinemalarında açık hava filmleri izleyebilir veya şehrin tarihi mekanlarını gece turlarına katılabilirsiniz. Hatta rotanıza arkadaşlarınızı da ekleyebilir ve birlikte unutulmaz bir gece macerası yaşayabilirsiniz.
                </div>

                <div className=" sm:grid-cols-2 lg:grid-cols-3 grid my-10    gap-4">
                    <div className="relative h-[20rem]   overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src="https://images.pexels.com/photos/17494608/pexels-photo-17494608/free-photo-of-police-station-building-on-seashore-in-valletta-malta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="relative  items-end bg-black h-full bg-opacity-40">
                            <div className="p-4 items-end justify-end sm:p-6">
                                <h3 className="  text-2xl text-white">Polis Noktaları</h3>

                            </div>
                        </div>
                    </div>
                    <div className="relative  h-[20rem]  overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src="https://images.pexels.com/photos/5834912/pexels-photo-5834912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="relative  items-end bg-black h-full bg-opacity-40">
                            <div className="p-4 items-end justify-end sm:p-6">
                                <h3 className="  text-2xl text-white">Taksi Durakları</h3>

                            </div>
                        </div>
                    </div>
                    <div className="relative  h-[20rem]  overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src="https://images.pexels.com/photos/4005487/pexels-photo-4005487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="relative  items-end bg-black h-full bg-opacity-40">
                            <div className="p-4 items-end justify-end sm:p-6">
                                <h3 className="  text-2xl text-white">Açık Kafeler</h3>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Gece kuşları için Standy, rotanızı kişiselleştirmeyi de unutmadı. Standy ile komedi gösterilerine gidebilir, gece sinemalarında açık hava filmleri izleyebilir veya şehrin tarihi mekanlarını gece turlarına katılabilirsiniz. Hatta rotanıza arkadaşlarınızı da ekleyebilir ve birlikte unutulmaz bir gece macerası yaşayabilirsiniz.
                </div>

                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full   rounded-lg shadow-lg  "
                        src="/blog/standy-assistant/standy-assistant-img-1.png"
                        alt=""
                    />
                </div>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Güneş battıktan sonra şehrin bambaşka bir yüzü olduğunu keşfetmeye hazır mısınız? O zaman gece çantasını hazırlayın, Standy ile şehrin karanlık yüzünü keşfedelim! Unutmayın, size sadece eğlence ve heyecan değil, aynı zamanda şehrin uyumadığı gecelerinde size unutulmaz anılar yaşatacak deneyimler bekliyor.
                </div>
            </article>

        </div>



    </div>
    )
}
export default Blog;