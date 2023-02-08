import "../styles/globals.css";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import FixedFooterMobile from "@/components/Common/FixedFooterMobile/pages";

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
        <div id='fixed-footer' className='lg:hidden w-full h-screen'>
          <FixedFooterMobile />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
