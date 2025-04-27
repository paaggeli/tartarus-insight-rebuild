import { Outlet } from "react-router";
import Menu from "~/components/menu";
import Banner from "~/components/banner";
import Footer from "~/components/footer";

export default function Pages() {
    return (
        <div className="flex min-h-screen flex-col justify-between bg-[url('/images/pattern-marble.webp')]">
            <Banner />
            <Menu />
            <Outlet />
            <Footer />
        </div>
    )
}