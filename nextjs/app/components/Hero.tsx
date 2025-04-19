import AskOracleButton from "./AskOracleButton";

export default function Hero() {
    return(
        <section
            className="flex flex-col items-center justify-center text-center text-white px-5 pt-[50px]
            pb-5 min-h-screen bg-cover bg-top bg-no-repeat
            [background-image:url('/images/tartarus-insight-hero-small.webp')]
            sm:h-[calc(100vh-75px)]
            xl:[background-image:url('/images/tartarus-insight-hero-medium.webp')]
            2xl:[background-image:url('/images/tartarus-insight-hero-large.webp')]"
        >
            <h2>Get out of the abyss</h2>
            <h1>Tartarus Insight</h1>

            <div className="p-2 mb-6 rounded bg-black/5">
                <p>
                Trapped in the abyss of business struggles? Is it threatening to swallow your dreams?
                <br />
                Tartarus Insight illuminates the path out.
                </p>
                <p>
                Harness the {`Oracle's`} wisdom to ascend from struggle to success.
                <br />
                Emerge stronger from the abyss that once held you captive.
                </p>
            </div>

            <AskOracleButton />
        </section>
    );
}