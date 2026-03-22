import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Aura Aquatics | Houston Pool Management & Lifeguard Staffing",
    template: "%s | Aura Aquatics",
  },
  description:
    "Houston's premier pool management and lifeguard staffing company. Serving HOAs, private clubs, and residential communities with certified lifeguards, pool maintenance, and aquatic services.",
  keywords: [
    "pool management Houston",
    "lifeguard staffing Houston",
    "pool maintenance",
    "lifeguard jobs Houston",
    "HOA pool management",
    "swim lessons Houston",
    "pool cleaning Houston",
  ],
  openGraph: {
    title: "Aura Aquatics | Houston Pool Management & Lifeguard Staffing",
    description:
      "Houston's premier pool management and lifeguard staffing company.",
    type: "website",
    locale: "en_US",
    siteName: "Aura Aquatics",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
