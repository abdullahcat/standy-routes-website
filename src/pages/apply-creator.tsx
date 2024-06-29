import CreatorsNavbar from "@/components/creator/creatorsNavbar"
import Navbar from "@/components/navbar"
import Head from "next/head"
import Script from "next/script"

function StandyWaitlist() {
    return (
        <div>
            <Head>
                <title>Creators Başvuru</title>
            </Head>
            <CreatorsNavbar></CreatorsNavbar>

            <div className="py-16 items-center flex bg-standy-dark-pink">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScr6PCicxQSUPpxlpM6Bz_aK2GVZGDbzGjZfOXm-k_0ulHzdg/viewform?embedded=true" width="1920" height="2001"  >Yükleniyor…</iframe>            </div>
        </div >
    )
}
export default StandyWaitlist
