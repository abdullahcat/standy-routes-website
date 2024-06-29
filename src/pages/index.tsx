import CTA from '@/components/cta';
import Head from 'next/head';
import '@/app/globals.css';
import * as React from 'react';
import EmblaCarousel from '@/components/main/HeroCarousel';
import { EmblaOptionsType } from 'embla-carousel'
import HeroCarousel from '@/components/main/HeroCarousel';
import WhyStandyCarousel from '@/components/main/WhyStandyCarousel';
import LogoCloud from '@/components/main/logoCloud';
import Section3Carousel from '@/components/main/section3carousel';
import Navbar from '@/components/navbar';
import Script from 'next/script';



export default function Home() {

    return (
        <div>
            <Head>
                <title>Standy</title>
            </Head>
            <Script>
                {`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '1004390');`}
            </Script>


            <header >
                <Navbar />
            </header>
            <div className='text-standy-black  '>

                <HeroCarousel  ></HeroCarousel>


                <LogoCloud></LogoCloud>
                <h1 className='xl:m-auto mx-4 pb-5 pt-10 max-w-screen-xl text-3xl'>Neden  <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-standy-pink relative inline-block">
                    <span className="relative text-white">Standy Routes?</span>
                </span>
                </h1>

                <WhyStandyCarousel></WhyStandyCarousel>


                <h1 className='xl:m-auto mx-4 py-10   max-w-screen-xl text-3xl'>Kampanyalar nasıl çalışır?</h1>
                <Section3Carousel></Section3Carousel>


                <h1 className='xl:m-auto mx-4 py-10 max-w-screen-xl text-3xl'><span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-standy-pink relative inline-block">
                    <span className="relative text-white">Waitlist</span>
                </span>
                </h1>


                <section className='pb-5'>

                    <div className=' bg-standy-white  max-w-screen-xl xl:m-auto     mx-4 rounded-lg'>
                        <div className="px-4 lg:py-0 py-5 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <img
                                    alt="Standy Routes App in Iphone"
                                    src="standy_iphones_official.png"
                                    className="w-full  lg:p-16  object-cover   "
                                />
                                <div className="lg:flex justify-start  items-center">
                                    <div className="p-4 sm:p-8 lg:p-16">
                                        <div className="ml-embedded" data-form="JnoR0n"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <CTA />
            </div >
        </div>
    );
}
