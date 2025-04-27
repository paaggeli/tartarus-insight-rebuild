import Banner from "@/app/components/Banner";
import Menu from "@/app/components/Menu";
import Footer from "@/app/components/Footer";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-[url('/images/pattern-marble.webp')]">
      <Banner />
      <Menu />
      {children}
      <Footer />
    </div>
  );
}