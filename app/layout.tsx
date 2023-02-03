import "../styles/globals.css";
import Header from "@/components/Header/page";
import FooterApp from "@/components/FooterApp/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <FooterApp />
      </body>
    </html>
  );
}
