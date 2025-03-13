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
                <p>1.1 Standy, işletmelerin kullanıcılara yönelik indirimler sunarak yeni müşteriler kazanmasını sağlayan dijital bir platformdur.</p>
                
                <h2 className="text-2xl mt-4">2. Standy’nin Sunumu ve Hizmet Koşulları</h2>
                <ul className="list-disc list-inside mt-2">
                    <li>2.1. Standy, işletmeye kullanıcılara erişim konusunda bir aracılık hizmeti sunar ancak işletmenin sunduğu indirimlerden veya kampanyalardan sorumlu değildir.</li>
                    <li>2.2. Standy, işletmelerin sunduğu kampanyaların kullanıcılara ulaşmasını sağlar ancak işletmenin kendi kararlarıyla belirlediği indirimlerin geçerliliği ve uygulanması konusunda garanti vermez.</li>
                 </ul>
                
                <h2 className="text-2xl mt-4">3. Veri İşleme ve Kullanım Koşulları</h2>
                <ul className="list-disc list-inside mt-2">
                    <li>İşletmenin adı, adresi ve yetkili iletişim bilgileri</li>
                    <li>Sunulan indirim ve kampanya bilgileri</li>
                    <li>Standy platformundaki performans verileri (kullanıcı etkileşimi, kampanya kullanımı gibi).</li>
                </ul>
                <p>Bu bilgiler yalnızca platformun işleyişi ve kullanıcı deneyimini iyileştirmek amacıyla kullanılacaktır.</p>
                
                <h2 className="text-2xl mt-4">4. Sorumluluk Reddi ve Hukuki Şartlar</h2>
                <ul className="list-disc list-inside mt-2">
                    <li>4.1. İşletme, Standy’ye kayıt olarak platformda sunacağı tüm indirim, kampanya ve diğer tekliflerin doğruluğunun ve geçerliliğinin tamamen kendi sorumluluğu altında olduğunu kabul eder.</li>
                    <li>4.2. Standy, işletmenin sunduğu indirimlerden, fiyat politikasından veya müşteri memnuniyetinden doğan herhangi bir zarardan sorumlu değildir.</li>
                    <li>4.3. Standy, işletmenin platformdaki performansına ilişkin herhangi bir garanti sunmaz ve platforma kayıt olmak, işletmeye kesin müşteri artışı veya satış garantisi sunmaz.</li>
                <li>4.4. Standy, gerekli gördüğü hallerde işletmeyi platformdan çıkarma hakkını saklı tutar. İşletme de dilediği zaman platformdan çıkma hakkına sahiptir.</li>
                </ul>
                
                <h2 className="text-2xl mt-4">5. Uyuşmazlık Çözümü ve Yetkili Mahkeme</h2>
                <ul className="list-disc list-inside mt-2">

                <li>5.1. Taraflar arasında doğabilecek her türlü ihtilaf, öncelikle dostane yollarla çözülmeye çalışılacaktır.</li>
                <li>5.2. Taraflar arasında ihtilafın dostane yollarla çözülememesi halinde, işbu sözleşmeden doğabilecek her türlü hukuki ihtilafta <strong>Türkiye Cumhuriyeti yasaları geçerli olacak</strong> ve <strong>Antalya Mahkemeleri ve İcra Daireleri yetkili olacaktır.</strong></li>
                </ul>

                <h2 className="text-2xl mt-4">6. Sözleşmenin Kabulü ve Yürürlüğe Girişi</h2>
 <ul className="list-disc list-inside mt-2">
    <li>6.1. İşletme, Standy platformuna kayıt olarak bu sözleşmeyi okuduğunu, anladığını ve tüm koşullarını kabul ettiğini beyan eder.</li>
    <li>6.2. Standy, İşletme’nin kayıt olurken verdiği bilgileri doğrulama hakkına sahiptir ve eksik/hatalı bilgi tespit edilmesi durumunda kaydı iptal etme hakkını saklı tutar.</li>
    <li>6.3. Standy, bu sözleşme şartlarında değişiklik yapma hakkını saklı tutar. Yapılacak her türlü değişiklik, işletmelere bildirilecek ve platformda yayınlandığı anda yürürlüğe girecektir.</li>
    </ul>             
                <p className="mt-2"><Link href="/privacy-policy">Gizlilik Politikamız</Link> ve <Link href="/terms-of-service">Şartlar ve Koşullar</Link> hakkında detaylı bilgi almak için tıklayın.</p>
            </section>
        </div>
    );
}

export default Consent;