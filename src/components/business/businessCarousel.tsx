// components/CardCarousel.tsx



import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import "@/app/globals.css"


const cards = [
    {
        title: "QR'ı Okut",
        description: "Kullanıcı size ulaştırdığımız kasadaki standy qr kodunu Standy uygulamasından okutur.",
        image: "qr_illustation_1.png"
    },
    {
        title: "Kampanya Seç",
        description: "Uygulama üzerinden indirimini seçer ve oluşturduğu kodu kasaya gösterir",
        image: "cashier_illustation_2.png"
    },
    {
        title: "Onayla",
        description: "Kasada size verdiğimiz konsol üzerinden kodu okutarak indirimi onaylanır.",
        image: "discount_illustation_3.png"
    }
    , {
        title: "Tadını Çıkar",
        description: "İndirim uygulanan tutar ekranda gösterilir.",
        image: "pay_illustation_4.png"
    }

];

type PropType = {
    options?: EmblaOptionsType
}

const BusinessCarousel: React.FC<PropType> = ({ options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()); // Access API
        }
    }, [emblaApi]);

    return (
        <section className="embla4 max-w-screen-xl">
            <div className="embla__viewport4 xl:p-0 px-4" ref={emblaRef}>
                <div className="embla__container4 ">
                    {cards.map((card, index) => (
                        <div className="embla__slide4 pt-20  pb-10  " key={index}>
                            <div className="items-centerjustify-center">
                                <div className="text-standy-black  ">
                                    <div className=" m-auto   flex ">
                                        <div className="relative w-[20rem] h-[16rem] bg-white border-2 border-black p-4 rounded-lg shadow-md flex flex-col items-center">
                                            <div
                                                style={{ backgroundImage: `url(${card.image})` }}
                                                className="absolute bg-cover bg-center bg-no-repeat top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-44 h-44"
                                            ></div>
                                            <h1 className='mt-16    text-xl text-standy-pink'>{card.title}</h1>
                                            <div className=" mt-2 text-lg px-4 text-center">{card.description}</div>
                                        </div>
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

export default BusinessCarousel;
