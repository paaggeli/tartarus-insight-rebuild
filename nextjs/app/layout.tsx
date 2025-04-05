import type { Metadata } from "next";
import { Caesar_Dressing, Poppins } from "next/font/google";
import "./globals.css";

const caesarDressing = Caesar_Dressing({
  variable: "--font-caesar-dressing",
  weight: '400',
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['400', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tartarus Insight",
  description: "Trapped in the abyss of business struggles? Harness the Oracle's wisdom to ascend from struggle to success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${caesarDressing.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
