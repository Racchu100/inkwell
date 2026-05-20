import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Lato, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ink Well Colour Crafts Studio | Premium Custom Gifts & Keepsakes",
  description: "Curate your memories into beautiful, physical masterpieces. We design premium custom mugs, engraved wallets, canvas rock frames, rotating lamps, caricatures, and modern LED frames.",
  keywords: [
    "personalized gifts",
    "photo gifts",
    "custom wallets",
    "rotating lamp",
    "photo frames",
    "engraved gifts",
    "custom coffee mug",
    "photography studio",
    "custom name boards",
  ],
  openGraph: {
    title: "Ink Well Colour Crafts Studio | Premium Custom Gifts & Keepsakes",
    description: "Curate your memories into beautiful, physical masterpieces.",
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
      className={`${playfair.variable} ${cormorant.variable} ${lato.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-lato bg-white text-[#1a1a1a]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
