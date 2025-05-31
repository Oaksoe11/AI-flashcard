import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import {Suspense} from 'react';

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.classname} ${ovo.className} antialiased 
        leading-8 overflow-x-hidden`}
      >
        <Navbar/>
        <Suspense fallback={<div>Loading...</div>}>
       <main className="flex-grow">{children}</main>
       </Suspense>
      </body>
    </html>
  );
}
