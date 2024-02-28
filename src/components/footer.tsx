import Link from "next/link";
/* eslint-disable @next/next/no-img-element */


function Footer() {
    return (

        <footer className="bg-standy-black   text-standy-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="    mb-6 md:mb-0">
                        <div className=" items-center flex-row space-x-2 flex">
                            <Link
                                href={'/'}
                                className='tracking-wide  mb-[-10px] font-din-condensed text-4xl'>
                                STANDY
                            </Link>
                            <img src="standylogo.png" alt="Standy Logo" height={30} width={30} className="rounded-full" />

                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-md font-semibold text-standy-light tracking-wide uppercase font-din-condensed dark:text-white">BASIN</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/standy-c3f1e.appspot.com/o/Design%20Outlines%2FStandy%20Design%20Outlines.pdf?alt=media&token=b1e2eecc-1c0d-4794-9d52-f2bf4857935c" className="hover:underline">Basın Kiti</a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-md font-semibold text-standy-light tracking-wide uppercase font-din-condensed dark:text-white">Kaynaklar</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/standy-c3f1e.appspot.com/o/Design%20Outlines%2FStandy%20Design%20Outlines.pdf?alt=media&token=b1e2eecc-1c0d-4794-9d52-f2bf4857935c" className="hover:underline">Design Outlines</a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-md font-semibold text-standy-light tracking-wide uppercase font-din-condensed dark:text-white">YASAL</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/privacy-policy" className="hover:underline">Gizlilik Politikası</Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-service" className="hover:underline">Şartlar ve Koşullar
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6   sm:mx-auto  border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://standy.tech/" className="hover:underline">Standy Tech™</a>. Tüm Hakları Saklıdır.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-white">
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="#" className="text-gray-500  hover:text-white">
                            <span className="sr-only">Twitter</span>

                        </a>
                        <a href="#" className="text-gray-500 hover:text-white">

                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;