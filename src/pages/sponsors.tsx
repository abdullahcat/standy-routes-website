import React from 'react';
import { motion } from 'framer-motion';
import { title } from 'process';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import { Campaign, Event, Public, TrendingUp } from '@mui/icons-material';

const schools = [
  { name: 'İTÜ', logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2016/12/itu-istanbul-teknik_universitesi-logo.png' },
  { name: 'Sabancı', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Sabanc%C4%B1_University_logo.svg/2560px-Sabanc%C4%B1_University_logo.svg.png' },
  { name: 'Boğaziçi', logo: 'https://upload.wikimedia.org/wikipedia/tr/thumb/e/e2/Bo%C4%9Fazi%C3%A7i_%C3%9Cniversitesi_Logo.png/1200px-Bo%C4%9Fazi%C3%A7i_%C3%9Cniversitesi_Logo.png' },
  { name: 'İAFL', logo: 'https://www.iaflolimpiyatlari.com/images/logo.png' },
  { name: 'İstanbul Erkek', logo: 'https://seeklogo.com/images/I/istanbul-lisesi-logo-B1E4F9A94A-seeklogo.com.png' },
  { name: 'Marmara Üni', logo: 'https://upload.wikimedia.org/wikipedia/tr/7/70/Marmara_%C3%9Cniversitesi_logo.png' },
  { name: 'Galatasaray', logo: 'https://gsumed.org/wp-content/uploads/2021/04/Galatasaray-U%CC%88niversitesi-Logo-PNG-3.png' },
  { name: 'Haydarpaşa lisesi', logo: 'https://www.upokullardernegi.org/images/haydarpasa.png' }
  ,{name: 'Akdeniz Ünivestisesi', logo: 'https://upload.wikimedia.org/wikipedia/tr/d/dc/Akdeniz_%C3%9Cniversitesi_logosu.IMG_0838.png'}

  ,{name: 'Antalya Bilim Ünivesitesi', logo: 'https://www.studyu.org/wp-content/uploads/2024/06/antalyabilim-logo-300x191.webp'},
  {name: 'Koç Ünivesitesi', logo: 'https://e7.pngegg.com/pngimages/371/417/png-clipart-koc-university-logo-koc-universitesi-research-english-camp-text-logo.png'}

];

const benefits = [
  {
    title: 'Operasyonel Kolaylık',
    description: 'Ürünlerinizi etkinliklerde tanıtmak için hiçbir ek çaba harcamanıza gerek kalmaz, tüm süreçleri sizin için hallediyoruz.'
  },
  {
    title: 'Hedefe Yönelik Tanıtım',
    description: 'Marka mesajınızı doğrudan genç ve dinamik tüketici kitlesine ulaştırıyoruz.'
  },
  {
    title: 'Kolay Ölçeklenebilirlik',
    description: 'Üniversite ve lise etkinliklerinde, birden fazla şehir ve kampüste markanızı duyurma fırsatı.'
  },
  {
    title: 'Marka Görünürlüğü',
    description: 'Sponsorluklarınızı sadece fiziksel etkinliklerle sınırlı tutmayarak, sosyal medya ve Standy platformunda da tanıtıyoruz.'
  }
];

const steps = [
  {
    title: 'Görüşme',
    description: 'Online görüşmemiz ile hedef kitlenizi, sponsorluk yapmak istediğiniz ürünleri ve miktarlarını öğrenelim.'
  },
  {
    title: 'Doğru Kitle',
    description: 'Sunduğumuz birçok farklı ölçekteki lise ve üniversite etkinliklerinden size uygun olanları belirleyelim.'
  },
  {
    title: 'Etkinlik Süreci',
    description: 'Gönderdiğiniz ürünlerin tesliminden itibaren etkinliklerde yönetimini sağlayalım.'
  },
  {
    title: 'Sosyal Medya ve Rapor',
    description: 'Belirlediğimiz raporlama tekniklerini kullanarak geri dönütlerini sizlere sunalım.'
  }
];

const upcomingEvents = [
    {
        name: 'Çin Festivali',
        date: '7-11 Nisan',
        location: 'Marmara Üniversitesi',
        capacity: '450 kişi',
        image: '/sponsors/cin.jpg'
      }, {
        name: 'FocusOn',
        date: '17-19 Mayıs',
        location: 'İAFL',
        capacity: '300 kişi',
        image: '/sponsors/focus-on.jpeg'
      }, {
        name: 'İTÜ Veri Bilimi Zirve',
        date: '23-25 Mayıs',
        location: 'İTÜ',
        capacity: '500 Kişi',
        image: '/sponsors/veri-bilimi-zirvesi.jpg'
      },
  {
    name: 'Kültür Haftası',
    date: '10-14 Haziran',
    location: 'İstanbul Erkek Lisesi',
    capacity: '1000 kişi',
    image: '/sponsors/kultur.jpeg'
  },
  
  
 
];

const SponsorsPage: React.FC = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
  };

  return (
    <div className="min-h-screen text-black ">
  <Head>
            <title>Sponsorluk</title>
        </Head>
        <header >
            <Navbar />
        </header>

      {/* Hero Section */}
      <section className='pt-32 pb-10 text-center space-y-6 px-10 '>
 
<h1 className='font-condensed uppercase leading-20  font-black lg:text-8xl xl:text-8xl md:text-7xl text-6xl'>
MARKANIZI<br />ÖĞRENCİLERLE<br />BULUŞTURUN!
</h1>
<p className='text-gray-500 max-w-xl mx-auto text-xl'>
Standy Sponsorluk ile etkinliklerde sponsor olmak çok kolay! Ürünlerinizi gönderin, 
          bütün operasyonel süreçleri sizin için halledelim. Doğru kitle, doğru araç, sıfır efor!

</p>


<div className='flex items-center justify-center space-x-4'>
<Link
                          href="https://sponsors.standyroutes.com"
                          className="inline-flex items-center justify-center px-5 py-2 text-base border-standy-pink border text-white bg-standy-pink rounded-full hover:bg-standy-dark-pink transition duration-300 ease-in-out w-full sm:w-auto"
                      >
                          İletişime Geç
                      </Link>
    <Link
                      target='_blank'
                          href="https://firebasestorage.googleapis.com/v0/b/standy-c3f1e.appspot.com/o/Design%20Outlines%2FStandy-Sponsorluk.pdf?alt=media&token=1279a301-478b-4e45-ae6a-7f0702c52c13"
                          className="inline-flex items-center justify-center px-5 py-2 text-base   text-standy-pink border border-standy-pink rounded-full hover:bg-standy-pink hover:text-white transition duration-300 ease-in-out w-full sm:w-auto"
                      >
                           Dosyayı indir
                      </Link>  

</div>
</section>
  

      {/* Schools Section */}
      <section className="py-16 bg-neutral-100">
        <h2 className="text-3xl   text-center mb-10">Beraber Çalıştığımız Okullar</h2>
        <div className="flex overflow-hidden relative pt-4">
          <motion.div
            className="flex space-x-12 px-4"
            animate={{ 
              x: [0, -2000]
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...schools, ...schools, ...schools].map((school, index) => (
              <div key={index} className="flex-shrink-0 w-32 text-center">
                <img
                  src={school.logo}
                  alt={`${school.name} logo`}
                  className="w-24 h-24 mx-auto mb-2 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className=" py-10">
                <div className="relative px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
                    <div className="absolute inset-0">
                        <div className="absolute inset-y-0 z-0 w-full h-full bg-standy-white rounded-2xl lg:w-3/4" />

                    </div>

                    <div className="relative">
                        <h1 className="text-3xl pb-5">Neden Standy Sponsorluk?</h1>

                        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                            <div className="grid gap-12 row-gap-5 md:grid-cols-2">

                                <div className="relative">
                                    <div className="relative">
                                        <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">

                                            <Event></Event>
                                        </div>
                                        <h6 className="mb-2 text-xl leading-5">
                                        Operasyonel Kolaylık
                                        </h6>
                                        <p className="text-sm  ">
                                        Ürünlerinizi etkinliklerde tanıtmak için hiçbir ek çaba harcamanıza gerek kalmaz, tüm süreçleri sizin için hallediyoruz.                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                                        <Campaign></Campaign>
                                    </div>
                                    <h6 className="mb-2 text-xl leading-5">
                                        Doğru Kitle

                                    </h6>
                                    <p className="text-sm  ">
                                    Sunduğumuz birçok farklı ölçekteki lise ve üniversite etkinliklerinden size uygun olanları belirleyelim.


                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                                        <TrendingUp></TrendingUp>
                                    </div>
                                    <h6 className="mb-2 text-xl leading-5">
                                        Kolay Ölçeklenebilirlik

                                    </h6>
                                    <p className="text-sm  ">
                                    Üniversite ve lise etkinliklerinde, birden fazla şehir ve kampüste markanızı duyurma fırsatı.
                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                                        <Public></Public>
                                    </div>
                                    <h6 className="mb-2 text-xl leading-5">
                                        Marka Görünürlüğü
                                    </h6>
                                    <p className="text-sm  ">
                                    Sponsorluklarınızı sadece fiziksel etkinliklerle sınırlı tutmayarak, sosyal medya ve Standy platformunda da tanıtıyoruz.

                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="object-cover w-full h-56 rounded-2xl shadow-lg sm:h-96"
                                    src="https://images.pexels.com/photos/4997886/pexels-photo-4997886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>


     
            <div className='py-32 pb-10 '>
<section className='bg-standy-pink xl:mx-auto mx-4 pt-32     p-8 text-center text-cherry-blossom-pink max-w-screen-xl rounded-3xl flex flex-col relative'>
                    <img
                        src="/games/game-collab.png"
                        alt="Top Border Image"
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 object-cover"
                    />
                    <div className='flex-grow'></div> {/* This pushes the content to the bottom without extra space */}
                    <div className='flex flex-col items-center justify-center space-y-6'>
                        <h1 className='font-condensed uppercase leading-20 font-black lg:text-8xl xl:text-8xl md:text-7xl text-6xl'>
                              Standy Games
                        </h1>
                        <p className='text-white text-xl'>
                        Firmanıza özel oluşturduğumuz oyunlarla standınız diğer stantlardan ayrılsın.                  </p>
                        <Link
                            className="mx-2 inline-flex px-5 py-2 rounded-full  transition duration-300 ease-in-out bg-cherry-blossom-pink text-standy-black hover:bg-mimi-pink"
                            href="/games"
                        >
                            Daha fazla
                        </Link>
                    </div>
                </section>
   {/* Stand Design Section */}
   <section className="py-16 relative">
      <h2 className="text-3xl text-center mb-6">Standy ile Etkinlik Deneyimi</h2>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          {/* Center Image */}
          <div className="relative w-full max-w-2xl mx-auto mb-8">
            <img
              src="/sponsors/stand-design.png"
              alt="Stand Design"
              className="w-full h-auto"
            />
          </div>

          {/* Text Boxes Container - Grid on mobile, Absolute on desktop */}
          <div className="md:hidden grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-standy-pink mb-2">Reklamlarınız</h3>
              <p className="text-gray-600">
                Stant sürecinde istediğiniz reklam ürünlerinin yerleştirilmesini sağlar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-standy-pink mb-2">İnteraktif Oyunlar</h3>
              <p className="text-gray-600">
                Standy, firmanız lisanslı ürünlerin bulunduğu farklı oyunlar ile yarışmalar düzenler.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-standy-pink mb-2">Ürünler</h3>
              <p className="text-gray-600">
                Ürünlerinizin, istediğiniz belgeleri ve anketleri dolduran kişilerle paylaşıldığından emin olarak yüksek katılım oranı sağlar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-standy-pink mb-2">Ödüller</h3>
              <p className="text-gray-600">
                İnteraktif oyunlara özel sürpriz ödüller ile stant sürecini zenginleştirir.
              </p>
            </div>
          </div>

          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden md:block">
            {/* Ürünler - More left position */}
            <div className="absolute -bottom-4 -left-4 max-w-xs bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-standy-pink mb-2">Ürünler</h3>
              <p className="text-gray-600">
                Ürünlerinizin, istediğiniz belgeleri ve anketleri dolduran kişilerle paylaşıldığından emin olarak yüksek katılım oranı sağlar.
              </p>
              <div className="absolute right-0 top-1/2 w-40 h-px bg-gray-300 translate-x-full"></div>
            </div>

            {/* Reklamlarınız - Top right position (moved from bottom) */}
            <div className="absolute top-20 right-20 max-w-xs bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-standy-pink mb-2">Reklamlarınız</h3>
              <p className="text-gray-600">
                Stant sürecinde istediğiniz reklam ürünlerinin yerleştirilmesini sağlar.
              </p>
              <div className="absolute left-0 top-1/2 w-24 h-px bg-gray-300 -translate-x-full"></div>
            </div>

            {/* İnteraktif Oyunlar */}
            <div className="absolute top-32 left-20 max-w-xs bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-standy-pink mb-2">İnteraktif Oyunlar</h3>
              <p className="text-gray-600">
                Standy, firmanız lisanslı ürünlerin bulunduğu farklı oyunlar ile yarışmalar düzenler.
              </p>
              <div className="absolute right-0 top-1/2 w-16 h-px bg-gray-300 translate-x-full"></div>
            </div>

            {/* Ödüller - Moved to bottom right */}
            <div className="absolute bottom-12 right-0 max-w-xs bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-standy-pink mb-2">Ödüller</h3>
              <p className="text-gray-600">
                İnteraktif oyunlara özel sürpriz ödüller ile stant sürecini zenginleştirir.
              </p>
              <div className="absolute left-0 top-1/2 w-20 h-px bg-gray-300 -translate-x-full"></div>
            </div>
          </div>
        </div>
      </section>
</div>
      {/* Process Section */}
      <section className="py-16 bg-neutral-100">
        <h2 className="text-3xl text-center mb-10">Nasıl İlerliyoruz?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl rounded-full   font-bold mb-4">{index + 1}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

 
      {/* Upcoming Events Section */}
      <section className="py-16">
        <h2 className="text-3xl text-center mb-10">Yaklaşan Etkinlikler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="group rounded-xl relative block overflow-hidden">
        

              <img
                src={event.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop"}
                alt={event.name}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="relative border border-gray-100 bg-white p-6">
                <p className="text-gray-700">
                  {event.date}
                </p>

                <h3 className="mt-1.5 text-lg font-medium text-gray-900">{event.name}</h3>

                <p className="mt-1.5 text-sm text-gray-700">
                  {event.location} • {event.capacity}
                </p>

               
              </div>
            </div>
          ))}
        </div>
      </section>
        

      {/* University Section */}
      <section className="overflow-hidden bg-[url(https://images.pexels.com/photos/383813/pexels-photo-383813.jpeg)] bg-cover bg-center bg-no-repeat">
          <div className="bg-black/25 text-white/90">
              <div className="mx-auto w-full max-w-screen-xl p-4 xl:px-0 lg:py-24">
                  <div className="text-start ltr:sm:text-left rtl:sm:text-right">
                      <h2 className="tracking-wide uppercase font-condensed text-4xl font-bold">
                      Standy ile Tanışın!
                      </h2>
                      <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                      Standy'nin sunduğu benzersiz sponsorluk deneyimini keşfedin. 
                      Etkinliklerimizi, stant tasarımlarımızı ve başarı hikayelerimizi görün.
                      </p>
                      <div className="flex flex-row mt-6 gap-2  ">
                          <Link
                          target='_blank'
                              href="https://sponsors.standyroutes.com"
                              className="  inline-flex px-5 py-2 rounded-full transition duration-300 ease-in-out bg-white text-standy-pink hover:bg-gray-100"
                          >
                              İletişime Geç
                          </Link>
                          <Link
                              target='_blank'
                              href="https://firebasestorage.googleapis.com/v0/b/standy-c3f1e.appspot.com/o/Design%20Outlines%2FStandy-Sponsorluk.pdf?alt=media&token=1279a301-478b-4e45-ae6a-7f0702c52c13"
                              className="  inline-flex px-5 py-2 rounded-full transition duration-300 ease-in-out border border-white text-white hover:bg-white hover:text-standy-pink"
                          >
                              Dosyayı İndir
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    
    </div>
  );
};

export default SponsorsPage;
