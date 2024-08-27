import Link from "next/link";

function UniCTA() {
    return (
        <section
            className="overflow-hidden bg-[url(https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-top bg-no-repeat"
        >
            <div className="bg-black/25 text-white/90">

                <div className="    mx-auto w-full max-w-screen-xl p-4  xl:px-0      lg:py-24">
                    <div className="text-start ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="  tracking-wide    font-condensed text-4xl font-bold ">STANDY ÜNİVERSİTE</h2>

                        <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                            Sen de Standy üniversite temsilcisi ol, kazanmaya ve kazandırmaya başla!
                        </p>

                        <div className="mt-4 sm:mt-8">

                            <Link
                                className="  inline-flex px-5 py-2 rounded-full flex flex-row transition duration-300 ease-in-out hover:bg-standy-pink  text-standy-black hover:text-standy-white  bg-standy-white       "
                                href="https://ambassador.standyroutes.com"
                                target="_blank"

                            >
                                Şimdi Başvur
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UniCTA;
