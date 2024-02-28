import CTA from "@/components/cta";
import Head from "next/head";

function About() {
    return (<div className="text-standy-white">
        <Head>
            <title>Hakkımızda</title>
        </Head>
        <div className="   lg:flex-row lg:items-center lg:space-x-20 mx-auto w-full max-w-screen-xl p-4 py-20">
            <div className="text-start mt-6 ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-2xl   tracking-wide  uppercase  font-din-condensed text-4xl font-bold ">Hakkımızda</h2>
                <h1 className="text-xl">Standy – Her Gün Yeni Bir Keşif</h1>
                <p className="  max-w-3xl  mt-6 md:block md:text-lg md:leading-relaxed">
                    Standy, gezginler için yeni, özgün ve daha önce keşfetmedikleri gizli mekanlar yaratmayı hedefleyen bir platformdur. Amacımız, keşfetme arzusuyla dolup taşan gezginlere, turistik klişelerden uzak, yerel ve özgün deneyimler sunmak.
                </p>

                <p className="  max-w-xl  mt-6 md:block md:text-lg md:leading-relaxed">
                    Üniversitelerde ve sosyal medyada geniş bir kullanıcı kitlesi oluşturarak, her bir gezginin beğenebileceği, ona uygun mekanlar ile eşleşmesini sağlıyoruz. Böylece, her gezginin kişisel zevkine uygun, otantik ve unutulmaz deneyimler yaşamasına olanak tanıyoruz.
                </p>

                <p className="  max-w-xl  mt-6 md:block md:text-lg md:leading-relaxed">
                    Zaman kazandırmayı hedefleyen sistemimiz, seyahat planlamasını kolaylaştırırken, sıradan turistik yolların dışına çıkmanıza yardımcı olur. Hem yerel halkın favorilerini keşfetmek, hem de kendine özgü maceralar yaratmak isteyen gezginler için Standy, ideal bir yoldaş.
                </p>

                <p className="  max-w-xl  mt-6 md:block md:text-lg md:leading-relaxed">
                    Bize katılın, Türkiye'nin dört bir yanında, bilinmeyenleri keşfedin, yeni maceralar yaratın. Standy ile gezgin ruhunuzu özgür bırakın!

                </p>


            </div>

        </div>





        <CTA></CTA>

    </div>
    )
}
export default About;