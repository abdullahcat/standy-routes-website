// components/CardCarousel.tsx



import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import "@/app/globals.css"


const cards = [
    {
        title: "QR kodu okut",
        description: "Kasadaki QR kodu standy uygulamasından okut.",
        image: "qr_illustation_1.png"
    },
    {
        title: "Kampanyayı Seç",
        description: "Kullanmak istediğin kampanyanı seç.",
        image: "cashier_illustation_2.png"
    },
    {
        title: "Onay ekranını göster",
        description: "Ekranında çıkan onay kodunu kasaya göster",
        image: "discount_illustation_3.png"
    }
    , {
        title: "Tadını Çıkar",
        description: "İndiriminin tadını çıkar.",
        image: "pay_illustation_4.png"
    }

];

type PropType = {
    options?: EmblaOptionsType
}

const HowToCarousel: React.FC<PropType> = ({ options }) => {
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
                                        <div className="relative w-[20rem] h-[14rem] bg-white border   p-4 rounded-2xl shadow-md flex flex-col items-center">
                                            <div
                                                style={{ backgroundImage: `url(${card.image})` }}
                                                className="absolute bg-cover bg-center bg-no-repeat top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-44 h-44"
                                            ></div>
                                            <h1 className='mt-16  font-bold  text-xl text-standy-pink'>{card.title}</h1>
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

export default HowToCarousel;
