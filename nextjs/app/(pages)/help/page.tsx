import AskOracleButton from "@/app/components/AskOracleButton";

export default function HelpPage() {
    return (
        <section id="about-section" className="px-[5px] py-[35px] text-center">
            <h1>Help</h1>
            <div className="text-container mx-auto mb-5">
                <p>The Oracle is ready to guide you! Follow these steps to begin your journey:</p>
                
                <h2>1. Connect With the Oracle</h2>
                <p>Click on the “Connect With the Oracle” button.</p>
                <p>This will reveal a list of AI models currently available on your computer.</p>
                    
                <h2>2. Choose Your Model</h2>
                <p>Select a model from the list. We recommend using any Llama model for the best experience.</p>
                <p>Once you’ve chosen your model, type your question into the message box and click the “Send” button. The Oracle will respond with its wisdom!</p>
                    
                <h2>3. Adjust the Connection (If Needed)</h2>
                <p>By default, Ollama operates locally at http://localhost:11434.</p>
                <p>If you’ve manually changed this location, simply click the “Settings” button to update the address. Enter the new location in place of the default, and you’re good to go.</p>
                <br/>
                <hr/>
                <br/>
                <p><i>If you encounter any issues, please visit our <a className="text-white underline" href="https://github.com/paaggeli/tartarus-insight/issues">GitHub repository</a> and open an issue. The Oracle values your feedback (and promises not to hold grudges).</i></p>
            </div>
            <AskOracleButton />
        </section>
    );
}