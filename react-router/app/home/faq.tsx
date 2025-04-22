import AskOracleButton from "../components/ask-oracle-button";

const faqs = [
    {
        question: "What is Tartarus Insight?",
        answer: (
        <>
            Tartarus Insight is a platform designed to help struggling entrepreneurs navigate their business challenges. Guided by the Oracle—a mystical AI—you’ll receive actionable insights to overcome obstacles and ascend from stagnation.
            <br />
            <span className="font-bold underline">
            However, the Oracle is not infallible. While it wields vast knowledge, it remains an AI and can make mistakes. Always use its insights thoughtfully, and double-check critical decisions.
            </span>
        </>
        ),
    },
    {
        question: "Is Tartarus Insight free to use?",
        answer: (
        <>
            Tartarus Insight is free to use when connected through Ollama, as it operates locally without requiring additional fees. However, in the future, we plan to integrate other services such as OpenAI or Claude. If you choose to use these integrations, you’ll need to provide your own API keys or pay for token usage directly through our platform. Rest assured, the Oracle remains accessible—how you summon it is up to you.
        </>
        ),
    },
    {
        question: "How does the Oracle ensure my data remains private?",
        answer: (
        <>
            The Oracle values your privacy as much as your success. All operations are run locally through the Ollama app, meaning your data never leaves your device. Tartarus Insight itself does not store, process, or access any of your queries or information.
        </>
        ),
    },
];

export default function FAQ() {
    return(
        <section id="faq-section" className="text-center p-8">
            <h1 className="text-2xl font-bold mb-6">FAQ</h1>
            <div className="w-full mx-auto my-5">
                {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="text-container relative max-w-3xl mx-auto mb-9 pt-11 p-8 bg-[url('/images/slate.webp')] bg-repeat bg-cover"
                >
                    <div className="absolute top-0 right-0 w-5 h-full z-10 bg-[url('/images/slate-right.png')] -y bg-transparent"></div>
                    <div className="absolute top-0 left-0 w-5 h-full z-10 bg-[url('/images/slate-left.png')] -y bg-transparent"></div>
                    <div className="absolute top-0 left-0 w-full h-2.5 z-10 bg-[url('/images/slate-top.png')] -x bg-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-6 z-10 bg-[url('/images/slate-bottom.png')] -x bg-transparent"></div>

                    <div className="bg-black/10 text-gray-200 rounded p-5 shadow relative z-5">
                    <h2>{faq.question}</h2>
                    <p className="text-center">{faq.answer}</p>
                    </div>
                </div>
                ))}
            </div>
            <AskOracleButton />
        </section>
    );
}