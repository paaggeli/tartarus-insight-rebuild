import Link from 'next/link';

export default function AskOracleButton() {
    return(
        <Link href="oracle" className="inline-block font-poppins bg-[#ae3f32] bg-gradient-to-b from-[#ae3f32] to-[#c5642e] text-white py-2 px-5 rounded-full border border-[#dadada] no-underline cursor-pointer hover:from-[#893328] hover:to-[#ae592a] hover:border-[#893328] hover:text-[#e5e5e5]">Ask the Oracle Now</Link>
    );
}