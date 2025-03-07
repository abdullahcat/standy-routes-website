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

                <p>Son Güncelleme Tarihi: 07.02.2025</p>

<h2 className="text-2xl mt-4">1. Giriş</h2>
<p className="mt-2">Standy  olarak, kullanıcılarımızın gizliliğini ve kişisel verilerinin güvenliğini önemsiyoruz. Bu gizlilik politikasy, hangi bilgileri topladığımızı, nasıl kullandığımızı, nasıl sakladığımızı ve kullanıcılarımızın haklarını açıklamaktadır. Uygulamamızı kullanarak bu politikayı kabul etmiş olursunuz.</p>

<h2 className="text-2xl mt-4">2. Toplanan Bilgiler</h2>

<h3 className="text-xl mt-4">2.1. Kullanıcı Tarafından Sağlanan Bilgiler</h3>
<ul className="list-disc list-inside mt-2">
    <li>Ad ve Soyad</li>
    <li>E-posta adresi</li>
</ul>

<h3 className="text-xl mt-4">2.2. Otomatik Olarak Toplanan Bilgiler</h3>
<ul className="list-disc list-inside mt-2">
    <li>Cihaz bilgileri (cihaz modeli, işletim sistemi, IP adresi vb.)</li>
    <li>Konum bilgileri (yalnızca izin verdiğinizde)</li>
    <li>Uygulama kullanım verileri (ziyaret edilen sayfalar, tıklamalar vb.)</li>
    <li>Çerezler (Cookies) ve benzeri izleme teknolojileri</li>
</ul>

<h3 className="text-xl mt-4">2.3. Üçüncü Taraflardan Alınan Bilgiler</h3>
<ul className="list-disc list-inside mt-2">
    <li>Google, Apple veya diğer sosyal medya hesaplarıyla giriş yapılması halinde ilgili platformlardan sağlanan bilgiler</li>
    <li>İş ortaklarımızdan ve reklam ağlarından gelen bilgiler</li>
</ul>

<h2 className="text-2xl mt-4">3. Bilgilerin Kullanımı</h2>
<ul className="list-disc list-inside mt-2">
    <li>Hizmetleri sunmak ve uygulama içi işlemleri gerçekleştirmek</li>
    <li>Kullanıcı deneyimini iyileştirmek ve kişiselleştirilmiş içerik sunmak</li>
    <li>Hukuki yükümlülüklere uymak ve dolandırıcılığı önlemek</li>
    <li>Kampanya ve promosyon bildirimleri göndermek (yalnızca onay veren kullanıcılara)</li>
    <li>Analitik veriler ile uygulamanın performansını iyileştirmek</li>
</ul>

<h2 className="text-2xl mt-4">4. Bilgilerin Paylaşımı</h2>
<ul className="list-disc list-inside mt-2">
    <li><strong>Hizmet Sağlayıcılar:</strong> Veri barındırma ve analitik hizmetleri</li>
    <li><strong>Yasal Gereklilikler:</strong> Kanunlar gereği devlet kurumlarına bilgi sağlanması gerektiğinde</li>
    <li><strong>İş Ortakları:</strong> Yalnızca onayınızla kampanya ve indirim fırsatları sunulması</li>
</ul>

<h2 className="text-2xl mt-4">5. Verilerin Saklanması ve Güvenliği</h2>
<ul className="list-disc list-inside mt-2">
    <li>Kişisel verileriniz yalnızca gerekli olduğu süre boyunca saklanır ve sonra güvenli bir şekilde silinir.</li>
    <li>Standy , endüstri standardı güvenlik önlemleri ile verilerinizi korur.</li>
    <li>Ancak, internet üzerinden yapılan hiçbir veri aktarımının %100 güvenli olduğu garanti edilemez.</li>
</ul>

<h2 className="text-2xl mt-4">6. Çerezler ve İzleme Teknolojileri</h2>
<p className="mt-2">Uygulamamız, kullanıcı deneyimini geliştirmek için çerezleri ve benzeri izleme teknolojilerini kullanabilir. Tarayıcı ayarlarınızı değiştirerek çerezleri devre dışı bırakabilirsiniz.</p>

<h2 className="text-2xl mt-4">7. Kullanıcı Hakları</h2>
<p className="mt-2">Kullanıcılar, aşağıdaki haklara sahiptir:</p>
<ul className="list-disc list-inside mt-2">
    <li>Kişisel verilerine erişme, düzeltme veya silme talebinde bulunma</li>
    <li>Veri işlenmesine itiraz etme ve pazarlama iletişimlerini reddetme</li>
    <li>Veri taşınabilirliği talep etme</li>
</ul>
<p className="mt-2">Bu haklarınızı kullanmak için <strong>info@standyroutes.com</strong> adresinden bizimle iletişime geçebilirsiniz.</p>

<h2 className="text-2xl mt-4">8. Çocukların Gizliliği</h2>
<p className="mt-2">Standy , <strong>4 yaş ve üzeri</strong> kullanıcılar için uygundur.</p>

<h2 className="text-2xl mt-4">9. İletişim</h2>
<p className="mt-2">Sorularınız veya geri bildirimleriniz için bizimle aşağıdaki adreslerden iletişime geçebilirsiniz:</p>
<ul className="list-disc list-inside mt-2">
    <li><strong>E-posta:</strong> info@standyroutes.com</li>
</ul>




            </section>       </div>
    );
}
export default Privacy;