import CreatorsNavbar from "@/components/creator/creatorsNavbar"
import UniNavbar from "@/components/creator/uniNavbar"
import Navbar from "@/components/navbar"
import Head from "next/head"
import Script from "next/script"

function StandyWaitlist() {
    return (
        <div>
            <Head>
                <title>Universities Başvuru</title>
            </Head>
            <UniNavbar></UniNavbar>
            <div className="py-16 items-center flex bg-standy-dark-pink">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfLuqomstVvNdhRm9RFePfV36i1KfKmb0iro0HwEtdCwJQb5A/viewform?embedded=true" width="1920" height="2057"  >Yükleniyor…</iframe>
            </div>
        </div >
    )
}
export default StandyWaitlist
