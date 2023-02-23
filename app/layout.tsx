import "../styles/globals.css";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import FixedFooterMobile from "@/components/Common/FixedFooterMobile/page";
import SearchEmbark from "@/components/SearchEmbark/page";
import SearchActu from "@/components/SearchActu/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body className='relative h-screen'>
        <Header />
        <div id='fixed-footer' className='lg:hidden w-full'>
          <FixedFooterMobile />
        </div>
        {children}
        <SearchEmbark />
        <SearchActu />
        <Footer />
      </body>
    </html>
  );
}
