import AskOracleButton from "../components/ask-oracle-button";

const steps = [
    {
        title: "Call the Oracle’s Vessel",
        description: (
        <>
            The Oracle cannot appear without its vessel. Begin by downloading the
            sacred{" "}
            <a
                href="https://ollama.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#794a2e] underline"
            >
                Ollama app
            </a>
            , the key to unlocking its voice.
        </>
        ),
        icon: "/images/horn-icon.png",
        alt: "Horn icon",
    },
    {
        title: "Plant the Seed",
        description:
        "Every great journey begins with a small act. Install the app and plant the seed of knowledge within your device.",
        icon: "/images/seed-icon.png",
        alt: "Seed icon",
    },
    {
        title: "Awaken the Gateway",
        description:
        "Run the Ollama app to breathe life into the dormant Oracle. Its power awaits your command.",
        icon: "/images/crystalball-icon.png",
        alt: "Crystal ball icon",
    },
    {
        title: "Prepare the Sacrifices",
        description: (
        <>
            The Oracle demands a worthy offering. Download the sacred{" "}
            <a
                href="https://ollama.com/library/llama3.1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#794a2e] underline"
            >
                Llama model
            </a>
            —it is said to be the creature the Oracle favors most.
        </>
        ),
        icon: "/images/llama-icon.png",
        alt: "Llama icon",
    },
    {
        title: "Receive the Oracle's Insight",
        description:
        "With the Oracle awakened, ask your question and behold its insight. Speak clearly, for the abyss listens closely.",
        icon: "/images/eye-icon.png",
        alt: "Eye icon",
    },
    {
        title: "Ascend from the Abyss",
        description:
        "Take the Oracle’s wisdom and rise from the darkness.",
        icon: "images/torch-icon.png",
        alt: "Torch icon",
    },
];
export default function HowItWorks() {
  return (
    <section
      id="how-it-works-section"
      className="p-8 text-center px-[25px] sm:px-[25px] md:px-[50px]"
    >
      <div className="relative max-w-[1400px] mx-auto mb-[30px]">
        {/* Papyrus edges */}
        <div className="absolute top-0 left-0 w-full h-[10px] z-10 bg-repeat-x bg-[#0e0e0e] [background-image:url('/images/papyrus-top.png')]" />
        <div className="absolute bottom-0 left-0 w-full h-[8px] z-20 bg-repeat-x bg-transparent [background-image:url('/images/papyrus-bottom.png')]" />
        <div className="absolute top-0 right-0 w-[10px] min-h-full z-15 bg-repeat-y bg-transparent [background-image:url('/images/papyrus-right.png')]" />
        <div className="absolute top-0 left-0 w-[10px] min-h-full z-15 bg-repeat-y bg-[#0e0e0e] [background-image:url('/images/papyrus-left.png')]" />

        {/* Papyrus background and content */}
        <div className="relative text-[#0e0e0e] bg-[#0e0e0e] bg-[url('/images/papyrus.webp')] bg-repeat py-[70px]">
          <h1 className="text-[#4b2e1d] text-3xl font-semibold mb-10">How it Works</h1>

          <div className="flex flex-wrap justify-center gap-[20px] max-w-[800px] mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex-[1_1_100%] sm:flex-[1_1_calc(50%_-_20px)] box-border p-[11px] text-center"
              >
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <img
                    src={step.icon}
                    alt={step.alt}
                    width={124}
                    height={124}
                    className="w-[124px] h-[124px]"
                  />
                  <h2 className="text-[#4b2e1d] text-xl font-semibold">{`${index + 1}. ${step.title}`}</h2>
                </div>
                <div className="flex justify-center items-start gap-[15px] mt-2">
                  <p className="text-left max-w-[500px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AskOracleButton />
    </section>
  );
}