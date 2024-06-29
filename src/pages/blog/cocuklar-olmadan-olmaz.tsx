import BlogNavbar from "@/components/creator/blogNavbar";
import { Bedtime, Bolt, Hiking, LunchDining } from "@mui/icons-material";
import Head from "next/head";

function Blog() {
    return (<div className="text-standy-white">
        <Head>
            <title>Çocuklar Olmadan Olmaz</title>
        </Head>
        <header >
            <BlogNavbar />
        </header>
        <div className="py-24">
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >
                <div className="w-full mx-auto mb-3 text-center md:w-2/3">
                    <p className="mb-3 text-xl         ">
                        <time>20 Jan 2024</time>
                    </p>
                    <h1 className="  text-3xl     md:leading-tight  " title="Turist Değil Gezgin ol">
                        Çocuklar Olmadan Olmaz
                    </h1>
                </div>

                <div className="mx-auto max-w-xl text-md text-center   prose">
                    <p>
                        Tatil planları yapılıyor, bavullar dolmaya hazırlanıyor ama en büyük soru işareti "Çocuklarla ne yapacağız?" oluyor değil mi? Hiç endişelenmeyin, çünkü Standy bu sorunu çözmek için yanınızda! Bu sefer Standy ile birlikte ailenizi unutulmaz bir şehir turuna çıkarıyoruz.
                    </p>

                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/15171578/pexels-photo-15171578/free-photo-of-a-girl-sitting-on-his-fathers-shoulders-near-a-field-with-giraffes-in-a-zoo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">

                    Unutun sıkıcı müzeleri ve uzun yürüyüşleri! Standy, hem çocukların eğlenip öğrenmesini hem de yetişkinlerin keyifli vakit geçirmesini sağlayacak aktivitelerle dolu bir rota oluşturacak. Hazır mısınız? Ailecek eğlence macerası başlıyor!
                </div>



            </article>

            <div className="my-10 ">
                <img
                    className="object-cover  object-center w-screen  h-[30rem] shadow-lg  "
                    src="https://images.pexels.com/photos/39691/family-pier-man-woman-39691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                />
            </div>
            <article className="px-4   mx-auto max-w-7xl text-standy-black"     >



                <h1 className="max-w-screen-md text-3xl leading-loose mx-auto text-left">
                    Hayvanlarla Randevu                </h1>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy ile şehrin en popüler hayvanat bahçelerine veya akvaryumlarına gidebilirsiniz. Çocuklar egzotik hayvanlarla tanışmanın heyecanını yaşarken, yetişkinler de doğanın harikalarını keşfetme fırsatı yakalayacak.
                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover object-bottom w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/1040396/pexels-photo-1040396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
                    />
                </div>
                <h1 className="max-w-screen-md text-3xl leading-loose mx-auto text-left">
                    Eğlence Dolu Parklar                </h1>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy size hem heyecan verici roller coaster'ları hem de minikler için eğlenceli oyun alanları bulunan lunaparkları keşfetme imkanı sunuyor. Çığlıklar, kahkahalar ve bol bol eğlence sizi bekliyor!                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/34524/amusement-park-europa-park-boot-park.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
                <h1 className="max-w-screen-md text-3xl leading-loose mx-auto text-left">
                    Öğrenirken Eğlenmek
                </h1>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy, çocukların interaktif sergiler ve deneylerle öğrenimlerini eğlenceli hale getiren müzelere götürebilir. Dinozor kemiklerini yakından görebilir, uzay hakkında keşfe çıkabilir veya insan vücudunun sırlarını öğrenebilirsiniz. Ailecek hem eğlenecek hem de yeni şeyler öğreneceksiniz.                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/4145146/pexels-photo-4145146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
                <h1 className="max-w-screen-md text-3xl leading-loose mx-auto text-left">
                    Yaratıcılık Atölyeleri                </h1>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy ile şehrin çocuklara yönelik yaratıcılık atölyelerini keşfedin. Çocuklar resim yapmaktan heykel oluşturmaya, drama derslerinden kodlama eğitimlerine kadar birçok farklı alanda kendini ifade etme fırsatı yakalayacak. Siz de minik sanatçıların eserlerini hayranlıkla izleyebilir ve onlarla gurur duyabilirsiniz.                </div>
                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-[40rem] rounded-lg shadow-lg  "
                        src="https://images.pexels.com/photos/7869041/pexels-photo-7869041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Standy ile aileniz için en uygun rotayı oluşturmak da çok kolay! Standy size hem şehrin en popüler ailecek eğlence noktalarını hem de daha az bilinen, ancak keşfedilmeyi bekleyen gizli mekanları önerebilir. Hatta siz de dilediğiniz aktiviteleri rotaya ekleyerek tamamen size özel bir aile turu planlayabilirsiniz.                </div>

                <div className="my-10 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full   rounded-lg shadow-lg  "
                        src="/blog/standy-assistant/standy-assistant-img-1.png"
                        alt=""
                    />
                </div>

                <div className="max-w-screen-md text-xl leading-loose mx-auto text-left">
                    Hadi ailenizi toplayın, Standy'yi açın ve unutulmaz bir şehir turuna hazırlanın! Size sadece keyifli geziler, bol kahkahalar ve birbirinden güzel anılar değil, aynı zamanda ailenizle birlikte güçleneceğiniz unutulmaz bir deneyim sunuyoruz.                </div>
            </article>

        </div>



    </div>
    )
}
export default Blog;