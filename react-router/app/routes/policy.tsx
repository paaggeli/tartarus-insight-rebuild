export default function PolicyPage() {
    return (
        <section className="mx-auto p-2 text-container">
            <h2 className="text-center">Privacy Policy</h2>
            <div>
                <p>At Tartarus Insight, we are committed to protecting your personal data and respecting your privacy. 
                    This Privacy Policy outlines how we collect, use, and protect your personal information in accordance 
                    with applicable laws and regulations.
                </p>
                <h3 className="mt-4 mb-2">Collection of Personal Data</h3>
                <p>We collect personal data only when necessary to provide our services or offer our content. 
                    The types of personal data we may collect include:
                </p>
                <ul className="list-disc p-6">
                    <li>Email address (used by MailChimp for marketing purposes)</li>
                </ul>
                <h3 className="mt-4 mb-2">How We Use Your Data:</h3>
                <p>Tartarus Insight complies with the <strong>General Data Protection Regulation (GDPR)</strong> and respects user privacy. 
                    We do not store any personal data on our servers.<br/>The following services are used to manage our website and communication:</p>
                <ol className="list-decimal p-6 space-y-2">
                    <li>
                        <strong>MailChimp: </strong>We use MailChimp to manage our email list and send newsletters. 
                        By providing your email address, you consent to be added to our email list.
                    </li>
                    <li>
                        <strong>Google Analytics: </strong>We use Google Analytics to track website traffic and analyze user behavior. 
                        The data collected is anonymous and used solely for statistical purposes.
                    </li>
                </ol>
                <h3 className="mt-4 mb-2">Contact Information::</h3>
                <p>If you have questions about our Privacy Policy or wish to opt-out of our email list, <a href="mailto:&#112;&#097;&#103;&#103;&#101;&#108;&#105;&#100;&#105;&#115;&#064;&#104;&#111;&#116;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#046;&#117;&#107;">please contact us</a></p>
            </div>
        </section>
    );
}