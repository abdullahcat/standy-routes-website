function LogoCloud() {
    return (
        <div className="bg-standy-white my-5 py-10">
            <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
                <h2 className="text-center text-3xl   leading-8 text-gray-900">
                    Gücünü <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-standy-pink relative inline-block">
                        <span className="relative text-white">Google</span>
                    </span> 'dan alıyor!
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                        className="col-span-2 max-h-12 pb-2 w-full object-contain lg:col-span-1"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/344px-Google_Gemini_logo.svg.png"
                        alt="Geminiss"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-standard.svg"
                        alt="Firebase"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/2560px-Google-flutter-logo.svg.png"
                        alt="Flutter"
                        width={158}
                        height={48}
                    />

                    <img
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Google_Maps_Logo.svg/1200px-Google_Maps_Logo.svg.png"
                        alt="Google Maps API"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1280px-Google_Cloud_logo.svg.png"
                        alt="Google Cloud"
                        width={158}
                        height={48}
                    />
                </div>
            </div>
        </div>
    )
}
export default LogoCloud;
