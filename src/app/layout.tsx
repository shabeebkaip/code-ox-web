import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Baloo_2, Lexend_Deca } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReduxProvider from "@/redux/storeProvider";
import ChatBot from "@/components/layout/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
});

const balooFont = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Code-ox Technologies LLP",
    template: "%s - Code-ox Technologies LLP",
  },
  description:
    "We provide smart and innovative IT solutions to help businesses grow and succeed",
  openGraph: {
    title: "Code-ox Technologies LLP",
    description: "Smart and innovative IT solutions",
    url: "https://code-ox.com",
    type: "website",
    images: [
      {
        url: "https://code-ox.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Code-ox Technologies LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code-ox Technologies LLP",
    description:
      "We provide smart and innovative IT solutions to help businesses grow and succeed",
    images: ["https://code-ox.com/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${interFont.variable} 
          ${lexendDeca.variable}
          antialiased
        `}
      >
        <ReduxProvider>
          <Navbar />
          <ChatBot />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
