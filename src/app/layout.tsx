import type { Metadata } from "next";

import "./globals.scss";
import Header from "@/components/screens/Header/Header";
import HeaderBottom from "@/components/screens/HeaderBottom/HeaderBottom";
import LayoutClient from "@/components/layouts/LayoutClient";
import Footer from "@/components/screens/Footer/Footer";

export const metadata: Metadata = {
  title: "movies",
  description: "watch only interesting movies",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>
      <body>
        
        <Header />
        <LayoutClient>
          {children}
        </LayoutClient>
        <HeaderBottom />
        <div id="modal-root"></div>
        <Footer/>
      </body>
    </html>
  );
}
