import AskOracleButton from "./AskOracleButton";

const examples = [
    {
        question: "I’ve been stuck on the same revenue for months. How can I finally break through and grow?",
        answer: `Ah, the classic stalling revenue curse. It is like trying to row a boat in a sea of molasses, isn’t it? 
        Here is the secret: Stop paddling the same way. Try changing your approach—update your marketing strategy, or better yet, 
        revisit your ideal customer profile. Who are they really? What keeps them awake at night? Align your offering to that, 
        and watch the tide turn. If you’re not growing, maybe your growth plan is on a diet. Feed it more data, more creativity, and a pinch of risk!`,
    },
    {
        question: "I’ve tried a few marketing campaigns, but nothing seems to work. What should I change?",
        answer: `Ah, marketing campaigns—like fireworks, beautiful when they work, but sometimes they fizzle out before they even take off. 
        Here’s your riddle: Is your campaign speaking to your audience, or merely shouting at them? People don’t buy from brands, 
        they buy from stories. Craft yours with emotion and clarity, not a list of features. And have you considered the power of micro-targeting? 
        It’s like finding a needle in a haystack, but much, much more satisfying.`,
    },
    {
        question: "Oracle, my cash flow is a disaster. I’m struggling to pay my bills. What do I do?",
        answer: `Ah, coin troubles—a common plight even in the golden halls of Olympus. 
        First, cut the excess—are you pouring drachmas into tools or services that serve no purpose? 
        Negotiate better terms with your vendors, and do not be ashamed to ask customers to pay sooner. 
        Offer discounts for early payments if you must. Lastly, seek new revenue streams—your current 
        ones might be trickling instead of flowing. Adapt, and let the river of gold return to your coffers.`,
    },
    {
        question: "I’ve got a great product, but the market doesn’t seem to care. Why is that?",
        answer: `Ah, the cruel irony of a great product that goes unnoticed. It’s like being the best musician in a room full of deaf people. 
        Here’s the secret: It’s not about you; it’s about them. Have you really listened to your market? 
        What problems are they facing that your product can solve? Find the pain points, and wrap your product in a solution. 
        Communicate it clearly. And remember, no one cares how great you think your product is—they care about how it solves 
        their problem.`,
    },
];

export default function Examples() {
    return(
        <section id="examples-section" className="p-8 text-center bg-cover" style={{ backgroundImage: "url('images/pattern-marble.webp')" }}>
            <h1>Examples</h1>
            <div className="w-full mx-auto my-5">
                {examples.map((example, idkey) => (
                    <div
                        key={idkey}
                        className="text-container relative p-8 mx-auto mb-8 shadow-example rounded-xl bg-[url('/images/meandros-pattern-dark.webp')] bg-repeat"
                    >
                        <div className="bg-black/10 text-gray-200 rounded p-5 shadow">
                            <h2>{example.question}</h2>
                            <p className="text-center">{example.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
            <AskOracleButton />
        </section>
    );
}