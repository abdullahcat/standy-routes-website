// components/CardCarousel.tsx



import React, { useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import "@/app/globals.css"
import Link from 'next/link';

const cards = [

    {
        title: "Summer 2024",
        slug: "/blog/summer-2024",
        description: "İndirimler ve özel rotalar Türkiye'de hazır!",
        image: "https://images.pexels.com/photos/18961673/pexels-photo-18961673/free-photo-of-deniz-plaj-tatil-insanlar.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
    }, {
        title: "Turist Değil Gezgin Ol!",
        slug: "/blog/turist-degil-gezgin-ol",
        description: "Haydi geleneksel tatil anlayışını yıkalım!",
        image: "https://images.pexels.com/photos/5270675/pexels-photo-5270675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        title: "Standy Assistant",
        slug: "/blog/standy-assistant",
        description: "Şehir Keşfinizin AI Rehberi",
        image: "https://images.pexels.com/photos/14919124/pexels-photo-14919124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
];

type PropType = {
    options?: EmblaOptionsType
}

const BlogCarousel: React.FC<PropType> = ({ options }) => {
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
                                        className="carousel-card  marker: transform-gpu rounded-2xl transition ease-in-out  duration-300 w-screen flex flex-col h-[35rem] items-center justify-center text-center bg-cover bg-center"
                                        style={{ backgroundImage: `url(${card.image})` }}
                                    >
                                        <div className="bg-black px-4   bg-opacity-25 space-y-4 w-full h-full flex flex-col items-center justify-center rounded-2xl">
                                            <h2 className="text-5xl text-white  ">{card.title}</h2>
                                            <p className="text-white text-xl  ">{card.description}</p>
                                            <Link className="px-5 py-2 rounded-full  flex flex-row transition duration-300 ease-in-out hover:bg-standy-pink  text-standy-black hover:text-standy-white  bg-standy-white" href={card.slug}>
                                                Daha fazla
                                            </Link>
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

export default BlogCarousel;
