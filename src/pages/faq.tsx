import Navbar from "@/components/navbar";
import { faqData } from '../app/faqData';
import Head from "next/head";

function FAQ() {
    return (
        <div>
            <Head>
                <title>Standy Blog</title>
            </Head>
            <Navbar></Navbar>

            <section className="text-standy-black pt-16">
                <div className="space-y-4 mx-auto w-full max-w-screen-xl p-4 py-6 xl:px-0 lg:py-8">
                    <h1 className="text-5xl mb-6 xl:text-center">Sıkça Sorulan Sorular</h1>
                    {faqData.map((category, index) => (
                        <div key={index}>
                            <h1 className="text-3xl mb-6 xl:text-center">{category.category} SSS</h1>
                            {category.questions.map((faq, idx) => (
                                <details className="group [&_summary::-webkit-details-marker]:hidden" key={idx} open={idx === 0}>
                                    <summary className="flex cursor-pointer mb-4 items-center justify-between gap-1.5 rounded-lg bg-standy-white p-4">
                                        <h2>{faq.question}</h2>
                                        <svg className="h-5 size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="my-4 px-4 leading-relaxed">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            export default FAQSection;
        </div>
    )
}

export default FAQ;