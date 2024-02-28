import Link from "next/link";

function CTA() {
    return (
        <section
            className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top bg-no-repeat"
        >
            <div className="bg-black/25">

                <div className="    mx-auto w-full max-w-screen-xl p-4        lg:py-24">
                    <div className="text-start ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="  tracking-wide    font-din-condensed text-4xl font-bold ">STANDY BUSINESS</h2>

                        <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                            İşletmenizin sınırlarını aşın, Standy Business ile tüm Türkiye&apos;ye ulaşın. Yerel bir dükkan ya da büyük bir firma olun, sunduğunuz özel hizmetleri ve ürünleri milyonlarla paylaşın.                        </p>

                        <div className="mt-4 sm:mt-8">
                            <Link
                                className=" inline-block px-4 py-2 rounded-lg text-black   transition duration-300 ease-in-out bg-white hover:bg-standy-pink hover:text-white"
                                href="/business"
                            >
                                Şimdi Keşfet
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;
