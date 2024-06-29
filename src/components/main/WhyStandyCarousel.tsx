// components/CardCarousel.tsx



import React, { useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import "@/app/globals.css"
import { Add } from '@mui/icons-material'
import { Close } from '@mui/icons-material'


const cards = [
    {
        title: "İndirimler",
        description: "Standy uygulaması ile birçok anlaşmalı mekandaki qr kodu okutarak Standy indirimlerinden faydalanabilirsin.",
        image: "https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        title: "Rotalar",
        description: "Standy Asistan 3 soru ile sana takip edebileceğin bir çok rota oluşturur. İstediğini kaydet, paylaş, takip et, değiştir!",
        image: "standyuser.png"
    }, {
        title: "Yeni Şehirler",
        description: "Yeni bir şehri tanımak istiyorsan oluşturulmuş şehir rotalarını inceleyebilirsin.",
        image: "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
];

type PropType = {
    options?: EmblaOptionsType
}

const WhyStandyCarousel: React.FC<PropType> = ({ options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()); // Access API
        }
    }, [emblaApi]);

    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setActiveCardIndex(index === activeCardIndex ? null : index);
    };

    return (
        <section className="embla2 bg-white max-w-screen-xl ">
            <div className="embla__viewport2 xl:p-0 px-4" ref={emblaRef}>
                <div className="embla__container2 ">
                    {cards.map((card, index) => (
                        <div className="embla__slide2  " key={index}>
                            <div className="  pt-5    ">
                                <div className="max-w-screen-xl     flex items-center justify-center">

                                    <div
                                        key={index}
                                        className={`carousel-card rounded-lg transition-transform ease-in-out w-[32rem] flex flex-col h-[30rem] items-center justify-center text-center bg-cover bg-center relative ${activeCardIndex === index ? 'bg-standy-light-pink' : ''}`}
                                        style={{ backgroundImage: activeCardIndex !== index ? `url(${card.image})` : 'none' }}
                                    >
                                        <div className={`absolute  inset-0 flex flex-col justify-between items-end p-4 transition-opacity duration-300 ${activeCardIndex === index ? 'opacity-100  ' : ' text-white opacity-0'}`}>
                                            <h3 className="text-3xl text-left  ">{card.description}</h3>
                                        </div>
                                        <div className={`absolute inset-0 flex justify-between items-end p-4 transition-opacity duration-300 ${activeCardIndex === index ? 'opacity-0  ' : 'text-white  opacity-100'}`}>
                                            <h3 className="text-3xl text-left  ">{card.title}</h3>
                                            <button
                                                onClick={() => handleCardClick(index)}
                                                className="p-2 rounded-full text-black flex flex-row transition duration-300 ease-in-out border-black bg-white hover:bg-standy-pink hover:text-white"
                                            >
                                                <Add></Add>
                                            </button>
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

export default WhyStandyCarousel;
