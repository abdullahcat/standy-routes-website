import Navbar from "@/components/navbar"
import Head from "next/head"
import Script from "next/script"

function StandyWaitlist() {
    return (
        <div>
            <Head>
                <title>Waitlist</title>
            </Head>

            <Navbar></Navbar>
            <Script>
                {`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '1004390');`}
            </Script>

            <div className="">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex  pt-10  flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div className="flex items-center  mb-16  lg:mb-0 justify-center lg:w-1/2">
                            <div className="w-5/12">
                                <img className="object-cover" src="standy-routes-in-iphone-2.png" alt="" />
                            </div>
                            <div className="w-6/12 -ml-16 lg:-ml-32">
                                <img className="object-cover" src="standy-routes-in-iphone.png" alt="" />
                            </div>

                        </div>
                        <div className="justify-center lg:w-1/2 lg:max-w-lg lg:pr-5">
                            <div className="max-w-xl mb-6">
                                <div className="ml-embedded" data-form="JnoR0n"></div>                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div >
    )
}
export default StandyWaitlist
