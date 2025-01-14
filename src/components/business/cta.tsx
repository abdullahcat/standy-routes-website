import Link from "next/link";

function BusinessCTA() {
    return (
        <section
            className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top bg-no-repeat"
        >
            <div className="bg-black/25 text-white/90">

                <div className="    mx-auto w-full max-w-screen-xl p-4  xl:px-0      lg:py-24">
                    <div className="text-start ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="  tracking-wide uppercase    font-condensed text-4xl font-bold ">ŞİMDİ STANDY DÜNYASINA KATIL!</h2>

                        <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                            Sen de işletmeni Standy'ye kaydet, en prestijli mekanlar arasına katıl.</p>

                        <div className="mt-4 sm:mt-8">

                            <Link
                                className="  inline-flex px-5 py-2 rounded-full flex flex-row transition duration-300 ease-in-out hover:bg-standy-pink  text-standy-black hover:text-standy-white  bg-standy-white       "
                                href="https://apply.business.standyroutes.com"

                            >
                                Başlayalım
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BusinessCTA;
