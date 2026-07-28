import type { Metadata } from "next";
import { satoshi, epilogue } from "@/fonts";
import "./globals.css";
import SmoothScroll from "@/reUseable/SmoothScroll";
// import Navbar from "@/reUseable/NavBar";
// import Footer from "@/reUseable/Footer";
// import Preloader from "@/reUseable/Preloader";
import LaunchingSoon from "@/components/products/launchingsoon";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata:Metadata = {
  title: "Joyzen | Innovation to Health Tech & Human Longevity",

  description:
    "Joyzen is innovation to health tech for human longevity.",

  keywords: [
    "Joyzen",
    "Innovation to health tech",
    "Human longevity",
    "Health tech innovation",
    "Longevity healthcare"
  ],

  openGraph: {
    title: "Joyzen – Innovation to Health Tech & Human Longevity",
    description:
      "Joyzen is innovation to health tech for human longevity.",
    url: "https://joyzen.in",
    siteName: "Joyzen",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${epilogue.variable}  h-full antialiased`}
    >
      <body className="min-h-full">
        {/* <SmoothScroll>
          <Preloader />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll> */}
        <LaunchingSoon />
      </body>
    </html>
  );
}
