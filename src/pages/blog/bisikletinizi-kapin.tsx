import BlogNavbar from "@/components/blog/navbar";
import { Bedtime, Bolt, Hiking, LunchDining } from "@mui/icons-material";
import Head from "next/head";

function Blog() {
    return (<div className="text-standy-white">
        <Head>
            <title>Bisikletinizi Kapın!</title>
        </Head>
        <header >
            <BlogNavbar />
        </header>
        <div className="py-24">
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >
                <div className="w-full mx-auto mb-3 text-center md:w-2/3">
                    <p className="mb-3 text-xl         ">
                        <time>5 Jan 2024</time>
                    </p>
                    <h1 className="  text-3xl     md:leading-tight  " title="Turist Değil Gezgin ol">
                        Bisikletinizi Kapın!
                    </h1>

                </div>

                <div className="mx-auto max-w-xl text-md text-center   prose">
                    <p>
                        Motorlu araçların gürültüsünden ve kalabalıktan sıkıldınız mı? Şehri farklı bir bakış açısıyla keşfetmeye hazır mısın? O zaman haydi pedal çevirmeye başlayın! Çünkü bu sefer Standy ile şehrin gizli köşelerini, bisikletinizin size sunduğu özgürlükle keşfedeceğiz.
                    </p>

                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/3082227/pexels-photo-3082227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Bisiklet, sadece ulaşımın değil, aynı zamanda keşfin de bir aracıdır. Standy ile şehirde bisiklet kullanmanın avantajlarını keşfedeceksiniz. Standy size hem şehrin en popüler bisiklet yollarını hem de bisiklet tutkunlarının bile bilmediği gizli parkurlar önerebilir.

                </div>



            </article>

            <div className="my-10 ">
                <img
                    className="object-cover  object-center w-screen  h-[30rem] shadow-lg  "
                    src="https://images.pexels.com/photos/172484/pexels-photo-172484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                />
            </div>
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy'nin size sunduğu bisiklet rotaları sadece konum bilgisi vermekten ibaret değil. Standy, rotanız üzerinde bulunan bisiklet tamir noktaları, su çeşmeleri, dinlenme alanları gibi önemli noktaları da size gösterebilir. Böylece siz sadece pedal çevirmenin keyfini sürersiniz.

                </div>

                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover object-center w-full lg:h-[40rem] rounded-lg shadow-lg  "
                        src="/blog/bisikletinizi-kapin/bisikletinizi-kapin-img-1.png"
                        alt=""
                    />
                </div>

                <h1 className="max-w-screen-md text-3xl leading-loose mx-auto text-left">
                    Hayal edin;
                </h1>



                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    <ul className="list-disc pl-5 ">
                        <li>
                            Güneşin ilk ışıklarında yemyeşil bir parkın içinden geçen bisiklet yolunda keyifli bir gezintiye çıkıyorsunuz. Standy sizi şehrin en sakin ve huzur veren parkurlarına yönlendiriyor.
                        </li>
                        <li>
                            Tarihi dokuyla iç içe bir yolculuk mu arıyorsunuz? Standy, sizi şehrin tarihi semtlerinde bisiklet turlarına çıkarabilir. Bisikletinizle dar sokaklarda gezinirken şehrin geçmişine yolculuk yapabilirsiniz.
                        </li>
                        <li>
                            Şehrin gökdelenlerine farklı bir açıdan mı bakmak istiyorsunuz? Standy ile nehir kenarı bisiklet yollarını keşfedebilir ve şehrin silüetini farklı bir perspektiften seyredebilirsiniz.
                        </li>
                    </ul>
                </div>


                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/3764520/pexels-photo-3764520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>



                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Ayrıca Standy ile bisiklet rotanızı tamamen kişiselleştirebilirsiniz. İster şehrin en popüler kafelere uğrayabileceğiniz bir rota oluşturun, ister tarihi eserleri görmenizi sağlayacak bir yolculuk planlayın. Hatta rotanıza arkadaşlarınızı da ekleyebilir ve birlikte unutulmaz bir bisiklet turu organize edebilirsiniz.                                  </div>


                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full   rounded-lg shadow-lg  "
                        src="/blog/standy-assistant/standy-assistant-img-1.png"
                        alt=""
                    />
                </div>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Hadi bisikletinize atlayın ve Standy ile şehrin gizli yollarını keşfe çıkın! Unutmayın, size sadece nefes kesen manzaralar ve unutulmaz anılar değil, aynı zamanda sağlıklı bir aktivite de bekliyor. Bisikletli maceranız başlasın!
                </div>
            </article>

        </div>



    </div>
    )
}
export default Blog;