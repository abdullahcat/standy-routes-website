import { Instagram, LinkedIn, Twitter, X } from "@mui/icons-material";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */


function Footer() {
    return (

        <footer className="bg-standy-white      text-standy-black  ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 xl:px-0  lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="    mb-6 md:mb-0">
                        <div className=" items-center flex-row space-x-2 flex">
                            <img src="/standylogo.png" alt="Standy Logo" height={30} width={30} className="rounded-full" />

                            <Link
                                href={'/'}
                                className='  mb-[-12px]	 tracking-wide text-standy-pink    font-din-condensed text-4xl'>
                                STANDY
                            </Link>

                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-md font-semibold text-standy-light tracking-wide uppercase font-din-condensed ">BASIN</h2>
                            <ul  >
                                <li className="mb-4">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/standy-c3f1e.appspot.com/o/Design%20Outlines%2FStandy%20Design%20Outlines.pdf?alt=media&token=b1e2eecc-1c0d-4794-9d52-f2bf4857935c" className="hover:underline">Basın Kiti</a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-md font-semibold text-standy-light tracking-wide uppercase font-din-condensed ">Şirket</h2>
                            <ul  >
                                <li className="mb-4">
                                    <Link href="/faq" className="hover:underline">SSS</Link>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.linkedin.com/company/standy/jobs/" className="hover:underline">Kariyer</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-md font-semibold text-standy-light tracking-wide uppercase font-din-condensed ">YASAL</h2>
                            <ul  >
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
                    <span className="text-sm  sm:text-center ">© 2024 <a href="https://standy.tech/" className="hover:underline">Standy Tech™</a>. Tüm Hakları Saklıdır.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <a href="https://www.instagram.com/standyroutes" className=" hover:text-standy-light-pink">
                            <Instagram></Instagram>

                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="https://x.com/standyroutes" className="  hover:text-standy-light-pink">
                            <X></X>
                            <span className="sr-only">Twitter</span>

                        </a>
                        <a href="https://linkedin.com/company/standy" className=" hover:text-standy-light-pink">
                            <LinkedIn></LinkedIn>
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;