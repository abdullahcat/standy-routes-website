import Link from "next/link";
import { useRef } from "react";

function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);


    return (
        <div className=" flex-col flex justify-center items-center ">
            <div className=" relative space-y-4 mx-auto px-4 pt-20  my-20 z-10"> {/* Added z-10 here */}
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="bg-gradient-to-r from-standy-light-pink via-standy-white to-standy-pink bg-clip-text text-5xl font-extrabold text-transparent sm:text-5xl"
                    >
                        Unutulmaz Deneyimler.

                        <span className="sm:block">
                            Size özel rotalar.
                        </span>
                    </h1>

                    <p className="mx-auto mt-4  text-white max-w-xl sm:text-xl/relaxed">
                        " turistik klişelerden uzak, yerel ve özgün deneyimler "
                    </p>

                </div>
            </div>


            <div className="w-full h-screen" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <video ref={videoRef} src="/standy-hero-video.mp4" className="w-full h-screen object-cover z-0" autoPlay muted loop playsInline />
                <div style={{ position: 'absolute', zIndex: 1 }}>
                    {/* Your content goes here */}
                    <h1 className="text-7xl  font-din-condensed uppercase">LAUNCH 2024</h1>
                    <div className="mt-4 items-center  flex-shrink-0 flex flex-wrap justify-center gap-4">
                        <a
                            className="  flex inline-block px-4 py-2  rounded-lg   text-black flex flex-row transition duration-300 ease-in-out bg-white  hover:bg-standy-pink   hover:text-white      "
                            href="http://launch2024.standyroutes.com"
                        >
                            Şimdi Keşfet
                        </a>



                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero;