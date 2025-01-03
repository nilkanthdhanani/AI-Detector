import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import React from "react";
import { Instrument_Sans } from "next/font/google";
import styles from "@/styles/global.module.scss"

const insrtumentSans = Instrument_Sans({
  variable: "--font-insrtument-sans",
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  return (
    <div className={`${insrtumentSans.variable} ${styles.layout}`}>
      <div className={styles.mainBg}></div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
