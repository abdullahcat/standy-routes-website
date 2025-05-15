import BlogNavbar from "@/components/blog/navbar";
import Navbar from "@/components/navbar";
import Head from "next/head";

function Privacy() {
    return (
        <div>
            <Head>
                <title>Limmo Go - Gizlilik Politikası</title>
            </Head>
            <header>
                <BlogNavbar />
            </header>
            <section className="text-standy-black mx-auto w-full max-w-screen-xl p-4 py-20 xl:px-0 min-h-screen">
                <h1 className='text-3xl text-start py-5'>Limmo Go Gizlilik Politikası</h1>

                <p>Son Güncelleme Tarihi: 07.02.2025</p>

                <h2 className="text-2xl mt-4">1. Giriş</h2>
                <p className="mt-2">Limmo Go oyununu oynarken, oyun deneyiminizi iyileştirmek ve oyun içi istatistikleri takip etmek için bazı veriler topluyoruz. Bu gizlilik politikası, hangi bilgileri topladığımızı, nasıl kullandığımızı ve nasıl sakladığımızı açıklamaktadır. Oyunu oynayarak bu politikayı kabul etmiş olursunuz.</p>

                <h2 className="text-2xl mt-4">2. Toplanan Bilgiler</h2>

                <h3 className="text-xl mt-4">2.1. Oyun İçi Veriler</h3>
                <ul className="list-disc list-inside mt-2">
                    <li>Oyun skorları ve başarılar</li>
                    <li>Oyun içi ilerleme</li>
                    <li>Oyun süresi ve sıklığı</li>
                 </ul>

                <h3 className="text-xl mt-4">2.2. Otomatik Olarak Toplanan Bilgiler</h3>
                <ul className="list-disc list-inside mt-2">
                    <li>Cihaz bilgileri (cihaz modeli, işletim sistemi, IP adresi)</li>
                    <li>Oyun performans metrikleri (FPS, yükleme süreleri, hata raporları)</li>
                    <li>Oyun içi etkileşim verileri (tıklamalar, hareketler, oyun içi seçimler)</li>
                </ul>

                <h2 className="text-2xl mt-4">3. Verilerin Kullanımı</h2>
                <ul className="list-disc list-inside mt-2">
                    <li>Oyun deneyimini iyileştirmek ve hataları düzeltmek</li>
                    <li>Oyun içi istatistikleri ve skor tablolarını oluşturmak</li>
                    <li>Oyun içi başarıları ve ödülleri takip etmek</li>
                    <li>Oyun performansını analiz etmek ve optimize etmek</li>
                    <li>Dolandırıcılığı önlemek ve adil oyun deneyimi sağlamak</li>
                </ul>

                <h2 className="text-2xl mt-4">4. Üçüncü Taraf İstatistikleri</h2>
                <p className="mt-2">Oyun içi istatistiklerinizi aşağıdaki üçüncü taraf servislerle paylaşıyoruz:</p>
                <ul className="list-disc list-inside mt-2">
                    <li>Google Analytics - Oyun kullanım istatistikleri</li>
                    <li>GameAnalytics - Oyun performans metrikleri</li>
                    <li>Firebase - Hata raporlama ve kullanıcı davranışları</li>
                </ul>

                <h2 className="text-2xl mt-4">5. Verilerin Saklanması ve Güvenliği</h2>
                <ul className="list-disc list-inside mt-2">
                    <li>Oyun verileriniz güvenli sunucularda şifrelenmiş olarak saklanır</li>
                    <li>Oyun hesabınızı silme talebinde bulunduğunuzda, tüm verileriniz güvenli bir şekilde silinir</li>
                    <li>Düzenli güvenlik güncellemeleri ve kontrolleri yapılmaktadır</li>
                </ul>

                <h2 className="text-2xl mt-4">6. Çocukların Gizliliği</h2>
                <p className="mt-2">Limmo Go, <strong>4 yaş ve üzeri</strong> kullanıcılar için uygundur.</p>

                <h2 className="text-2xl mt-4">7. İletişim</h2>
                <p className="mt-2">Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:</p>
                <ul className="list-disc list-inside mt-2">
                    <li><strong>E-posta:</strong> info@standyroutes.com</li>
                </ul>
            </section>
        </div>
    );
}
export default Privacy;