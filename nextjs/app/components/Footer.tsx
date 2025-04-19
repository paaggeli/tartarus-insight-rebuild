import Link from 'next/link';

export default function Footer() {
    return(
        <footer className="flex justify-center items-center p-2.5 bg-[#333] text-white">
            <p className="!text-sm mb-2">
                &copy; 2024 <a href="https://x.com/PanosAngel1" className="text-white underline">Panos</a> | 
                Built with ❤️ | 
                <Link href="policy.html" className="text-white underline"> Privacy policy</Link> | 
                <a href="https://github.com/paaggeli/tartarus-insight" target="_blank" className="text-white underline"> Contribute on GitHub</a>
            </p>
        </footer>
    );
}