"use client";
import "../styles/globals.css";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import Script from "next/script";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assetsjs/fullpage.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <div id="wrap">{children}</div>
        <Footer />
        <Script type="text/javascript" src="./assetsjs/fullpage-scroll.js" />
      </body>
    </html>
  );
}
