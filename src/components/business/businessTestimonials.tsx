function BusinessTestimonials() {
    return (

        <section className="bg-standy-light-pink xl:mx-auto max-w-screen-xl mx-4 mb-10 rounded-lg" >
            <div className="mx-auto max-w-screen-xl px-8 py-4    lg:py-10">
                <h2 className="xl:text-center   text-3xl">
                    Bizi Keşfeden Müşterilerimizin Değerli Görüşleri
                </h2>

                <div className=" mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    <blockquote className="rounded-lg bg-standy-white p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src="https://images.pexels.com/photos/3351927/pexels-photo-3351927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                className=" w-14 h-14 rounded-full object-cover"
                            />

                            <div>

                                <p className="  text-lg  text-gray-900">Emre Sefa Kadirhan</p>
                                <p className="   text-xs  text-gray-600">Yerel Lokanta Sahibi</p>

                            </div>
                        </div>

                        <p className="mt-4 text-gray-700">
                            Kafemin konumu gereği birçok farklı kafe ile rekabet halindeyim. Müşterilere mekanımı cezbetmek için ekstra fırsatlar sunmam gerekiyordu. Standy tam da bana göre.                         </p>
                    </blockquote>
                    <blockquote className="rounded-lg bg-standy-white p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            <div>

                                <p className="  text-lg  text-gray-900">Deniz Müjde</p>
                                <p className="   text-xs  text-gray-600">Kafe Sahibi</p>

                            </div>
                        </div>

                        <p className="mt-4 text-gray-700">
                            Standy’nin kafe ve restoranlara sunduğu bütün bu fırsatlara 0 risk ve ücret ile ulaşabilmek gerçekten inanılmaz. Bana sunulan hizmetten çok memnunum.                                                      </p>
                    </blockquote>
                    <blockquote className="rounded-lg bg-standy-white p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            <div>

                                <p className="  text-lg  text-gray-900">Sabahaddin Efe Yücer</p>
                                <p className="   text-xs  text-gray-600">Restoran İşletmecisi</p>

                            </div>
                        </div>

                        <p className="mt-4 text-gray-700">
                            Restoranımı duyurmak adına olmadık yerlere birçok para döktüm. Standy, hem yakınımdaki müşterileri bana yönlendiriyor, hem de 1 ay ücretsiz reklamımı yapıyor.                       </p>
                    </blockquote>


                </div>
            </div>
        </section>

    )
}

export default BusinessTestimonials