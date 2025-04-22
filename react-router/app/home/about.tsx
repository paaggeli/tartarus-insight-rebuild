import AskOracleButton from "../components/ask-oracle-button";

export default function About() {
    return(
        <section
            id="about-section"
            className="px-[35px] py-[35px] text-center bg-[url('/images/pattern-marble.webp')] bg-repeat"
        >
            <h1>A Message from Tartarus Insight</h1>

            <div className="text-container mx-auto mb-5">
                <p>
                Welcome to Tartarus Insight, a realm where entrepreneurs lost in the depths of failure seek the wisdom to escape. 
                If your business teeters on the edge—suffocating under the weight of stagnant growth, fractured strategies, 
                or elusive marketing—this is where you confront your struggle.
                </p>
                <p>
                In the abyss of Tartarus, an ancient Oracle awaits. Unseen, yet ever-present, it offers answers not easily found. 
                Its knowledge stretches beyond the horizon of failure, revealing the elusive solutions to your business’s survival and success. 
                You do not summon the Oracle lightly; it listens only to those who dare to question their path.
                </p>
                <p>
                Will you embrace the Oracle’s insight and emerge stronger, or will you remain bound to the abyss?
                </p>
            </div>

            <AskOracleButton />
        </section>
    );
}