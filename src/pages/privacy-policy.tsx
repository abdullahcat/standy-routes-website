import Navbar from "@/components/navbar";
import Head from "next/head";

function Privacy() {
    return (
        <div>
            <Head>
                <title>Gizlilik Politikası</title>
            </Head>
            <header >
                <Navbar />
            </header>
            <section className="text-standy-black mx-auto w-full max-w-screen-xl p-4  py-20 xl:px-0  min-h-screen">


                <h1 className='text-3xl text-start py-5'>Gizlilik Politikası</h1>

                <p>  Son Güncelleme Tarihi: 20.09.2023</p>

                <h2 className="text-2xl mt-4">1. Kişisel Bilgilerin Toplanması ve Kullanılması</h2>

                <p className="mt-2">Biz, Standy Routes, müşterilerimizin gizliliğini önemsiyoruz. Bu nedenle, sizden topladığımız kişisel bilgileri korumak ve gizliliğinizi sağlamak için gerekli tüm önlemleri alırız.</p>

                <h3 className="text-xl mt-4">1.1. Toplanan Bilgiler</h3>

                <ul className="list-disc list-inside mt-2">
                    <li>Adınız ve soyadınız</li>
                    <li>E-posta adresiniz</li>
                    <li>Telefon numaranız</li>
                    <li>Fatura adresiniz</li>
                    <li>Ödeme bilgileriniz</li>
                    <li>Diğer iletişim bilgileri</li>
                </ul>

                <h3 className="text-xl mt-4">1.2. Kullanım Amaçları</h3>

                <ul className="list-disc list-inside mt-2">
                    <li>Hizmetlerimizi sağlamak, işlem yapmak ve destek sunmak</li>
                    <li>İşletmemizle ilgili güncellemeler ve teklifler göndermek</li>
                    <li>Sizden gelen taleplere yanıt vermek</li>
                    <li>İşlem geçmişinizi ve tercihlerinizi analiz etmek</li>
                    <li>Yasal gerekliliklere uymak</li>
                </ul>




            </section>       </div>
    );
}
export default Privacy;