import type { Metadata } from "next";
import { Poppins, Inter, Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Trigantara',
    default: 'Trigantara - Pramuka SMK Marhas Margahayu',
  },
  description: 'Website resmi Ambalan Trigantara - Pramuka SMK Marhas Margahayu. Membangun karakter generasi muda melalui gerakan Pramuka.',
  keywords: ['Trigantara', 'Pramuka', 'SMK Marhas', 'Margahayu', 'Scout', 'Ambalan'],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://trigantara.com',
    siteName: 'Trigantara',
    title: 'Trigantara - Pramuka SMK Marhas Margahayu',
    description: 'Website resmi Ambalan Trigantara - Pramuka SMK Marhas Margahayu',
  },
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SkipLink } from "@/components/ui/Accessibility";
import SmoothScroll from "@/components/ui/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.variable} ${playfair.variable} ${cinzel.variable} antialiased flex flex-col min-h-screen bg-[#050505] text-white overflow-x-hidden`}
      >
        <SmoothScroll>
          <SkipLink />
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
