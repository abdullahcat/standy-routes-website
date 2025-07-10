import Navbar from "@/components/navbar";
import Head from "next/head";

function KVKK() {
    return (
        <div>
            <Head>
                <title>Standy KVKK Aydınlatma Metni</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <section className="text-standy-black mx-auto w-full max-w-screen-xl p-4 py-20 xl:px-0 min-h-screen">
                <h1 className="text-3xl text-start py-5">STANDY TECHNOLOGIES YAZILIM TİCARET VE SANAYİ LİMİTED ŞİRKETİ</h1>
                <h2 className="text-2xl mt-4">KİŞİSEL VERİLERİN İŞLENMESİNE İLİŞKİN AYDINLATMA METNİ</h2>
                <p className="mt-2 italic">(Sürüm 1.2 — Yürürlük: 01 Temmuz 2025)</p>

                <h3 className="text-xl mt-6">1. VERİ SORUMLUSU</h3>
                <ul className="list-disc list-inside mt-2">
                    <li><strong>Unvan:</strong> STANDY TECHNOLOGIES YAZILIM TİCARET VE SANAYİ LİMİTED ŞİRKETİ</li>
                    <li><strong>Ticari Merkezi:</strong> Kültür Mah. 3837 Sk. Abdi Çavuş B Blok No:3 İç Kapı No:6 Kepez / Antalya</li>
                    <li><strong>E-posta:</strong> info@standyroutes.com</li>
                </ul>

                <h3 className="text-xl mt-6">2. AYDINLATMA METNİNİN KAPSAMI</h3>
                <p className="mt-2">Bu metin 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, Standy web sitesi ve mobil uygulamasında sunulan hizmetler sırasında işlenen, saklanan ve aktarılan kişisel verileriniz hakkında sizi aydınlatmak amacıyla hazırlanmıştır.</p>

                <h3 className="text-xl mt-6">3. KİŞİSEL VERİ KATEGORİLERİ, İŞLEME AMAÇLARI ve HUKUKİ SEBEPLER</h3>
                <div className="overflow-x-auto mt-2">
                    <table className="min-w-full border border-gray-300 text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-2 py-1">#</th>
                                <th className="border px-2 py-1">Sürücü / Senaryo</th>
                                <th className="border px-2 py-1">İşlenen Veri Kategorileri</th>
                                <th className="border px-2 py-1">İşleme Amaçları</th>
                                <th className="border px-2 py-1">Hukuki Sebep (KVKK)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-2 py-1">3.1</td>
                                <td className="border px-2 py-1">İşletme Kaydı ve Yönetimi</td>
                                <td className="border px-2 py-1">İşletme adı, görsel içerikler, e-posta, telefon, açıklama</td>
                                <td className="border px-2 py-1">İşletme tanıtımı ve listelenmesi</td>
                                <td className="border px-2 py-1">m.5/2-c</td>
                            </tr>
                            <tr>
                                <td className="border px-2 py-1">3.2</td>
                                <td className="border px-2 py-1">Kullanıcı Hesap Açılışı</td>
                                <td className="border px-2 py-1">Ad-soyad, e-posta, telefon, kullanıcı adı, şifre, kullanım geçmişi</td>
                                <td className="border px-2 py-1">Hesap yönetimi, güvenlik</td>
                                <td className="border px-2 py-1">m.5/2-c</td>
                            </tr>
                            <tr>
                                <td className="border px-2 py-1">3.3</td>
                                <td className="border px-2 py-1">İletişim ve Destek</td>
                                <td className="border px-2 py-1">E-posta, telefon, mesajlar</td>
                                <td className="border px-2 py-1">Talep/şikayet yönetimi</td>
                                <td className="border px-2 py-1">m.5/2-c & m.5/2-f</td>
                            </tr>
                            <tr>
                                <td className="border px-2 py-1">3.4</td>
                                <td className="border px-2 py-1">Çerez ve Kullanım Verileri</td>
                                <td className="border px-2 py-1">IP, oturum saati, tıklama geçmişi</td>
                                <td className="border px-2 py-1">Deneyim iyileştirme</td>
                                <td className="border px-2 py-1">m.5/2-f</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-xl mt-6">4. KİŞİSEL VERİLERİN AKTARIMI</h3>
                <div className="overflow-x-auto mt-2">
                    <table className="min-w-full border border-gray-300 text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-2 py-1">Alıcı Grubu</th>
                                <th className="border px-2 py-1">Aktarım Amacı</th>
                                <th className="border px-2 py-1">Hukuki Dayanak</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-2 py-1">Hizmet Sağlayıcılar</td>
                                <td className="border px-2 py-1">Altyapı temini, bakım hizmetleri</td>
                                <td className="border px-2 py-1">m.8/2-a & m.9</td>
                            </tr>
                            <tr>
                                <td className="border px-2 py-1">Yetkili Kamu Kurumları</td>
                                <td className="border px-2 py-1">Yasal bildirim yükümlülüğü</td>
                                <td className="border px-2 py-1">m.8/2-ç</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-xl mt-6">5. SAKLAMA SÜRELERİ & İMHA POLİTİKASI</h3>
                <ul className="list-disc list-inside mt-2">
                    <li>Kullanıcı ve işletme kayıtları: Platform kullanım süresi + 10 yıl</li>
                    <li>İletişim mesajları: 3 yıl</li>
                    <li>Log kayıtları: 2 yıl</li>
                </ul>

                <h3 className="text-xl mt-6">6. VERİ GÜVENLİĞİ TEDBİRLERİ</h3>
                <ul className="list-disc list-inside mt-2">
                    <li>TLS şifreleme</li>
                    <li>Parola hashing algoritmaları</li>
                    <li>Erişim kontrolü ve log takibi</li>
                    <li>Firewall ve sistem güncellemeleri</li>
                </ul>

                <h3 className="text-xl mt-6">7. HAKLARINIZ (KVKK MADDE 11)</h3>
                <ul className="list-disc list-inside mt-2">
                    <li>Verilerin işlenip işlenmediğini öğrenme</li>
                    <li>İşlenmişse bilgi talep etme</li>
                    <li>Kullanım amacını öğrenme</li>
                    <li>Aktarılan 3. kişileri bilme</li>
                    <li>Düzeltme, silme isteme</li>
                    <li>Otomatik işleme dayalı sonuçlara itiraz</li>
                    <li>Zarar halinde tazminat isteme</li>
                </ul>

                <h3 className="text-xl mt-6">8. BAŞVURU USULÜ</h3>
                <p className="mt-2">Aşağıdaki yöntemlerle başvurunuzu iletebilirsiniz:</p>
                <ul className="list-disc list-inside mt-2">
                    <li>E-posta: info@standyroutes.com</li>
                    <li>Yazılı: Kültür Mah. 3837 Sk. Abdi Çavuş B Blok No:3 İç Kapı No:6 Kepez / Antalya</li>
                </ul>
                <p className="mt-2">Başvurular en geç 30 gün içinde ücretsiz olarak yanıtlanır.</p>

                <h3 className="text-xl mt-6">9. GÜNCELLEME & YÜRÜRLÜK</h3>
                <p className="mt-2">Bu metin 01 Temmuz 2025 tarihinde yürürlüğe girmiştir. Güncellenmiş sürüm platformda yayımlanır.</p>

                <h2 className="text-2xl mt-10">6698 SAYILI KİŞİSEL VERİLERİN KORUNMASI KANUNU UYARINCA KİŞİSEL VERİ SAHİPLERİNE TANINAN HAKLARIN KULLANIMINA İLİŞKİN BAŞVURU FORMU</h2>
                <p className="mt-2">06 Nisan 2016 tarihinde yayınlanarak yürürlüğe giren 6698 Sayılı Kişisel Verilerin Korunması Kanunu’nun ("KVKK") 11. Maddesinde kişisel veri sahiplerine belirli haklar tanınmıştır. Veri sorumlusu sıfatıyla ticari merkezi <strong>Kültür Mah. 3837 Sk. Abdi Çavuş B Blok No:3 İç Kapı No:6 Kepez / Antalya</strong> adresinde bulunan şirketimiz <strong>STANDY TECHNOLOGIES YAZILIM TİCARET VE SANAYİ LİMİTED ŞİRKETİ</strong> tarafından işlenen kişisel verilerinize ilişkin taleplerinizi, bu formu eksiksiz ve açık bir şekilde doldurup imzaladıktan sonra yukarıda belirtilen adresimize elden veya iadeli taahhütlü posta yolu ile iletmenizin ardından en geç 30 (otuz) gün içinde başvurunuzu yanıtlandıracağız. Başvurunuzda şirketimize sunduğunuz bilgi ve belgelerin eksik olması veya talebinizin yerine getirilmesinin öngörülen dışında bir maliyet gerektirmesi halinde sizinle iletişime geçecek ve işlemlerin devamı için onayınızı isteyeceğiz. KVKK’nın 11. Maddesi uyarınca hazırlanan iş bu form ile şirketimize başvurma hakkı, kişisel veri sahibinin doğrudan kendisine aittir. Üçüncü şahıslara adına yapılacak başvurularda, ilgili şahsı temsile uygun bir vekâletnamenin bulunması gerekmektedir.</p>

                <h3 className="text-xl mt-6">KİŞİSEL VERİ SAHİBİNE İLİŞKİN BİLGİLER</h3>
                <ul className="list-disc list-inside mt-2">
                  <li>Ad-Soyad</li>
                   <li>Adresi</li>
                  <li>Elektronik posta adresi</li>
                  <li>Şirketimiz ile olan ilişkiniz ve başlama ve sona erme tarihi</li>
                </ul>

                <h3 className="text-xl mt-6">KİŞİSEL VERİ SAHİBİNİN TALEPLERİ</h3>
                <p className="mt-2">KVKK kapsamında veri sorumlusu olan şirketimizden, Kanun’un 11. maddesi kapsamında talep edebileceğiniz haklar aşağıda sıralanmış olup, talebinize uygun ifadenin yanında yer alan bölüme ✓ işaretini koymanız yeterlidir.</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Şirketinizce işlenen kişisel verilerim var mı, varsa bunlar nelerdir?</li>
                  <li>Kişisel verilerimi işleme faaliyet ve yöntemleriniz nelerdir?</li>
                  <li>Kişisel verilerimin şirketinizce işlenme amacını nedir?</li>
                  <li>Kişisel verilerim bu amaca uygun işlenmekte midir?</li>
                  <li>Kişisel verilerimin şirketiniz dışında yurtiçinde veya yurtdışında üçüncü kişilere aktarılıyor mu? Bu kişiler kimlerdir.</li>
                  <li>Şirketinizce işlenen ve/veya üçüncü şahıslara aktarılan kişisel verilerimdeki eksikliğin giderilmesi ve/veya güncellenmesini talep ediyorum.</li>
                  <li>Şirketinizce işlenen ve/veya üçüncü şahıslara aktarılan kişisel verilerimin silinmesini, yok edilmesi, anonimleştirilmesini talep ediyorum.</li>
                  <li>Şirketiniz tarafından işlenen kişisel verilerim münhasıran otomatik sistemler vasıtasıyla analiz edildiğini ve bu analiz neticesinde şahsım aleyhine bir sonuç doğduğunu düşünüyorum. Bu sonuca itiraz ediyorum.</li>
                </ul>

                <h3 className="text-xl mt-6">TALEP KONUSUNA İLİŞKİN VERİ SAHİBİNİN AÇIKLAMALARI</h3>
                <p className="mt-2">Yukarıda 2. Maddede belirtilen talebinize ilişkin kısa açıklamalarını aşağıdaki bölümde belirtiniz.</p>
                <div className="border border-gray-300 rounded p-4 my-2 min-h-[80px]">&nbsp;</div>

                <h3 className="text-xl mt-6">BAŞVURU FORMUNA EKLENEN BELGELER</h3>
                <p className="mt-2">Başvurunuza eklediğiniz belgelerin sıra numarası ve adıyla aşağıdaki tabloya yazınız. Lütfen başvuru formu ekinde orijinal belge ibraz etmeyiniz. Orijinal belgeler gerektiğinde şirketimizce sizden istenecektir. Başvuru formunun ekinde sunacağınız orijinal belgelerin kaybı veya zarar görmesinden şirketimiz sorumlu tutulamayacaktır.</p>
                <div className="border border-gray-300 rounded p-4 my-2 min-h-[60px]">&nbsp;</div>

                <h3 className="text-xl mt-6">BİLDİRİM YÖNTEMİ</h3>
                <p className="mt-2">İşbu başvurunuza şirketimizce verilecek cevapların tarafınıza iletim yöntemini lütfen aşağıda ilgili yöntemin yanına ✓ koymak suretiyle işaretleyiniz.</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Başvuru formunun 1. Maddesinde belirtilen posta adresime yazılı olarak</li>
                  <li>Başvuru formunun 1. Maddesinde belirtilen elektronik posta adresime yazılı olarak</li>
                  <li>Başvuru formunun 1. Maddesinde belirtilen telefonum aranmak suretiyle sözlü olarak</li>
                </ul>

                <h3 className="text-xl mt-6">BAŞVURU SAHİBİNİN BEYANI</h3>
                <p className="mt-2">Şirketinize yapmış olduğum işbu başvuruda belirttiğim tüm taleplerimin KVKK’nın 13. maddesi uyarınca değerlendirilerek tarafıma bilgi verilmesini talep ediyorum. Bu amaçla başvuruda tarafınıza verdiğim belge ve bilgilerimin doğru, güncel ve şahsıma ait olduğunu, bu bilgilerin başvurumun değerlendirilmesi, cevaplandırılması, cevabın tarafıma ulaştırılması amaçlarıyla sınırlı olarak Şirketiniz tarafından işlenmesine izin verdiğimi kabul ve beyan ederim.</p>
                <div className="border border-gray-300 rounded p-4 my-2 min-h-[60px]">
                  <div className="flex flex-col gap-2">
                    <span>Kişisel Veri Sahibi/Vekili</span>
                    <span>Ad/Soyad: ___________________________</span>
                    <span>Tarih: _______________________________</span>
                    <span>İmza: ________________________________</span>
                  </div>
                </div>

                <p className="mt-6">© 2025 STANDY TECHNOLOGIES YAZILIM TİCARET VE SANAYİ LİMİTED ŞİRKETİ. Tüm hakları saklıdır.</p>
            </section>
        </div>
    );
}
export default KVKK;