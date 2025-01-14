import Link from "next/link";

function StandyPlusCTA() {
    return (
        <section
            className="overflow-hidden bg-[url(https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center bg-no-repeat"
        >
            <div className="bg-black/25 text-white/90">

                <div className="    mx-auto w-full max-w-screen-xl p-4  xl:px-0      lg:py-24">
                    <div className="text-start ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="  tracking-wide uppercase    font-condensed text-4xl font-bold ">SEN DE STANDY KAMPÜS TEMSİLCİSİ OL!</h2>

                        <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                            Standy Kampüs Temsilcisi ol, birçok sana özel indirimi ücretsiz yakala, hem de standy ile para kazan.</p>

                        <div className="mt-4 sm:mt-8">

                            <Link
                                className="  inline-flex px-5 py-2 rounded-full flex flex-row transition duration-300 ease-in-out border-rose-red border hover:border-standy-black bg-rose-red text-standy-white hover:bg-standy-black    "
                                href="/universities"
                            >
                                Keşfet

                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StandyPlusCTA;
