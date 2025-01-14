import BlogNavbar from "@/components/blog/navbar";
import Head from "next/head";

function Blog() {
    return (<div className="text-standy-white">
        <Head>
            <title>Summer 2024</title>
        </Head>
        <header >
            <BlogNavbar />
        </header>
        <div className="py-24">
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >
                <div className="w-full mx-auto mb-3 text-center md:w-2/3">
                    <p className="mb-3 text-xl         ">
                        <time>27 June 2024</time>
                    </p>
                    <h1 className="  text-3xl     md:leading-tight  " title="Turist Değil Gezgin ol">
                        Summer 2024
                    </h1>

                </div>

                <div className="mx-auto max-w-xl text-md text-center   prose">
                    <p>
                        Yazın kokusu her yanı sarmaya başladı bile. Okulların tatile girmesiyle coşku doruklara tırmandı, tatil planları hummalı bir şekilde yapılmaya başlandı. Bu sene siz de kendinizi güneşin sıcacık kollarına mı bırakacaksınız? Yoksa serin bir dağ kasabasında yürüyüş yapmak mı hayallerinizi süslüyor?
                    </p>

                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/18961673/pexels-photo-18961673/free-photo-of-deniz-plaj-tatil-insanlar.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                        alt=""
                    />
                </div>
                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    İster turkuaz renkli koyları keşfetmeyi, isterse tarihi eserler arasında kaybolmayı hayal ediyor olun; 2024 yazı size unutulmaz anılar biriktirme fırsatı sunuyor. Bu keşif yolculuğunda size eşlik edecek yeni bir dostunuz var: Standy!
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



                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy sadece bir rota oluşturucu değil, aynı zamanda sizi şehrin keşfedilmemiş köşeleriyle tanıştıran bir rehber. Plajda keyif yaparken canınız mı dondurma çekti? Standy size en yakın dondurmacıyı gösterebilir. Yürüyüş rotanızın sonunda sizi serin bir içecekle karşılayacak kafeyi mi arıyorsunuz? Standy sizi hayal kırıklığına uğratmayacak!
                </div>


                <div className="  grid-cols-2   grid my-10 h-[20rem]  gap-4">
                    <div className="relative   overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src="https://images.pexels.com/photos/8734117/pexels-photo-8734117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            className="absolute inset-0 h-full w-full object-cover"
                        />


                    </div>
                    <div className="relative   overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src="https://images.pexels.com/photos/7242955/pexels-photo-7242955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            className="absolute inset-0 h-full w-full object-cover"
                        />


                    </div>

                </div>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Yaz denince akla elbette ki gezmek, tozmak ve yeni yerler keşfetmek gelir. Peki ya bunları yaparken biraz da tasarruf edebilsek? Standy, size özel indirimler sunan kafe, restoran ve plaj işletmeleriyle anlaşmalı çalışıyor. Böylece cüzdanınızı mutlu ederken, yazın tadını doyasıya çıkarabilirsiniz.
                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="/blog/summer-2024/summer-2024-img-2.png"
                        alt=""
                    />
                </div>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Arkadaşlarınızla unutulmaz bir yaz kampı planlıyor, ailenizle birlikte doğayla iç içe bir tatil hayal ediyor olabilirsiniz. Standy'nin size sunduğu bir diğer avantaj ise kendinize özel rotalar oluşturabilme imkanı. Bu sayede rotanızı tamamen kişiselleştirebilir, isteklerinize ve ihtiyaçlarınıza göre şekillendirebilirsiniz. Hatta oluşturduğunuz rotayı arkadaşlarınızla paylaşarak onların da bu maceraya katılmasını sağlayabilirsiniz!                </div>


                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/1145257/pexels-photo-1145257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Hadi bavulları doldurma zamanı! 2024 yazını keşfedecek misiniz, yoksa kaçırmaya mı niyetlisiniz? Güneşin kokusunu soluyun, serin sulara dalın ve Standy ile unutulmaz anılar biriktirin!

                </div>

            </article>

        </div>



    </div>
    )
}
export default Blog;