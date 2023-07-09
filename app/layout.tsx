import "./globals.css";

import HeaderTop from "../components/ui/header/HeaderTop";
import FooterLanding from "@/components/ui/footer/FooterLanding";

export const metadata = {
  title: "Pool Paint Screen LLC",
  description: "Pool Paint Screen LLC",
};
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className="  bg-[#FAFAFA] relative">
         <HeaderTop />  
        {children}
      <FooterLanding />  
      </body>
    </html>
  );
}
