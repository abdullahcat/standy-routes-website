// components/CardCarousel.tsx



import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import "@/app/globals.css"


const cards = [
    {
        title: "Standy Console",
        description: "İşletmeniz ile ilgili bilgileri doldurduktan sonra Standy tarafından onaylanırsınız ve hesabınıza her türlü istatistiği takip edebileceğiniz “Standy Console” tanımlanır.",
        image: "console_illustration.png"
    },
    {
        title: "Kurulumu Yap",
        description: "İşletmenize gönderdiğimiz QR kodu kasanıza yerleştirerek kullanıcıların işletmenize ulaşabilmesini sağlarsınız.",
        image: "cashier_qr_illustration.png"
    },
    {
        title: "Takip Et",
        description: "Kullanıcının telefonunda oluşturduğu QR kodu Standy Console üzerinden okutarak indirim uygulayabilir; her türlü tıklanma, reklam, indirim, elde edilen kâr istatistiğinize konsoldan ulaşabilirsiniz.",
        image: "stats_illustration.png"
    }
];

type PropType = {
    options?: EmblaOptionsType
}

const BusinessCarousel2: React.FC<PropType> = ({ options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()); // Access API
        }
    }, [emblaApi]);

    return (
        <section className="embla3 bg-white max-w-screen-xl ">
            <div className="embla__viewport3 xl:p-0 px-4" ref={emblaRef}>
                <div className="embla__container3 ">
                    {cards.map((card, index) => (
                        <div className="embla__slide3  " key={index}>
                            <div className="max-w-screen-xl   flex items-center justify-center">
                                <div
                                    className=" rounded-lg bg-standy-white transition ease-in-out w-96 flex flex-col h-[30rem] items-center justify-center   bg-cover bg-center"
                                >
                                    <div className="    overflow-hidden   text-start   bg-opacity-50 space-y-4 w-full h-full flex flex-col justify-between rounded-lg">
                                        <div className='m-4 space-y-2'>
                                            <h2 className="w-10    h-10 text-2xl p-2 rounded-full bg-standy-light-pink flex items-center justify-center">{index + 1}</h2>
                                            <p className="  text-xl  ">{card.description}</p>
                                        </div>
                                        <img src={card.image} alt={card.image} />



                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BusinessCarousel2;
