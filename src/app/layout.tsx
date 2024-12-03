import type { Metadata } from "next";

import "./globals.scss";
import Header from "@/components/screens/Header/Header";



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
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
