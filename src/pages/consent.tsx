import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";

function Consent() {
    return (
        <div>
            <Head>
                <title>Açık Rıza Metni</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <section className="text-standy-black mx-auto w-full max-w-screen-xl p-4 py-20 xl:px-0 min-h-screen">
                <h1 className='text-3xl text-start py-5'>Açık Rıza Metni</h1>
                
                <p>Bu sözleşme, Standy platformuna kayıt olan işletme (<strong>"İşletme"</strong>) ile Standy (<strong>"Platform"</strong>) arasında akdedilmiştir. İşletme, platforma kayıt olarak aşağıdaki şartları kabul etmiş sayılır.</p>

                <h2 className="text-2xl mt-4">1. Taraflar ve Tanımlar</h2>
                <p>Standy, işletmelerin kullanıcılara yönelik indirimler sunarak yeni müşteriler kazanmasını sağlayan dijital bir platformdur.</p>
                
                <h2 className="text-2xl mt-4">2. Standy’nin Sunumu ve Hizmet Koşulları</h2>
                <ul className="list-disc list-inside mt-2">
                    <li>Standy, işletmeye kullanıcılara erişim konusunda bir aracılık hizmeti sunar ancak işletmenin sunduğu indirimlerden veya kampanyalardan sorumlu değildir.</li>
                    <li>Standy, işletmelerin sunduğu kampanyaların kullanıcılara ulaşmasını sağlar ancak işletmenin kendi kararlarıyla belirlediği indirimlerin geçerliliği ve uygulanması konusunda garanti vermez.</li>
                </ul>
                
                <h2 className="text-2xl mt-4">3. Veri İşleme ve Kullanım Koşulları</h2>
                <ul className="list-disc list-inside mt-2">
                    <li>İşletmenin adı, adresi ve yetkili iletişim bilgileri</li>
                    <li>Sunulan indirim ve kampanya bilgileri</li>
                    <li>Kampanya kullanım ve etkileşim verileri</li>
                </ul>
                <p>Bu bilgiler yalnızca platformun işleyişi ve kullanıcı deneyimini iyileştirmek amacıyla kullanılacaktır.</p>
                
                <h2 className="text-2xl mt-4">4. Sorumluluk Reddi ve Hukuki Şartlar</h2>
                <ul className="list-disc list-inside mt-2">
                    <li>İşletme, Standy’de sunduğu tüm indirim, kampanya ve tekliflerin doğruluğundan sorumludur.</li>
                    <li>Standy, işletmenin fiyat politikası veya müşteri memnuniyetinden doğan zararlardan sorumlu değildir.</li>
                    <li>Standy, platformda performans garantisi sunmaz.</li>
                </ul>
                
                <h2 className="text-2xl mt-4">5. Uyuşmazlık Çözümü ve Yetkili Mahkeme</h2>
                <p>Her türlü ihtilaf öncelikle dostane yollarla çözülmeye çalışılacaktır. Aksi halde Antalya Mahkemeleri ve İcra Daireleri yetkilidir.</p>
                
                <h2 className="text-2xl mt-4">6. Sözleşmenin Kabulü</h2>
                <p>İşletme, Standy platformuna kayıt olarak bu sözleşmeyi okuduğunu, anladığını ve tüm koşullarını kabul ettiğini beyan eder.</p>
             
                <p className="mt-2"><Link href="/privacy-policy">Gizlilik Politikamız</Link> ve <Link href="/terms-of-service">Şartlar ve Koşullar</Link> hakkında detaylı bilgi almak için tıklayın.</p>
            </section>
        </div>
    );
}

export default Consent;