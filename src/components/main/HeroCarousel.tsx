// components/CardCarousel.tsx



import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import "@/app/globals.css"
import { DotButton, useDotButton } from './HeroDotButton'
import Link from 'next/link'

const cards = [
    {
        title: "Turist Değil Gezgin Ol!",
        slug: "/blog/turist-degil-gezgin-ol",
        description: "Turistik klişelerden sıkıldın mı? Ya da acımasız fiyatlardan? Standy ile yeni bir devrin kapılarını açıyoruz. Sen de bize katıl!",
        image: "https://images.pexels.com/photos/5270675/pexels-photo-5270675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        title: "Summer 2024",
        slug: "/blog/summer-2024",
        description: "İndirimler ve özel rotalar Türkiye'de hazır!",
        image: "https://images.pexels.com/photos/18961673/pexels-photo-18961673/free-photo-of-deniz-plaj-tatil-insanlar.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
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

const HeroCarousel: React.FC<PropType> = ({ options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)


    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()); // Access API
        }
    }, [emblaApi]);

    return (
        <section className="embla1 bg-white">
            <div className="embla__viewport1" ref={emblaRef}>
                <div className="embla__container1">
                    {cards.map((card, index) => (
                        <div className="embla__slide1" key={index}>
                            <div className="embla__slide__number1 xl:pt-20  pb-5">
                                <div className="max-w-screen-xl mt-20 xl:m-auto mx-4 flex items-center justify-center">
                                    <div
                                        className="carousel-card  marker: transform-gpu rounded-lg transition ease-in-out hover:scale-105 duration-300 w-screen flex flex-col h-[35rem] items-center justify-center text-center bg-cover bg-center"
                                        style={{ backgroundImage: `url(${card.image})` }}
                                    >
                                        <div className="bg-black px-4   bg-opacity-25 space-y-4 w-full h-full flex flex-col items-center justify-center rounded-lg">
                                            <h2 className="text-5xl text-white  ">{card.title}</h2>
                                            <p className="text-white text-xl  ">{card.description}</p>

                                            <Link
                                                className="   px-5 py-2 rounded-lg flex flex-row transition duration-300 ease-in-out hover:bg-standy-pink  text-standy-black hover:text-standy-white  bg-standy-white       "
                                                href={card.slug}

                                            >
                                                Daha fazla
                                            </Link>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="embla__controls">


                    <div className="embla__dots ">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={'embla__dot  '.concat(
                                    index === selectedIndex ? ' embla__dot--selected' : ''
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroCarousel;
