import Link from "next/link";

export default function Banner() {
    return(
        <section className=" bg-cover bg-center bg-no-repeat
            [background-image:url('/images/tartarus-insight-banner-small.webp')]
            xl:[background-image:url('/images/tartarus-insight-banner-medium.webp')]
            2xl:[background-image:url('/images/tartarus-insight-banner-large.webp')]">
            <h1 className="banner-shadow !m-0 p-[30px_44px] text-white text-center">
                <Link href="/">Tartarus Insight</Link>
            </h1>
        </section>
    );
}