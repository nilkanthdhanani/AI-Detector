import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import React from "react";
import { Instrument_Sans } from "next/font/google";

const insrtumentSans = Instrument_Sans({
  variable: "--font-insrtument-sans",
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  return (
    <div className={insrtumentSans.variable}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
