import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cart with Zainy | Premium International Shopping Concierge to Nigeria",
  description: "Shop from your favorite international stores in the US, UK, and beyond. We handle the purchase, shipping, customs, and delivery straight to your doorstep in Nigeria.",
  keywords: ["international shopping", "nigeria shipping", "shop US to nigeria", "shop UK to nigeria", "buy designer nigeria", "shopping concierge nigeria", "cart with zainy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-50 font-sans text-onyx-900 selection:bg-burgundy-700 selection:text-cream-50">
        {children}
      </body>
    </html>
  );
}
