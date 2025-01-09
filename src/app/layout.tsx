import type { Metadata } from "next";
import { Geist, Geist_Mono, Fredoka } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fredokaOne = Fredoka({
  variable: "--font-fredoca",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Polar",
  description: "Polar ice cream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fredokaOne.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}