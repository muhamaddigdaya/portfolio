import React from "react";
import Header from "./components/Header";
import Featured from "./components/Featured";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Tool from "./components/Tool";
import Text from "./components/Text";
import Head from "next/head";

export default function Home() {
  return (
    <main className="bg-[#A6FAFF] w-screen">
      <div className="hero-section flex xl:flex-row sm:flex-col md:flex-col lg:flex-col min-h-screen w-screen items-center justify-items-center justify-center font-mono text-black space-x-6 sm:space-x-0 p-12">
        <Header />
        <Featured />
      </div>
      <Community />
      <div className="tool-section bg-[#A6FAFF] flex xl:flex-row sm:flex-col md:flex-col lg:flex-col items-center w-screen font-mono text-black xl:space-x-8 sm:space-x-0 xl:px-40 sm:px-0">
        <Tool />
        <Text />
      </div>
      <Footer />
    </main>
  );
}
