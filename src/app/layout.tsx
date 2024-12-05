import type { Metadata } from "next";

import "./globals.scss";
import Header from "@/components/screens/Header/Header";
import HeaderBottom from "@/components/screens/HeaderBottom/HeaderBottom";
import { Provider } from "react-redux";
import store from '@/store/index'
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
    <Provider store={store}>
      <html lang="en">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <body>
          <Header />
          {children}
          <HeaderBottom />
        </body>
      </html>
    </Provider>
  );
}
