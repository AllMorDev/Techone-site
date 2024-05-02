import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/Footer";

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['400'] 
});

export const metadata: Metadata = {
  title: "Techone",
  description: "Techone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
